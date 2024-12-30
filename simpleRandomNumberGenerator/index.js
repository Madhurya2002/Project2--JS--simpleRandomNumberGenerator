const randBtn = document.getElementById("randBtn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;


randBtn.onclick = function () {
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;

    number1.textContent = randomNumber1;
    number2.textContent = randomNumber2;
    number3.textContent = randomNumber3;
}

