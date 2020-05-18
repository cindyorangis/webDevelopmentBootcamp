function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.
  var numberOfPeople = names.length;
  var randomPerson = Math.floor(Math.random() * numberOfPeople);

  return names[randomPerson] + " is going to buy lunch today!";

  /******Don't change the code below*******/
}
