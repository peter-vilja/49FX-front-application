define(['jquery', 'backbone', 'handlebars'], function($, Backbone, Handlebars) {
	'use strict';
	var messageView = Backbone.View.extend({
		tagName: 'article',
		template: Handlebars.compile($('#message-template').html()),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
	return messageView;
});