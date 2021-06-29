ballY=50;
balY=120;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('aqua');
  //ellipse
  fill(0,0,230);
  ellipse(200,ballY,65,65);//airballon
  fill(255,0,10);
  rect(190,ballY+41,20,10);//airballoon;bottom
  ballY=ballY+1;
  
  fill('yellow');
  ellipse(50,50,95,95);//sun
  
  fill(240,245,200);
  rect(50,260,100,150,10);//building
  
  fill(255,190,190);
  ellipse(300,balY,65,65);//airballoon
  fill(200,150,45);
  rect( 290,balY+40,20,10);//airballon bottom
  balY=balY-1;
  
  rect(5,350,75,75);//building2
  
  fill(250,230,245);
  rect(350,360,40,280);//building 3
  
}