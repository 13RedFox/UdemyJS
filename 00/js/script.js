'use strict';

const login = prompt('Кто там?', '');

if (login === 'Admin') {

  const password = prompt('Введите пароль!', '');

  if (password === 'Admin') {
    console.log('Добро пожаловать');
  } else if ( password === '' || password === null) {
    console.log('Отменено');
  } else {
    console.log('Неверный пароль');
  }

} else if ( login === '' || login === null) {
  console.log('Отменено');
} else {
  console.log('Я вас не знаю');
}