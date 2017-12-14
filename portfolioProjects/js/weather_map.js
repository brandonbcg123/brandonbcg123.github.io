(function () {
    "use strict";
    $(document).ready(function () {
        // function setListeners() {
        //     $("#geoSubmit").on("click", function () {
        //         $("#forecasts").empty();
        //         $("#coordinatesCity").empty();
        //         $("#geoSubmit").off("click");
        //         getCoordinates();
        //     });
        // }

        // var latitude = $("#lat");
        // var longitude = $("#lon");
        //
        // function getCoordinates() {
        //     if (latitude.val() !== "" && longitude.val() !== "") {
        //         var lat = $("#lat").val();
        //         var lon = $("#lon").val();
        //         getWeather(lat, lon)
        //     } else {
        //         alert("You must enter your coordinates!")
        //     }
        // }

        function getWeather(lat, lon) {
            $.get('http://api.openweathermap.org/data/2.5/forecast', {
                APPID: "1d9259fc21b4fb3a6976934537609e66",
                lat: lat,
                lon: lon,
                units: "imperial",
                cnt: 3
            }).done(function (data) {
                console.log(data);
                var city = data.city.name;
                var cityHtml = "";
                var html = "";
                cityHtml += "<h2>" + city + "</h2>";
                $("#coordinatesCity").html(cityHtml);
                data.list.forEach(function (day) {
                    var icon = day.weather[0].icon;
                    var url = "http://openweathermap.org/img/w/" + icon + ".png";
                    var img = "<img src='" + url + "'>";
                    html += "<div class='col-xs-4 weatherInfo'>";
                    html += "<h2>" + Math.round(day.main.temp_max) + "°/";
                    html += Math.round(day.main.temp_min) + "°</h2>";
                    html += "<span>" + img + "</span>";
                    html += "<p><strong>" + day.weather[0].main + ": </strong>";
                    html += day.weather[0].description + "</p><p><strong>";
                    html += "Humidity: </strong>" + day.main.humidity;
                    html += "</p><p><strong>" + "Wind: </strong>" + day.wind.speed;
                    html += "</p><p><strong>" + "Pressure: </strong>";
                    html += day.main.pressure + "</p></div>";
                });
                $("#forecasts").html(html);
                // setListeners();
            });
        }

        getWeather(29.4241, -98.4936);

        var mapOptions = {
            zoom: 5
            // center: {
            //     lat: 29.4241,
            //     lng: -98.4936
            // }
        };
        var map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);

        var address = "San Antonio";

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode(
            {"address": address}, locateAddress);

        function locateAddress(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var locator = results[0].geometry.location;
                console.log(locator.lat());
                console.log(locator.lng());
                map.setCenter(locator);
            } else {
                alert("Process request was not succesful - status: " + STATUS)
            }
            var marker = new google.maps.Marker({
                position: locator,
                map: map,
                draggable: true,
                title: "Drag me!"

            });

            var infowindow = new google.maps.InfoWindow({
                content: "<strong>Lat:</strong> " + marker.getPosition().lat().toFixed(4).toString() + "<br> <strong>Lng:</strong> " + marker.getPosition().lng().toFixed(4).toString()
            });
            infowindow.open(map, marker);

            marker.addListener("dragend", function () {
                var markerLat = marker.getPosition().lat();
                var markerLng = marker.getPosition().lng();
                // console.log(marker.getPosition());
                // $("#forecasts").empty();
                // $("#coordinatesCity").empty();
                getWeather(markerLat, markerLng);
                infowindow.setContent("<strong>Lat:</strong> " + markerLat.toFixed(4).toString() + "<br> <strong>Lng:</strong> " + markerLng.toFixed(4).toString());
                infowindow.open(map, marker);
            });
        }
    });
})();

