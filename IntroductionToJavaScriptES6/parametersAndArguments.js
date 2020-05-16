function getMilk(money, cost) {
  var numberOfBottles = Math.floor(money / cost);
  console.log("buy " + numberOfBottles + " bottles of milk");
  return numberOfBottles;
}

function getChange(money, cost) {
  var change = money % cost;
  console.log();
  return change;
}

getMilk(5, 1.5);

console.log(
  "bought " +
    getMilk(5, 1.5) +
    " bottles of milk, and your change of $" +
    getChange(5, 1.5)
);
