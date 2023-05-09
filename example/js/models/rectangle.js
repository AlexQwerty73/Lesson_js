class Rectangle extends Shape {
    #width;
    #height;

    constructor(w, h) {
        super('rectangle');
        this.#width = w;
        this.#height = h;
    }

    calcSquare() {
        return this.#width * this.#height;
    }
    
    toString() {
        return `${super.toString()}. Width: ${this.#width}cm, Height: ${this.#height}cm`;
    }
}