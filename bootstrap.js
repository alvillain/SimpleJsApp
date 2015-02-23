define(function(require){
	'use strict';
	var App = require('root/app');
	
	var start = function(){		
		var app = new App();
		app.start();	
	}

	var initBootstrap = function(){
		this.start = start;
	}

	return initBootstrap;
});