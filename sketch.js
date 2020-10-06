var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, redBox1,redBox2, redBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var options={
		restitution:0
	}

	packageSprite=createSprite(width/2, 80, 10,10,options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
        redBox1= new Box(400,690,200,20);
	redBox2= new Box(500,637,20,100);
	redBox3= new Box(300,637,20,100);
}


function draw() {
  rectMode(CENTER);
  background(62,192,236);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  redBox1.display();
  redBox2.display();
  redBox3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic( packageBody , false);
  }
}
