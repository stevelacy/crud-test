define ['text!/templates/note.html'],(template) ->
	data = ""
	class View extends Backbone.View
		initialize: ->
			@render()
			console.log template

		render: ->
			template = _.template($(template).html(), {data:data} )
			@$el.html template
		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	
