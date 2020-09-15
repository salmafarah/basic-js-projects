const Bday = '8 December 2020'

function countdown(){
 const BdayDate = new Date (Bday);
 const currentDate = new Date();
 console.log( BdayDate - currentDate)
}

countdown()