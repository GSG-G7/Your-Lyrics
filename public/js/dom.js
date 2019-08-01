const song = document.querySelector('.home__main__song');
const search = document.querySelector('.home__main__search');
const lyrics = document.querySelector('.content__text');

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
