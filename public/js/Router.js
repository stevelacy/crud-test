(function() {
  define(['views/Main', 'views/Note', 'views/Item', 'views/New'], function(Main, Note, Item, New) {
    var AppRouter, appRouter;
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
      console.log("The Main page");
      return view = new Main({
        el: $("#content")
      });
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
      return view = new New({
        el: $("#content")
      });
    });
    return Backbone.history.start({
      pushState: false
    });
  });

}).call(this);
