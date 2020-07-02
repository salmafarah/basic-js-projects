const counter = document.querySelector('#count');
const btnAdd = document.querySelector('#btnAdd');
const btnSub = document.querySelector('#btnSub');

btnAdd.addEventListener('click', add);
btnSub.addEventListener('click', sub);

let count = 1;  
counter.innerHTML = count;


function add(evt){
count++;
if(count < 0){
    counter.style.color = 'red'
} else{
    counter.style.color = 'green'
}
counter.innerHTML = count;
counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration: 500, fill:'forwards'})

}

function sub(evt){
    count--;
    if(count < 0){
        counter.style.color = 'red'
    } else{
        counter.style.color = 'green'
    }
    counter.innerHTML = count;
    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration: 500, fill:'forwards'})
}