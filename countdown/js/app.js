'use strict';

const item = document.querySelectorAll('.main__countdown-item > h4'),
			countdownElement = document.querySelector('.main__countdown');

let 	countdownDate = new Date(2021, 8, 1, 0, 0).getTime();

function getCountdownTime() {
	const now = new Date().getTime(),
				distance = countdownDate - now,
				oneDay = 24 * 60 * 60 * 1000,
				oneHour = 60 * 60 * 1000,
				oneMinute = 60 * 1000;

	let days = Math.floor(distance / oneDay);
	let hours = Math.floor((distance % oneDay) / oneHour);
	let minutes = Math.floor((distance % oneHour) / oneMinute);
	let seconds = Math.floor((distance % oneMinute) / 1000);

	const values = [days, hours, minutes, seconds];

	item.forEach(function (item, idx) {
		item.textContent = values[idx];
	});

	if (distance < 0) {
		clearInterval(countdown);
		countdownElement.innerHTML = '<h4 class="expired">Время вышло!</h4>'
	}
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();
