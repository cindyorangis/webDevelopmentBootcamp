const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit.",
});

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit",
});

mango.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple,
});

/*
const person = new Person({
  name: "John",
  age: 37,
});
*/

// person.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

/*
Fruit.updateOne(
  { _id: "5ed198c6c29d5244d02161ad" },
  { name: "Peach" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the document.");
    }
  }
);
*/

/*
Fruit.deleteOne({ name: "Peach" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the document");
  }
});
*/

/*
Person.deleteMany({ name: "John" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted all the documents");
  }
});
*/

Person.updateOne(
  {
    name: "John",
  },
  { favouriteFruit: mango },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the document");
    }
  }
);
