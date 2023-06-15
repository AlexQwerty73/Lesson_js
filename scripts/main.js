import { Controller } from "./services/controller.js";

$(document).ready(() => {

    let controller = new Controller();

    controller.activateChengeButton();
    controller.activateCreateButton();
    controller.activateDeleteButton();
    controller.activateDisplayButton();
    controller.activateResetButton();
    controller.activateSearchButton();
});