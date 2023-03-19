var space, spaceimg;
var jet, jetimg;
var fuel, fuelimg;
var ast, astimg;

function preload(){
  spaceimg = loadImage("space.jpg");
  jetimg = loadImage("jet.png");
  fuelimg = loadImage("fuel.webp");
  astimg = loadImage("asteroid.jpeg");
}




function setup() {
  createCanvas(1080, 800);
  space = createSprite(540,400);
  space.addImage("space",spaceimg)

  jet = createSprite(100,266)
  jet.addImage("jet",jetimg)
  jet.scale = 0.1

  fuel = createSprite(200,200)
  fuel.addImage("fuel",fuelimg)
  fuel.scale = 0.2

  ast = createSprite(350,350)
  ast.addImage("ast",astimg)
  ast.scale = 0.4
  
 
}

function draw() {
  background(0);






  
  drawSprites()
  
  
}





