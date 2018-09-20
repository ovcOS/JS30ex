setInterval(setDate, 1000);
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  let date = new Date();
  let seconds = date.getSeconds();
  let secondDegrees = (seconds*6)+ 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  if (secondDegrees == 90){
    secondHand.style.transitionDuration = '0s'};

  let minutes = date.getMinutes();
  let minuteDegrees = (minutes*6)+ 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  if (minuteDegrees == 90){
    minuteHand.style.transitionDuration = '0s'
  }

  let hours = date.getHours();
  let hourDegrees = (hours*30)+ 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  if (hourDegrees == 90) {
    hourHand.style.transitionDuration = '0s'
  }
};
