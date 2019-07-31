const song = document.querySelector('.home__main__song');
const search = document.querySelector('.home__main__search');
const lyrics = document.querySelector('.content__text');

search.addEventListener('click', (e) => {
  e.preventDefault();
  fetchApi((obj) => {
    lyrics.textContent = obj.message.body.lyrics.lyrics_body;
  });
});
