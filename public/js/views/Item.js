(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["../models/Item", "../Router"], function(Item, Router) {
    var View, _ref;
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.initialize = function() {
        this.model = new Item({
          id: "" + this.id
        });
        return this.render();
      };

      View.prototype.render = function() {
        var that;
        that = this;
        return this.model.fetch({
          success: function(data) {
            var template;
            template = _.template($("#template-item").html(), {
              item: data
            });
            that.$el.html(template);
            return console.log(data.toJSON());
          }
        });
      };

      return View;

    })(Backbone.View);
  });

}).call(this);
