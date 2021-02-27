const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300,500,100);
  bob2 = new Bob(400,500,100);
	bob3 = new Bob(500,500,100);
	bob4 = new Bob(600,500,100);
	bob5 = new Bob(700,500,100);

	roof = new Roof(500,100,700,50);

  chain1 = new Chain(bob1.body,{x:300,y:100});
  chain2 = new Chain(bob2.body,{x:400,y:100});
  chain3 = new Chain(bob3.body,{x:500,y:100});
  chain4 = new Chain(bob4.body,{x:600,y:100});
  chain5 = new Chain(bob5.body,{x:700,y:100});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(180);

  Engine.update(engine);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();  
  chain2.display();  
  chain3.display();  
  chain4.display();  
  chain5.display();  
}

function keyPressed() {
  if(keyCode===UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200});
  }
}