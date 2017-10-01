let score = 0;
let timer = 10;

$("#replayButton").hide();

$("#button").on("click", () => {
  $("#scoreCount").text(score);
  score++;
});

$("#start").on("click", () => {
  $("#start").prop("disabled", true);
  function playGame() {
    let startTimer = setInterval(() => {
      $("#timeCount").text("Time Remaining: " + timer);
      $("#progressBar").val(10 - --timer)

      if (timer <= 0) {
        clearInterval(startTimer);
        $("#replayButton").prop("disabled", false);
        $("#button").prop("disabled", true);
        $("#start").fadeOut();
        $("#replayButton").fadeIn();
        console.log("Time's Up!");
      }
    }, 1000);
  }

  $("#replayButton").on("click", () => {
    timer = 10;
    score = 0;
    $("#replayButton").prop("disabled", true);
    $("#button").prop("disabled", false);
    playGame();
  });
});

playGame();
