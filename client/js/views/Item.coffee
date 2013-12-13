define  ->
	data = "test"
	class View extends Backbone.View
		initialize: ->
			@render()
			

		render: ->
			template = _.template($("#template-item").html(), {data:data} )
			@$el.html template
		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()

	

