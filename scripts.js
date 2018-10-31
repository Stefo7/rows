
var canvas = document.getElementById('myCanvas');

var rectangle = canvas.getContext('2d');
var x = canvas.x;
var y = canvas.y;
x = 10;
y = -10;

function draw() {
rectangle.fillStyle='rgba(255, 188, 106, 0.9)';
rectangle.fillRect(x,y,30, 22);
}

for (var i = 0; i < 5; i++) {
  y += 25;
  draw();
   if (i>0) {
     x += 35;
     draw();
     x = 10;
   }
   if (i>1) {
     x += 70;
     draw();
     x = 10;
   }
  if (i>2) {
     x += 105;
     draw();
     x = 10;
   }
  if (i>3) {
     x += 140;
     draw();
     x = 10;
   }
}

