(function() {
  define(['views/Main', 'views/Note', 'views/Item'], function(Main, Note, Item) {
    var AppRouter, appRouter;
    AppRouter = Backbone.Router.extend({
      routes: {
        "": "main",
        "items/:id": "getItem",
        "item/:id": "item",
        "note/:id": "note"
      }
    });
    appRouter = new AppRouter;
    appRouter.on('route:getItem', function(id) {
      var View;
      console.log("Item route called -  number is " + id);
      return View = new Item({
        el: $("#content")
      });
    });
    appRouter.on('route:item', function(id) {
      var View;
      console.log("Item route called -  number is " + id);
      return View = new Item({
        el: $("#content"),
        id: id
      });
    });
    appRouter.on('route:main', function() {
      var View;
      console.log("The Main page");
      return View = new Main({
        el: $("#content")
      });
    });
    appRouter.on('route:note', function(id) {
      var View;
      console.log("Note clicked");
      return View = new Note({
        el: $("#content"),
        data: id
      });
    });
    return Backbone.history.start({
      pushState: false
    });
  });

}).call(this);
