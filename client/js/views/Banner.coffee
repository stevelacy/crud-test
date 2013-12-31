define ['templates/banner'],(templ)->
	class View extends Backbone.Marionette.View

		render: ->
			#template = _.template($("#template-banner").html(), {} )
			#@$el.html template
			@$el.html templ test:"test"
			return @

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

