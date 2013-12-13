(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var Test, _ref;
    Test = (function(_super) {
      __extends(Test, _super);

      function Test() {
        _ref = Test.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Test.prototype.urlRoot = 'http://node.la/v1/items';

      return Test;

    })(Backbone.Model);
    return Test;
  });

}).call(this);
