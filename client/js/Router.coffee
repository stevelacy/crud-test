define ['views/Main', 'views/Note', 'views/Item'], (Main, Note, Item) ->

	AppRouter = Backbone.Router.extend
		routes:
			"":"main"
			"items/:id":"getItem"
			"item/:id":"item"
			"note/:id":"note"

	appRouter = new AppRouter


	appRouter.on 'route:getItem', (id) ->
		console.log "Item route called -  number is #{id}"
		View = new Item(el: $("#content"))
	appRouter.on 'route:item', (id) ->
		console.log "Item route called -  number is #{id}"
		View = new Item(el: $("#content"), id:id)

	appRouter.on 'route:main', () ->
		console.log "The Main page"
		View = new Main(el: $("#content"))

	appRouter.on 'route:note', (id) ->
		console.log "Note clicked"
		View = new Note(el: $("#content"), data:id)















	Backbone.history.start({pushState:false})