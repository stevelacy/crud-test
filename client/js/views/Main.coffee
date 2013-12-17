define ['../collections/Items'],(Items) ->
	items = new Items()

	class View extends Backbone.View
		initialize: ->
			@render()

		render: ->
			that = @
			items.fetch
				success: () ->
					console.log items.models
					template = _.template($("#template-main").html(), {items: items.models})
					that.$el.html template

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

