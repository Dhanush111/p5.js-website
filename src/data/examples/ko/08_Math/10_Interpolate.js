/*
<<<<<<< HEAD
 * @name 선형 보간법
 * @frame 720, 400
 * @description 화면 위로 마우스를 움직이면 타원이 따라옵니다.
 * 애니메이션의 매 프레임 사이에, 타원은 현재 위치에서 커서를 향해 지정된 거리(0.05)의 일부만큼 움직입니다.
 * 이는 lerp() 함수를 사용하여 구현된 것입니다.
 * 이 예제는 인풋>이징(Easing) 예제와 동일한 효과를 만들지만, lerp()만으로 구현한다는 점에서 다릅니다.
=======
 * @name Linear Interpolation
 * @frame 720, 400
 * @description Move the mouse across the screen and the symbol will follow.
 * Between drawing each frame of the animation, the ellipse moves part
 * of the distance (0.05) from its current position toward the cursor using
 * the lerp() function.
 * This is the same as the Easing under input only with lerp() instead..
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
 */

let x = 0;
let y = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(51);

<<<<<<< HEAD
  // lerp()는 특정 값만큼 증가하는 두 개의 숫자로부터 결과값을 계산합니다.
  // amt인수는 이 두 개의 숫자를 선형적으로 결정하는데,
  // 0.0은 처음 위치, 0.1은 첫번째 점과 아주 가까운 위치, 0.5는 앞의 두 점의 중간 위치인 식입니다.

  // 매 프레임마다 마우스 위치를 향해 5%의 거리를 움직이도록 합니다.
=======
  // lerp() calculates a number between two numbers at a specific increment.
  // The amt parameter is the amount to interpolate between the two values
  // where 0.0 equal to the first point, 0.1 is very near the first point, 0.5
  // is half-way in between, etc.

  // Here we are moving 5% of the way to the mouse location each frame
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);

  fill(255);
  stroke(255);
  ellipse(x, y, 66, 66);
}
