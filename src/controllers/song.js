const querysting = require('querystring');
const bodyParser = require('body-parser');

exports.post = (req, res) => {
  console.log(req.body);
  console.log(req.body.name, req.body.image_url);
  res.redirect('/');
};
