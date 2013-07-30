define(['backbone'], function(Backbone) {
  var time;
	var timer = function() {
		if($('#slider .selected').is(':last-child')) {
			$('#slider .first').click()
		} else {
			$('#slider .selected').next().click()
		}
	}
	var headerView = Backbone.View.extend({
		el: $('#slider'),
		events: {
			'click span': 'change'
		},

		initialize: function() {
			time = window.setInterval(timer, 10000);
		},

		change: function(e) {
			$('#slider span').removeClass('selected')
			$(e.currentTarget).toggleClass('selected')
			$('.background').attr('class', 'background ' + $(e.currentTarget).attr('class'))
			this.reset()
		},

		reset: function() {
			window.clearInterval(time)
			this.initialize()
		}
	});

	return headerView;
})