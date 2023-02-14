const timer = document.getElementById('timer');

let count = 11667;

setInterval(() => {
	count++;
	timer.textContent = count;
}, 7000);