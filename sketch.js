var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  
  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor="grey";

  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
}


function draw() {
background("black"); 
if (hasCollide(bullet,wall)) {
  bullet.velocityX=0;
    var damage=0.5 * speed * speed/(thickness * thickness * thickness);
  
    if (damage>10) {
      wall.shapeColor=color(255,0,0);
    }
  
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
   hasCollided();
  

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
  return false;
}




