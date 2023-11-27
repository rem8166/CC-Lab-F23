
let dancer;
let sequence = 0;
function setup(){
let cnv = createCanvas(400,400);
cnv.parent("canvasWrapper")

  createCanvas(600, 600);
  dancer = new roryDancer(width / 2, height / 2);
}

function draw() {
   if (sequence == 0) {
     background(0,150,0);
    drawBackground1();

  dancer.update();
  dancer.display();
   }
  if (sequence == 1){
    background(0);
    dancer.update();
    dancer.display();
  }
}
class roryDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.belly = 0;
    this.rightleg = 0;
    this.leftleg = 0;
    this.rightarm = 0;
    this.leftarm = 0;
    this.wholebody=0;
  
  }
  update() {
    this.belly = map(sin(frameCount * 0.1 + 7) * 4, 1, -1, 5, -6);
    this.rightleg = map(sin(frameCount * 0.07) * 0.5, 0.5, -0.5, 0.2, -0.2);
    this.leftleg = map(sin(frameCount*0.07)*0.2,0.5,-0.2,-0.5, 0.2);
    this.rightarm= map(2*sin(frameCount*0.05)*0.2, 0.2, -0.25, 0.2, -0.25);
    this.leftarm= map(-2*sin(frameCount*0.05)*0.2,0.2,-0.25,-0.25, 0.2);
    this.wholebody=map(cos(frameCount * 0.03)*0.5,0.02,-0.025,-0.025, 0.02);
 
  }
  display() {

    push();
    translate(this.x, this.y);
    noStroke();
    push();
    translate(0,0);
    fill (0);
    rotate(this.rightarm);
    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0,0);
    rotate(this.leftarm);
    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0,0);
    rotate(this.wholebody);
    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);
    
   //right leg
    push();
    fill(0);
    translate(0,0);
    rotate(this.rightleg);
    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(0);
    translate(0,0);
    rotate(this.leftleg);
    ellipse(+15, +40, 15, 30);
    pop();
    ellipse(0, -30, 40, 30);
    fill(0);
    circle(-20,-40,12);
    circle(+20,-40,12);
    //belly
    push();
    fill (255);
    translate(0, 0);
    rotate(radians(this.belly + 10));
    fill(255);
    noStroke();
    ellipse(0, +15, 60, 50);
    pop();

    fill(0);
    circle(-7, -32, 5);
    circle(+7, -32, 5);
    ellipse(0, -27, 15, 3);
    push();
    translate(0, +random(-2, 2));
    rect(-12, -38, 7, 2);
    pop();
    push();
    translate(0, +random(-2, 2));
    rect(+5, -38, 7, 2);
    pop();
    pop();
 
pop();
}}
function keyPressed() {
  if (keyCode == 8) {
    sequence++;
    console.log(sequence);
  }
  if (sequence >= 3) {
    sequence = 0;
  }}
function drawBackground1(){
  fill(0,200,0);
  noStroke();
  rect(20,0,10,600);
}
