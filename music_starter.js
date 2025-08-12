// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // Loop to draw 5 birds
  for (let i = 0; i < 5; i++) {
    let xPos = drum + 100 + i * 80; 
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

