class Manager {

    constructor() {
        this._collection = [];
    }
    get collection() {
        return this._collection;
    }
    fillCollection(name, prefix, count) {
        for (let i = 1; i <= count; i++) {
            this._collection.push(`./assets/img/${name}/${prefix}${i}.jpg`);
        }
    }

}