var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,700,80,30);
  movingRect.shapeColor = "green";

  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;

  
}

function draw() {
  background(255,255,255);  
 
 //movingRect.x = mouseX;
 //movingRect.y = mouseY;

 bounceOff (fixedRect,movingRect);

  drawSprites();
}

function bounceOff(object1,object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2){
      object2.velocityX = object2.velocityX*-1;
      object1.velocityX = object1.velocityX*-1;
    }

    if (object1.y - object2.y < object1.height/2 + object2.height/2 && 
      object2.y - object1.y < object1.height/2 + object2.height/2) {
    object2.velocityY = object2.velocityY*-1;
    object1.velocityY = object1.velocityY*-1;
    }

  }


