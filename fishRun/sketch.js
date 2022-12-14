var bg, bg_image
var fish, fish_image
var fish1, fish1_image
var fish2, fish2_image
var fish3, fish3_image


function preload(){
  bg_image = loadImage("background.jpeg");
  fish_image = loadImage("fishMain.png");
  fish1_image = loadImage("fish1.png");
  fish2_image = loadImage("fish2.png");
  fish3_image = loadImage("fish3.png");

}
function setup(){
createCanvas(800,500);
bg = createSprite(400,250,800,500)
bg.addImage(bg_image);
bg.velocityX = -2;
bg.scale = 1.5;

fish = createSprite(100,250,100,100)
fish.addImage(fish_image);
fish.scale = 0.5;

fish1 = createSprite(550,250,100,100)
fish1.addImage(fish1_image);
fish1.scale = 0.25;

fish2 = createSprite(600,125,100,100)
fish2.addImage(fish2_image);
fish2.scale = 0.4;

fish3 = createSprite(600,375,100,100)
fish3.addImage(fish3_image);
fish3.scale = 0.4;
}

function draw(){
background("skyblue")
if(bg.x<=300){
  bg.x = width/2
}
if(keyIsDown(UP_ARROW)){
  fish.position.y -= 5
}
if(keyIsDown(DOWN_ARROW)){
  fish.position.y += 5
}
drawSprites();
}