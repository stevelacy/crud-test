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
        this.model = new Item();
        return this.render();
      };

      View.prototype.render = function() {
        var template, that;
        that = this;
        template = _.template($("#template-new").html(), {});
        return that.$el.html(template);
      };

      View.prototype.events = {
        "submit form": "saveData",
        "click #delete": "destroyModel"
      };

      View.prototype.saveData = function(e) {
        var itemData;
        e.preventDefault();
        itemData = this.getFormData(this.$el.find("form"));
        console.log(itemData);
        return this.model.save(itemData, {
          success: function(data) {
            return console.log(data);
          }
        });
      };

      View.prototype.destroyModel = function(e) {
        e.preventDefault();
        return this.model.destroy({
          success: function() {
            return console.log("model destroyed");
          }
        });
      };

      View.prototype.getFormData = function(form) {
        var indexed_array, unindexed_array;
        unindexed_array = form.serializeArray();
        indexed_array = {};
        $.map(unindexed_array, function(n, i) {
          return indexed_array[n["name"]] = n["value"];
        });
        return indexed_array;
      };

      return View;

    })(Backbone.View);
  });

}).call(this);
