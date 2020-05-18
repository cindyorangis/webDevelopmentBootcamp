function isLeap(year) {
  /**************Don't change the code above****************/

  var result = "";
  //Write your code here.
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result = "Leap year.";
      } else {
        result = "Not leap year.";
      }
    } else {
      result = "Leap year.";
    }
  } else {
    result = "Not leap year.";
  }

  return result;

  /**************Don't change the code below****************/
}
