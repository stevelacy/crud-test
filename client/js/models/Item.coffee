define ->
	class Item extends Backbone.Model
    urlRoot: 'http://node.la/v1/items'
    idAttribute: "_id"
	return Item