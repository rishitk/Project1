var player1,player2,player3,score,villain1,villain2,villain3,wall,rocket,trap,gameState;

localStorage["HighestScore"] = 0;

function preload()
{

}

function setup() 
{
  createCanvas(600, 800);

  gameState = 0;
  player1 = createSprite(300,700);
  villain1 = createSprite(300,100);

  



  
  score = 0;
}

function draw() 
{
  if(keyDown("space"))
  {

  gameState = 1
             
  if(keyDown("up"))
  {
    player1.y = player1.y - 5;
  }
  
  if(keyDown("down"))
  {
    player1.y = player1.y + 5;
  }

  if(keyDown("right"))
  {
    player1.x = player1.x + 5
  }

  if(keyDown("left"))
  {
    player1.x = player1.x - 5
  }


  else if (gameState === 2) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    wallsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    wallsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }

  if(player1.isTouching(wall))
  {
    player1.destroy
    gameState = 4
  }

  if(player1.isTouching(rocket))
  {
    player1.destroy
    gameState = 4
  }
  
  if(pla)
}
  drawSprites();
}
     
function spawnwalls() {
  
  if (frameCount % 60 === 0) {
    var wall = createSprite(400,0,40,10);
    wall.x = Math.round(random(50,550));
    //wall.addImage(wallImage);
    //wall.scale = 0.5;
    wall.velocityY = +5;
    
  
    wall.lifetime = 120;
    
   
    wall.depth = player1.depth;

    
   
    //wallsGroup.add(wall);
  }
  
}

function spawnRocket() {
  
  if (frameCount % 60 === 0) {
    var rocket = createSprite(400,0,40,10);
    rocket.x = Math.round(random(100,500));
    //wall.addImage(wallImage);
    //wall.scale = 0.5;
    rocket.velocityY = +15;
    
  
    rocket.lifetime = 120;
    
   
    rocket.depth = player1.depth;

    
   
    //wallsGroup.add(wall);
  }
  
}


function reset(){
  gameState = 1;
  gameOver.visible = false;
  restart.visible = false;
  
  rocketGroup.destroyEach();
  wallsGroup.destroyEach();
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}