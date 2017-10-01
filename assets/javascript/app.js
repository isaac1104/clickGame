let score = 0;
let timer = 10;

$("#replay").hide();

$("#button").on("click", () => {
  $("#scoreCount").text(score);
  score++;
});

$("#start").on("click", () => {
  function playGame() {
    let startTimer = setInterval(() => {
      $("#timeCount").text("Time Remaining: " + timer);
      $("#progressBar").val(10 - --timer);
      if (timer <= 0) {
        clearInterval(startTimer);
        $("#button").prop("disabled", true);
        $("#replay").fadeIn();
        console.log("Time's Up!");
      }
    }, 1000);
  }
  playGame();

  $("#replayButton").on("click", () => {
    timer = 10;
    score = 0;
    $("#button").prop("disabled", false);
    playGame();
  });
});
