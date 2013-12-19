define ["../models/Item", "templates/item"],(Item, templ) ->


	class View extends Backbone.View
			
		render: ->
			that = @
			console.log @.id
			@model = new Item id: @id
			@model.fetch
				success: (data) ->
					#template = _.template($("#template-item").html(), {item:data} )
					#that.$el.html template
					@$el.html templ id: @id
					console.log data.toJSON()
		events:
			"submit form": "saveData"
			"click .delete": "destroyModel"

		saveData: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@model.save itemData, 
				patch: true
				success: (data) ->
					console.log data
		destroyModel: (e) ->
			e.preventDefault()
			@model.destroy
				success: ->
					console.log "model destroyed"
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			unindexed_array.forEach (n) ->
				indexed_array[n["name"]] = n["value"]

			return indexed_array
