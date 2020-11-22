
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paper1, ground1


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1= new Dustbin(100,200,15,45)
	dustbin2=new Dustbin(150,200,15,45)
	dustbin3=new Dustbin(200,250,15,45)
	paper1=new Paper(100,100,15,20)
	ground1=new Ground(600,390,1200,20)

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  function keyPressed(){
	  if(keyCode===UP_ARROW){
		  Matter.Body.applyForce(paperObject.body.position,{x:85,y:85})
	  }
  }

  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground1.display();

  drawSprites();
 
}



