define(['backbone', 'models/message'], function(Backbone, message) {
	'use strict';
	var MessageRepository = Backbone.Collection.extend({
		model: message,
		url: 'http://localhost:8080/message',
		//localStorage: new Backbone.LocalStorage("fx-messages")
		save: function(message) {
			this.add(message);
			save(message);
		}
	});
	return new MessageRepository;
});