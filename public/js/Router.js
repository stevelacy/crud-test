(function() {
  define(['models/Item', 'views/Main', 'views/Note'], function(Item, Main, Note) {
    var AppRouter, appRouter;
    AppRouter = Backbone.Router.extend({
      routes: {
        "": "main",
        "items/:id": "getItem",
        "note/:id": "note"
      }
    });
    appRouter = new AppRouter;
    appRouter.on('route:getItem', function(id) {
      var View;
      console.log("The item number is " + id);
      return View = new Note({
        el: $("#content")
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
      pushState: true
    });
  });

}).call(this);
