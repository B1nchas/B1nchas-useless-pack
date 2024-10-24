let cor;
let cor2;
let cor3;
let horizontal; // x
let vertical; // y
function setup() {
  
  createCanvas(400, 400);
  background(color(random(0, 255), random(0, 255), random(0, 255)));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  cor2 = color(random(0, 255), random(0, 255), random(0, 255));
  horizontal = 200;
  vertical = 200;
}

function draw() {
  
  stroke(cor); 
  fill(cor2);
  circle(horizontal, vertical, 50);
  
  if(mouseX < horizontal){
    horizontal = horizontal - 1;
  }
  if(mouseX > horizontal){
    horizontal = horizontal + 1;
  }
  if(mouseY < vertical){
    vertical = vertical - 1;
  }
  if(mouseY > vertical){
    vertical = vertical + 1;
  }
  if(mouseIsPressed){
   cor = color(random(0, 255), random(0, 255), random(0, 255))
    }
    if(mouseIsPressed){
   cor = color(random(0, 255), random(0, 255), random(0, 255))
   cor2 = color(random(0, 255), random(0, 255), random(0, 255))
    }
}