const textBox = document.querySelector(".text-box");
const bossTextBox = document.querySelectorAll(".boss-textBox");

let counter = 0;

// The functions that check whether the choices chosed was correct or not.
let hpOfBoss = 100;
let hpOfMc = 100;

initialization()

function correctChoice() {
    const bossHP = document.querySelector(".hpOfBoss");

    if(hpOfBoss === 0) {
        return bossHP.textContent = "0❦";
    }

    bossHP.textContent = `${hpOfBoss -= 20}❦`;

    mcSkillActivated()
    initialization();
}

function wrongChoice() {
    const mcHP = document.querySelector(".hpOfMC");

    if(hpOfMc === 0) {
        return mcHP.textContent = "0❦";
    }

    mcHP.textContent = `${hpOfMc -= 25}❦`;

    bossSkillActivated();
    initialization();
}

// SKILL UTILIZATION function
const mcSkill = document.querySelector(".mcSkill");
const bossSkill = document.querySelector(".bossSkill");

function mcSkillActivated() {
    mcSkill.style.display = "block";
    
    setInterval(() => {
        mcSkill.style.display = "none";
    }, 500);
}

function bossSkillActivated() {
    bossSkill.style.display = "block";
    
    setInterval(() => {
        bossSkill.style.display = "none";
    }, 500);
}

function initialization() {
    counter++;
    
    system();
}

function system() {
    bossTextBox[counter - 1].classList.add("displayBlock");

    if (counter > 1) {
        bossTextBox[counter - 2].classList.remove("displayBlock");
    }
}