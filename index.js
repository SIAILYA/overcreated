const jwt = require('jsonwebtoken');
const express = require("express")
const mongoose = require("mongoose");
const history = require('connect-history-api-fallback')
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');

app.use(bodyParser.json())
app.use(cookieParser())

app.get("/admin", (req, res) => {
  res.render("index")
})


const staticFileMiddleware = express.static(__dirname + "/dist")

app.use(history({
  disableDotRule: true,
  verbose: true,
  htmlAcceptHeaders: ['text/html'],
  rewrites: [
    {from: "/404", to: "/404"}
  ]
}))
app.use(staticFileMiddleware)

app.listen(5088)

