import { Validator } from "./validatior.js";
import { CookiesManager } from "./cookies_manager.js";

export class Controller {
    constructor() { }

    activateCreateButton() {
        $('#b1').click(() => {
            let key = $('#key').val();
            let val = $('#val').val();
            let exp = $('#exp').val();

            if (Validator.validateFields(key, val, exp)) {
                CookiesManager.setCookie(key, val, exp);
                $('tbody').html(CookiesManager.getCookies());
            }
        });
    }
    activateDisplayButton() {
        $('#b2').click(() => {
            $('tbody').html(CookiesManager.getCookies());
        });
    }
    activateSearchButton() {
        $('#b3').click(() => {

        });
    }
    activateChengeButton() {
        $('#b4').click(() => {

        });
    }
    activateDeleteButton() {
        $('#b5').click(() => {

        });
    }
    activateResetButton() {
        $('#b6').click(() => {

        });
    }
}