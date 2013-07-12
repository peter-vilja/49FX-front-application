define(['backbone'], function(Backbone) {
	var headerView = Backbone.View.extend({
		el: $('#slider'),
		events: {
			'click span': 'change'
		},

		change: function(e) {
			$('#slider span').removeClass('selected')
			$(e.currentTarget).toggleClass("selected")
			$('.background').attr('class', 'background ' + $(e.currentTarget).attr('class'))
		}
	});

	return headerView;
})