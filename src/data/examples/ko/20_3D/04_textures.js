/*
<<<<<<< HEAD
 * @name 텍스쳐
 * @description 이미지와 비디오가 텍스쳐를 지원합니다.
 */
// 비디오 출처: https://vimeo.com/90312869
=======
 * @name Textures
 * @description Images and videos are supported for texture.
 */
// video source: https://vimeo.com/90312869
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(710, 400, WEBGL);

  img = loadImage('assets/cat.jpg');
  vid = createVideo(['assets/360video_256crop_v2.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function draw() {
  background(250);
  translate(-220, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
<<<<<<< HEAD
  //이미지를 텍스쳐로 전달하기
=======
  //pass image as texture
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(100, 100, 100);
  pop();
  theta += 0.05;
}
