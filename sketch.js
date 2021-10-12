var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
 invisibleGround = createSprite(200,190,400,10) 
 invisibleGround.visible=false
}


function draw() {
background("white");

//jump when the space button is pressed
if (keyDown("space") && trex.y>160) {
  trex.velocityY = -10;
}
console.log(trex.y)
trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
spawnclouds()
spawnObstacles()
drawSprites();
}
function spawnclouds(){
  if(frameCount % 60===0){
    var cloud= createSprite(590,50,30,20)
    cloud.velocityX=-7
    var rand=Math.round(random(20,100))
    cloud.y=rand
    cloud.addImage(cloudimage)
    cloud.scale=0.1
    trex.depth=cloud.depth
    trex.depth=trex.depth+1
    cloud.lifetime=200
  }
}

  function spawnObstacles(){
if(frameCount % 60===0){
  var obstacle=createSprite(600,180,10,30)
  obstacle.velocityX=-6
  var rand=Math.round(random(1,6))

  switch(rand){
    case 1 : obstacle.addImage(obstacle1)
    break
    case 2 : obstacle.addImage(obstacle2)
    break
    case 3 : obstacle.addImage(obstacle3)
    break
    case 4 : obstacle.addImage(obstacle4)
    break
    case 5 : obstacle.addImage(obstacle5)
    break
    case 6 : obstacle.addImage(obstacle6)
    break
  }
  obstacle.scale=0.08
  obstacle.lifetime=300
}
  }
  
