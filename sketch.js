const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var engine,world; 
var particles = [];
var plinkos = [];
var rows = [];
var ground;
var rows;
var rowsHeight = 150;

function setup() {
  createCanvas(480, 800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795, 1700, 10);

  for(var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i , 75))
  }

  for(var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,125))
  }
  for(var i = 40; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,175))
  }
  for(var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,225))
  }
  for(var i = 40; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,275))
  }
  for(var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,325))
  }
  for(var i = 40; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,375))
  }
  for(var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i ,425))
  }
  for(var k = 0; k <= width; k = k + 80){
    rows.push(new Rows(k, height - rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  if(frameCount % 90 === 0){
    particle = new Particle(random(0, 800), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background(0);
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


ground.display();

  drawSprites();
}