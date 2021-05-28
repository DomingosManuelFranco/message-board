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

//GET form page
router.get('/new', function(req, res, next) {
  res.render('form', {heading: "Form"});
});

router.post('/new', (req, res, next) => {
  console.log(req.body);
  messages.push(
    {
    text: req.body.textMessage, 
    user: req.body.userName, 
    added: new Date()
  });

  res.redirect('/');
});


module.exports = router;
