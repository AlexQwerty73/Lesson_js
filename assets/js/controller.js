export class Controller {

    constructor() {

    }

    mixColors() {

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