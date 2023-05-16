'use strict';

window.addEventListener('load', () => {

    console.log('Start👍');
    let controller = new Controller();
    
    controller.activateLogin();
    controller.activatePass1();
    controller.activatePass2();
    controller.activateEmail();
    controller.activateSubmit();
});