let gameseq = [];
let userseq = [];
let best_score = document.querySelector(".best_score");
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started  = true;
    
    levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },400);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },400);

}


function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);

    gameFlash(randbtn);
}
let best = 0;
function checkAns(idx){
     console.log("current level",level);

    //  let idx = level-1;
     if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
        //  console.log("same value");
     }
     else{
        h3.innerHTML = `Game Over! Your score was <b>${level}<b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "powderblue";
        },150);
        
        if(level > best){
            best = level;
            best_score.innerText = ` Best Score: ${level}`;

        }

        
        resetGame();
     }
}

function btnPress(){

    let btn = this;
    userFlash(btn);
    let clickSound = document.getElementById("clickSound");
    clickSound.currentTime = 0;
    clickSound.play();

    console.log(this);
     btn = this;
    userFlash(btn);
     userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}



