
let dancer1;
let dancer2;
let dancer3;
let dancer4;
let dancer5;
let dancer6;
let dancer7;
let laoPanda;
let sequence = 0;
let xBamboo = [];
let yBamboo = [];
let heightBamboo = [];
let widthBamboo = [];
let y;
let x;
let xBlob = [];
let yBlob = [];
let diaBlob = [];
let aBlob = [];
let xBlob2 = [];
let yBlob2 = [];
let diaBlob2 = [];
let aBlob2 = [];
let fireworks = [];
let numFire = 2;
let lanterns = [];
let numLanterns = 700;
let lanternX;
let lanternY;
let i;
let distanceBetweenMouseAndLantern;
let shamrocks = [];
let wine = [];
let wines = [];
let numWines = 50;
let instructions = [
  "papa, why is dancing",
  "banned?",
  "you are too stupid and",
  "insecure, dance is for",
  "cool people",
  "One day in Pandaville...",
  "I must overcome these insecurities and I WILL dance",
  "help panda get rid of his inhibitions and learn to dance",
  "our story journey starts in China, where he meets dance guru Charis",
  "clear all the red lanterns and",
  "then I shall teach you a dance move",
  "Panda's mind is too cloudy and Charis knows...",
  "click the mouse to clear the lanterns",
  "Congratulations! you have deleted panda's insecure mind!",
  "press delete to continue",
  "well, that was impressive, but you need to love dance",
  "now we teleported to Ireland",
  "find the magic shamrock and you gain a dance move",
  "try again",
  "nope",
  "booooo",
  "YOU WIN",
  "L",
  "O",
  "V",
  "E",
  "press the key that matches the letter to reveal your prize",
  "once you win press you have deleted any dislike of dance!",
  "press delete to continue",
  "you need to loosen up, you're too anxious",
  "Charis owns a vineyard in Italy, so time to party!",
  "help yourself, click on the bottles to drink, then press delete to party!",
  "YOU DID IT!!!",
  "thank you for teaching panda how to dance!",
];

function setup(){
  let cnv = createCanvas(800, 500);
  cnv.parent("canvasWrapper")
  dancer1 = new roryDancer1(width / 2, height / 2);
  dancer3 = new roryDancer3(width / 2, height / 2);
  dancer5 = new roryDancer5(width / 2, height / 2);
  dancer6 = new roryDancer6(width / 2, height / 2);
  dancer7 = new roryDancer7(width / 2, height / 2);
  laoPanda = new laoPanda1(width / 2, height / 2);
  bambooX = [random(0, windowWidth)];

  for (let i = 0; i < numFire; i++) {
    fireworks.push(new Firework(width / 2, height / 2));
  }
  for (let i = 0; i < numLanterns; i++) {
    lanterns.push(new Lanterns(random(width), random(height)));
  }
  for (let i = 0; i < numWines; i++) {
    wines.push(new Wines(random(width), random(height)));
  }
}

