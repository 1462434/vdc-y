let body;
let face;

//커비 몸통 얼굴 이미지 불러오기
function preload() {
  body = loadImage('body.png');

  // select a random image
  face = loadImage(int(random(1, 5)) + ".png");  
}

// 커비 몸통 얼굴 일단 표출
function setup() {
  createCanvas(400, 400);
  background('beige');
  image(body, 0, 0);
  image(face, 132, 134);
}


