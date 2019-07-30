const path = require('path');

exports.get = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

exports.post = (req, res) => {
  res.redirect('/index.html');
};
