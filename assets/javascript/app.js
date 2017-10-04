let score = 1;
let timer = 10;

function playGame() {
  let startTimer = setInterval(() => {
    $("#timeCount").text("Time Remaining: " + timer);
    $("#progressBar").val(10 - --timer);

    if (timer <= 0) {
      clearInterval(startTimer);
      $("#replayButton").prop("disabled", false);
      $("#button").prop("disabled", true);
      $("#start").fadeOut();
      $("#replayButton").fadeIn();
      $("#highScore").text(`Your Score: ${score - 1}`);
    }
  }, 1000);
}

$("#replayButton").hide();

$("#button").on("click", () => {
  $("#scoreCount").text(score);
  score++;
});

$("#start").on("click", () => {
  $("#start").prop("disabled", true);
  playGame();
});

$("#replayButton").on("click", () => {
  timer = 10;
  score = 1;
  $("#replayButton").prop("disabled", true);
  $("#button").prop("disabled", false);
  playGame();
});
