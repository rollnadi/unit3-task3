var spot = {
  x: 100,
  y: 50
}

var col = 0;
var r = 255;
var g = 51;
var b = 51;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //background
  col = map(mouseX, 0, 500, 0, 255);
  background(col);

  // map
  r = map(mouseX,mouseY,500,0,255);
  
  fill(r,g,51);
  ellipse(250, 250, 400, 400);
  
  fill(r);
  ellipse(250, 250, 200, 200);
  
  spot.x = random(0, 500);
  spot.y = random(500, 0);
  noStroke();
  fill(255, 51, 51);
  ellipse(spot.x,spot.y, 20, 20);
}