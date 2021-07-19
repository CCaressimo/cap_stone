const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const db = require('./queries');
const { snack, sequelize } = require("./models");
const es6Renderer = require("express-es6-template-engine");
const bodyParser = require('body-parser')

require('dotenv').config()

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(helmet());
app.use(express.json());
app.use(cors())

// app.get('/', function (req, res) {
// res.send('Express application working ...');
// });

app.get('/fares', db.getFares)

app.get('/drinks', db.getDrinks)

app.get("/drinks/:genre", db.getDrinksByGenre);

app.get("/fares/:genre", db.getFaresByGenre);

app.get('/flix', db.getFlix)

app.get("/flix/:genre", db.getFlixByGenre);

// app.get("/flix/:genre", db.getFlixByMedia);

// app.get("/flix/:mediatype", db.getFlixBySource);

app.post("/register", jsonParser, db.postSignUp)

if (process.env.NODE_ENV === "production") {
  app.use(morgan("tiny"));
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  // If we aren't in production
  app.get("/", (req, res) => {
    res.send("Express application working ...");
  });
}


// Start server
app.listen(process.env.PORT || 8080, () => console.log('server running ...'))

module.exports = app;