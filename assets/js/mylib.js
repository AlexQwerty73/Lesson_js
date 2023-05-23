class Controller {

    constructor() {
        this._nav = $('section > nav');
        this._gallery = $('#gallery');
        this._logo = $('#logo-img');
        this._buttons = $('.nav-img');
    }

    loadImages(dir, prefix) {
        this._nav.hide(1000);
        this._gallery.show(1000);
        this._gallery.html('')
        // this._gallery.html(` <img id="back" src="./assets/icons/left_arrow.png" alt="arrow">`)
        $('<img>', {
            src: './assets/icons/left_arrow.png',
            id: 'back', alt: '...'
        }).appendTo(this._gallery);

        for (let i = 1; i <= 5; i++) {
            $('<img>', {
                src: `./assets/img/${dir}/${prefix}${i}.jpg`,
                class: `mini`
            }).appendTo(this._gallery);
        }
    }

    dispatch(logoUrl) {
        if (logoUrl === './assets/logo/cat-logo.png') {
            this.loadImages('cats', 'c');
        } else if (logoUrl === './assets/logo/dog-logo.png') {
            this.loadImages('dogs', 'd');
        } else if (logoUrl === './assets/logo/fish-logo.png') {
            this.loadImages('fishes', 'f');
        }
    }

    activateNav() {
        this._buttons.click((event) => {
            let url = $(event.target).attr('src');
            this.dispatch(url)
        });
    }

    activateBack() {
        $('#gallery').on('click', '#back', () => {
            this._gallery.hide(1000);
            this._nav.show(1000);

            this._logo.animate({ 'width': '0%' }, 1);
            this._logo.attr('src', './assets/logo/default.jpg');
            this._logo.animate({ 'width': '75%' }, 500);

        });
    }

    activateMini() {
        $('#gallery').on('click', '.mini', (event) => {
            let miniUrl = $(event.target).attr('src');

            this._logo.animate({ 'width': '0%' }, 1);
            this._logo.attr('src', miniUrl);
            this._logo.animate({ 'width': '100%' }, 500);
        });
    }
    
    activateRotate() {
        this._buttons.hover(
            function () {
                $(this).css('transform', 'rotate(360deg)')
            },
            function () {
                $(this).css('transform', 'rotate(0deg)')
            }
        );
    }
}