$(document).ready(function() {
    mapboxgl.accessToken = mapboxKey;
    let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 12,
        center: [-118.5369,34.2286]
    });
    let marker;

    const renderWeather = function(forecasts) {
        let html = "";
        forecasts.forEach(function(forecast) {
            let icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
            let card = `
                <div class="card" style="width: 15rem;">
                <div id="weather-date" class="card-header">${forecast.date}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">${forecast.high.toFixed(1)}°F / ${forecast.low.toFixed(1)}°F</li>
                    <li class="list-group-item text-center"><img src=${icon} alt=""></li>
                    <li class="list-group-item">Weather: ${forecast.weather[0].main}</li>
                    <li class="list-group-item">Humidity: ${forecast.humidity}%</li>
                    <li class="list-group-item">Wind Speed: ${forecast.wind}mph</li>
                    <li class="list-group-item">Pressure: ${forecast.pressure}mmHg</li>
                </ul>
            </div>    
            `;
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

    const markerDrag = function() {
        let coords = [marker.getLngLat().lng, marker.getLngLat().lat];
        let mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${mapboxKey}`;
        getWeather(coords[1],coords[0]);
        renderLocation(coords);
        $.get(mapbox).done(function(data) {
            $('#location').val("");
            $('#location').attr('placeholder', data.features[0].place_name);
        });
    }

    const renderLocation = function(coords) {
        map.flyTo({
            center: coords,
            zoom: 12,
            speed: 1.5,
            curve: 1,
            easing(t) {
                return t;
            },
        });
        if(marker)
            marker.remove();
        marker = new mapboxgl.Marker().setLngLat(coords).setDraggable(true).addTo(map).on('dragend', markerDrag);
    }

    const getLocation = function(location) {
        let mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxKey}`;
        $.get(mapbox).done(function(data) {
            let coords = data.features[0].center;
            getWeather(coords[1],coords[0]);
            renderLocation(coords);
        });
    }
    getLocation('Northridge, CA');

    $('#submit').click(function(e) {
        e.preventDefault();
        let location = $('#location');
        location.attr("placeholder",location.val());
        getLocation(location.val());
        location.val("");
    });
});