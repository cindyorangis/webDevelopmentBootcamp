function getMilk(money, cost) {
  var costOfBottle = cost;
  var numberOfBottles = Math.floor(money / costOfBottle);
  console.log("buy " + numberOfBottles + " bottles of milk");
}

getMilk(5, 1.5);
