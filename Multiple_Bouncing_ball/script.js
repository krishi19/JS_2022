// this is all to create the flexibility for OOP
var defaultBallSize = 40;
var containerSize = 500;


function position(size) {
  return {
    top: parseInt(Math.random() * size),
    left: parseInt(Math.random() * size),
  };
}

var container = new Container(containerSize);
container.create(document.body);

for (var i = 0; i < 10; i++) {
  var ball = new Ball(defaultBallSize, i);
  ball.create(container.element, position(containerSize - defaultBallSize));
}