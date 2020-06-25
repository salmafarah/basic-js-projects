let colorBtn = document.querySelector('.colorBtn');
let bodycolor = document.querySelector('body'); 

const colors = ['yellow', 'red', 'green', '#9e4244','#E11584', '#FD5DA8','#D4AF37','#8B4513', '355C7D', '6C5B7B', 'FECEAB','A8E6CE', 'FFD3B5','E8175D','FF4E50']; 

colorBtn.addEventListener('click',changeColor); 

function changeColor (){
    let random = Math.floor(Math.random()*colors.length)
    bodycolor.style.backgroundColor = colors[random]; 
}

