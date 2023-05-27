$(document).ready(() => {

    const manager = new Manager()
    manager.fillCollection('collection1', 'p', 10);

    let targetCollection = manager.collection;
    const slider = new Slider('slider', '1000px', '500px', targetCollection, 1000);

    slider.loadCollection(0, targetCollection)
    slider.activateArrowHover();
    slider.activateLeftArrow();
    slider.activateRightArrow();
    slider.activatePlayButton();
    slider.activateStopButton();
});