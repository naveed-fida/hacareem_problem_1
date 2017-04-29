var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['form.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"user_form\">\n  <label for=\"phone_number\">Phone Number</label>\n  <input type=\"text\" name=\"phone_number\" id=\"phone_number\" value=\"\">\n\n  <label for=\"drop_location\">Drop Location</label>\n  <input type=\"text\" id=\"drop_location\" name=\"drop_location\" value=\"\">\n</form>\n";
},"useData":true});
