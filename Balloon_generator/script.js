var body = document.body;
var frame = document.createElement('div');
frame.classList.add("frame");

body.appendChild(frame);

//creating button to generate balloon
var button = document.createElement("button");
button.innerHTML = "Generate Balloons";
button.classList.add("btn");

var box = document.createElement('div');
box.classList.add("box");

frame.appendChild(button);
frame.appendChild(box);

button.addEventListener("click", function(event) {
    var balloon = document.createElement('div');
    balloon.classList.add("balloon");
    var x = "490" * Math.random();
    var y = "360" * Math.random();
    balloon.style.left = x + "px";
    balloon.style.top = y + "px";
    box.appendChild(balloon);
});