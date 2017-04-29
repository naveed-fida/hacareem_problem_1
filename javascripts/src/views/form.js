let $          = require('jquery')
  , Backbone   = require('backbone')
  , Handlebars = require('handlebars')
  , Constants  = require('../constants');

require('../../../handlebars/form')

let FormView = Backbone.View.extend({
  template: Handlebars.templates['form.hbs'],
  events: {
    'input #drop_location': 'bringLocList'
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

  bringLocList() {
    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/${Constants.OUTPUT}?key=\
${Constants.KEY}`;

    this.getCurrentCoords(url);
  },

  getCurrentCoords(url) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude
        , lng = position.coords.longitude;
    });
  }
});

module.exports = FormView;
