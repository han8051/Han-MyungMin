function setup() {
  createCanvas(400,400);
  piet(1,1,400,400,2);
}


function draw() {
  if(mouseIsPressed) {
    piet(1,1,400,400,2);
  }
}


function piet(x1, y1, x2 , y2, N) {
  if(N==0) {
    var c = [ '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ffffff' ];
    fill(c[int(random(c.length))]);
    strokeWeight(4);
    rect(x1,y1,x2-x1-3,y2-y1-3);
  } else {
    let i = int(random(x1,x2));
    let j = int(random(y1,y2));
    
    piet(x1,y1, i,  j, N-1);
    piet(i, y1, x2, j, N-1);
    piet(x1, j, i, y2, N-1);
    piet(i, j, x2, y2, N-1);
  }
}
