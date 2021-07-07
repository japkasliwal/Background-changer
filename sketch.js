













function setup() {
  createCanvas(400,400);
 
}

function draw() 
{







if (keyIsDown(RIGHT_ARROW)){
background("red")

}

if (keyIsDown(LEFT_ARROW)){
  background("lightblue")
  
  }

if (keyIsDown(UP_ARROW)){
  background("lime")
}
if (keyIsDown(DOWN_ARROW)){
  background("yellow")
}









  textSize(15)
fill("black")
  text("Use the arrow keys to change the background",50,200)








}