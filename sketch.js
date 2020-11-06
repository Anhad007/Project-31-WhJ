const  Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground,particle,divisions,plinkos;



var divisionHeight=300;

var particles = [];
var divisions = [];
var plinkos = [];






function setup() {

  engine = Engine.create();
  world = engine.world;


  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  

  divisions = new Divisions(700,300,5,400)
  
  ground = new Ground(500,390,1000,20);
  particle = new Particle(100,200,20,20);
  plinkos = new Plinkos (450,200,10,10);







   }
  

  

  
  


function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  divisions.display();
  plinkos.display();
  particle.display();
 
 
for (var k = 0; k < divisions.length;k++){
  divisions[k].display();
}


if(framCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}


for(var j = 40; j <= width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j<=width-10; j=j+50) 
{
  plinkos.push(new Plinko(j,175));
}
  
 
  drawSprites();



}



  