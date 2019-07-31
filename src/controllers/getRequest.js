const request = require("request");

const songName = "hello";

const urlSongs = `http://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&page_size=1&page=1&s_track_rating=desc&apikey=fd8b260109e72ffe55cdb91847c144f9`;

const getRequest = url =>
  new Promise((resolve, reject) => {
    request(url, (error, res, body) => {
      if (error) {
        reject(error);
      }
      resolve(body);
    });
  });

exports.getRequest = (req, response) => {
  getRequest(urlSongs)
    .then(res => JSON.parse(res))
    .then(res => res.message.body.track_list[0].track.track_id)
    .then(
      id =>
        `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=fd8b260109e72ffe55cdb91847c144f9`
    )
    .then(url => getRequest(url))
    .then(res => JSON.parse(res))
    .then(data => response.json(data.message.body.lyrics))
    .catch(err => console.log(err));
};
