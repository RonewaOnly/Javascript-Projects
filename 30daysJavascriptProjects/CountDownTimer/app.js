const countdown = document.getElementById('countdown');

const startMinutes = 10;
let time = startMinutes * 60;

setInterval(updateCounter,1000);
function updateCounter(){
    let min = Math.floor(time/60);
    let sec = time % 60;

    min = min < 10? '0'+min:min;

    sec = sec < 10? '0'+sec:sec;
    countdown.innerHTML = `${min}:${sec}`;
    time--;
}