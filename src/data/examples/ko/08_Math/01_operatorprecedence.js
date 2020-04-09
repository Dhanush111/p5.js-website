/*
<<<<<<< HEAD
 * @name 연산자 우선 순위
 * @description 연산자의 실행 순서를 명시하는 경우를 제하고, 모든 선언문은 연산자 우선 순위에 따라
 * 처리됩니다. 예를 들어, "4+2*8"에서 2는 가장 먼저 8에 곱해지고, 그 결과값이 4에 더해집니다.
 * 이는 "*"이 "+"보다 높은 우선 순위를 갖기 때문입니다.
 * 혼동 방지를 위해 "4+(2*8)"라 쓰는 것이 권장되기도 합니다.
 * 이처럼, 코드 내에 괄호를 사용하여 처리 순서를 명시할 수 있습니다.
 * 연산자 우선 순위는 다음과 같습니다.
 */
// 처리 순위가 높은 연산자는 목록 상단에, 
// 가장 낲은 연산자는 목록 하단에 적힙니다.
// 곱하기 연산자: * / %
// 증감 연산자: + -
// 비교 연산자: < > <= >=
// 등호 연산자: == !=
// 논리 연산자 AND: &&
// 논리 연산자 OR: ||
// 할당 연산자: = += -= *= /= %=
=======
 * @name Operator Precedence
 * @description If you don't explicitly state the order in which an
 * expression is evaluated, they are evaluated based on the operator
 * precedence. For example, in the statement "4+2*8", the 2 will
 * first be multiplied by 8 and then the result will be added to 4.
 * This is because the "*" has a higher precedence than the "+". To avoid
 * ambiguity in reading the program, it is recommended that is statement
 * is written as "4+(2*8)". The order of evaluation can be controlled
 * through placement of parenthesis in the code. A table of operator
 * precedence follows below.
 */
// The highest precedence is at the top of the list and
// the lowest is at the bottom.
// Multiplicative: * / %
// Additive: + -
// Relational: < > <= >=
// Equality: == !=
// Logical AND: &&
// Logical OR: ||
// Assignment: = += -= *= /= %=
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
function setup() {
  createCanvas(710, 400);
  background(51);
  noFill();
  stroke(51);

  stroke(204);
  for (let i = 0; i < width - 20; i += 4) {
<<<<<<< HEAD
    // 70이 30을 더한 결과값이
    // 현재 "i"값보다 큰 지의 여부를 평가
    // 처리 순서를 명확히하고자 "if (i > (30 + 70)) {"로 작성
=======
    // The 30 is added to 70 and then evaluated
    // if it is greater than the current value of "i"
    // For clarity, write as "if (i > (30 + 70)) {"
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
    if (i > 30 + 70) {
      line(i, 0, i, 50);
    }
  }

  stroke(255);
<<<<<<< HEAD
  // 2와 8을 곱한 뒤, 그 결과값에 4를 더함
  // 처리 순서를 명확히하고자, "rect(5 + (2 * 8), 0, 90, 20);"로 작성
=======
  // The 2 is multiplied by the 8 and the result is added to the 4
  // For clarity, write as "rect(5 + (2 * 8), 0, 90, 20);"
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  rect(4 + 2 * 8, 52, 290, 48);
  rect((4 + 2) * 8, 100, 290, 49);

  stroke(153);
  for (let i = 0; i < width; i += 2) {
<<<<<<< HEAD
    // 비교 선언문을 가장 먼저 처리한 뒤,
    // 다음으로 논리 연산자 AND, 마지막으로 논리 연산자 OR 순으로 처리.
    // 처리 순서를 명확히하고자 다음과 같이 작성:
=======
    // The relational statements are evaluated
    // first, and then the logical AND statements and
    // finally the logical OR. For clarity, write as:
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
    // "if(((i > 20) && (i < 50)) || ((i > 100) && (i < width-20))) {"
    if ((i > 20 && i < 50) || (i > 100 && i < width - 20)) {
      line(i, 151, i, height - 1);
    }
  }
}
