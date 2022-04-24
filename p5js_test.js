function setup() {
  createCanvas(640, 360);
  stroke(255);
  noFill();
  background(128);
}


function draw() {
  //ellipse(width/2, height/2, 50, 50);
}

function mouseClicked() {
  fill(255,0,0);
  ellipse(mouseX, mouseY, 50,50);
  noFill();
}
