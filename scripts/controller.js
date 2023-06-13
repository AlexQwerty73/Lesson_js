import { Visualizer } from "./visualizer.js";
import { WeatherModel } from "./weather_model.js";

export class Controller {

    activateGetWeather() {
        $('#get-weather').click(() => {
            let cityName = $('#city').val();
            let apiKej = 'eaa46a0f1f7244ac9be174024231306';
            let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKej}&q=${cityName}`;

            if (cityName === '') {
                alert('Ви нічого не написали');
                $('#city').focus();
            } else {
                $.getJSON(apiUrl, (data) => {
                    let weather = new WeatherModel(data);
                    console.log(weather);

                    let visualizer = new Visualizer()
                    $('#display').html(visualizer.generateHtml(weather));

                })
                .error(()=>{
                    alert('Прогноз погоди заданого міста не знайдено!');
                })
            }
        });
    }
    activateResWeather() {
        $('#res-weather').click(() => {
            $('#city').val('');
            $('#display').html('');
            $('#city').focuse();
        });
    }

}