const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: cindyledev@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is Cindy ad I like to code");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Tea</li><li>Code</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
