'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'red';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я!');

div.classList.add('black');
wrapper.prepend(div);
hearts[0].replaceWith(circle[0]);