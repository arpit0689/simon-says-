let gameSeq = [];
let userSeq = [];
let btns = ['green', 'pink', "blue", "orange"];

let started = false; 
let level = 0;



let h3 = document.querySelector('h3');

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("Game is started");
        started= true;

        levelUp();
    }
});

function gameFlash(btns){
    btns.classList.add("flash"); 

    setTimeout(function () {
        btns.classList.remove('flash');
    }, 250);
}


function userFlash(btns){
    btns.classList.add("userFlash"); 

    setTimeout(function () {
        btns.classList.remove('userFlash');
    }, 300);
}
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkAnswer(index) {
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        }, 150)
        reset();

    }
}

function btnPress () {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAnswer(userSeq.length-1); 

}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click', btnPress);
}

function reset() {
   started = false;
   gameSeq = [];
   userSeq  = [];
   level = 0;

}