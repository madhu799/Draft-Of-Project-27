var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground, rope1,rope2,rope3,rope4,rope5;
var bobDiameter=130

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new roof(600,100,2000,20)
	bobObject1 = new Bob(90,500,130,30)
	bobObject2 = new Bob(220,500,130,30)
	bobObject3 = new Bob(350,500,130,30)
	bobObject4 = new Bob(480,500,130,30)
	bobObject5 = new Bob(610,500,130,30)
	rope1= new Rope(bobObject1.body, ground.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display()
  ground.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  drawSprites();
 
}



