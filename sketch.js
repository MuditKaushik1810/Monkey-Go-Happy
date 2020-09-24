var score = 0 ;
var bananaGroup,bananaImage;
var monkey,monkey_running;
var ObstaclesImage,ObstaclesGroup;
var backgrImage,backgr;
var groundImage,ground;
var GameOver;

function preload(){
bananaImage = loadImage("banana.png");
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
ObstaclesImage = loadImage("stone.png");
backgrImage = loadImage("jungle.jpg");                 
}


function setup() {
  createCanvas(800, 400);
   
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backgrImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  
  monkey= createSprite(100,340,20,50);
  monkey.addAnimation("Running",monkey_running);
  monkey.scale = 0.1;
  
  
   ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
   
  bananaGroup = new Group();
  ObstaclesGroup = new Group();
  
  score = 0;
  
}









function draw() {
  background(225);
  
  if (ground.x<0){
  ground.x = ground.width/2;
  
  }
  
  if (backgr.x<100){
  backgr.x = backgr.width/2;    
      
      }
  
  if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();  
   score = score +2;  
     }
  
   switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
  if (keyDown("space")){
  monkey.velocityY = -12;
  
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  spawnBanana();
  spawnObstacles();
  
  if (ObstaclesGroup.isTouching(monkey)){
  monkey.scale = 0.8;  
  }
   
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  
  
}

function spawnBanana (){
if (frameCount%80 === 0){
var banana = createSprite (600,250,40,10);
banana.y = random(120,200);
banana.addImage(bananaImage);
banana.scale = 0.05;
banana.velocityX = -5;
 banana.lifetime = 300;
   monkey.depth = banana.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(ObstaclesImage);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}


  
