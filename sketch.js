const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var divisionHeight = 300;

function preload(){
  groundimg = loadImage("iceback.jpg");
}
function setup() { 
  createCanvas(480,800);
  
  back = createSprite(240, 798, 480, 30);
  back.addImage(groundimg);
  back.scale = 0.3;

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  
  
}

function draw() {
  Engine.update(engine);
  background("Light blue" );
  textSize(35)
  text("Score : "+score,20,40);
fill ("white");
textSize(35)
text("500",5,550);
text("500",80,550);
text("500",160,550);
text("500",240,550);
text("100",320,550);
text("100",400,550);
text("100",480,550);
text("200",560,550);
text("200",640,550);
text("200",720,550);

Engine.update(engine);
ground.display();

if (gameState == "end"){
  textSize(100);
  text("GameOver",150,250)

}

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}

