const Bday = '8 December 2020'

function countdown(){
 const BdayDate = new Date (Bday);
 const currentDate = new Date();

 const totalSeconds = Math.floor(BdayDate - currentDate)/1000;
 const days = Math.floor(totalSeconds /3600/24);
 const minutes = Math.floor(totalSeconds /60) % 60;
 const hours = Math.floor(totalSeconds /3600) % 24;
 const seconds = Math.floor(totalSeconds) % 60; 
console.log(days,hours, minutes,seconds)

}

countdown()