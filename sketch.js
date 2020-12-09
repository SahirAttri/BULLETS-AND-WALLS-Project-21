var bullet, wall, speed, weight, thickness, damage

function setup() {

  speed = random(223, 321) 
  weight = random(30,52)  
  thickness = random(22,83)  
  
  createCanvas(1600,400);
  wall = createSprite(1350,200,thickness,height/2)
  wall.shapeColor=color(60,60,60)
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor=color("white")  
  bullet.velocityX = speed      
}

function draw() {
  background(225);  
  drawSprites();

if (bullet.isTouching(wall)) {
  damage = speed*0.5*weight*speed/thickness*thickness*thickness
}

if (damage>10) {
bullet.velocityX = 0
bullet.shapeColor=color("lightGreen")  
}

if (damage<10) {
  bullet.velocityX = 0
  bullet.shapeColor=color("red")  
  }

} 