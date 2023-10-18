let x = 200;
let y = 200;
let ySpeed = 0.5;
let creatureC = [255, 255, 255, 255];
let sequence = 0;
let angle = 0;
let circleWidth = 25;
let colorArray = [[255, 255, 255]];
let xBubble = [];
let yBubble = [];
let diaBubble = [];
let aBubble = [];
let instructions = [
  "Scientists have captured a strange, shakey creature",
  "Lets get to know the Shakey Starfish",
  "press 'a' to watch it camouflage and hide from sharks",
  "press and hold 'b' to activate Disco Mode",
  "press 'w' to return it to white",
  "press 'g' to feed it and make it grow",
  "it eats sea dirt through osmosis",
  "press 's' to starve it watch it shrink to conserve energy",
  "press the mouse to move it around",
  "deep in the sea we found a shakey starfish",
  "press 'delete' to get security clearance to meet this creature",
  "if you tap on the glass of its cage it will play with you!",
  "once you're done playing press 'delete' to continue the tour",
  "press 'z' to calm it down and get it out of camouflage with its favorite sea flower",
  "How does it survive?",
  "It shakes so much the CIA have captured it to see if it can make tsunamis"
];
let creatures = [];

function setup() {
  createCanvas(400, 400);
  creatures.push(drawCreature(x, y, 30));
}
function draw() {
  if (sequence == 0) {
    background(50, 100, 170);
    for (let i = 0; i < 20; i++) {
      xBubble.push(random(0, width));
      yBubble.push(random(0, 325));
      diaBubble.push(random(10, 50));
      aBubble.push(random(0.05));
    }
    for (let i = 0; i < 20; i++) {
      xBubble[i] += 10 * sin(y * aBubble[i]);
      yBubble[i] -= random(1, 3);
      circle(xBubble[i], yBubble[i], diaBubble[i]);
      if (yBubble[i] < 0) {
        yBubble[i] = 325;
      }
      if (xBubble[i] > width) {
        xBubble[i] = random(0, width);
      }
    }

    x = width / 2 + 100 * sin(y * 0.05);
    fill(255, 255, 255, 100);
    circle(x, y, 50);
    y = y - 3;
    if (y < 0) {
      y = 325;
    }
    textSize(16);
    text(instructions[0], width / 21, 340);
    textSize(14);
    text(instructions[10], width / 23.5, 360);
    textSize(11);
    text(instructions[15], width/21,375);
  }
  if (sequence == 1) {
    background(150, 150, 180);
    drawBackground1();

    drawCreature(x, y);
    if (mouseIsPressed) {
      drawCreature(mouseX, mouseY);
    }

    if (keyIsPressed == true && key == "w") {
      creatureC[0] = 255;
      creatureC[1] = 255;
      creatureC[2] = 255;
    }
    if (keyIsPressed == true && key == "b") {
      creatureC[0] = random(255);
      creatureC[1] = random(255);
      creatureC[2] = random(255);
    }
  }
  if (sequence == 2) {
    background(150, 150, 180);
    drawBackground2();
    drawCreature(x, y);
    if (mouseIsPressed) {
      drawCreature(mouseX, mouseY);
    }
    if (keyIsPressed == true && key == "z") {
      creatureC[3] = creatureC[3] + 1;
      fill(255,255,0);
      circle(300,200,20);
      fill(250,100,100);
      circle(315,215,25);
      circle(300,220,25);
      circle(320,200,25);
      circle(307,183,25);
      circle(287,190,25);
      circle(287,210,25);
      
    }

    if (keyIsPressed == true && key == "g") {
      circleWidth = circleWidth + 1;
      fill(255);
      ellipse(200,300,40,10);
      fill(74,67,0);
      circle(200,290,20);
      circle(215,290,20);
      circle(185,290,20);
      circle(193,280,20);
      circle(207,280,20);
    }

    if (keyIsPressed == true && key == "s") {
      circleWidth = circleWidth - 1;
    }
    if (keyIsPressed == true && key == "a") {
      creatureC[3] = creatureC[3] - 1;
      fill(180,180,180);
      noStroke();
      ellipse(120,150,100,50);
      beginShape();
      vertex(70,150);
      vertex(50,170);
      vertex(50,130);
      endShape();
      beginShape();
      vertex(140,130);
      vertex(105,100);
      vertex(105,130);
      endShape();
      fill(255,0,0);
      ellipse(150,155,40,20);
      fill(0);
      circle(140,140,5);
      circle(160,140,5);
    }
  }
}
function keyPressed() {
  if (keyCode == 8) {
    sequence++;
    console.log(sequence);
  }
  if (sequence >= 3) {
    sequence = 0;
  }
}
function drawCreature(xPos, yPos) {
  fill(creatureC[0], creatureC[1], creatureC[2], creatureC[3]);
  noStroke();
  x = xPos;
  y = yPos;
  push();
translate(x, y)

  circle(0, 0, circleWidth);
  circle(-random(15, 20), +random(5, 10), circleWidth);
  circle(-random(23, 27), -random(15, 20), circleWidth);
  circle(-random(25, 30), -random(25, 30), circleWidth);
  circle(-random(15, 20), -random(35, 40), circleWidth);
  circle(+random(14, 20), -random(20, 30), circleWidth);
  circle(+random(20, 30), -random(25, 30), circleWidth);
  circle(-random(20, 30), +random(17, 24), circleWidth);
  circle(+random(10, 15), -random(15, 20), circleWidth);
  circle(-random(20, 25), -random(18, 24), circleWidth);
  circle(-random(20, 25), +random(10, 15), circleWidth);
  circle(-random(10, 15), -random(10, 15), circleWidth);
  circle(-random(10, 15), -random(20, 25), circleWidth);
  circle(-random(17, 25), -random(25, 30), circleWidth);
  circle(-random(17, 25), +random(25, 30), circleWidth);
  circle(+random(17, 25), +random(20, 25), circleWidth);
  circle(+random(17, 25), +random(10, 15), circleWidth);
  circle(+random(10, 17), +random(10, 15), circleWidth);
  pop();
}

