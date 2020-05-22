// Initialize Level
var level = 0;
var started = false;

// Array for button colours
var buttonColours = ["red", "blue", "green", "yellow"];
// Initialize game pattern array;
var gamePattern = [];

// Initialize clicked pattern array;
var userClickedPattern = [];

// Begin game
$(document).keydown(function () {
  if (!started) {
    // Update h1 to start game
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Detect when any button is clicked
$(".btn").click(function () {
  // Store id of clicked button
  var userChosenColour = $(this).attr("id");

  // Add userChosenColour to end of userClickedPattern
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];

  level++;
  // Update h1 to appropiate level
  $("#level-title").text("Level " + level);
  // Generates a random number between 0-3
  var randomNumber = Math.round(Math.random() * 3);
  // Select random colour from buttonColurs array
  var randomChosenColour = buttonColours[randomNumber];
  // Add new randomChosenColur to end of gamePattern array
  gamePattern.push(randomChosenColour);

  // Animate randomChosenColour
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // Play sound for button
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  // Add pressed css class to button when clicked
  $("#" + currentColour).addClass("pressed");

  // Remove pressed css class after 100 milliseconds
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // Check if user most recent user answer is the same as game pattern
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    // If correct, move on
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // Play wrong sound
    playSound("wrong");

    // Flash red if user got the wrong answer
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Update h1 title to Restart
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Restart the game
    startOver();
    console.log("wrong");
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
