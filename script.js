let homeScore = 0
let guestScore = 0
let periodCounter = 0

let intervalId = null;
let time = 60 * 12
let minutes = 0
let seconds = 0

function addOne(button) {
    const action = button.getAttribute("data-action")

    if (action === 'home') {
        homeScore++
        document.getElementById("home-score").textContent = homeScore
    } else {
        guestScore++
        document.getElementById("guest-score").textContent = guestScore
    }
}

function addTwo(button) {
    const action = button.getAttribute("data-action")

    if (action === 'home') {
        homeScore += 2
        document.getElementById("home-score").textContent = homeScore
    } else {
        guestScore += 2
        document.getElementById("guest-score").textContent = guestScore
    }
}

function addThree(button) {
    const action = button.getAttribute("data-action")

    if (action === 'home') {
        homeScore += 3
        document.getElementById("home-score").textContent = homeScore
    } else {
        guestScore += 3
        document.getElementById("guest-score").textContent = guestScore
    }
}

function startClock() {
    let display = document.getElementById("timer");
    addperiod();

    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    time = 60 * 12;

    intervalId = setInterval(function () {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--time < 0) {
            time = 0;
        }
    }, 1000);
}

function addperiod() {
    if (time == 60 * 12) {
        periodCounter += 1
        document.getElementById("period-counter").textContent = periodCounter
    }
}

function newGame() {
    // Clear the previous interval if it exists
    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    homeScore = 0
    guestScore = 0
    periodCounter = 0

    time = 60 * 12
    minutes = 0
    seconds = 0

    document.getElementById("home-score").textContent = homeScore
    document.getElementById("timer").textContent = '00:00'
    document.getElementById("period-counter").textContent = periodCounter
    document.getElementById("guest-score").textContent = homeScore
}