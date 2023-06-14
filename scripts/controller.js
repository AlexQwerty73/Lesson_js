import { Visualizer } from "./visualizer.js";
import { WeatherModel } from "./weather_model.js";

export class Controller {
    _weatherNow() {
        let cityName = $('#city').val();
        let apiKej = 'eaa46a0f1f7244ac9be174024231306';
        let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKej}&q=${cityName}&days=1&aqi=no&alerts=no`;

        if (cityName === '') {
            alert('Ви нічого не написали');
            $('#city').focus();
        } else {
            $.getJSON(apiUrl, (data) => {
                let weather = new WeatherModel(data, new Date().getHours(), 0);

                let visualizer = new Visualizer()
                $('#display').html(visualizer.generateHtml(weather));
            });
        }
    }
    activateGetWeather() {
        $('#get-weather').click(() => {
            this._weatherNow();
        });
    }
    activateResWeather() {
        $('#res-weather').click(() => {
            $('#city').val('');
            $('#display').html('');
            $('#city').focuse();
        });
    }

    activateTodayWeatherButton() {
        $('#weather_today').click(() => {
            this._weatherNow();
        });
    }
    activateTomorrowWeatherButton() {
        $('#weather_tomorrow').click(() => {
            let cityName = $('#city').val();
            let apiKej = 'eaa46a0f1f7244ac9be174024231306';
            let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKej}&q=${cityName}&days=2&aqi=no&alerts=no`;

            if (cityName === '') {
                alert('Ви нічого не написали');
                $('#city').focus();
            } else {
                $.getJSON(apiUrl, (data) => {
                    let dTime = 0;
                    do {
                        dTime = prompt('Введіть годину від 0 до 23(наприклад 9, 14 або 19)...')
                    } while (!(0 <= dTime && dTime <= 23));
                    let weather = new WeatherModel(data, dTime, 1);

                    let visualizer = new Visualizer();
                    $('#display').html(visualizer.generateHtml(weather));

                })
            }
        });
    }

}