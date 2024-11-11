// turning on/off music w/ button change
const audio = document.querySelector("#music");
const img = document.querySelector("#musicButton");
let i = 0;

function plays() {
    audio.volume = 0.5;

    if(i % 2 === 0) {
        img.src = "icons/muteButton.png";
        audio.pause();
    } else {
        img.src = "icons/playButton.png";
        audio.play();
    }
}

function play() {
    i++;
    plays();
}

// display of login page
const login = document.querySelector("#center-form");

function displayLogin() {
    login.style.display = "block";
}