

let numLeaves = 1; 

let leaves = [];
let xGroundr = [];
let xGroundo = [];
let xGroundy = [];
let yGroundr = [];
let yGroundo = [];
let yGroundy = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");
noCursor();
 
  for (let i = 0; i < numLeaves; i++) {
    leaves[i] = new Leaf (mouseX, mouseY);
  }
  colorMode(HSB);
}

function draw() {
  background(194.7, 24.8, 90.2);
  for (let i = 0; i < 400; i++) {
    xGroundr.push(random(0, width));
    yGroundr.push(random(400,600));
    noStroke();
    fill(0,255,255,100);
    circle(xGroundr[i], yGroundr[i], 20);
  
  }
  for (let i = 0; i < 300; i++) {
    xGroundo.push(random(0, width));
    yGroundo.push(random(400,600));
    noStroke();
    fill(30,255,255,100);
    circle(xGroundo[i], yGroundo[i], 20);
  
  }
  for (let i = 0; i < 300; i++) {
    xGroundy.push(random(0, width));
    yGroundy.push(random(400,600));
    noStroke();
    fill(60,255,255,100);
    circle(xGroundy[i], yGroundy[i], 20);
 
  }
  for (let i = 0; i < leaves.length; i++) {
    let p = leaves[i];
    p.update();
    p.display();
  }

  if (mouseIsPressed == true) {
    for (let i = 0; i < numLeaves; i++) {
        leaves.push(new Leaf(mouseX-45, mouseY-30));
        leaves.push(new Leaf(mouseX+45, mouseY-30));
    }
}
drawPuppy(mouseX,mouseY);

for(let i = 0; i < leaves.length; i++){
  leaves[i].update();
  leaves[i].checkOutOfCanvas();
leaves[i].display();
}

while (leaves.length > 500) {
    let index = 0;
    let numDelete = 1;
    leaves.splice(index, numDelete);
}

}

class Leaf {
  
  constructor(startX, startY) {
    
    this.x = startX;
    this.y = startY;
    this.speedX = random(-2,2);
    this.speedY = random(-0.01,-1);
    this.hue = random(0, 60);
    this.onCanvas = true;
    this.rotate =  map(sin(frameCount * 5)*10,30,-30,30, -30);
  }
  checkOutOfCanvas(){
    if(this.y>height){
        this.onCanvas= false
    }
    if(this.x>width){
      this.onCanvas=false
    }
    if(this.y<height){
      this.onCanvas= false
  }
  if(this.x<width){
    this.onCanvas=false
  }
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY = this.speedY + 0.03;
    this.speedX = this.speedX + 0.015 * sin (this.x * random(-1, 1));
    

  }
  display() {
    
    push();
        translate(this.x, this.y);
        rotate(this.rotate);
        fill(this.hue,255,255);
        noStroke();
        beginShape();
        vertex(0,0);
        vertex(-24,-9);
        vertex(-4,-10);
        vertex(-24,-26);
        vertex(-4,-17);
        vertex(0,-35);
        vertex(+4,-17);
        vertex(+24,-26);
        vertex(+9,-10);
        vertex(+24,-9);
        endShape();
   pop();
  }
}
function drawPuppy(xPos,yPos){
  x = xPos;
  y = yPos;
  push();
  translate(x, y)
 noStroke();
 colorMode(RGB);
 fill(144,104,77);
  circle (0,0,75);
  circle(-33,-30,20);
  circle(+33,-30,20);
  circle(0,+40,79);
  circle(-40,+30,25);
  circle(+40,+30,25);
  circle(+30,+70,25);
  circle(-30,+70,25);
  fill(255, 192, 203);
  ellipse(0,-30,56,20);
  circle(0,-40,10);
  fill (255);
  circle(-15,-10,10);
  circle(+15,-10,10);
  fill(0);
  circle(-14,-9.5,5);
  circle(+16,-9.5,5);
  fill(255,0,0);
  ellipse(0,+15,20,9);

pop();
}

