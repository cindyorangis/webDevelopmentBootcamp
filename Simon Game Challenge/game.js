// Array for button colours
var buttonColours = ["red", "blue", "green", "yellow"];
// Initialize game pattern array;
var gamePattern = [];

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
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
