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
        this._presentationIsActive = true;
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
            if (index > collection.length || !this._presentationIsActive) {
                $('#left-arrow').fadeIn(this._duration);
                $('#right-arrow').fadeIn(this._duration);
                $('#play-button').fadeIn(this._duration);
                $('#stop-button').fadeIn(this._duration);

                $('#play-button').css({ opacity: 1 });
                $('#stop-button').css({ opacity: 0.2 });
                $('#right-arrow').css({ opacity: index < 9 ? 1 : 0.2 });
                $('#left-arrow').css({ opacity: 1 });
                return;
            } else {

                this._slideId = index;
                this._presentationIsActive = index != collection.length;
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
console.log(this._slideId);
                $(`#${this._slideId--}`).fadeOut(this._duration);
                $(`progress`).val(this._slideId);

                $('#left-arrow').css({ opacity: this._slideId > 1 ? 1 : 0.2 });
                $('#right-arrow').css({ opacity: 1 });

            }
        });
    }
    activateRightArrow() {
        $('#right-arrow').on('click', () => {
            if (this._slideId < this._images.length) {

                $(`#${++this._slideId}`).fadeIn(this._duration);
                $(`progress`).val(this._slideId);

                $('#right-arrow').css({ opacity: this._slideId < this._images.length ? 1 : 0.2 });
                $('#left-arrow').css({ opacity: 1 });
            }
        });
    }
    activatePlayButton() {
        $('#play-button').on('click', (e) => {
            this._presentationIsActive = true;

            $(e.target).css({ opacity: 0.2 });
            $('#stop-button').css({ opacity: 1 });

            this.loadCollection(0, this._images);
        });
    }
    activateStopButton() {
        $('#stop-button').on('click', (e) => {
            this._presentationIsActive = false;

            $(e.target).css({ opacity: 0.2 });
            $('#play-button').css({ opacity: 1 });
        });
    }
}