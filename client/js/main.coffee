define ['models/Item', 'views/Main', 'views/Banner', 'Router'], (Item, Main, Banner, Router) ->
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
	bannerView = new Banner(el: $("#banner"))



		


	