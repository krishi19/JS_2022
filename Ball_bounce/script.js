var container = document.createElement("div");
document.body.appendChild(container);

var heading = document.createElement("h1");
container.appendChild(heading);
heading.innerHTML = "Click on the ball for the bounce!";
heading.style = `
    margin: 30px auto;
    text-align: center;
    color : #f98b88 ;
    background-color:  #ADD8E6;
    width: 600px;
`;
var wrapper = document.createElement("div");
container.appendChild(wrapper);
wrapper.style = `
    width: 600px;
    height: 400px;
    position: relative;
    margin: 0px auto;
    background-color: #ADD8E6;
`;

var ball = document.createElement("div");
wrapper.appendChild(ball);
ball.style = `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 200px;
    background-color:#f98b88 ;
    padding: 15px;
`;
// ball.innerHTML = "click";

ball.addEventListener("click", function (event) {
  ball.innerHTML = "";
  var direction = 1;
  var interval = setInterval(function () {
    var newTop = parseInt(event.target.style.top) + 5 * direction + "px";
    event.target.style.top = newTop;
    if (parseInt(newTop) >= wrapper.clientHeight - ball.clientHeight) {
      direction *= -1;
    }
    if (parseInt(newTop) <= 0) {
      direction = 1;
    }
  }, 1000 / 60);
});