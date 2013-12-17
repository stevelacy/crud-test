(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['../collections/Items'], function(Items) {
    var View, items, _ref;
    items = new Items();
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.initialize = function() {
        return this.render();
      };

      View.prototype.render = function() {
        var that;
        that = this;
        return items.fetch({
          success: function() {
            var template;
            console.log(items.models);
            template = _.template($("#template-main").html(), {
              items: items.models
            });
            return that.$el.html(template);
          }
        });
      };

      View.prototype.events = {
        "click input[type=button]": "runTest"
      };

      View.prototype.runTest = function(e) {
        return console.log($("#test").val());
      };

      return View;

    })(Backbone.View);
  });

}).call(this);
