const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,plinko;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    
  ground = new Ground(240,790,480,20);
    //plinko = new Plinko(240,40);
  //createSprite(400, 200, 50, 50);
  for(var k =0;k<=width;k=k+80){
    divisions.push(new Divisions(k,divisionHeight,10,height =divisionHeight/2 ))
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  } 
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  } 

}

function draw() {
  background(0,225,0);
  Engine.update(engine); 
  
for(var j=0;j<particles.length;j++)
{
  particles[j].display();
}
 for(var k=0;k<divisions.length;k++){
   divisions[k].display();
 } 
  

  ground.display(); 
  drawSprites();
}






