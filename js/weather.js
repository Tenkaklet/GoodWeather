
$(function() {
	$('form').submit(function(event) {
		event.preventDefault();		

		var searchTerm = $('#weatherSearch').val();		
		

		var weatherAPI = 'http://api.worldweatheronline.com/free/v2/weather.ashx?';

		var parameters = {
			q: searchTerm,
			format: 'json',
			num_of_days: 5,
			showlocaltime: 'yes',
			extra: 'utcDayTime',
			key: '2b0e6614fcb44bb0ac4184902160707'
		};
		function findWeather (data) {
			$.each(data, function (index, value) {
				
				/*-- Global weather variables --*/
				//weather image
				var weatherImage = data.data.current_condition[0].weatherIconUrl[0].value;
				//City Temperature in Celcius
				var cityTempC = data.data.current_condition[0].temp_C;
				//City Temperature in Farenheit
				var cityTempF = data.data.current_condition[0].temp_F;
				//Feels like C
				var FeelsLikeC = data.data.current_condition[0].FeelsLikeC;
				//Feels like F
				var FeelslikeF = data.data.current_condition[0].FeelsLikeF;
				// humidity
				var humidity = data.data.current_condition[0].humidity;
				//Local Time
				var localTime = data.data.time_zone[0].localtime;
				// Weather Description
				var utc = data.data.time_zone[0].utcOffset;
				var weatherDesciption = data.data.current_condition[0].weatherDesc[0].value;
				// Sunrise
				var sunrise = data.data.weather[0].astronomy[0].sunrise;
				//Sunset
				var sunset = data.data.weather[0].astronomy[0].sunset;
				/*-- Actions taken--*/
				
				//City Temperature in Celcius
				$('#cityTemp #Celcius').html(cityTempC + 'C' + '&deg;');
				//City Temperature in Farenheit
				$('#cityTemp #Faren').html(cityTempF + 'F' + '&deg;');
				// Weather Img
				$('#results-img').html('<img src=" ' + weatherImage + '">');
				//Name of The city
				$('#cityName span').text(data.data.request[0].query);
				// Feels like C
				$('#cityFeelLike #FeelsLikeC').html(FeelsLikeC + 'C' + '&deg;');
				// Feels like F
				$('#cityFeelLike #FeelslikeF').html(FeelslikeF + 'F' + '&deg;');
				// Humidity
				$('#humidity span').html(humidity + '%');
				// Local Time
				$('#localTime span').html(localTime.split(' ')[1]);
				//UTC Offset
				$('#utc span').html(utc + 'hrs');
				//Weather Description
				$('#weatherDesciption').text(weatherDesciption);
				//Sunrise
				$('#sunRise span').text(sunrise);
				//Sunset
				$('#sunSet span').text(sunset);


				var weatherCodes = {
					
					395: 'images/wIcons/snow_395.png',
					392: 'images/wIcons/chancesnow_392.png',
					389: 'images/wIcons/rain_296.png',
					386: 'images/wIcons/chancerain_386.png',
					377: 'images/wIcons/flurries_377.png',
					374: 'images/wIcons/chancerain_386.png',
					371: 'images/wIcons/chancesnow_392.png',
					368: 'images/wIcons/snow_395.png',
					365: 'images/wIcons/sleet_365.png',
					362: 'images/wIcons/chancerain_386.png',
					359: 'images/wIcons/rain_296.png',
					356: 'images/wIcons/rain_296.png',
					353: 'images/wIcons/chancerain_386.png',
					350: 'images//wIcons/snow_395.png',
					338: 'images//wIcons/snow_395.png',
					335: 'images//wIcons/snow_395.png',
					332: 'images//wIcons/snow_395.png',
					329: 'images//wIcons/snow_395.png',
					326: 'images//wIcons/chancesnow_392.png',
					323: 'images//wIcons/chancesnow_392.png',
					320: 'images/wIcons/sleet_365.png',
					317: 'images/wIcons/sleet_365.png',
					314: 'images/wIcons/rain_296.png',
					311: 'images/wIcons/chancerain_386.png',
					308: 'images/wIcons/rain_296.png',
					305: 'images/wIcons/rain_296.png',
					302: 'images/wIcons/rain_296.png',
					299: 'images/wIcons/rain_296.png',
					296: 'images/wIcons/rain_296.png',
					293: 'images/wIcons/chancerain_386.png',
					284: 'images/wIcons/rain_296.png',
					281: 'images/wIcons/rain_296.png',
					266: 'images/wIcons/chancerain_386.png',
					263: 'images/wIcons/chancerain_386.png',
					260: 'images/wIcons/fog_260.png',
					248: 'images/wIcons/fog_260.png',
					230: 'images//wIcons/snow_395.png',
					227: 'images//wIcons/snow_395.png',
					200: 'images/wIcons/chancetstorms_200.png',
					185: 'images/wIcons/chancerain_386.png',
					182: 'images/wIcons/sleet_365.png',
					179: 'images//wIcons/chancesnow_392.png',
					176: 'images//wIcons/chancesnow_392.png',
					143: 'images/wIcons/hazy_143.png',
					122: 'images/wIcons/mostlycloudy_122.png',
					119: 'images/wIcons/cloudy_119.png',
					116: 'images/wIcons/partlycloudy_116.png',
					113: 'images/wIcons/clear_113.png'

				};

				var weatherCode = data.data.current_condition[0].weatherCode;

				for (var prop in weatherCodes) {
					if (prop === weatherCode) {
						$('#weatherImage').html('<img class="img-responsive center-block" src="' + weatherCodes[prop] + ' " />');
					}
				}
				
			});
		}
		$.getJSON(weatherAPI, parameters, findWeather);


	});


});



