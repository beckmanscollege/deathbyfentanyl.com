const countUpElement = document.getElementById('count');
let count = 11667;

setInterval(() => {
  count++;
  countUpElement.innerHTML = count;
}, 7000);