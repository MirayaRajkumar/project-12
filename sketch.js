var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = World.mouseX;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();

  drawSprites();
}

function createApples(){
  if(frameCount % 80 == 0){
    var apple = createSprite(100,25,20,20);
    apple.addAnimation("apple",appleImg);
    apple.scale = 0.05;
    apple.velocityY = 2;
    if(apple.x > 350){
      apple.visible = false;
    }
  }
}
