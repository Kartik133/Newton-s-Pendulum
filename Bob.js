class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution:1.25,
          friction:1.0,
          density:0.8
      }

      this.body = Bodies.circle(x,y,(radius-20)/2,options);
      this.radius = radius;
      this.x = x;
      this.y = y;
      World.add(world,this.body);
    }

    display() {   
        fill("pink");
        circle(this.body.position.x,this.body.position.y,this.radius);
        //ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}