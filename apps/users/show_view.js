define(function(require){
	'use strict';

	var $ = require('jquery')
	var _ = require('underscore');
	var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    var UserView = Backbone.Marionette.ItemView.extend({
    		tagName:'li',
    		template: _.template('<%= displayedName %>')
    	});
    

    var UsersView = Backbone.Marionette.CollectionView.extend({
    		childView: UserView,
    		tagName:'ul'
    	});
   

    var View = function(){
    	this.UsersView = UsersView;
    	this.UserView = UserView;
    };

    return View;
});