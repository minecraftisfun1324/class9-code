var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(100,200,30,40);
}

function draw() 
{
  background(30);
  // if I press the up arrow key then the box should move upwards
  // conditional programming
  if(keyDown("up")){
    box.y = box.y - 10;
  }
  if(keyDown("down")){
    box.y = box.y + 10;
  }
  if(keyDown("right")){
    box.x = box.x + 10;
  }
  if(keyDown("left")){
    box.x = box.x - 10;
  }
  drawSprites()
}




