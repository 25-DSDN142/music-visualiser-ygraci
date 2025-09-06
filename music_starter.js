

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  background(255);
  sandBackDrop(0);
  sky (0);
  ocean (0);
  waves (0);
  

 
function waves(){
  let evenWaves = map (other, 0, 100, 0, 20);
  let oldWaves = map (other, 0, 100, 0, 40);
    fill (41,164,195);

    //code to make waves
    //1st waves
    beginShape();
      curveVertex(0,300); //top left point//dont move
      curveVertex(0,300); //makes line to next point //dont move
      curveVertex(0,490+oldWaves); //1st left curve part of wave
      curveVertex(65,550+oldWaves); //bottom of wave (left side)
      curveVertex(140,490+oldWaves); //3rd right curve of wave
      curveVertex(133,300); //top right point //dont move
      curveVertex(133,300); //makes line to the whole thing //dont move
    endShape();

    //2nd wave arc(60, 110, 100, 140, 0, PI);
    beginShape();
      curveVertex(75,300); //top left point //dont move
      curveVertex(75,300); //makes line to next point //dont move
      curveVertex(130,525+evenWaves); //1st left curve part of wave
      curveVertex(220,610+evenWaves); //bottom of wave (left side)
      curveVertex(320,505+evenWaves); //3rd right curve of wave
      curveVertex(330,300); //top right point //dont move
      curveVertex(330,300); //makes line to the whole thing //dont move
    endShape();

    //3rd wave arc(120, 110, 140, 140, 0, PI);
    beginShape();
      curveVertex(280,300); //top left point //dont move
      curveVertex(280,300); //makes line to next point //dont move
      curveVertex(280,480+oldWaves); //1st left curve part of wave
      curveVertex(380,590+oldWaves); //bottom of wave (left side)
      curveVertex(471,550+oldWaves); //3rd right curve of wave
      curveVertex(550,300); //top right point //dont move
      curveVertex(550,300); //makes line to the whole thing //dont move
    endShape();

    //4th wave arc(200, 90, 160, 140, 0, PI);
    beginShape();
      curveVertex(470,300); //top left point //dont move
      curveVertex(470,300); //makes line to next point //dont move
      curveVertex(485,490+evenWaves); //1st left curve part of wave
      curveVertex(540,550+evenWaves); //bottom of wave (left side)
      curveVertex(540,400); //top right point //dont move
      curveVertex(500,400); //makes line to the whole thing //dont move
    endShape(); 
}

  // Loop to draw the 3 far left birds
  for (let i = 0; i < 3; i++) {
    let birdXMove = map (drum, 0, 100, 0, 30)
    let birdYMove = map (drum, 0, 100, 20, 50)
    let xPos = birdXMove + i * 80; 
    let yPos = birdYMove+40 + i * 10;
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

  // Loop to draw the 3 far right birds
  for (let i = 0; i < 3; i++) {
    let birdXMove = map (drum, 0, 100, 0, -30)
    let birdYMove = map (drum, 0, 100, 20, 50)
    let xPos = birdXMove+250 + i * 80; 
    let yPos = birdYMove+60 + i * -10;
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
  vertex (540,400);//bottom right
  vertex (0,400);//bottom left
endShape(CLOSE);
}

function sky () {
fill (157,235,255);
  
// fill (sky);
beginShape();
  vertex (0,0);//top left 
  vertex (540,0);//top right
  vertex (540,400);//bottom right
  vertex (0,400);//bottom left
endShape(CLOSE);
}

function ocean (){
    fill (41,164,195);

//code to make the ocean
//middle/top of the ocean
beginShape();
  vertex (0,300);//top left 
  vertex (540,300);//top right
  vertex (540,450);//bottom right
  vertex (0,450);//bottom left
endShape(CLOSE);
}
