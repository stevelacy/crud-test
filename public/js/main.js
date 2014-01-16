(function() {
  define(['app/Router'], function(Router) {
    var Claru;
    Claru = new Backbone.Marionette.Application;
    $(document).delegate("a", "click", function(evt) {
      var href, protocol;
      href = $(this).attr("href");
      protocol = this.protocol + "//";
      if (href.slice(protocol.length) !== protocol) {
        evt.preventDefault();
        return Backbone.history.navigate(href, true);
      }
    });
    Claru.addRegions({
      banner: '#banner',
      main: '#content',
      footer: '#footer'
    });
    Claru.on('initialize:after', function() {
      return Backbone.history.start({
        pushState: true
      });
    });
    return Claru.start();
    /*
    	test = new Item 
    		title: "test from backbone "
    		kind: "note"
    		content: "test"
    
    	
    	test.save null, 
    		success: (test) ->
    			console.log test
    			test.destroy()
    			console.log test
    		error: (err) ->
    			console.log err
    
    	#contentView = new Main(el: $("#content"))
    */

  });

}).call(this);
