var spiderman;
var sandman;
var GreenGob;
var RainbowBackground;
var invisibleground;
var edges;
var ground, groundImg;
var frameCount;


function preload(){

    RainbowBackground = loadImage('RainbowBackground.png');
    spiderman = loadImage('Spiderman.png');
    sandman = loadImage("Sandman.png");
    GreenGob = loadImage('GreenGoblin.png');
    groundImg = loadImage('ground.png');

}
function setUp(){
    
    createCanvas(600,200);
    spiderman = createSprite(50,160,20,50);

    ground = createSprite(200,180,400,20);
    ground.addImage("ground", groundImg);
    ground.x = ground.width/2;
    ground.velocityX = -4;


    invisibleground = createSprite(200,190,400,10);
    invisibleground.visible = false;


    edges = createEdgeSprites();

    spiderman.scale = 0.5;
    spiderman.x = 50;
    spiderman.y = 13;



    var rand = Math.round(random(1,100));
    console.log(rand);
    
}


function draw(){

background();

console.log(spiderman.y);

if(ground.x<0){
    ground.x = ground.width/2;
}
if(keyDown("space") && spiderman.y >= 150){
    spiderman.velocityY = -12;
}

spiderman.velocityY = spiderman.velocityY + 1;
ground.velocityY = -5;

//spiderman.collide(invisibleground);

drawSprites();
    
}