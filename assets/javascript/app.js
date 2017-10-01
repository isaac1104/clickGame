let score = 1;
let timer = 10;

const config = {
  apiKey: "AIzaSyBzu6I3WrIA1qfrItL2TAc8ilJYEq4wbw8",
  authDomain: "clickgame-1baff.firebaseapp.com",
  databaseURL: "https://clickgame-1baff.firebaseio.com",
  projectId: "clickgame-1baff",
  storageBucket: "clickgame-1baff.appspot.com",
  messagingSenderId: "694602255414"
};
firebase.initializeApp(config);

const database = firebase.database();

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
      $("#progressBar").val(10 - --timer);

      if (timer <= 0) {
        clearInterval(startTimer);
        $("#replayButton").prop("disabled", false);
        $("#button").prop("disabled", true);
        $("#start").fadeOut();
        $("#replayButton").fadeIn();
        const highScore = {
          score: score - 1
        };
        database.ref().push(highScore);
        database.ref().on("child_added", (childSnapshot) => {
          const childObj = childSnapshot.val();
          const childKey = childSnapshot.key;

          //get highest score from the database and display it in html
          
        }, (errorObject) => {
          console.log(errorObject);
        });
      }
    }, 1000);
  }
  playGame();

  $("#replayButton").on("click", () => {
    timer = 10;
    score = 1;
    $("#replayButton").prop("disabled", true);
    $("#button").prop("disabled", false);
    playGame();
  });
});
