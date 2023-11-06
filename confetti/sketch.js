let confettis = [];
let numConfetti = 3;
let backgroundHue = 0


function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    for (let i = 0; i < numConfetti; i++) {
        confettis.push(new Confetti(width / 2,
            height / 2))
    }


    colorMode(HSB);
    backgroundHue = random(0, 360);

}
function draw() {
    background(backgroundHue, 10, 190);

    //confettis.push(new Confetti(width/2, height/2));

    if (mouseIsPressed == true) {
        for (let i = 0; i < numConfetti; i++) {
            confettis.push(new Confetti(mouseX, mouseY))
        }
    }

    console.log(confettis.length);

 for(let i = 0; i < confettis.length; i++){
      confettis[i].update();
      confettis[i].checkOutOfCanvas();
    confettis[i].display();
 }

    while (confettis.length > 1000) {
        let index = 0;
        let numDelete = 1;
        confettis.splice(index, numDelete);
    }


    // if (confettis.length > 20) {
    //     let index = 0;
    //     let numDelete = 2;
    //     confettis.splice(index, numDelete);
    // }
}

class Confetti {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.size = random(2, 10);
        this.speedX = random(-2, 2);
        this.speedY = random(-1, -3);
        this.hue = random(0, 360);
        
        this.onCanvas = true;
    }
    checkOutOfCanvas(){
if(this.y>height){
    this.onCanvas= false
}

    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY = this.speedY + 0.1;
        this.speedX = this.speedX * 0.99

    } display() {
        push();
        translate(this.x, this.y);
        fill(this.hue, 255, 255);
        noStroke();
        circle(0, 0, this.size);
        pop();
    }
}

//function mousePressed(){
// for (let i = 0; i < numConfetti; i++) {
//     confettis.push(new Confetti(mouseX, mouseY))
// }

