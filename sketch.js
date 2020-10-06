var helicopterImage, helicopter, package,packageImage;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageImage)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImage)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("green")

	bottom = createSprite(width/2, 650, 200, 20);
	bottom.shapeColor = "brown";

	side1 = createSprite(300, 610, 20, 100);
	side1.shapeColor = "brown";

	side2 = createSprite(500, 610, 20, 100);
	side2.shapeColor = "brown";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
  
}


function draw() {
  
  background("lightblue");
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  rectMode(CENTER);
  //package.collide(bottom);
  //package.collide(side1);
  //package.collide(side2);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on

	Matter.Body.setStatic(packageBody, false);

	
    
  }
}