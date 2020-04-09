/*
<<<<<<< HEAD
 * @name 밝기
 * @description 다니엘 쉬프만(Dan Shiffman) 제작. 마우스와 각 픽셀 간의 거리값을 
 * 계산하여 이미지 일부의 밝기를 조정합니다. 
 * <p><em><span class="small"> 로컬 컴퓨터에서 이 예제를 실행하려면, 이미지 파일을 준비하시고
 * <a href="https://github.com/processing/p5.js/wiki/Local-server">로컬 서버</a>를 작동시키세요.</span></em></p>
=======
 * @name Brightness
 * @description By Dan Shiffman. This program adjusts the brightness of a part
 * of the image by calculating the distance of each pixel to the mouse.
 * <p><em><span class="small"> To run this example locally, you will need
 * at least an image file and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
 */
let img;

function preload() {
  img = loadImage('assets/moonwalk.jpg');
}

function setup() {
  createCanvas(720, 200);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
}

function draw() {
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
<<<<<<< HEAD
      // 2D 그리드로부터 1차원 위치 계산
      let loc = (x + y * img.width) * 4;
      // 이미지에서 R,G,B값 받기
      let r, g, b;
      r = img.pixels[loc];
      // 마우스와의 거리에 따라 변경할 밝기 계산
=======
      // Calculate the 1D location from a 2D grid
      let loc = (x + y * img.width) * 4;
      // Get the R,G,B values from image
      let r, g, b;
      r = img.pixels[loc];
      // Calculate an amount to change brightness based on proximity to the mouse
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
      let maxdist = 50;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
<<<<<<< HEAD
      // RGB의 색상 범위가 0-255에 국한되도록 설정
      r = constrain(r, 0, 255);
      // 새로운 색상 생성 후 화면에 픽셀 위치 고정
=======
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
      //color c = color(r, g, b);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
}
