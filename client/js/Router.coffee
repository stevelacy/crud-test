define ['views/Main', 'views/Note', 'views/Item', 'views/New'], (Main, Note, Item, New) ->

	AppRouter = Backbone.Router.extend
		routes:
			"":"main"
			"items/:id":"getItem"
			"item/:id":"item"
			"note/:id":"note"
			"new":"new"

	appRouter = new AppRouter

	###
	appRouter.on 'route:getItem', (id) ->
		console.log "Item route called -  number is #{id}"
		View = new Item(el: $("#content"))
	###	
	appRouter.on 'route:item', (id) ->
		console.log "Item route called -  number is #{id}"
		View = new Item id:id
		$("#content").html View.render().el

	appRouter.on 'route:main', () ->
		console.log "The Main page"
		View = new Main(el: $("#content"))

	appRouter.on 'route:note', (id) ->
		console.log "Note clicked"
		View = new Note(el: $("#content"), data:id)

	appRouter.on 'route:new', () ->
		console.log "new item"
		View = new New(el: $("#content"))















	Backbone.history.start({pushState:false})