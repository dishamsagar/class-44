var bg,a1,a2,a3,a4,a5,a6,a7,a8,shooterImg,ss1Img,ss2Img,ss3Img,ss4Img,ss6Img,star1;
var shooter , obstacle;
var obstaclesGroup;
var lifes = 3;

var bulletGroup;

function preload(){
  a1 = loadImage("images/a1.png");
  a2 = loadImage("images/a2.png");
  a3 = loadImage("images/a3.png");
  a4 = loadImage("images/a4.png");
  a5 = loadImage("images/a5.png");
  a6 = loadImage("images/a6.png");
  a7 = loadImage("images/a7.png");
  a8 = loadImage("images/a8.png");
  bg = loadImage("images/bg.jpg");
  shooterImg = loadImage("images/shooter.png");

}

function setup() {
  createCanvas(1200,700);
 
 shooter = createSprite(400, 640, 50, 50);
 shooter.addImage("shooter1",shooterImg);
 shooter.scale = 0.5;

 obstaclesGroup = new Group();
 bulletGroup = new Group();
}

function draw() {
  background(bg);
  
  if (lifes === 0) {
    textSize(40);
    text("GAME OVER",500,350);
  } else {
    if (obstaclesGroup.isTouching(shooter)) {
      obstaclesGroup.destroyEach();
      lifes = lifes - 1;
    }
  
    textSize(20);
    fill("red");
    text("LIFES : "+lifes,width-100,20);
  shooter.x = mouseX;

  if (keyDown("space")) {
    spawnBullet();
    
  }

  spawnObstacles();
} 
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 120 === 0) {
    obstacle = createSprite(Math.round(random(10,1100)),0,10,10);
    obstacle.velocityY = 5;
    var rand = Math.round(random(1,8));
    console.log(rand);

    switch (rand) {
      case 1: obstacle.addImage(a1);
        break;
        case 2: obstacle.addImage(a2);
        break;
        case 3: obstacle.addImage(a3);
        break;
        case 4: obstacle.addImage(a4);
        break;
        case 5: obstacle.addImage(a5);
        break;
        case 6: obstacle.addImage(a6);
        break;
        case 7: obstacle.addImage(a7);
        break;
        case 8: obstacle.addImage(a8);
        obstacle.scale = 0.3;
        break;
    
      default:
        break;
    }
    obstaclesGroup.add(obstacle);
  }
}
function spawnBullet(){
  var bullet = createSprite(shooter.x,620,20,50);
  bullet.velocityY = -3;
  bullet.lifetime = 235;
  bulletGroup.add(bullet);
}