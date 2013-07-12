define(['backbone'], function(Backbone) {
	var headerView = Backbone.View.extend({
		el: $('#slider'),
		events: {
			'click span': 'change'
		},

		initialize: function() {
			window.setInterval(function() {
				if($('#slider .selected').is(':last-child')) {
					$('#slider .first').click()
				} else {
					$('#slider .selected').next().click()
				}
			}, 10000);
		},

		change: function(e) {
			$('#slider span').removeClass('selected')
			$(e.currentTarget).toggleClass("selected")
			$('.background').attr('class', 'background ' + $(e.currentTarget).attr('class'))
		}
	});

	return headerView;
})