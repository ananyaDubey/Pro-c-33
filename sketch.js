const World=Matter.World;
const Engine=Matter.Engine;
const Bodies= Matter.Bodies;

function preload(){
  backgroundImage=loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  snow1=new Snow(200,200)
  snow2=new Snow(100,100)
  snow3=new Snow(290,300)

}

function draw() {
  background(backgroundImage); 
  Engine.update(engine) 
  snow1.display()
  snow2.display()
  snow3.display()
  drawSprites();
}