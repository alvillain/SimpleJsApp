define(function(require){
	'use strict';
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Marionette = require('backbone.marionette');

	return Backbone.Model.extend({
		defaults:{
			displayedName: '',
			name:'',
			surname:''
		},

		initialize: function(){
			this.set('displayedName', this.get('name') + ' ' + this.get('surname'));
		}
	});
});