const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const song = {
  title: 'Master : JD intro',
  artist: 'Anirudh',
  source: 'index.mp3'
};

audio.src = song.source;
title.textContent = song.title;
artist.textContent = song.artist;

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});
