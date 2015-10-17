

var $header = $('header');
var $weather = $('#weather');

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(function() {

	//display none on weather

	$weather.hide();
	// animation of the Top Form

	if(isMobile.any() ) mobile();
	else {
		desktop();
	}

	function desktop () {
		$('form').one('submit', function() {
		$header.animate({				
			'marginTop': "-=220px"},
			1000, function() {
			$header.css('margin-bottom', '0');
			$weather.show();				
		}); // end animate

	}); // clicker - one
	}
	function mobile () {
		$('form').one('submit', function () {
		$weather.show(500);
	});
	}
});