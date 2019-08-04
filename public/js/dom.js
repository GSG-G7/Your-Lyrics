const song = document.querySelector('.home__main__song');
const search = document.querySelector('.home__main__search');
const lyrics = document.querySelector('.content__text');
const cardOneLink = document.querySelector('.card__one__link');
const cardTwoLink = document.querySelector('.card__two__link');
const cardThreeLink = document.querySelector('.card__three__link');

search.addEventListener('click', (e) => {
  e.preventDefault();
  if (!song.value) {
    lyrics.textContent = '';
    alert('Please type a song Name to search for it lyrics');
  } else {
    fetch('/song', {
      method: 'POST',
      body: JSON.stringify({ name: song.value }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => (lyrics.textContent = data.message.body.lyrics.lyrics_body))
      .catch(error => console.log(error));
  }
});


// To get Songs Names
fetch('/getSongs', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then(data => data.json())
  .then((res) => {
    cardOneLink.textContent = res.track_list[0].track.track_name;
    cardOneLink.href = res.track_list[0].track.track_share_url;
    cardTwoLink.textContent = res.track_list[1].track.track_name;
    cardTwoLink.href = res.track_list[1].track.track_share_url;
    cardThreeLink.textContent = res.track_list[2].track.track_name;
    cardThreeLink.href = res.track_list[2].track.track_share_url;
  });
