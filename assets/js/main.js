import { Controller } from "./controller.js";

$(document).ready(() => {

let controller=new Controller();

controller.redInit();
controller.greenInit();
controller.blueInit();

controller.mixColors();
});