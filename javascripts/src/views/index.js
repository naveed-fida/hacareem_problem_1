let $           = require('jquery')
  , Backbone    = require('backbone')
  , HeaderView  = require('./header')
  , FormView    = require('./form');

let IndexView = Backbone.View.extend({
  el: $('.app')[0],

  initialize() {
    this.$header = this.$('.header');
    this.$main = this.$('.main');
  },

  render() {
    let headerView = new HeaderView(),
        formView   = new FormView();
    this.$header.html(headerView.render().$el);
    this.$main.html(formView.render().$el);
  }
});

module.exports = IndexView;
