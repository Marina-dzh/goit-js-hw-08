import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const time = "videoplayer-current-time";
const player = new Player(iframe);

player.on('play', function () {
        console.log('played the video!');
    });

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

// player.on('timeupdate', function (data) {
//     console.log('Seconds watched:', data.seconds);
// localStorage.setItem(time, JSON.stringify(data.seconds))
// })

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(time)));

function currentTime(data) {
    console.log('Seconds watched:', data.seconds);
    localStorage.setItem(time, JSON.stringify(data.seconds));}
