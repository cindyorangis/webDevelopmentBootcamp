const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
