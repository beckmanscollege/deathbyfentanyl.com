const countUp = document.getElementsByClassName('count-up')[0];

let count = 11667;

setInterval(() => {
  count++;
  countUp.textContent = count;
}, 7000);