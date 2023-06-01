import { Controller } from "./controller.js";

$(document).ready(() => {
    const controller = new Controller();

    controller.activateLoadButton();
    controller.activateResetButton();
    controller.activateRectButton();
});