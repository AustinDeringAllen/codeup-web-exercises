$(document).ready(function() {
    const renderWeather = function(forecasts) {
        let html = "";
        forecasts.forEach(function(forecast) {
            let card = `
                <div class="card" style="width: 15rem;">
                <div id="weather-date" class="card-header">${forecast.date}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">${forecast.high.toFixed(1)}°F / ${forecast.low.toFixed(1)}°F</li>
                    <li class="list-group-item">Weather: ${forecast.weather[0].main}</li>
                    <li class="list-group-item">Humidity: ${forecast.humidity}%</li>
                    <li class="list-group-item">Wind Speed: ${forecast.wind}mph</li>
                    <li class="list-group-item">Pressure: ${forecast.pressure}mmHg</li>
                </ul>
            </div>    
            `
            html += card;
        });
        $('#card-block').html("").append(html);
    }

    const getWeather = function(lat, lon) {
        let weatherMap = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherMapKey}&units=imperial`;
        $.get(weatherMap).done(function(data) {
            console.log(data);
            let bucket = [];
            data.daily.forEach((e, i) => {
                if(i < 5) {
                    let forecast = {
                        date: new Date(e.dt * 1000).toDateString(),
                        high: e.temp.max,
                        low: e.temp.min,
                        weather: e.weather,
                        humidity: e.humidity,
                        wind: e.wind_speed,
                        pressure: e.pressure
                    };
                    bucket.push(forecast);
                }
            });
            renderWeather(bucket);
        });
    }

    const renderLocation = function() {
        // mapboxgl.accessToken = mapboxKey;
        // let map = new mapboxgl.Map({
        //     container: "map",
        //     style: "mapbox://styles/mapbox/streets-v9",
        //     zoom: 10
        // });
    }

    const getLocation = function(location) {
        let mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxKey}`;
        $.get(mapbox).done(function(data) {
            console.log(data);
            getWeather(data.features[0].center[1], data.features[0].center[0]);
            //renderLocation();
        });
    }

    $('#submit').click(function(e) {
        e.preventDefault();
        let location = $('#location').val();
        getLocation(location);
    });
    getLocation("Northridge, CA");
});