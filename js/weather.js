
$(function() {
	$('form').submit(function(event) {
		event.preventDefault();		

		var searchTerm = $('#weatherSearch').val();		
		console.log(searchTerm);

		var weatherAPI = 'http://api.worldweatheronline.com/free/v2/weather.ashx?';

		var parameters = {
			q: searchTerm,
			format: 'json',
			num_of_days: 5,
			showlocaltime: 'yes',
			extra: 'utcDayTime',
			key: '73303d9d423a73ece21ef955ece31'
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
				console.log(value);
				// console.log(value.weather[0].date);
				// console.log(value.weather[1].date);
				
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
					
					395: '../images/weatherIcons/snow_395.png',
					392: '../images/weatherIcons/chancesnow_392.png',
					389: '../images/weatherIcons/rain_296.png',
					386: '../images/weatherIcons/chancerain_386.png',
					377: '../images/weatherIcons/flurries_377.png',
					374: '../images/weatherIcons/chancerain_386.png',
					371: '../images/weatherIcons/chancesnow_392.png',
					368: '../images/weatherIcons/snow_395.png',
					365: '../images/weatherIcons/sleet_365.png',
					362: '../images/weatherIcons/chancerain_386.png',
					359: '../images/weatherIcons/rain_296.png',
					356: '../images/weatherIcons/rain_296.png',
					353: '../images/weatherIcons/chancerain_386.png',
					350: '../images//weatherIcons/snow_395.png',
					338: '../images//weatherIcons/snow_395.png',
					335: '../images//weatherIcons/snow_395.png',
					332: '../images//weatherIcons/snow_395.png',
					329: '../images//weatherIcons/snow_395.png',
					326: '../images//weatherIcons/chancesnow_392.png',
					323: '../images//weatherIcons/chancesnow_392.png',
					320: '../images/weatherIcons/sleet_365.png',
					317: '../images/weatherIcons/sleet_365.png',
					314: '../images/weatherIcons/rain_296.png',
					311: '../images/weatherIcons/chancerain_386.png',
					308: '../images/weatherIcons/rain_296.png',
					305: '../images/weatherIcons/rain_296.png',
					302: '../images/weatherIcons/rain_296.png',
					299: '../images/weatherIcons/rain_296.png',
					296: '../images/weatherIcons/rain_296.png',
					293: '../images/weatherIcons/chancerain_386.png',
					284: '../images/weatherIcons/rain_296.png',
					281: '../images/weatherIcons/rain_296.png',
					266: '../images/weatherIcons/chancerain_386.png',
					263: '../images/weatherIcons/chancerain_386.png',
					260: '../images/weatherIcons/fog_260.png',
					248: '../images/weatherIcons/fog_260.png',
					230: '../images//weatherIcons/snow_395.png',
					227: '../images//weatherIcons/snow_395.png',
					200: '../images/weatherIcons/chancetstorms_200.png',
					185: '../images/weatherIcons/chancerain_386.png',
					182: '../images/weatherIcons/sleet_365.png',
					179: '../images//weatherIcons/chancesnow_392.png',
					176: '../images//weatherIcons/chancesnow_392.png',
					143: '../images/weatherIcons/hazy_143.png',
					122: '../images/weatherIcons/mostlycloudy_122.png',
					119: '../images/weatherIcons/cloudy_119.png',
					116: '../images/weatherIcons/partlycloudy_116.png',
					113: '../images/weatherIcons/clear_113.png'

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



