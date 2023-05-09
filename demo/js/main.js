'use strict';

/*
===================================================
* Поліморфізм це різноманіття спосіб перевизначення 
у похідних класах певних методів багаторазового 
класу, який вони успатковують.
===================================================
* 1 - Має юути базовий клас та декілька його нащадків
* 2 - У нащадках має бути метод який вже має визничений у базовому класі
*/

window.addEventListener('load', () => {
    console.log('Start');

    // 1 - Визначення дескрипторів елементів
    const displayBox = document.getElementById('display-box');
    const startButton = document.getElementById('start-button');

    // 2 - Створюємо ключові події:
    startButton.addEventListener('click', () => {
        console.log('startButton => Click');
        // 1
        let animal = new Animal('якась тваринка');
        console.log(animal);
        displayBox.innerHTML = `${animal}<br>`;
        //2
        let animals = [
            new Bird(), new Dog(), new Fish(), new Frog()
        ];
        // 3
        for(let a of animals){
            displayBox.innerHTML += `${a}<br>`;
        }
    });
});