'use strict';

class Validator {
    constructor() {
        this._loginIsValid = false;
        this._pass1IsValid = false;
        this._pass2IsValid = false;
        this._emailIsValid = false;
    }

    get loginIsValid() {
        return this._loginIsValid;
    }
    get pass1IsValid() {
        return this._loginIsValid;
    }
    get pass2IsValid() {
        return this._loginIsValid;
    }
    get emailIsValid() {
        return this._loginIsValid;
    }

    checkLogin(loginValue) {
        let regularExpresion = /^[a-zA-Z0-9\_\-]{6,16}$/;
        this._loginIsValid = regularExpresion.test(loginValue);
    }
}