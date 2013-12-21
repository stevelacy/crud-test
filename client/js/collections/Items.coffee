define ['models/Item'],(Item)->
	class Items extends Backbone.Collection
    url: 'http://node.la/v1/items'
    #model: Item
	return Items