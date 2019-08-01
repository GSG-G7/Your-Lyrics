const request = require('request');
const dotEnv = require('dotenv/config');

const apiKey = process.env.API_KEY;

const getRequest = url => new Promise((resolve, reject) => {
  request(url, (error, res, body) => {
    if (error) {
      reject(error);
    }
    resolve(body);
  });
});

exports.post = (req, res) => {
  const songName = req.body.name;
  const urlSongs = `http://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&page_size=1&page=1&s_track_rating=desc&apikey=${apiKey}`;
  getRequest(urlSongs)
    .then(res => JSON.parse(res))
    .then(res => res.message.body.track_list[0].track.track_id)
    .then(
      id => `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`,
    )
    .then(url => getRequest(url))
    .then(data => res.send(data))
    .catch(err => console.log(err));
};
