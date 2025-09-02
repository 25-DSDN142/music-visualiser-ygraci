// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255);
  

  // Loop to draw 5 birds
for (let i = 0; i < 5; i++) {
    let areaX = drum + 100 + i * 80; 
    let areaY = 100 + i-10;
    bird(areaX, areaY);

function bird (birdX, birdY) {
  noFill();
  strokeWeight(2);
  stroke(0);
//left wing
  arc (birdX+23, birdY+9.5, 30, 19, 290, 350, CHORD);
//middle part 
  ellipse (birdX+36.4, birdY+5.5, 2.1, 2.2);
//right wing
  arc (birdX+50, birdY+7, 29, 17, 180, 230, CHORD);
    }
  }

  
}

