let Backbone    = require('backbone')
  , $           = require('jquery')
  , IndexView   = require('./views/index');

let App = {
  init() {
    this.createIndex();
  },

  createIndex() {
    (new IndexView()).render();
  },
}

App.init();
