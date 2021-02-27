class Roof {
    constructor(x,y,width,height) {
     var  options = {
        restitution:0.1,
        friction:1,
        density:3
       }

       this.body = Bodies.rectangle(x,y,width,height,options);
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
    }

    display() { 
        push();
        rectMode(CENTER);
        fill("lightGrey");
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}