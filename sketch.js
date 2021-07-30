var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
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

  if(keyIsPressed(RIGHT_ARROW)){
    rabbit.x = rabbit.x + 2;
  }
  if(keyIsPressed(LEFT_ARROW)){
    rabbit.x = rabbit.x + -2;
  }

  createApples();

  createLeaves();

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

function createLeaves(){
  if(frameCount % 100 == 0){
    var leaves = createSprite(250,30,20,20);
    leaves.addAnimation("leaves",leavesImg);
    leaves.scale = 0.05;
    leaves.velocityY = 1.5;

  }
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
