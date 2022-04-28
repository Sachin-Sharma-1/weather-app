const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("entryPage", {
    hello: "hello"
  });
});
app.post("/", function(req, res) {


  const query = req.body.cityName;
  const apiKey = "6476f583103c1f75cd6e9ddba06d59c3";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response) {

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const imageSource = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
      res.render("weatherPage", {
        temp: temp,
        weatherDescription: weatherDescription.toUpperCase(),
        imageSource: imageSource
      });
    });

  });

});

app.post("/weather", function(req, res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
