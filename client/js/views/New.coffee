define ["../models/Item", "../Router"],(Item, Router) ->


	class View extends Backbone.View
		initialize: ->
			@.model = new Item()
			@render()
			
		render: ->
			that = @
			template = _.template($("#template-new").html(), {})
			that.$el.html template
		events:
			"submit form": "saveData"
			"click #delete": "destroyModel"

		saveData: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@.model.save itemData, 
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
