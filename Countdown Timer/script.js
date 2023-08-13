const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

let timeInterval;
let remainingTime = 0;

function updateTimer() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    document.getElementById("displayHours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("displayMinutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("displaySeconds").textContent = seconds.toString().padStart(2, "0");
}

function startTimer() {
    if (!timeInterval) {
        remainingTime = parseInt(hoursInput.value || 0) * 3600 + parseInt(minutesInput.value || 0) * 60 + parseInt(secondsInput.value || 0);
        if (remainingTime > 0) {
            timeInterval = setInterval(() => {
                if (remainingTime > 0) {
                    remainingTime--;
                    updateTimer();
                } else {
                    clearInterval(timeInterval);
                }
            }, 1000);
        }
    }
}

function stopTimer() {
    clearInterval(timeInterval);
    timeInterval = null;
}

function resetTimer() {
    stopTimer();
    remainingTime = 0;
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial call to update the timer display
updateTimer();
