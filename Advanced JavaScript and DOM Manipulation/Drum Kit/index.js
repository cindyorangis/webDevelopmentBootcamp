// Adding Event Listeners to Drum Buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    alert("I got clicked");
  });
}
