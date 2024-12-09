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

// exit register or login option
function eraseRegisterLogin() {
    if(login.style.display === "block") {
        login.style.display = "none";
    } else {
        register.style.display = "none"
    }
}


// -------------------------------------------------------------------------------------------------------
// turning on/off music w/ button change
const img = document.querySelector("#musicButton");

// DIALOGUE AUDIO
const audio = document.querySelector("#music");
let isIntroMusicPlaying = false;

function IntroToggleAudio() {
    audio.volume = 0.5;
    
    if (isIntroMusicPlaying) {
        img.src = "icons/muteButton.png";
        audio.pause();
    } else {
        img.src = "icons/playButton.png";
        audio.play();
    }
    
    isIntroMusicPlaying = !isIntroMusicPlaying;
}

let isBossMusicPlaying = false;

function bossFightToggleAudio() {
    const bossMusic = document.querySelector("#bossMusic");
    bossMusic.volume = 0.1;
    
    if (isBossMusicPlaying) {
        img.src = "icons/muteButton.png";
        bossMusic.pause();
    } else {
        img.src = "icons/playButton.png";
        bossMusic.play();
    }
    
    isBossMusicPlaying = !isBossMusicPlaying;
}


// Plays introduction video
const introVideo = document.querySelector("#introVideo");
const dialogueContainer = document.querySelector(".dialogue-container");
const centerGameContainer = document.querySelector(".center-game");
const startGame = document.querySelector(".center-startGame");

