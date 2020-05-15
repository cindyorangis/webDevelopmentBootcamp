// Move Karel to other end of the board
function main() {
  moveFourTimes();
  turnLeft();
  moveFourTimes();
}

function moveFourTimes() {
  move();
  move();
  move();
  move();
}

// Move Karel and drop beeper
function main() {
  putBeeper();
  moveAndDropBeeper();
  moveAndDropBeeper();
  moveAndDropBeeper();
  moveAndDropBeeper();
}

function moveAndDropBeeper() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

// Move Karel and drop beeper in cheeseboard
function main() {
  moveRightAndDropBeeper();
  moveLeftAndDropBeeper();
  moveRightAndDropBeeper();
  moveLeftAndDropBeeper();
  moveRightAndDropBeeper();
}

function moveRightAndDropBeeper() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function moveLeftAndDropBeeper() {
  turnLeft();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}
