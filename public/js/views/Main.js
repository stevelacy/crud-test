(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['collections/Items', 'templates/main', 'views/ItemView'], function(Items, templ, itemRow) {
    var View, _ref;
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.itemViewContainer = ".item-list";

      View.prototype.tagName = "div";

      View.prototype.template = templ;

      View.prototype.itemView = new itemRow;

      View.prototype.collection = new Items;

      console.log(new itemRow);

      /*
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
      */


      return View;

    })(Backbone.Marionette.CompositeView);
  });

}).call(this);
