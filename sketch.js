let rightPupilX = 425

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)

}

function draw() {
  
  
  if(mouseX > 400 && mouseY > 300){
    background(204, 29, 108);
    rightPupilX = 430
  }else{
    background(108, 29, 204);
    rightPupilX = 425
  }
  
  line(200,100, 550, 400)
  //eyeballs
  fill(255)
  stroke(0)
  strokeWeight(10)
  ellipse(400, 300, 100, 200)
  //fill(255, 0 ,0)
  ellipse(350, 300, 100, 200)
  fill(0)
  ellipse(375, 300, 40, 40)
  ellipse(rightPupilX, 300, 40, 40)
  fill(100, 150, 100, 190)
  rect(200, 100, 150, 50) 
  noFill()
  stroke(29, 152, 204)
  strokeWeight(20)
  triangle(600, 100, 700, 200, 650, 300)
   strokeWeight(50)
  point(100, 500)
  strokeWeight(10)
  ellipse(mouseX, mouseY, 50, 50)
 
}