function draw() {
  if (sequence == 0) {
    background(0, 150, 0);
    drawBackground1();
    for (let i = 0; i < 100; i++) {
      rect(bambooX[i], windowHeight, 30, 0);
    }
    fill(150, 75, 0);
    rect(0, 460, windowWidth, 100);
    dancer1.update();
    dancer1.display();
    laoPanda.update();
    laoPanda.display();
    fill(255);
    strokeWeight(3);
    stroke(0);
    ellipse(300, 300, 150, 70);
    ellipse(440, 350, 150, 70);
    fill(0);
    textSize(12);
    noStroke();
    text(instructions[0], 240, 300);
    text(instructions[1], 275, 315);
    text(instructions[2], 380, 340);
    text(instructions[3], 385, 353);
    text(instructions[4], 410, 367);
    textSize(50);
    fill(255);
    stroke(0);
    strokeWeight(5);
    text(instructions[5], 100, 50);
  }
  if (sequence == 1) {
    background(0);
    drawBackground2();

    dancer1.update();
    dancer1.display();
    fill(0);
    textSize(30);
    text(instructions[6], 25, 200);
  }
  if (sequence == 2) {
    background(0);

    for (let i = 0; i < numFire; i++) {
      fireworks.push(new Firework(20, height / 2 - 20));
      fireworks.push(new Firework(180, height / 2 - 20));
      fireworks.push(new Firework(500, height / 2 - 20));
      fireworks.push(new Firework(660, height / 2 - 20));
      fireworks.push(new Firework(800, height / 2 - 20));
      fireworks.push(new Firework(300, height / 2 - 20));
    }

    console.log(fireworks.length);

    for (let i = 0; i < fireworks.length; i++) {
      fireworks[i].update();
      fireworks[i].checkOutOfCanvas();
      fireworks[i].display();
    }

    while (fireworks.length > 1000) {
      let index = 0;
      let numDelete = 1;
      fireworks.splice(index, numDelete);
    }
    fill(0);
    stroke(255);
    strokeWeight(5);
    text(instructions[7], 25, height / 2);
  }
  if (sequence == 3) {
    background(25, 25, 150);
    fill(150, 75, 0);
    rect(0, 460, windowWidth, 100);
    textSize(30);
    fill(random(0, 255), random(0, 255), random(0, 255));
    stroke(255);
    text(instructions[13], 10, height / 2 - 10);
    text(instructions[14], 250, height / 2 + 10);
    for (let i = 0; i < lanterns.length; i++) {
      lanterns[i].update();
      lanterns[i].display();
    }
    dancer1.update();
    dancer1.display();
    drawPuppy(450, 400);
    textSize(20);
    fill(255);
    strokeWeight(0);
    text(instructions[8], 85, 35);
    text(instructions[11], 100, 60);
    text(instructions[12], 120, 90);
    ellipse(330, 300, 200, 70);
    textSize(12);
    fill(0);
    text(instructions[9], 250, 290);
    text(instructions[10], 235, 307);
  }
  if (sequence == 4) {
    background(135, 206, 235);
    fill(0, 128, 0);
    rect(0, 460, windowWidth, 100);
    fill(255);
    stroke(0);
    text(instructions[26], 20, 350);
    text(instructions[27], 20, 370);
    text(instructions[28], 20, 390);
    stroke(0);
    strokeWeight(3);
    fill(255);
    textSize(20);
    text(instructions[15], 120, 20);
    text(instructions[16], 250, 50);
    text(instructions[17], 120, 80);
    textSize(15);
    text(instructions[26], 170, 100);

    dancer3.update();
    dancer3.display();
    drawPuppy(width / 1.5, 400);

    textSize(15);

    text(instructions[22], 100, 200);
    text(instructions[23], 300, 200);
    text(instructions[24], 500, 200);
    text(instructions[25], 700, 200);
    shamrocks[0] = drawShamrock1(100, 250);
    shamrocks[1] = drawShamrock2(500, 250);
    shamrocks[2] = drawShamrock3(300, 250);
    shamrocks[3] = drawShamrock4(700, 250);
    noStroke();
    if (keyIsPressed == true && key == "l") {
      text(instructions[18], 77, 250);
    }
    if (keyIsPressed == true && key == "o") {
      text(instructions[19], 300, 250);
    }
    if (keyIsPressed == true && key == "e") {
      text(instructions[20], 687, 250);
    }

    if (keyIsPressed == true && key == "v") {
      text(instructions[21], 470, 250);
    }
  }

  if (sequence == 5) {
    background(135, 246, 285);
    noStroke();
    fill(154, 205, 50);
    ellipse(200, 500, 1500, 400);
    textSize(20);
    fill(255);
    stroke(0);
    text(instructions[29], 230, 50);
    text(instructions[30], 210, 70);
    text(instructions[31], 100, 470);
    for (let i = 0; i < wines.length; i++) {
      wines[i].update();
      wines[i].display();
    }
    dancer5.update();
    dancer5.display();
  }
  if (sequence == 6) {
    background(20);
    drawBackground3();
    textSize(30);
    fill(255);
    stroke(0);
    text(instructions[32], 100, 200);
    dancer7.update();
    dancer7.display();
  }
  if (sequence == 7) {
    background(255, 192, 203);

    textSize(30);
    fill(255);
    stroke(0);
    text(instructions[33], 100, 200);
    dancer7.update();
    dancer7.display();
  }
}
class roryDancer1 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {}
  display() {
    push();
    translate(250, 430);
    noStroke();
    push();
    translate(0, 0);
    fill(0);

    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);

    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);

    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);

    //right leg
    push();
    fill(0);
    translate(0, 0);

    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(0);
    translate(0, 0);

    ellipse(+15, +40, 15, 30);
    pop();
    fill(0);
    circle(-20, -40, 12);
    circle(+20, -40, 12);
    fill(255);
    ellipse(0, -30, 40, 30);
    //belly
    push();
    fill(255);
    translate(0, 0);

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
  }
}
class roryDancer3 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = 420;

    this.rightleg = 0;
    this.leftleg = 0;
  }
  update() {
    this.rightleg = map(sin(frameCount * 0.07) * 0.5, 0.5, -0.5, 0.2, -0.2);
    this.leftleg = map(sin(frameCount * 0.07) * 0.2, 0.5, -0.2, -0.5, 0.2);
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    push();
    translate(0, 0);
    fill(0);
    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);
    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);
    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);

    //right leg
    push();
    fill(0);
    translate(0, 0);
    rotate(this.rightleg);
    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftleg);
    ellipse(+15, +40, 15, 30);
    pop();
    fill(0);
    circle(-20, -40, 12);
    circle(+20, -40, 12);
    fill(255);
    ellipse(0, -30, 40, 30);
    //belly
    push();
    fill(255);
    translate(0, 0);
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
  }
}
class roryDancer5 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.rightleg = 0;
    this.leftleg = 0;
    this.rightarm = 0;
    this.leftarm = 0;
  }
  update() {
    this.rightleg = map(sin(frameCount * 0.07) * 0.5, 0.5, -0.5, 0.2, -0.2);
    this.leftleg = map(sin(frameCount * 0.07) * 0.2, 0.5, -0.2, -0.5, 0.2);
    this.rightarm = map(
      2 * sin(frameCount * 0.05) * 0.2,
      0.2,
      -0.25,
      0.2,
      -0.25
    );
    this.leftarm = map(
      -2 * sin(frameCount * 0.05) * 0.2,
      0.2,
      -0.25,
      -0.25,
      0.2
    );
  }
  display() {
    push();
    translate(mouseX, mouseY);
    noStroke();
    push();
    translate(0, 0);
    fill(0);
    rotate(this.rightarm);
    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftarm);
    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);

    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);

    //right leg
    push();
    fill(0);
    translate(0, 0);
    rotate(this.rightleg);
    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftleg);
    ellipse(+15, +40, 15, 30);
    pop();
    fill(0);
    circle(-20, -40, 12);
    circle(+20, -40, 12);
    fill(255);
    ellipse(0, -30, 40, 30);
    //belly
    push();
    fill(255);
    translate(0, 0);

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
  }
}
class roryDancer6 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.belly = 0;
    this.rightleg = 0;
    this.leftleg = 0;
    this.rightarm = 0;
    this.leftarm = 0;
  }
  update() {
    this.belly = map(sin(frameCount * 0.1 + 7) * 4, 1, -1, 5, -6);
    this.rightleg = map(sin(frameCount * 0.07) * 0.5, 0.5, -0.5, 0.2, -0.2);
    this.leftleg = map(sin(frameCount * 0.07) * 0.2, 0.5, -0.2, -0.5, 0.2);
    this.rightarm = map(
      2 * sin(frameCount * 0.05) * 0.2,
      0.2,
      -0.25,
      0.2,
      -0.25
    );
    this.leftarm = map(
      -2 * sin(frameCount * 0.05) * 0.2,
      0.2,
      -0.25,
      -0.25,
      0.2
    );
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    push();
    translate(0, 0);
    fill(0);
    rotate(this.rightarm);
    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftarm);
    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);

    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);

    //right leg
    push();
    fill(0);
    translate(0, 0);
    rotate(this.rightleg);
    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftleg);
    ellipse(+15, +40, 15, 30);
    pop();
    fill(0);
    circle(-20, -40, 12);
    circle(+20, -40, 12);
    fill(255);
    ellipse(0, -30, 40, 30);
    //belly
    push();
    fill(255);
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
  }
}
class roryDancer7 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.belly = 0;
    this.rightleg = 0;
    this.leftleg = 0;
    this.rightarm = 0;
    this.leftarm = 0;
    this.wholebody = 0;
  }
  update() {
    this.belly = map(sin(frameCount * 0.1 + 7) * 4, 1, -1, 5, -6);
    this.rightleg = map(sin(frameCount * 0.07) * 0.5, 0.5, -0.5, 0.2, -0.2);
    this.leftleg = map(sin(frameCount * 0.07) * 0.2, 0.5, -0.2, -0.5, 0.2);
    this.rightarm = map(
      2 * sin(frameCount * 0.05) * 0.2,
      0.2,
      -0.25,
      0.2,
      -0.25
    );
    this.leftarm = map(
      -2 * sin(frameCount * 0.05) * 0.2,
      0.2,
      -0.25,
      -0.25,
      0.2
    );
    this.wholebody = map(
      cos(frameCount * 0.03) * 0.5,
      0.02,
      -0.025,
      -0.025,
      0.02
    );
  }
  display() {
    push();
    translate(this.x, this.y + 30);
    noStroke();
    push();
    translate(0, 0);
    fill(0);
    rotate(this.rightarm);
    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftarm);
    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.wholebody);
    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);

    //right leg
    push();
    fill(0);
    translate(0, 0);
    rotate(this.rightleg);
    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(0);
    translate(0, 0);
    rotate(this.leftleg);
    ellipse(+15, +40, 15, 30);
    pop();
    fill(0);
    circle(-20, -40, 12);
    circle(+20, -40, 12);
    fill(255);
    ellipse(0, -30, 40, 30);
    //belly
    push();
    fill(255);
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
  }
}
class laoPanda1 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {}
  display() {
    push();
    translate(530, 430);
    noStroke();
    push();
    translate(0, 0);
    fill(100);

    ellipse(-25, -10, 35, 15);
    pop();
    push();
    fill(100);
    translate(0, 0);

    ellipse(+25, -10, 35, 15);
    pop();
    push();
    fill(100);
    translate(0, 0);

    fill(255);
    ellipse(0, +15, 40, 50);
    ellipse(0, 0, 50, 60);

    //right leg
    push();
    fill(100);
    translate(0, 0);

    ellipse(-15, +40, 15, 30);
    pop();
    push();
    fill(100);
    translate(0, 0);

    ellipse(+15, +40, 15, 30);
    pop();
    fill(100);
    circle(-20, -40, 12);
    circle(+20, -40, 12);
    fill(255);
    ellipse(0, -30, 40, 30);
    //belly
    push();
    fill(255);
    translate(0, 0);

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
  }
}
class Firework {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);
    this.hue = random(0, 360);

    this.onCanvas = true;
  }
  checkOutOfCanvas() {
    if (this.y > height) {
      this.onCanvas = false;
    }
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY = this.speedY + 0.1;
    this.speedX = this.speedX * 0.99;
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(this.hue, 255, 255);
    noStroke();
    circle(0, 0, this.size);
    pop();
  }
}
function keyPressed() {
  if (keyCode == 8) {
    sequence++;
    console.log(sequence);
  }
  if (sequence >= 8) {
    sequence = 0;
  }
}
function drawBackground1() {
  fill(0, 200, 0);
  for (let i = 0; i < 20; i++) {
    xBamboo.push(width);
    yBamboo.push(0);
    widthBamboo.push(20);
    heightBamboo.push(windowHeight);
  }
  for (let i = 0; i < 200; i++) {
    xBamboo[i] = random(0, windowWidth);
    yBamboo[i] = random(1, 3);
    rect(xBamboo[i], yBamboo[i], widthBamboo[i], heightBamboo[i]);
    x = width;
    noStroke();
    fill(0, random(100, 255), 0);
    rect(x, y, 50, windowHeight);
    y = 0;
  }
}
function drawBackground2() {
  background(0, 0, 139);
  fill(100, 100, 250, 100);
  for (let i = 0; i < 200; i++) {
    xBlob.push(random(0, width));
    yBlob.push(random(0, height));
    diaBlob.push(random(50, 150));
    aBlob.push(random(0.05));
  }
  for (let i = 0; i < 200; i++) {
    xBlob[i] += 10 * sin(y * aBlob[i]);
    yBlob[i] -= random(1, 3);
    noStroke();
    circle(xBlob[i], yBlob[i], diaBlob[i]);
    if (yBlob[i] < 0) {
      yBlob[i] = 600;
    }
    if (xBlob[i] > width) {
      xBlob[i] = random(0, width);
    }
  }

  x = width / 2 + 100 * sin(y * 0.05);
  fill(255, 255, 255, 100);
  circle(x, y, 50);
  y = y - 3;
  if (y < 0) {
    y = 600;
  }

  for (let i = 0; i < 300; i++) {
    xBlob2.push(random(0, width));
    yBlob2.push(random(0, 325));
    diaBlob2.push(random(50, 150));
    aBlob2.push(random(0.05));
  }
  for (let i = 0; i < 200; i++) {
    xBlob2[i] -= 10 * sin(y * aBlob2[i] * 8);
    yBlob2[i] += random(1, 3);
    circle(xBlob2[i], yBlob2[i], diaBlob2[i]);
    if (yBlob2[i] > height) {
      yBlob2[i] = 0;
    }
    if (xBlob2[i] > width) {
      xBlob2[i] = random(0, width);
    }
  }

  x = width / 2 + 100 * sin(y * 0.15);
  fill(255, 255, 255, 100);
  circle(x, y, 50);
  y = y - 3;
  if (y < 600) {
    y = 0;
  }
}
class Lanterns {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.offsetX = 0;
    this.speed = random(-1, 1);
    this.angleForSineRadians = 0;
    this.r = 40;
  }
  update() {
    this.offsetX = map(sin(this.angleForSineRadians), -1, 1, -20, 20);

    this.angleForSineRadians += 0.1;
  }

  display() {
    push();
    translate(this.x + this.offsetX, this.y);
    noStroke();
    fill(255, 0, 0);
    ellipse(0, 0, 60,70);
    fill(255, 255, 0);
    circle(0,0,30);
    fill(0);
    text("福",-15,+10);
    pop();
  }
  checkIfClicked() {
    let distanceBetweenMouseAndLantern = dist(mouseX, mouseY, this.x, this.y);
    if (distanceBetweenMouseAndLantern < this.r);
    lanterns.splice(i, 1);
  }
}
function mousePressed() {
  for (let i = 0; i < lanterns.length; i++) {
    lanterns[i].checkIfClicked();
  }
  for (let i = 0; i < wines.length; i++) {
    wines[i].checkIfClicked();
  }
}
function drawPuppy(xPos, yPos) {
  x = xPos;
  y = yPos;
  push();
  translate(x, y);
  noStroke();
  colorMode(RGB);
  fill(144, 104, 77);
  circle(0, 0, 75);
  circle(-33, -30, 20);
  circle(+33, -30, 20);
  circle(0, +40, 79);
  circle(-40, +30, 25);
  circle(+40, +30, 25);
  circle(+30, +70, 25);
  circle(-30, +70, 25);
  fill(255, 192, 203);
  ellipse(0, -30, 56, 20);
  circle(0, -40, 10);
  fill(255);
  circle(-15, -10, 10);
  circle(+15, -10, 10);
  fill(0);
  circle(-14, -9.5, 5);
  circle(+16, -9.5, 5);
  fill(255, 0, 0);
  ellipse(0, +15, 20, 9);

  pop();
}
function drawShamrock1(xPos, yPos) {
  x = xPos;
  y = yPos;
  push();
  translate(x, y);
  fill(0, 158, 96);
  noStroke();
  circle(-17, -15, 45);
  circle(-17, +15, 45);
  circle(+17, +15, 45);
  circle(+17, -15, 45);
  rect(-10, -10, 20, 60);
  pop();
}
function drawShamrock2(xPos, yPos) {
  x = xPos;
  y = yPos;
  push();
  translate(x, y);
  fill(0, 158, 96);
  noStroke();
  circle(-17, -15, 45);
  circle(-17, +15, 45);
  circle(+17, +15, 45);
  circle(+17, -15, 45);
  rect(-10, -10, 20, 60);
  pop();
}
function drawShamrock3(xPos, yPos) {
  x = xPos;
  y = yPos;
  push();
  translate(x, y);
  fill(0, 158, 96);
  noStroke();
  circle(-17, -15, 45);
  circle(-17, +15, 45);
  circle(+17, +15, 45);
  circle(+17, -15, 45);
  rect(-10, -10, 20, 60);
  pop();
}
function drawShamrock4(xPos, yPos) {
  x = xPos;
  y = yPos;
  push();
  translate(x, y);
  fill(0, 158, 96);
  noStroke();
  circle(-17, -15, 45);
  circle(-17, +15, 45);
  circle(+17, +15, 45);
  circle(+17, -15, 45);
  rect(-10, -10, 20, 60);
  pop();
}
function drawWine(xPos, yPos) {
  x = xPos;
  y = yPos;
  push();
  translate(x, y);
  fill(200, 180, 55);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, 30, 60, 10);
  rect(0, -40, 10, 30);
  fill(10);
  rect(0, -55, 10, 10);
  pop();
}
class Wines {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.offsetX = 0;
    this.speed = random(-1, 1);
    this.angleForSineRadians = 0;
  }
  update() {
    this.offsetX = x + random(-1, 1);
  }

  display() {
    push();
    translate(this.x + this.offsetX, this.y);
    drawWine(0, 0);
    pop();
  }
  checkIfClicked() {
    let distanceBetweenMouseAndWine = dist(mouseX, mouseY, this.x, this.y);
    if (distanceBetweenMouseAndWine < this.r);
    wines.splice(i, 1);
  }
}
function drawBackground3() {
  fill(0, 200, 0);
  for (let i = 0; i < 20; i++) {
    xBamboo.push(width);
    yBamboo.push(0);
    widthBamboo.push(20);
    heightBamboo.push(windowHeight);
  }
  for (let i = 0; i < 200; i++) {
    xBamboo[i] = random(0, windowWidth);
    yBamboo[i] = random(1, 3);
    rect(xBamboo[i], yBamboo[i], widthBamboo[i], heightBamboo[i]);
    x = width;
    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(x, y, 50, windowHeight);
    y = 0;
  }
}