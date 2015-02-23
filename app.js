define(function(require){
	'use strict';
	var $ = require('jquery')
	var _ = require('underscore');
	var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');
    var Layout = require('root/layout');
    var UserApp = require('root/apps/users/user_app');

  return Backbone.Marionette.Application.extend({
  		initialize: function(options){
  			var layout = new Layout();
  			var userApp = new UserApp(this, layout.appRegion);
  			userApp.start(this, layout.appRegion);  			
  		}
  });
});