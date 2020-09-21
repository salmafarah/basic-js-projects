var colors = [  "rgb(255, 0, 0)", 
                "rgb(255, 255, 0)", 
                "rgb(0, 255, 0)", 
                "rgb(0, 255, 255)", 
                "rgb(0, 0, 255)", 
                "rgb(255, 0, 255)" 
]

var squares = document.getElementsByClassName("square")
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay")

colorDisplay.textContent = pickedColor

for (var i = 0 ; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i]; 
}