define(function(require){
	'use strict';

	var Controller = require('root/apps/users/show_controller');


	var API = {
		showUsers: function(region){
			var controller = new Controller();
			controller.showUsers({region: region}); 
		}
	};

	var start = function(){
		console.debug('Starting User App');
		API.showUsers(this.region);
	};

	var stop = function(){

	};

	var UserApp = function(app, region){
		this.app = app;
		this.region = region;
		this.start = start;
		this.stop = stop;
	}


	return UserApp;
});