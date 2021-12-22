var z; 

function setup() {
  createCanvas(400,400);
 z= createSprite(200,200,50,50);
  z.shapeColor="blue";

}

function draw() 
{
  background(30);
if(keyDown("left")){
 z.x=z.x-5;
}
if(keyDown("up")){
  z.y=z.y-5 
 }
 if(keyDown("right")){
  z.x=z.x+5 
 }
 if(keyDown("down")){
  z.y=z.y+5 
 }
  drawSprites();
 

}




