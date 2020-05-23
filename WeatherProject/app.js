const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=ca7c312b1af4511855cc6c0fb1bd8e8e&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp; // main.temp
      const description = weatherData.weather[0].description; // weather[0].description
      console.log(description);

      /*
      const obj = {
        name: "Cindy",
        favouriteFood: "Ramen",
      };
      console.log(JSON.stringify(obj));
      */
    });
  });
  res.send("Server is up and running");
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
