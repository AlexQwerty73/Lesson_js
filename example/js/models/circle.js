class Circle extends Shape{
    #radius;
    
    constructor(radius){
        super('circle');
        this.#radius = radius;
    }

    calcSquare(){
        return Math.PI * this.#radius ** 2;
    }

    toString(){
        return `${super.toString()}. Радіус ${this.#radius}cm`;
    }
}