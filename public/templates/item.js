define(["vendor/jade"],function(jade){

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/www/node/claru-backbone/client/templates/item.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),item = locals_.item;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<form class=\"item-edit-form input-group col-md-8 center\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<input" + (jade.attrs({ 'type':("text"), 'name':("title"), 'value':("" + (item.title) + ""), "class": [('form-control')] }, {"type":true,"name":true,"value":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<textarea name=\"content\" rows=\"10\" class=\"form-control\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = item.content) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</textarea>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<input" + (jade.attrs({ 'type':("hidden"), 'name':("id"), 'value':("" + (item.id) + "") }, {"type":true,"name":true,"value":true})) + "/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<button type=\"submit\" class=\"btn btn-primary\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("Save");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<button type=\"button\" class=\"btn btn-danger delete\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("Delete");
jade.debug.shift();
jade.debug.shift();
buf.push("</button>");
jade.debug.shift();
jade.debug.shift();
buf.push("</form>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

});
