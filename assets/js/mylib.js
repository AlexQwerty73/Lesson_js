class Slider{
    constructor(boxId, boxWidth, boxHeight, images){
        this._box = $(`#${boxId}`);
        this._width = boxWidth;
        this._height = boxHeight;
        this._images = images;

        this._box.css('width', this._width);
        this._box.css('height', this._height);
        this._box.show(1000);

        this._slideId = 0;
    }
}