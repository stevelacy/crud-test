(function() {
  define(['Router', 'models/Item', 'views/Main', 'views/Banner'], function(Router, Item, Main, Banner) {
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

    var bannerView;
    return bannerView = new Banner({
      el: $("#banner")
    });
  });

}).call(this);
