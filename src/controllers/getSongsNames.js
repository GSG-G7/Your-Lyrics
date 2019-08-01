const request = require('request');

const urlSongs = 'http://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=13750844&page=1&page_size=3&apikey=fd8b260109e72ffe55cdb91847c144f9';


const getSong = url => new Promise((resolve, reject) => {
  request(url, (error, res, body) => {
    if (error) {
      reject(error);
    }
    resolve(body);
  });
});

exports.getSong = (req, response) => {
  getSong(urlSongs)
    .then(res => JSON.parse(res))
    .then(res => res.message.body)
    .then(data => response.json(data))
    .catch(err => console.log(err));
};
