const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
let timerInterval = null;

pauseButton.style.display = 'none';

startButton.addEventListener("click", () => {
    timerInterval = run();
    startButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
});

pauseButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    pauseButton.style.display = 'none';
    startButton.style.display = 'inline-block';
});

function run() {
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    let seconds = parseInt(secondsDisplay.value);
    let minutes = parseInt(minutesDisplay.value);
    return setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else if (seconds === 0 && minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            clearInterval(timerInterval);
            startButton.style.display = 'inline-block';
            pauseButton.style.display = 'none';
        }
        minutesDisplay.value = String(minutes).length === 1 ? `0${minutes}`: minutes;
        secondsDisplay.value = String(seconds).length === 1 ? `0${seconds}` : seconds;
    }, 1000);
};