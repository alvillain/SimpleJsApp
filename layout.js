define(function(require){
	'use strict';
	var $ = require('jquery')
	var _ = require('underscore');
	var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    return Backbone.Marionette.LayoutView.extend({
    	el:'body',
    	regions:{
    		appRegion: '#app'
    	}
    });
});