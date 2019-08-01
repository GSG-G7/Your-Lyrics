const song = document.querySelector('.home__main__song');
const search = document.querySelector('.home__main__search');
const lyrics = document.querySelector('.content__text');
const cardOne = document.querySelector('.cards__one');
const cardTwo = document.querySelector('.cards__two');
const cardThree = document.querySelector('.cards__three');
const card_One_link = document.querySelector('.card__one__link');
const card_Two_link = document.querySelector('.card__two__link');
const card_Three_link = document.querySelector('.card__three__link');

search.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/song', {
    method: 'POST',
    body: JSON.stringify({ name: song.value }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => (lyrics.textContent = data.message.body.lyrics.lyrics_body))
    .catch(error => console.log(error));
});
fetchSongNames((obj) => {
  card_One_link.textContent = obj.track_list[0].track.track_name;
  card_One_link.href = obj.track_list[0].track.track_edit_url;
  cardOne.appendChild(card_One_link);
  card_Two_link.textContent = obj.track_list[1].track.track_name;
  card_Two_link.href = obj.track_list[1].track.track_edit_url;
  cardTwo.appendChild(card_Two_link);
  card_Three_link.textContent = obj.track_list[2].track.track_name;
  card_Three_link.href = obj.track_list[2].track.track_edit_url;
  cardThree.appendChild(card_Three_link);
});
