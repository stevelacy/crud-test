(function() {
  define(['collections/Items', 'views/Main', 'views/Item', 'views/Banner', 'views/New', 'views/collectionView', 'models/Item'], function(Items, Main, Item, Banner, New, CollectionView, ItemModel) {
    var AppRouter, appRouter, bannerView, region;
    AppRouter = Backbone.Marionette.AppRouter.extend({
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

    region = new Backbone.Marionette.Region({
      el: '#content'
    });
    appRouter.on('route:item', function(id) {
      var view;
      console.log("Item route called -  number is " + id);
      view = new Item({
        id: id
      });
      return $("#content").html(view.render().el);
    });
    appRouter.on('route:main', function() {
      var view;
      view = new Main({
        collection: new Items,
        model: new ItemModel
      });
      return region.show(view);
    });
    appRouter.on('route:note', function(id) {
      var view;
      console.log("Note clicked");
      return view = new Note({
        el: $("#content"),
        data: id
      });
    });
    appRouter.on('route:new', function() {
      var view;
      console.log("new item");
      view = new New;
      return $("#content").html(view.render().el);
    });
    bannerView = new Banner;
    $("#banner").html(bannerView.render().el);
    return Backbone.history.start({
      pushState: false
    });
  });

}).call(this);
