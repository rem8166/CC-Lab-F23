console.log("js is linked!");
let xArray = [40,120,290];
let yArray = [140,200,90];

let egg1;
let egg2;

function setup(){   
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    
    egg1=new Egg(random(width),random(height),random(0.3,1));
    egg2=new Egg(random(width),random(height),random(0.3,1));
}

function draw() {
    background(120, 90, 230);

    egg1.display();
    egg2.display();
    //drawShape(width/2, height/2);
   // for(let i=0;i<xArray.length;i++){
     //   let xPos = xArray[i];
      //  let yPos = yArray [i];
      //  drawShape(xPos,yPos);
    //}
   
}

//function drawShape(x, y){
  //  push();
  //  translate(x,y);

   //     noStroke();
    //    fill(255, 200);
    //    arc(0, 0, 80, 80,  0,  PI);
    //    arc(0, 0, 80, 130, PI, 2*PI);

   // pop();
//}

class Egg{
    constructor(startX,startY,scaleFactor){
        this.x = startX;
        this.y = startY;
        this.s = scaleFactor;
    }
    display(){
        push();
        translate(this.x,this.y);
        scale(this.s);

        noStroke();
      fill(255, 200);
       arc(0, 0, 80, 80,  0,  PI);
     arc(0, 0, 80, 130, PI, 2*PI);
     pop();
    }

}