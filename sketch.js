
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1000,230,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1120,50,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,260,40);

	treeObject=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stoneObject=new Stone(235,420,30);
	launcherObject=new Launcher(stoneObject.body,{x:235,y:420});
    var render= Render.create({
	  element:body,
	  engine:engine,
	  options:{
		  width:1300,height:600,wireFrames:false
	  }
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcherObject.fly();
	launcherObject.attach(stoneObject.body);
}


