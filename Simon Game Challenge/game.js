var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}
