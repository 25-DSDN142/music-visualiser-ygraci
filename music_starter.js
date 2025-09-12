
//ai to make the heart have going up and down  
let heartTime = 0;
const amplitude = 60; // Pixels
const frequency = 0.004; // Controls speed
const initialY = 0; // Starting Y position

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  background(255);
  sandBackDrop(0);
  sand (0);
  sky (0);
  heart(0);
  heart2(0);
  waves (0);
  ocean (0);
  

 function waves(){
  let evenWaves = map (drum, 0, 100, 0, 20);
  let oldWaves = map (bass, 0, 100, 0, 70);
    fill (41,164,195);
    strokeWeight(3);
    stroke(250,247,241);

    

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
    let birdXMove = map (other, 0, 100, 0, -20);
    let birdYMove = map (other, 0, 100, 20, 25);
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
    let birdXMove = map (other, 0, 100, 0, 30);
    let birdYMove = map (other, 0, 100, 20, 50);
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

  function heart() {
    //ai
    let HeartUpDown = initialY + amplitude * Math.cos(heartTime * frequency);
    strokeWeight(1);
    stroke(0);
    fill 	(131,0,196);
  let HeartSize = map (vocal, 0, 100, 0, 15);

  //heart lobes
  //left
  ellipse(189, 250+HeartUpDown, 80+HeartSize, 85+HeartSize);
  //right
  ellipse(260, 251+HeartUpDown, 80+HeartSize, 85+HeartSize);
   


  let triSize =  1 + HeartSize / 70;
  let triHight = 2 + HeartSize/2;
  
  //ai made part with x, y, s, and c
  // original triangle coordinates
  let x1 = 165, y1 = 280;
  let x2 = 285, y2 = 280;
  let x3 = 229, y3 = 330;
  
  //ai made 
  // find center of the triangle
  let cx = (x1 + x2 + x3) / 3;
  let cy = (y1 + y2 + y3) / 3;

  //ai made 
  // scale each point from the center
  let sx1 = cx + (x1 - cx) * triSize;
  let sy1 = cy + (y1 - cy) * triSize;
  let sx2 = cx + (x2 - cx) * triSize;
  let sy2 = cy + (y2 - cy) * triSize;
  let sx3 = cx + (x3 - cx) * triSize;
  let sy3 = cy + (y3 - cy) * triSize;

  // draw the triangle; ai made with x, y, s, and c; edited with the Heart and Tri things
  triangle(sx1, sy1+HeartUpDown+triHight, sx2, sy2+HeartUpDown+triHight, sx3, sy3+HeartUpDown+triHight);
  
  noStroke(0);
  //middle
  circle(225, 280+HeartUpDown, 40+HeartSize);

  heartTime++
 }

 function heart2 () {

    //ai made  
    let HeartUpDown = initialY + amplitude * Math.cos(heartTime * frequency);
    
    fill 	(76,0,164);
  let HeartSize = map (vocal, 0, 100, 0, 15);

// left lobe
ellipse(207, 265 + HeartUpDown, 45 + HeartSize, 47 + HeartSize);
// right lobe
ellipse(242, 266 + HeartUpDown, 45 + HeartSize, 47 + HeartSize);

// triangle scale
let triSize = 1 + HeartSize / 140;
let triHight = 1 + HeartSize / 4;

// original triangle coordinates (halved around same area)
let x1 = 195, y1 = 285;
let x2 = 255, y2 = 285;
let x3 = 227, y3 = 305;

//ai made 
// find center of the triangle
let cx = (x1 + x2 + x3) / 3;
let cy = (y1 + y2 + y3) / 3;

//ai made 
// scale each point from the center
let sx1 = cx + (x1 - cx) * triSize;
let sy1 = cy + (y1 - cy) * triSize;
let sx2 = cx + (x2 - cx) * triSize;
let sy2 = cy + (y2 - cy) * triSize;
let sx3 = cx + (x3 - cx) * triSize;
let sy3 = cy + (y3 - cy) * triSize;

//ai made 
// draw the triangle
triangle(
  sx1, sy1 + HeartUpDown + triHight,
  sx2, sy2 + HeartUpDown + triHight,
  sx3, sy3 + HeartUpDown + triHight
);

// middle circle
circle(225, 280 + HeartUpDown, 20 + HeartSize);
  heartTime++
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
    noStroke(0);

//code to make the ocean
//middle/top of the ocean
beginShape();
  vertex (0,300);//top left 
  vertex (540,300);//top right
  vertex (540,500);//bottom right
  vertex (0,500);//bottom left
endShape(CLOSE);
}

function sand () {
    fill (0);
  
  //layer 1 
  for (var ii = 0; ii <= 30; ii++) {
    var ySand = 400 + (ii * 10);
  for (var i = 0; i <= 27; i++) {
      var xSand = i * 20;
  ellipse(xSand, ySand, 2, 1);
    }
  }

  //layer 2 
  for (var ii = 0; ii <= 29; ii++) {     
    var ySand = 405 + (ii * 10);            
  for (var i = 0; i <= 26; i++) {     
    var xSand = 10 + (i * 20);         
  ellipse(xSand, ySand, 2, 1);
    }
  }
  
}

