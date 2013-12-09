(function() {
  define(['models/Item', 'views/Main', 'views/Banner', 'Router'], function(Item, Main, Banner, Router) {
    var bannerView, contentView, test;
    test = new Item({
      title: "test from backbone ",
      kind: "note",
      content: "test"
    });
    test.save(null, {
      success: function(test) {
        console.log(test);
        test.destroy();
        return console.log(test);
      },
      error: function(err) {
        return console.log(err);
      }
    });
    contentView = new Main({
      el: $("#content")
    });
    return bannerView = new Banner({
      el: $("#banner")
    });
  });

}).call(this);
