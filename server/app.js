const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const db = require('./queries');
const { snack, sequelize } = require("./models");
const es6Renderer = require("express-es6-template-engine");
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(helmet());
app.use(express.json());
app.use(cors())

if (process.env.NODE_ENV === 'development') {
app.use(morgan('tiny'));
}

app.get('/', function (req, res) {
res.send('Express application working ...');
});

app.get('/fares', db.getFares)

//app.get('/fares/:genre', db.getFaresByGenre)

app.get("/fares/:genre", db.getFaresByGenre)

app.post("/register", jsonParser, db.postSignUp)


// Start server
app.listen(8080, () => console.log('server running ...'))

module.exports = app;