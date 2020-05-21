// Array for button colours
var buttonColours = ["red", "blue", "green", "yellow"];
// Initialize game pattern array;
var gamePattern = [];

// Initialize clicked pattern array;
var userClickedPattern = [];

// Detect when any button is clicked
$(".btn").click(function () {
  // Store id of clicked button
  var userChosenColour = $(this).attr("id");

  // Add userChosenColour to end of userClickedPattern
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {
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
