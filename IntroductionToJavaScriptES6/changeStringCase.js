// Create a var that stores the name that the user enters via prompt
var name = prompt("What is your name?");

// Capitalize the first letter of their name
// Isolate the first char
var firstChar = name.slice(0, 1);

// firstChar to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// Isolate the rest of the name
var restOfName = name.slice(1, name.length);

// restOfName to lowercase
restOfName = restOfName.toLowerCase();

// Concactenate the first char with the rest of the char
var captitalizedName = upperCaseFirstChar + restOfName;

// Use the capitalized version of their name to greet them using an alert
alert("Hello, " + captitalizedName);
