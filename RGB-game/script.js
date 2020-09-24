var numOfSquares = 6
var colors = generateRandomColors(numOfSquares);

var squares = document.getElementsByClassName("square")
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.getElementById("message")
var h1Display = document.querySelector("h1");
var resetButton = document.getElementById("reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected")
  easyBtn.classList.add("selected")
  numOfSquares = 3
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor
  for(var i=0; i<squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none"
    }

  }

})

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected")
  hardBtn.classList.add("selected")
  numOfSquares = 6
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block"
  }
  
})

resetButton.addEventListener("click",function(){
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (i =0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
   h1Display.style.backgroundColor = "#232323"
})

colorDisplay.textContent = pickedColor

for (var i = 0 ; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i]; 
  squares[i].addEventListener('click', function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!!!"
      resetButton.textContent = "Play Again"
      changeColors(clickedColor)
      h1Display.style.backgroundColor = clickedColor;
    } else{
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again"
    }
    
  })
}


function changeColors(color){
  for (var i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = color
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]; 
}

function generateRandomColors(num){
  var arr = []; 
  for (var i =0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor (Math.random() * 256);
  var g = Math.floor (Math.random() * 256);
  var b = Math.floor (Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")" ; 
}