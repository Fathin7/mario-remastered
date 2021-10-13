var boy,boyRunning;




function preload(){
boyRunning = loadAnimation("images/png/Run__000.png", "images/png/Run__001.png" , "images/png/Run__002.png"
 , "images/png/Run__003.png" , "images/png/Run__004.png", "images/png/Run__005.png" , "images/png/Run__006.png" , "images/png/Run__007.png" 
 , "images/png/Run__008.png" , "images/png/Run__009.png");

bgimage = loadImage("images/BG/BG.png");

}


function setup(){
createCanvas(1500,900);
bg = createSprite(950,450);
bg.addImage(bgimage);
bg.scale = 1.4;

boy = createSprite(100,500,10,10);
boy.addAnimation("running",boyRunning)
boy.scale = 0.5;
}

function draw(){
background("gray");

drawSprites();
}