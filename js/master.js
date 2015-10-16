

var $header = $('header');
var $weather = $('#weather');

$(function() {

	//display none on weather

	$weather.hide();
	// animation of the Top Form	
	$('form').one('submit', function() {
		$header.animate({				
			'marginTop': "-=220px"},
			1000, function() {
			$header.css('margin-bottom', '0');
			$weather.show();				
		}); // end animate

	}); // clicker - one
	$('.btn-phone').click(function () {
		$weather.show(500);
	});
});