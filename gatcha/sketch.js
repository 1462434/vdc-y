let body;
let face;

// 커비 몸통 얼굴 이미지 불러오기
function preload() {
  body = loadImage('body.png');

  // get random face
  let n = int(random(1, 5)); // 1~4
  let imgName = n + ".png";  
  face = loadImage(imgName);
}

// 커비 몸통 얼굴 일단 표출
function setup() {
  createCanvas(400, 400);

  let button = createButton('ㅗ'); // 버튼 생성
  button.position(10, 10); // 버튼 위치

  // 버튼 누르면 랜덤 얼굴 바뀌기
  button.mousePressed(() => {
    let n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  
}

function draw() {
  background("beige");
  image(body, 0, 0);
  image(face, 132, 134);  
}