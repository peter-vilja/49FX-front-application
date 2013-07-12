/*global require*/
'use strict';

require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore',
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
    underscore: '../bower_components/underscore/underscore',
    handlebars: '../bower_components/handlebars/handlebars'
  }
});

require(['backbone', 'views/app', 'views/header-view'],
 function (Backbone, FxView, headerView) {
  new FxView;
  new headerView;
});