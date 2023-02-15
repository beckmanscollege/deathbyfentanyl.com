window.onload = function() {
  startCountUp();
}

function startCountUp() {
  var countUp = document.querySelector('.count-up');
  var number = parseInt(countUp.innerHTML);
  var intervalId = setInterval(function() {
    number++;
    countUp.innerHTML = number;
    if (number >= 11700) {
      clearInterval(intervalId);
    }
  }, 10);
}