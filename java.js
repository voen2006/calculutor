let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let btn4 = document.querySelector('.btn-4');
let btn5 = document.querySelector('.btn-5');
let btn6 = document.querySelector('.btn-6');
let btn7 = document.querySelector('.btn-7');
let btn8 = document.querySelector('.btn-8');
let btn9 = document.querySelector('.btn-9');
let btn0 = document.querySelector('.btn-0');
let btnPlus = document.querySelector('.btn-plus');
let btnMinus = document.querySelector('.btn-minus');
let btnDel = document.querySelector('.btndel');
let btnMno = document.querySelector('.btnmno');
let btnIs = document.querySelector('.btnis');
let btnC = document.querySelector('.btn-c');
let btnCom = document.querySelector('.btn-com');
let p1 = document.querySelector('.p');


let num1 = '';
let num2 = '';
let df = '';
let num3 = '';


btnC.onclick = function () {
    p1.innerHTML = "0 ";
    num1 = '';
    num2 = '';
    num3 = '';
}
btnCom.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '.';
    }
    else {
        num2 = p1.innerHTML = num2 + '.';
    }
}
btn1.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '1';
    }
    else {
        num2 = p1.innerHTML = num2 + '1';
    }
}
btn2.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '2';
    }
    else {
        num2 = p1.innerHTML = num2 + '2';
    }
}
btn3.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '3';
    }
    else {
        num2 = p1.innerHTML = num2 + '3';
    }
}
btn4.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '4';
    }
    else {
        num2 = p1.innerHTML = num2 + '4';
    }
}
btn5.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '5';
    }
    else {
        num2 = p1.innerHTML = num2 + '5';
    }
}
btn6.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '6';
    }
    else {
        num2 = p1.innerHTML = num2 + '6';
    }
}
btn7.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '7';
    }
    else {
        num2 = p1.innerHTML = num2 + '7';
    }
}
btn8.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '8';
    }
    else {
        num2 = p1.innerHTML = num2 + '8';
    }
}
btn9.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '9';
    }
    else {
        num2 = p1.innerHTML = num2 + '9';
    }
}
btn0.onclick = function () {
    if (num3 == '') {
        num1 = p1.innerHTML = num1 + '0';
    }
    else {
        num2 = p1.innerHTML = num2 + '0';
    }
}
btnIs.onclick = function () {
    if (num3 == '+') {
        num1 = p1.innerHTML = +num1 + +num2;
        num2 = '';
    }
    else if (num3 == '-') {
        num1 = p1.innerHTML = num1 - num2;
        num2 = '';
    }
    else if (num3 == '/') {
        if (num2 == '0') {
            p1.innerHTML = 'Error'
            num2 = '';
        }
        else {
            num1 = p1.innerHTML = num1 / num2;
            num2 = '';
        }
    }
    else if (num3 == '*') {
        num1 = p1.innerHTML = num1 * num2;
        num2 = '';
    }
}
btnPlus.onclick = function () {
    num3 = '+';
}
btnMinus.onclick = function () {
    num3 = '-';
}
btnMno.onclick = function () {
    num3 = '*';
}
btnDel.onclick = function () {
    num3 = '/';
}