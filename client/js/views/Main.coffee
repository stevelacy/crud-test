define ['../collections/Items', '../../templates/main'],(Items, templ) ->
	items = new Items()

	class View extends Backbone.View

		render: ->
			that = @
			items.fetch
				success: () ->
					console.log items.models
					#template = _.template($("#template-main").html(), {items: items.models})
					#that.$el.html template
					@$el.html templ, id: @id

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

