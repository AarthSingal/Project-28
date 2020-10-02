
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6;
var sling;
var treeImage;

function preload(){
	boyImage = loadImage("Sprites/boy.png");
	treeImage = loadImage("Sprites/tree.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//tree = new Tree(1000,450,300,400);

	ground = new Ground(650,650,1300,20);

	stone = new Stone(150,600,50);

	mango1 = new Mango(1000,375,50);
	mango2 = new Mango(920,390,60);
	mango3 = new Mango(1050,330,55);
	mango4 = new Mango(1060,410,45);
	mango5 = new Mango(975,330,40);
	mango6 = new Mango(1150,390,63);

	sling = new Rope(stone.stone,140,500);
	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(255);
  
  //tree.display();
  image(treeImage,1000,450,300,400);
  image(boyImage,200,570,200,300);

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  sling.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.stone,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}

function detectcollision(Astone,Amango){
	var mangoBodyPosition = Amango.mango.position;
	var stoneBodyPosition = Astone.stone.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance <= Astone.radius+Amango.radius){
		Matter.Body.setStatic(Amango.mango,false);
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.stone,{x:600,y:50});
		sling.attach(stone.stone);
	}
}

