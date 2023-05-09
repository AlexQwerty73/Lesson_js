class Triangle extends Shape {
    #side1;
    #side2;
    #side3;

    constructor(s1, s2, s3) {
        super('triangle');
        this.#side1 = s1;
        this.#side2 = s2;
        this.#side3 = s3;
    }

    calcSquare() {
        let p = (this.#side1 + this.#side2 + this.#side3) / 2;
        return Math.sqrt(p * (p - this.#side1) * (p - this.#side2) * (p - this.#side3));
    }

    toString() {
        return `${super.toString()}. Side 1: ${this.#side1}cm, Side 2: ${this.#side2}cm, Side 3: ${this.#side3}`;
    }
}