function playIntroVideo() {
    startGame.style.display = "none";
    centerGameContainer.style.display = "block";

    introVideo.play();

    introVideo.addEventListener("ended", () => {
        introVideo.style.display = "none";
        dialogueContainer.style.display = "block";
        IntroToggleAudio();
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

const nextPart = document.querySelector(".nextPart");
const text_container1 = document.querySelector("#text-container1");
const text_container2 = document.querySelector("#text-container2");

let storylineCounter = 0;

function option1() {
    const swordmanScript = document.createElement("h4");
    swordmanScript.id = "animatedText";
    swordmanScript.textContent = swordCharacter[storylineCounter];

    if(text_container2.style.display === "block") {
        text_container2.appendChild(swordmanScript);
        nextPart.style.display = "block";
    } else {
        text_container1.appendChild(swordmanScript);
        
        setTimeout(() => {
            text_container2.style.display = "block";
        }, 3000);
    }

    storylineCounter++;
}

function option2() {
    const mageScript = document.createElement("h4");
    mageScript.id = "animatedText";
    mageScript.textContent = mageCharacter[storylineCounter];

    if(text_container2.style.display === "block") {
        text_container2.appendChild(mageScript);
        nextPart.style.display = "block";
    } else {
        text_container1.appendChild(mageScript);

        setTimeout(() => {
            text_container2.style.display = "block";
        }, 3000);
    }
    
    storylineCounter++;
}


// ERASE THE DIALOGUE PART ALTOGETHER & TRIGGER THE DUNGEON CUTSCENE
const dungeonCutscene = document.querySelector(".dungeonCutscene");

const bossFightForm = document.querySelector(".bossFightForm");
const bossNormalForm = document.querySelector(".bossNormalForm");

function dialogueErase() {
    const bossContainer = document.querySelector(".boss-container");

    dialogueContainer.style.display = "none";
    dungeonCutscene.style.display = "block";
    dungeonCutscene.play();

    dungeonCutscene.addEventListener("ended", () => {
        centerGameContainer.style.display = "none";
        bossContainer.style.display = "block";

        setTimeout(() => {
            bossNormalForm.style.display = "none";
            bossFightForm.style.display = "block";
            bossFightToggleAudio();
            audio.pause();

            initialization();

        }, 4000);
    });
}



// -------------------------------------------------------------------------------------------------------
// BOSS LOGIC SECTION
// Makes text box and choices accessible
const text_box = document.querySelectorAll(".text-box");
const choices = document.querySelectorAll(".choices");

// Increment counters
let counterForTextbox = 0;
let counterForChoices = 0;

function initialization() {
    // pop sound effx for text box
    const popEffx = document.querySelector("#popEffx");

    popEffx.play();

    counterForTextbox++;

    text_box[counterForTextbox - 1].classList.add("displayBlock");

    if(counterForTextbox > 1) {
        text_box[counterForTextbox - 2].classList.remove("displayBlock");
    }

    if(counterForTextbox === 9 || counterForTextbox === 13) {
        return choices[counterForChoices - 1].classList.remove("displayBlock");
    }

    if(counterForTextbox > 4) {
        choices[counterForChoices].classList.add("displayBlock");

        if(counterForChoices > 0) {
            choices[counterForChoices - 1].classList.remove("displayBlock");
        }
       
        counterForChoices++;
    }
}

// HP
let hpOfBoss = 200;
let hpOfMc = 100;

// CHOICES OF CORRECT & INCORRECT
const bossContainer = document.querySelector(".boss-container");
const endingVideoContainer = document.querySelector(".endingContainer");
const endingVideo = document.querySelector("#ending");

const mcCriticalHit = document.querySelector("#mcCriticalHit");
const youLose = document.querySelector(".displayOfYouLost");

const bossHP = document.querySelector(".hpOfBoss");
const mcHP = document.querySelector(".hpOfMC");

function correctChoice() {
    const criticalHit = Math.floor(Math.random() * 60);
    const bossPain = document.querySelector("#bossPain");
    const bossRoar = document.querySelector("#bossRoar");

    bossHP.textContent = `${hpOfBoss -= criticalHit}❦`;
    bossPain.play();

    if(hpOfBoss <= 0) {
        endingVideoContainer.style.display = "block";
        bossContainer.style.display = "none";

        bossPain.pause();
        bossRoar.play();
        endingVideo.play();
        bossFightToggleAudio();

        bossHP.textContent = "0 ❦";
    }

    mcSkillActivated();
    initialization();
}

function wrongChoice() {
    const mcPain = document.querySelector("#mcPain");
    
    mcHP.textContent = `${hpOfMc -= 25} ❦`;
    mcPain.play();

    if(hpOfMc <= 0) {
        bossContainer.style.display = "none";
        youLose.style.display = "block";

        mcCriticalHit.play();
        mcPain.pause();

        mcHP.textContent = "0❦";
    }

    bossSkillActivated();
    initialization();
}

function reset() {
    text_box[counterForTextbox - 1].classList.remove("displayBlock");
    choices[counterForChoices - 1].classList.remove("displayBlock");

    counterForTextbox = 0;
    counterForChoices = 0;

    hpOfBoss = 200;
    hpOfMc = 100;
    
    bossHP.textContent = `${hpOfBoss}❦`;
    mcHP.textContent = `${hpOfMc}❦`;

    initialization();

    bossContainer.style.display = "block";
    youLose.style.display = "none";
}

// SKILL UTILIZATION function
function healingSkillActivated() {
    const mcSigh = document.querySelector("#mcSigh");
    const heal = document.querySelector(".healSkill");

    heal.style.display = "block";
    mcSigh.play();

    setTimeout(() => {
        heal.style.display = "none";
    }, 2000);
}

function mcSkillActivated() {
    const slashSound = document.querySelector("#slashSound");
    const mcSkill = document.querySelector(".mcSkill");

    mcSkill.style.display = "block";
    bossFightForm.style.animation = `dmgAnimation ease ${0.5}s`;
    slashSound.play();

    setTimeout(() => {
        mcSkill.style.display = "none";
        bossFightForm.style.animation = "none";
    }, 1000);
}

function bossSkillActivated() {
    const magicSound = document.querySelector("#magicSound");
    const bossSkill = document.querySelector(".bossSkill");

    bossSkill.style.display = "block";
    magicSound.play();
    
    setTimeout(() => {
        bossSkill.style.display = "none";
    }, 2000);
}

// SPECIAL QUESTION FUNCTIONS
function specialCorrectChoice() {
    const healSound = document.querySelector("#healSound");
    const mcHP = document.querySelector(".hpOfMC");

    mcHP.textContent = `${hpOfMc += 15}❦`;
    healSound.play();

    healingSkillActivated();
    initialization();
}

function specialWrongChoice() {
    const mcHP = document.querySelector(".hpOfMC");
    const criticalDMG = Math.floor(Math.random() * 100);

    mcHP.textContent = `${hpOfMc -= criticalDMG}❦`;

    mcCriticalHit.play();

    if(hpOfMc <= 0) {
        bossContainer.style.display = "none";
        youLose.style.display = "block";
        mcHP.textContent = "0❦";
    }
    
    bossSkillActivated();
    initialization();
}


// SKIP SCENES FUNCTION
let skipCounter = 0;

function skip() {
    ++skipCounter;

    switch(skipCounter) {
        case 1:
            IntroToggleAudio();
            introVideo.pause();

            introVideo.style.display = "none";
            dialogueContainer.style.display = "block";
            break;
        case 2:
            bossFightToggleAudio();
            audio.pause();
            dungeonCutscene.pause();

            centerGameContainer.style.display = "none";
            bossContainer.style.display = "block";
            
            setTimeout(() => {
                bossNormalForm.style.display = "none";
                bossFightForm.style.display = "block";
        
                initialization();
        
            }, 4000);
            break;
    }
}