/*
<<<<<<< HEAD
 * @name 루프 해제
 * @description noLoop()함수는 draw()함수가 반복없이 단 한번만 실행되게 합니다.
 * noLoop()를 호출하지 않는다면 draw()함수는 계속해서 반복 실행될 것입니다.
 */
let y;

// setup()함수 속 선언문은 프로그램 시작 시 한번 실행됩니다.
function setup() {
  // createCanvas가 그 첫 선언문입니다.
  createCanvas(720, 400);
  stroke(255); // 선색을 흰색(255)으로 지정
=======
 * @name No Loop
 * @description The noLoop() function causes draw() to only execute once.
 * Without calling noLoop(), the code inside draw() is run continually.
 */
let y;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas should be the first statement
  createCanvas(720, 400);
  stroke(255); // Set line drawing color to white
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  noLoop();

  y = height * 0.5;
}

<<<<<<< HEAD
// 아래의 draw()함수에 포함된 선언문들은 프로그램 실행이 멈출 때까지 계속해서 실행됩니다.
// 각 선언문은 위에서 아래 방향으로 순차적으로 실행되며,
// 마지막 선언문 실행을 마친 뒤에는 상단의 첫 선언문으로 되돌아갑니다.
function draw() {
  background(0); // 배경색을 검정색(0)으로 지정
=======
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