function drawBackground1() {
  noStroke();
  fill(200, 200, 170);
  ellipse(10, 20, 50, 70);
  ellipse(380, 320, 50, 90);
  ellipse(380, 380, 100, 70);
  ellipse(360, 320, 50, 70);
  ellipse(320, 380, 50, 100);
  ellipse(300, 390, 80, 70);
  ellipse(10, 60, 50, 90);
  ellipse(10, 20, 100, 70);
  ellipse(60, 20, 50, 70);
  ellipse(90, 30, 50, 100);
  ellipse(95, 20, 80, 70);
  ellipse(10, 390, 50, 90);
  ellipse(10, 390, 100, 70);
  ellipse(60, 380, 50, 70);
  ellipse(10, 360, 50, 100);
  ellipse(95, 380, 80, 70);
  fill(255);

  textSize(20);
  stroke(0);
  text(instructions[1], width / 10, 30);
  textSize(15);
  text(instructions[11], width / 15, 50);
  text(instructions[3], width / 6, 320);
  text(instructions[4], width / 4, 340);
  textSize(12);
  text(instructions[12], width / 8, 360);
}
function drawBackground2() {
  noStroke();
  fill(200, 200, 170);
  ellipse(10, 20, 50, 70);
  ellipse(380, 320, 50, 90);
  ellipse(380, 380, 100, 70);
  ellipse(360, 320, 50, 70);
  ellipse(320, 380, 50, 100);
  ellipse(300, 390, 80, 70);
  ellipse(10, 60, 50, 90);
  ellipse(10, 20, 100, 70);
  ellipse(60, 20, 50, 70);
  ellipse(90, 30, 50, 100);
  ellipse(95, 20, 80, 70);
  ellipse(10, 390, 50, 90);
  ellipse(10, 390, 100, 70);
  ellipse(60, 380, 50, 70);
  ellipse(10, 360, 50, 100);
  ellipse(95, 380, 80, 70);
  fill(255);
   stroke(0);
  textSize(13);
  text(instructions[2], width / 9, 340);
  textSize(11);
  text(instructions[13],width/30,360);
  textSize(20);
  text(instructions[14],width/3.5,25);
  textSize(13);
  text(instructions[5],width/4,40);
  text(instructions[6],width/3.6,55);
  text(instructions[7],width/7,70);
}