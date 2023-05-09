class Animal {
    constructor(type) {
        this._type = type;
    }
    move() {
        return `Якось рухається`;
    }
    toString() {
        return `Тип тварини - ${this._type}. ${this.move()}`;
    }
}