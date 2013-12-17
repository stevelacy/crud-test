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


