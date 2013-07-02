define(['backbone'], function(Backbone) {
	'use strict';
	var message = Backbone.Model.extend({
		defaults: function() {
			return {
				message: 'Empty message'
			};
		},

		initialize: function(message) {
			this.set(message);
		}
	});

	return message;
});