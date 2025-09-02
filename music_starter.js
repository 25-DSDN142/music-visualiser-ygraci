// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255);
  sandBackDrop(0);
  sky (0);
 ocean (0);
  //waves (0);

  // Loop to draw 5 birds
  for (let i = 0; i < 5; i++) {
    let xPos = drum + 10 + i * 80; 
    let yPos = 100 + i * 10;
    bird(xPos, yPos);

function bird (birdX, birdY) {

  noFill();
  strokeWeight(2);
  stroke(0);
//code to make the birds 
//left wing
  arc (birdX+23, birdY+9.5, 30, 19, 290, 350, CHORD);

//middle part 
  ellipse (birdX+36.4, birdY+5.5, 2.1, 2.2);

//right wing
  arc (birdX+50, birdY+7, 29, 17, 180, 230, CHORD);
}
  }
}

function sandBackDrop () {
noStroke();
let sand = color (242,210,169);
  fill (sand);
beginShape();
  vertex (0, 700);//top left 
  vertex (540,700);//top right
  vertex (540,500);//bottom right
  vertex (0,500);//bottom left
endShape(CLOSE);
}

function sky () {
fill (157,235,255);
  
// fill (sky);
beginShape();
  vertex (0,0);//top left 
  vertex (540,0);//top right
  vertex (540,500);//bottom right
  vertex (0,500);//bottom left
endShape(CLOSE);
}

function ocean (){
    fill (41,164,195);

//code to make the ocean
//middle/top of the ocean
beginShape();
  vertex (0,150);//top left 
  vertex (700,150);//top right
  vertex (700,400);//bottom right
  vertex (0,400);//bottom left
endShape(CLOSE);
}

function waves(){
fill (41,164,195);

//code to make waves
//1st waves
beginShape();
  curveVertex(0,300); //top left point
  curveVertex(0,300); //makes line to next point
  curveVertex(0,550); //1st left curve part of wave
  curveVertex(100,565); //bottom of wave (left side)
  curveVertex(180,490); //3rd right curve of wave
  curveVertex(150,300); //top right point
  curveVertex(150,300); //makes line to the whole thing
endShape();

//2nd wave arc(60, 110, 100, 140, 0, PI);
beginShape();
  curveVertex(140,300); //top left point
  curveVertex(140,300); //makes line to next point
  curveVertex(140,300); //1st left curve part of wave
  curveVertex(200,545); //bottom of wave (left side)
  curveVertex(315,500); //3rd right curve of wave
  curveVertex(315,300); //top right point
  curveVertex(315,300); //makes line to the whole thing
endShape();

//3rd wave arc(120, 110, 140, 140, 0, PI);
beginShape();
  curveVertex(300,300); //top left point
  curveVertex(300,300); //makes line to next point
  curveVertex(300,450); //1st left curve part of wave
  curveVertex(345,465); //bottom of wave (left side)
  curveVertex(480,450); //3rd right curve of wave
  curveVertex(500,300); //top right point
  curveVertex(500,300); //makes line to the whole thing
endShape();

//4th wave arc(200, 90, 160, 140, 0, PI);
beginShape();
  curveVertex(475,300); //top left point
  curveVertex(475,300); //makes line to next point
  curveVertex(500,450); //1st left curve part of wave
  curveVertex(500,440); //bottom of wave (left side)
  curveVertex(500,300); //top right point
  curveVertex(500,300); //makes line to the whole thing
endShape(); 
}