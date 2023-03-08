'use strict'

const input = document.querySelector('input'),
    guess = document.querySelector('.guess'),
    checkBtn = document.querySelector('button'),
    chances = document.querySelector('.chances');


window.addEventListener('DOMContentLoaded', () => {
    input.focus();

    let givenNumver = 0;

    function generateRandomNum(min, max) {
        return givenNumver += Math.floor(Math.random() * (max - min) + min);
    }
    generateRandomNum(1, 100);
    console.log(givenNumver);


    let chanceCount = 10;

    function chanceDecrease(chance) {
        chance.innerHTML = chanceCount--;
    };

    chanceDecrease(chances);

    function checkedNumber() {
        checkBtn.addEventListener('click', (e) => {
            let inputValue = Number(input.value);

            if (e.target && inputValue === givenNumver) {
                console.log('Вы угадали число!');
            } else if (inputValue === 0) {
                console.log('Введите число!');
            } else {
                console.log('Вы не угадали число!');
                chanceDecrease(chances);
            }
        });
    };

    checkedNumber();

});