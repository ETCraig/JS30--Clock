const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = Number(now.getSeconds());
    const secondsDegrees = ((seconds / 60) * 360);
    const minutes = Number(now.getMinutes());
    const minutesDegrees = ((minutes / 60) * 360);
    const hours = Number(now.getHours());
    const hoursDegrees = ((hours / 12) * 360);

    if (seconds == 59) {
        secondHand.style.transition = 'all 0s';
        setTimeout((() => secondHand.style.transition = 'all 0.25s'), 2000);
    }
    if (minutes == 59) {
        minuteHand.style.transition = 'all 0s';
        setTimeout((() => minuteHand.style.transition = 'all 0.25s'), 62000);

    }
    if (hours == 11) {
        hourHand.style.transition = 'all 0s';
        setTimeout((() => hourHand.style.transition = 'all 0.25s'), 3602000);

    }


    secondHand.style.transform = `rotate(${90 + secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${90 + minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${90 + hoursDegrees}deg)`;
}
setInterval(setDate, 1000)