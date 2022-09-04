// import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(videoTimeStop, 1000));

function videoTimeStop(timeupdate) {
  let timePause = timeupdate.seconds;
  console.log(timePause);

  localStorage.setItem('videoplayer-current-time', timePause);
}

function afterUpdatePage() {
  let savedTimePlayer = localStorage.getItem('videoplayer-current-time');
  if (savedTimePlayer) {
    player
      .setCurrentTime(savedTimePlayer)
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }
}

afterUpdatePage();
