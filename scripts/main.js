import { Controller } from "./controller.js";

$(document).ready(() => {

    let controller = new Controller();

    controller.activateGetWeather();
    controller.activateResWeather();
    controller.activateTodayWeatherButton();
    controller.activateTomorrowWeatherButton();
});