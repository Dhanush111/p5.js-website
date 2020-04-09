/**
<<<<<<< HEAD
 *  @name 리버브
 *  @description 리버브(reverb)는 사운드에 깊이감과 공간감을 더합니다.
 *  이 예제에서 노이즈는 reverb로 처리됩니다.
 *
 * <p><em><span class="small"> 로컬 프로젝트에서 이 예제를 실행하려면 적어도 한 개의 사운드 파일이 필요하고,
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound 라이브러리</a>를 추가해야 되며, 
 * <a href="https://github.com/processing/p5.js/wiki/Local-server">로컬 서버</a>를 작동시켜야 합니다.</span></em></p>
=======
 *  @name Reverb
 *  @description Reverb gives depth and perceived space to a sound. Here,
 *  noise is processed with reverb.
 *
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
 */
let sound, reverb;

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('assets/Damscray_DancingTiger');

<<<<<<< HEAD
  // 기본값으로 설정된 연결 상태를 해제하여
  // reverb.process를 통해서만 사운드를 들을 수 있도록 처리합니다.
=======
  // disconnect the default connection
  // so that we only hear the sound via the reverb.process
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
  soundFile.disconnect();
}

function setup() {
  createCanvas(720, 100);
  background(0);

  reverb = new p5.Reverb();

<<<<<<< HEAD
  // 6초의 reverbTime(리버브 시간)과 0.2%의 decayRate(감쇠 속도)를 갖는
  // 리버브에 사운드 파일 연결하기 
  reverb.process(soundFile, 6, 0.2);

  reverb.amp(4); // 턴잇업!
=======
  // sonnects soundFile to reverb with a
  // reverbTime of 6 seconds, decayRate of 0.2%
  reverb.process(soundFile, 6, 0.2);

  reverb.amp(4); // turn it up!
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
}

function mousePressed() {
  soundFile.play();
}
