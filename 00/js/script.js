'use strict';

if (4 == 9) {
	console.log('ok!');
} else {
	console.log('Error');
}

const num = 50;

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('Верно!');
// }
//
// (num === 50) ? console.log('ok!') : console.log('Error');

switch (num) {
	case 49:
		console.log('Error');
		break;
	case 100:
		console.log('Error');
		break;
	case 50:
		console.log('ok!');
		break;
	default:
		console.log('Default!');
		break;
}