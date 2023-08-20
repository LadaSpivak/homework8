import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iFrame = document.querySelector(`iframe`);
const player = new Player(iFrame);

// Variable with current video time

let currentTime =
  localStorage.getItem(`videoplayer-current-time`) != null
    ? localStorage.getItem(`videoplayer-current-time`)
    : 0;

// Loading time from Locale Storage

player.setCurrentTime(currentTime).then(function (seconds) {});
player.on('play', function () {});
const onPlay = function (data) {};
player.on('play', onPlay);

// Following for current time and save in Local Storage

const timeSaver = () => {
  player.getCurrentTime().then(function (seconds) {
    currentTime = seconds;
    localStorage.setItem(`videoplayer-current-time`, `${currentTime}`);
  });
}

player.on('timeupdate', throttle(timeSaver, 1000));
