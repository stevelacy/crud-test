define ['app/Router'], (Router) ->

	Claru = new Backbone.Marionette.Application

	Claru.addRegions
		banner: '#banner'
		main: '#content'
		footer: '#footer'
	Claru.on 'initialize:after', ->
		Backbone.history.start()
	Claru.start()
	###
	test = new Item 
		title: "test from backbone "
		kind: "note"
		content: "test"

	
	test.save null, 
		success: (test) ->
			console.log test
			test.destroy()
			console.log test
		error: (err) ->
			console.log err

	#contentView = new Main(el: $("#content"))
	###

	


		


	