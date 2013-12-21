#define ['views/Main', 'views/Note', 'views/Item', 'views/New'], (Main, Note, Item, New) ->
define ['collections/Items','views/Main','views/Item', 'views/Banner', 'views/New', 'views/collectionView', 'models/Item' ], (Items, Main, Item, Banner, New, CollectionView, ItemModel) ->

	AppRouter = Backbone.Marionette.AppRouter.extend
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
		view = new Item(el: $("#content"))
	###	

	region = new Backbone.Marionette.Region
		el: '#content'

	appRouter.on 'route:item', (id) ->
		console.log "Item route called -  number is #{id}"
		view = new Item id:id
		$("#content").html view.render().el

	appRouter.on 'route:main', () ->
		console.log "The Main page"
		view = new Main
			collection: new Items
			model: new ItemModel

		region.show(view)
		#$("#content").html view.render().el

	appRouter.on 'route:note', (id) ->
		console.log "Note clicked"
		view = new Note(el: $("#content"), data:id)

	appRouter.on 'route:new', () ->
		console.log "new item"
		view = new New
		$("#content").html view.render().el



	bannerView = new Banner
	$("#banner").html bannerView.render().el











	Backbone.history.start({pushState:false})