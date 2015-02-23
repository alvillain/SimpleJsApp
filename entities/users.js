define(function(require){
	'use strict';
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Marionette = require('backbone.marionette');
	var User = require('root/entities/user');

	return Backbone.Collection.extend({
		model: User,

		initialize: function(params){

		} 
	});
});