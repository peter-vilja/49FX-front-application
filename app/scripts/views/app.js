define(['backbone', 'collections/messages', 'views/message-view'], function(Backbone, messages, messageView) {
	'use strict';
	var App = Backbone.View.extend({
		el: $('#fx-add'),
		events: {
			'click #save': 'create',
			'click .icon': 'select'
		},

		initialize: function() {
			this.listenTo(messages, 'add', this.add);
			this.listenTo(messages, 'reset', this.show);
			messages.fetch();
		},

		create: function(e) {
			messages.create({icon: this.$('.icon-down').attr('data-icon'), message: this.$('#story').val()});
			this.$('#story').val('');
		},

		add: function(message) {
			var view = new messageView({model: message})
			$('#fx-messages').append(view.render().el)
		},

		show: function() {
			messages.each(this.add, this);
		},

		select: function(e) {
			$('.icon').removeClass('icon-down');
			$(e.currentTarget).toggleClass('icon-down');
		}
	});

	return App;
});