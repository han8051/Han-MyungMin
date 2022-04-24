
function setup() {
  createCanvas(500, 700);
  noStroke();
  background(128);
}


function draw() {
  //ellipse(width/2, height/2, 50, 50);
}

function touchMoved() {
  fill(random(255),random(255),random(255),128);
  ellipse(mouseX, mouseY, 50,50);
  noFill();
}
