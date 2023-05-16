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
        return this._pass1IsValid;
    }
    get pass2IsValid() {
        return this._pass2IsValid;
    }
    get emailIsValid() {
        return this._emailIsValid;
    }

    checkLogin(loginValue) {
        let regularExpresion = /^[a-zA-Z0-9_]{6,16}$/;
        this._loginIsValid = regularExpresion.test(loginValue);
    }

    checkPass1(pass1Value) {
        let regularExpresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{8,}$/;
        this._pass1IsValid = regularExpresion.test(pass1Value);
    }

    checkPass2(pass1Value, pass2Value) {
        this._pass2IsValid = (pass1Value === pass2Value);
    }

    checkEmail(emailValue) {
        let regularExpresion = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        this._emailIsValid = regularExpresion.test(emailValue);
    }

    checkAll() {
        return (this._loginIsValid && this._emailIsValid && this._pass1IsValid && this._pass2IsValid)
    }
}