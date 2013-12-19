define ['templates/banner'],(templ)->
	class View extends Backbone.View

		render: ->
			#template = _.template($("#template-banner").html(), {} )
			#@$el.html template
			@$el.html templ test:"test"

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

