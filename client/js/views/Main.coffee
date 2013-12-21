define ['collections/Items', 'templates/main','views/ItemView'],(Items, templ, itemRow) ->
	items = new Items()

	class View extends Backbone.Marionette.CompositeView
		itemViewContainer: ".item-list"
		tagName: "div"
		template: templ
		itemView: itemRow
		appendHtml: (collectionView, itemView) ->
			collectionView.$(".item-list").append itemView.el
			console.log collectionView
		###
		render: ->
			items.fetch
				success: () =>
					console.log items.models
					@$el.html templ items:items.toJSON()
			return @

		events:
			"click input[type=button]": "runTest"

		runTest: (e) ->
			console.log $("#test").val()
		###
	

