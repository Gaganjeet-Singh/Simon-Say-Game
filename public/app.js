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
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    
    btnFlash(ranbtn);
    gameSeq.push(ranColor);
}

function check(idx) {
    

    if(gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");

    console.log(userColor);
    userSeq.push(userColor);

    check(userSeq.length-1);
}


let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started=false;
    level = 0;
}