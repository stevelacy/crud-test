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
			#console.log @.model.save()
			userData = 
				title: @.$el.find("input[name='title']").val()
				content: @.$el.find("input[name='content']").val()

			@.model.save userData, 
				success: (data) ->
					console.log data
			
			


