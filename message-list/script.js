const btn = document.querySelector('#btn');
const messIn = document.querySelector('#messageIn');
const messOut = document.querySelector('#messageOut');

btn.addEventListener('click', createMessage);

function createMessage(){
    let text = []; 
     text.push(messIn.value); 
    console.log(text)
    if(messIn.value === ''){
        alert('Please enter text')
    } else {
    messOut.innerHTML = text[text.length-1]; 
    messIn.value = ''
    }
}