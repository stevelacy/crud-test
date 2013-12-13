define ['models/Item', 'views/Main', 'views/Note'], (Item, Main, Note) ->

	AppRouter = Backbone.Router.extend
		routes:
			"":"main"
			"items/:id":"getItem"
			"note/:id":"note"

	appRouter = new AppRouter


	appRouter.on 'route:getItem', (id) ->
		console.log "The item number is #{id}"
		View = new Note(el: $("#content"))

	appRouter.on 'route:main', () ->
		console.log "The Main page"
		View = new Main(el: $("#content"))

	appRouter.on 'route:note', (id) ->
		console.log "Note clicked"
		View = new Note(el: $("#content"), data:id)















	Backbone.history.start({pushState:true})