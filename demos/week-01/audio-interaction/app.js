const jingle = document.getElementById("jingle");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

playBtn.addEventListener("click", function () {
  jingle.play();
});

pauseBtn.addEventListener("click", function () {
  jingle.pause();
});

stopBtn.addEventListener("click", function () {
  jingle.pause();
  jingle.currentTime = 0;
});

skipFor.addEventListener("click", function () {
  jingle.currentTime = jingle.currentTime + 10;
  // jingle.currentTime += 10;
});

skipBack.addEventListener("click", function () {
  jingle.currentTime = jingle.currentTime - 10;
  // jingle.currentTime -= 10;
});
