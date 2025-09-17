function setup() {
  createCanvas(600, 800);
  background(200);
  noStroke();
}

function draw() {

  // background(mouseX/2.35);

  // ears1
  fill('black');
  circle(300,86,126);

  //face
  fill('#F4E2C2');
  circle(341,230,270);

  // ears2
  fill('black');
  circle(191,188,146);

  //eyes
  fill('black');
  circle(366,205,44);
  circle(417,205,44);

  //nose
  circle(468,244,66); 

  //mouth
  fill('pink');
  circle(334,315,54);  

  //body
  fill('red');
  circle(384,443,200);    

  //buttons
  fill('white');
  circle(463,405,48);
  circle(413,424,48);

  //feet
  fill('yellow');
  circle(169,612,180);
  circle(423,679,180);

}

