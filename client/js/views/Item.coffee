define ["../models/Item", "../Router"],(Item, Router) ->


	class View extends Backbone.View
		initialize: ->
			
			@render()
			
		render: ->
			that = @
			console.log @.id
			@.model = new Item({id: @.id})
			@.model.fetch
				success: (data) ->
					template = _.template($("#template-item").html(), {item:data} )
					that.$el.html template
					console.log data.toJSON()
		events:
			"submit form": "saveData"
			"click #delete": "destroyModel"

		saveData: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@.model.save itemData, 
				patch: true
				success: (data) ->
					console.log data
		destroyModel: (e) ->
			e.preventDefault()
			@.model.destroy
				success: () ->
					console.log "model destroyed"
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			$.map unindexed_array, (n, i) ->
				indexed_array[n["name"]] = n["value"]

			indexed_array
