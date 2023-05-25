class Slider {
    constructor(boxId, boxWidth, boxHeight, images, duration = 1000) {
        this._duration = duration;
        this._box = $(`#${boxId}`);
        this._width = boxWidth;
        this._height = boxHeight;
        this._images = images;

        this._box.css('width', this._width);
        this._box.css('height', this._height);
        this._box.show(this._duration);

        this._slideId = 0;
    }

    _loadImage(index, path) {
        $('<img>', {
            id: ++index,
            src: path,
            class: 'slide',
        })
            .appendTo(this._box)
            .fadeIn(this._duration);
    }

    loadCollection(index, collection) {
        setTimeout(() => {
            if (index > collection.length) {
                $('#left-arrow').fadeIn(this._duration);
                $('#right-arrow').fadeIn(this._duration);
                return;
            } else {
                this._slideId = index;
                this._loadImage(index, collection[index++]);
                $('progress').val(index);
                this.loadCollection(index, collection);
            }
        }, this._duration);
    }

    activateArrowHover() {
        $('#right-arrow').hover(
            function () {
                $(this).css({ transform: 'translate(5px)' });
            },
            function () {
                $(this).css({ transform: 'translate(0px)' });
            }
        );
        $('#left-arrow').hover(
            function () {
                $(this).css({ transform: 'translate(-5px)' });
            },
            function () {
                $(this).css({ transform: 'translate(0px)' });
            }
        );
    }
    activateLeftArrow() {
        $('#left-arrow').on('click', () => {
            if (this._slideId > 1) {

                $(`#${this._slideId--}`).fadeOut(this._duration);
                $(`progress`).val(this._slideId);
            }
        });
    }
    activateRightArrow() {
        $('#right-arrow').on('click', () => {
            if (this._slideId < this._images.length ) {

                $(`#${++this._slideId}`).fadeIn(this._duration);
                $(`progress`).val(this._slideId );
            }
        });
    }
}