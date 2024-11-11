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
const login = document.querySelector("#login-center-form");

function displayLogin() {
    if(login.style.display === "block" || register.style.display === "block") {
        login.style.display = "none";
    } else {
        login.style.display = "block";
    }
}

// display register
const register = document.querySelector("#register-center-form");   

function displayRegister() {
    if(login.style.display === "block" || register.style.display === "block") {
        register.style.display = "none";
    } else {
        register.style.display = "block";
    }
}

// erase register or login option
function eraseRegisterLogin() {
    if(login.style.display === "block") {
        login.style.display = "none";
    } else if(register.style.display === "block") {
        register.style.display = "none"
    }
}