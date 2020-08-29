
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.contrain;

var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter = Ball.diameter;

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100);

	bobObject1 = new Ball(100,300);
	bobObject2 = new Ball(150,300);
	bobObject3 = new Ball(200,300);
	bobObject4 = new Ball(250,300);
	bobObject5 = new Ball(300,300);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



