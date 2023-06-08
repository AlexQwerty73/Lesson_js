export class Controller {

    constructor() {

    }

    mixColors() {
        let r =parseInt($('#red-label').text(), 10);
        let g =parseInt($('#green-label').text(), 10);
        let b =parseInt($('#blue-label').text(), 10);
        let color = `rgb(${r},${g},${b})`;
        $('#view-box').css('background-color', color);
    }

    redInit() {
        $('#red-slider').slider({
            orientation: 'vertical',
            range: 'min',
            min: 0,
            max: 255,
            value: 150,
            width: 100,
            slide: function (event, ui) {
                $('#red-label').text(ui.value);
                this.mixColors();
            }.bind(this)
        });
    }
    greenInit() {
        $('#green-slider').slider({
            orientation: 'vertical',
            range: 'min',
            min: 0,
            max: 255,
            value: 150,
            width: 100,
            slide: function (event, ui) {
                $('#green-label').text(ui.value);
                this.mixColors();
            }.bind(this)
        });
    }
    blueInit() {
        $('#blue-slider').slider({
            orientation: 'vertical',
            range: 'min',
            min: 0,
            max: 255,
            value: 150,
            width: 100,
            slide: function (event, ui) {
                $('#blue-label').text(ui.value);
                this.mixColors();
            }.bind(this)
        });
    }
}