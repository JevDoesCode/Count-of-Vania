// display login
const login = document.querySelector("#login-center-form");

function displayLogin() {
    if(register.style.display === "block") {
        login.style.display = "none";
    } else {
        login.style.display = "block";
    }
}

// display register
const register = document.querySelector("#register-center-form");   

function displayRegister() {
    if(login.style.display === "block") {
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
    } else {
        console.error("Problem on erasure function!");
    }
}


// turning on/off music w/ button change
const audio = document.querySelector("#music");
const img = document.querySelector("#musicButton");
let isPlaying = false;

function toggleAudio() {
    audio.volume = 0.5;
    
    if (isPlaying) {
        img.src = "icons/muteButton.png";
        audio.pause();
    } else {
        img.src = "icons/playButton.png";
        audio.play();
    }
    
    isPlaying = !isPlaying;
}


// Plays introduction video
const introVideo = document.querySelector("#introVideo");
const featureSprite = document.querySelector(".featureSprite");
const dialogueContainer = document.querySelector(".dialogue-container");

function playIntroVideo() {
    introVideo.play();
    featureSprite.style.display = "none";

    introVideo.addEventListener("ended", () => {
        introVideo.style.display = "none";
        dialogueContainer.style.display = "block";
        toggleAudio();
    });
}


// DIALOGUE CHOICES LOGIC
const swordCharacter = [
    ["when suddenly the Adventurer heard a loud shriek."],
    ["Jack went outside to find what caused such a sound but to no avail, from the corner of his eye he spotted a figure wearing all black which he almost mistook for a shadow, he braced himself then approached the shadowy figure, but it seemed fate had other plans. He was knocked out immediately, the Adventurer found himself in a prison cell with the door unlocked he stepped out without hesitation."]
];
const mageCharacter = [
    ["when suddenly the Scholar heard a loud shriek."],
    ["Jack closed the curtains and stayed inside his room not wanting to risk his life, but it seemed fate had other plans then the door burst open and]  he was knocked out immediately, the Scholar found himself in a prison cell with the door unlocked he stepped out without hesitation."]
];

const text_container1 = document.querySelector("#text-container1");
const text_container2 = document.querySelector("#text-container2");

let storylineCounter = 0;

function option1() {
    const swordmanScript = document.createElement("h4");
    swordmanScript.id = "animatedText";
    swordmanScript.textContent = swordCharacter[storylineCounter];

    if(text_container2.style.display === "block") {
        text_container2.appendChild(swordmanScript);
    } else {
        text_container1.appendChild(swordmanScript);
        
        setTimeout(() => {
            text_container2.style.display = "block";
        }, 5000);
    }

    storylineCounter++;
}

function option2() {
    const mageScript = document.createElement("h4");
    mageScript.id = "animatedText";
    mageScript.textContent = mageCharacter[storylineCounter];
    text_container1.appendChild(mageScript);

    if(text_container2.style.display === "block") {
        text_container2.appendChild(mageScript);
    } else {
        text_container1.appendChild(mageScript);

        setTimeout(() => {
            text_container2.style.display = "block";
        }, 5000);
    }
    
    storylineCounter++;
}


// ERASE THE DIALOGUE PART ALTOGETHER & TRIGGER THE DUNGEON CUTSCENE
function dialogueErase() {
    const dungeonCutscene = document.querySelector(".dungeonCutscene");
    const bossContainer = document.querySelector(".boss-container");
    const centerGameContainer = document.querySelector(".center-game");

    dialogueContainer.style.display = "none";
    dungeonCutscene.style.display = "block";
    dungeonCutscene.play();

    dungeonCutscene.addEventListener("ended", () => {
        centerGameContainer.style.display = "none";
        bossContainer.style.display = "block";
    });
}