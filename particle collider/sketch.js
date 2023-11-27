console.log("js is linked!");
let atoms = [];
let numAtoms = 3;
function setup(){   
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    for(let i=0;i<numAtoms;i++){
atoms.push(new Atom())
    }
    rectMode(CENTER)
}

function draw(){
    background(0);
    for(let i=0;i<atoms.length;i++){
        atoms[i].display()
        atoms[i].fly();
        atoms[i].checkIfTouched();
    }
}
class Atom{
    constructor(){
        this.x=width/2;
        this.y=random(0,height);
        this.size = 40;
        this.speed = random(4,7);
        this.direction = random([-1,1])
        if(this.direction==-1){
            this.x = width +100;
        }else{
            this.x = -100;
        }
        
    }

    display(){
        push();
        translate(this.x,this.y);
        if(this.isTouched==true){
            fill("red")
        }else{
            fill(255);
        }


        rect(0,0,this.size,this.size);
        fill("red");
        circle(0,0,5);
        pop();
        
    }

fly(){
    this.x+=this.speed*this.direction}
checkIfTouched(){
let leftEdge = this.x-this.size/2
let rightEdge = this.x+this.size/2
let upperEdge = this.y-this.size/2
let lowerEdge = this.y+this.size/2
if (otherX > leftEdge && otherX < rightEdge && otherY > upperEdge && otherY< lowerEdge){
    this.isTouched = true;
}else{this.isTouched = false;}
}
}