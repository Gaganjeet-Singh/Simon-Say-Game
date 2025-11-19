let gameSeq = [];
let userSeq = [];

let started =false;
let level =0;

let btns = ["yellow","red","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started.....");
        started = true;

        levelUp();

    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    },300);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    
    btnFlash(ranbtn);
    gameSeq.push(ranColor);
}

function check() {
    let idx = level-1;

    if(gameSeq[idx] === userSeq[idx]) {
        console.log("same Value");
    } else {
        h2.innerText = "Game Over! press any key to start";
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");

    console.log(userColor);
    userSeq.push(userColor);

    check();
}


let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}