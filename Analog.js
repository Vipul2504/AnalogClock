// const HOURHAND = document.querySelector('#hr');
// const MINUTEHAND = document.querySelector('#mn');
// const SECONDHAND = document.querySelector('#sc');
// var date = new Date();
//  let hr = date.getHours();
//  let min = date.getMinutes();
//  let sec = date.getSeconds();
//  let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
// let minPosition = (min * 360/60) + (sec* 360/60)/60;
// let secPosition = sec * 360/60;
// HOURHAND.style.transform = rotate( + hrPosition + deg);
// MINUTEHAND.style.transform = rotate( + minPosition + deg);
// SECONDHAND.style.transform = rotate( + secPosition + deg);
// var interval = setInterval(run_the_clock, 1000);
// grab a reference of every hands

// hour hand
let hourHand = document.querySelector('.hour');
// minute hand 
let minuteHand = document.querySelector('.min');
// second hand
let secondHand = document.querySelector('.sec');
function rotate() {
    // get the current Date object from which we can obtain the current hour, minute and second
    const currentDate = new Date();
  
    // get the hours, minutes and seconds
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    // rotating fraction --> how many fraction to rotate for each hand.
    const secondsFraction = seconds / 60;
    const minutesFraction = (secondsFraction + minutes) / 60;
    const hoursFraction = (minutesFraction + hours) / 12;
  
    // actual deg to rotate
    const secondsRotate = secondsFraction * 360;
    const minutesRotate = minutesFraction * 360;
    const hoursRotate = hoursFraction * 360;
  
    // apply the rotate style to each element
    // use backtick `` instead of single quotes ''
    secondHand.style.transform = `rotate(${secondsRotate}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
  }
  
  // for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
  setInterval(rotate, 1000);
