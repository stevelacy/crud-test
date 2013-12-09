(function() {
  var AppRouter, appRouter;

  AppRouter = Backbone.Router.extend({
    routes: {
      "items/:id": "getItem"
    }
  });

  appRouter = new AppRouter;

  appRouter.on('route:getItem', function(id) {
    return console.log("The item number is " + id);
  });

  $(document).on("click", "a[href^='/']", function(event) {
    var href, passThrough, url;
    href = $(event.currentTarget).attr('href');
    passThrough = href.indexOf('sign_out') >= 0;
    if (!passThrough && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault();
      url = href.replace(/^\//, '').replace('\#\!\/', '');
      appRouter.navigate(url, {
        trigger: true
      });
      return false;
    }
  });

  Backbone.history.start({
    pushState: true
  });

}).call(this);
