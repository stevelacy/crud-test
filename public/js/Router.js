(function() {
  define(['views/Main', 'views/Item', 'views/Banner'], function(Main, Item, Banner) {
    var AppRouter, appRouter, bannerView;
    AppRouter = Backbone.Router.extend({
      routes: {
        "": "main",
        "items/:id": "getItem",
        "item/:id": "item",
        "note/:id": "note",
        "new": "new"
      }
    });
    appRouter = new AppRouter;
    /*
    	appRouter.on 'route:getItem', (id) ->
    		console.log "Item route called -  number is #{id}"
    		view = new Item(el: $("#content"))
    */

    /*
    	appRouter.on 'route:item', (id) ->
    		console.log "Item route called -  number is #{id}"
    		view = new Item id:id
    		$("#content").html view.render().el
    
    	appRouter.on 'route:main', () ->
    		console.log "The Main page"
    		view = new Main
    		$("#content").html view.render().el
    */

    /*
    	appRouter.on 'route:note', (id) ->
    		console.log "Note clicked"
    		view = new Note(el: $("#content"), data:id)
    
    	appRouter.on 'route:new', () ->
    		console.log "new item"
    		view = new New(el: $("#content"))
    */

    bannerView = new Banner;
    $("#banner").html(bannerView.render().el);
    return Backbone.history.start({
      pushState: false
    });
  });

}).call(this);
