const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "Let’s take a quick break to practice what we’ve already learned.!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "At this point you should know enough to use Express to make some fun interactive web apps! ",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages });
});

module.exports = router;
