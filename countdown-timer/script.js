const daysEl =  document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const Bday = '8 December 2020'

function countdown(){
 const BdayDate = new Date (Bday);
 const currentDate = new Date();

 const totalSeconds = Math.floor(BdayDate - currentDate)/1000;
 const days = Math.floor(totalSeconds /3600/24);
 const minutes = Math.floor(totalSeconds/60) % 60;
 const hours = Math.floor(totalSeconds /3600) % 24;
 const seconds = Math.floor(totalSeconds) % 60; 

 daysEl.innerHTML = days 
 hoursEl.innerHTML = hours
 minutesEl.innerHTML = formatTime(minutes)
 secondsEl.innerHTML = formatTime(seconds)
}
//Calls the function as soon as the page loads 
countdown();

function formatTime(time){
 return time < 10 ? (`0${time}`) : time;
}


setInterval(countdown,1000);