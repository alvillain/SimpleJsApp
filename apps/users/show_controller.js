define(function(require){
	'use strict';

	var $ = require('jquery')
	var _ = require('underscore');
	var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');
	var Users = require('root/entities/users');
	var Views = require('root/apps/users/show_view');
	var views = new Views();
	var UsersView = views.UsersView;

	var UserController = function(params){
		this.showUsers = function(options){
			var data = [{name: 'Karl', surname:'Marx'}, {name: 'Homer', surname:'Simpson'}, {name: 'Maximus', surname:'Gladiator'} ];
			var collection = new Users(data);	
			var view = new UsersView({collection: collection});

			options.region.show(view);
		};
	};

	return UserController;
});