define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/claru-marionette/client/templates/main.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),items = locals_.items;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<a href=\"#/new\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<button class=\"btn btn-primary margin-5\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("New");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<hr/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<div class=\"center\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<div class=\"item-list width-full-res\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("#/item/" + (item.id) + "") }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("<li class=\"hover trans bg-white\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = item.title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<div" + (jade.attrs({ 'data-id':("" + (item.id) + ""), "class": [('delete'),('btn'),('btn-danger')] }, {"data-id":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("X");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<!--.spacer-25-->");
jade.debug.shift();
jade.debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("#/item/" + (item.id) + "") }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("<li class=\"hover trans bg-white\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = item.title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<div" + (jade.attrs({ 'data-id':("" + (item.id) + ""), "class": [('delete'),('btn'),('btn-danger')] }, {"data-id":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("X");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<!--.spacer-25-->");
jade.debug.shift();
jade.debug.shift();
    }

  }
}).call(this);

jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<div class=\"spacer-100\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

});
