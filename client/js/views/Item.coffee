define ["../models/Item", "../Router"],(Item, Router) ->


	class View extends Backbone.View
		initialize: ->
			@.model = new Item({id:"#{@.id}"})
			@render()
			
		render: ->
			that = @
			@.model.fetch
				success: (data) ->
					template = _.template($("#template-item").html(), {item:data} )
					that.$el.html template
					console.log data.toJSON()
		events:
			"submit form": "saveData"

		saveData: (e) ->
			e.preventDefault()
			itemData = @getFormData(@$el.find("form"))
			console.log itemData

			@.model.save itemData, 
				success: (data) ->
					console.log data
			
			

		getFormData: (form) ->
			unindexed_array = form.serializeArray()
			indexed_array = {}
			$.map unindexed_array, (n, i) ->
				indexed_array[n["name"]] = n["value"]

			indexed_array
