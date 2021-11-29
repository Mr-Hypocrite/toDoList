// jshint esversion:7

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Global Variables
let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function (req, res) {

  let today = new Date();
  let currrentDay = today.getDay();
  let day = '';
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  day = today.toLocaleDateString('en-US', options);
  res.render('list', { dayOfWeek: day, newListItems: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  console.log(items);
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log('Server Up and Running');
});
