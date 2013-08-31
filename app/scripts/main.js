/*global require*/
'use strict';

require.config({
  shim: {
    'lodash': {
      exports: '_'
    },
    'backbone': {
      deps: ['lodash',
             'jquery'],
      exports: 'Backbone'
    },
    'handlebars': {
      init: function() {
        return Handlebars;
      }
    }
  },
  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    lodash: '../bower_components/lodash/lodash',
    handlebars: '../bower_components/handlebars/handlebars'
  }
});

require(['backbone', 'views/app', 'views/header-view'],
 function (Backbone, FxView, headerView) {
  new FxView;
  new headerView;
});