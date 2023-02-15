const countUp = document.getElementById('count-up');

let count = 11667;

setInterval(() => {
  count++;
  countUp.textContent = count;
}, 7000);
