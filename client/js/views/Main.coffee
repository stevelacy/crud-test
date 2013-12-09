define ->
	class View extends Backbone.View
		initialize: ->
			@render()

		render: ->
			template = _.template($("#template-content").html(), {} )
			@$el.html template

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

