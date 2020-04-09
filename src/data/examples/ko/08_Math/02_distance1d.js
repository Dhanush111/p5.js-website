/*
<<<<<<< HEAD
 * @name 1D 거리
 * @description 마우스를 좌우로 움직여, 화면 속 도형의 움직임 속도와 방향을 조정해보세요.
=======
 * @name Distance 1D
 * @description Move the mouse left and right to control
 * the speed and direction of the moving shapes.
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
 */
let xpos1;
let xpos2;
let xpos3;
let xpos4;
let thin = 8;
let thick = 36;

function setup() {
  createCanvas(710, 400);
  noStroke();
  xpos1 = width / 2;
  xpos2 = width / 2;
  xpos3 = width / 2;
  xpos4 = width / 2;
}

function draw() {
  background(0);

  let mx = mouseX * 0.4 - width / 5.0;

  fill(102);
  rect(xpos2, 0, thick, height / 2);
  fill(204);
  rect(xpos1, 0, thin, height / 2);
  fill(102);
  rect(xpos4, height / 2, thick, height / 2);
  fill(204);
  rect(xpos3, height / 2, thin, height / 2);

  xpos1 += mx / 16;
  xpos2 += mx / 64;
  xpos3 -= mx / 16;
  xpos4 -= mx / 64;

  if (xpos1 < -thin) {
    xpos1 = width;
  }
  if (xpos1 > width) {
    xpos1 = -thin;
  }
  if (xpos2 < -thick) {
    xpos2 = width;
  }
  if (xpos2 > width) {
    xpos2 = -thick;
  }
  if (xpos3 < -thin) {
    xpos3 = width;
  }
  if (xpos3 > width) {
    xpos3 = -thin;
  }
  if (xpos4 < -thick) {
    xpos4 = width;
  }
  if (xpos4 > width) {
    xpos4 = -thick;
  }
}
