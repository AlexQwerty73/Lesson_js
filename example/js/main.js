'use strict'

window.addEventListener('load', () => {

    console.log('MainScript => start');
    const displayBox = document.getElementById('display-box');
    const startBtn = document.getElementById('start-button');

    startBtn.addEventListener('click', () => {
        let shapes = [
            new Circle(10),
            new Circle(20),
            new Rectangle(10, 30),
            new Rectangle(20, 20),
            new Triangle(10,5,10)
        ];

        let k = 0;
        let result = 0;

        for (let e of shapes) {
            let x = e.calcSquare();
            result += x;
            displayBox.innerHTML += `<br>${++k}. ${e} >>> площа: ${x.toFixed(2)} ^\cm^2`;
        }

        displayBox.innerHTML+=`<br><br>Загальна площа: ${result.toFixed(2)}cm^2`
    });
});