/*
<<<<<<< HEAD
 * @name 시계
 * @description second(), minute(), 그리고 hour()함수를 사용하여
 * 현재 시간을 읽어올 수 있습니다.
 * 이 예제에서는 sin()과 cos()값이 시침, 분침, 초침의 위치를 정합니다.
=======
 * @name Clock
 * @description The current time can be read with the second(),
 * minute(), and hour() functions. In this example, sin() and
 * cos() values are used to set the position of the hands.
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
 */
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(720, 400);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(230);

<<<<<<< HEAD
  // 시계 배경 그리기
=======
  // Draw the clock background
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  noStroke();
  fill(244, 122, 158);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(cx, cy, clockDiameter, clockDiameter);

<<<<<<< HEAD
  // sin()과 cos()의 각도는 3시 정각에서 시작;
  // HALF_PI를 뺄셈하여 상단에서부터 시작하도록 설정
=======
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

<<<<<<< HEAD
  // 시계침들 그리기
=======
  // Draw the hands of the clock
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

<<<<<<< HEAD
  // 분침 그리기
=======
  // Draw the minute ticks
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}
