'use strict';

require.config({
    baseUrl: 'vendor',
    paths: {
    	root:'../',
        jquery: 'jquery-2.1.3',
        underscore: 'underscore',
        backbone: 'backbone',
        marionette: 'backbone.marionette'        
    }
});

define(function(require){
    var Bootstrap = require('root/bootstrap');
    var bootstrap = new Bootstrap();
    bootstrap.start();  
});