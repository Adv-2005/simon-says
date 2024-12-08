let gameseq=[];
let userseq=[];

let btncolor= ["yellow", "red", "green", "purple"];
let started =false;
let level=0;

let h3 = document.querySelector("h3");

document.addEventListener('keypress', function(){
    if(!started){
        console.log("game is started");
        started=true;
    }
    levelUp();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h3.innerText= `Level ${level}`;
    let randIndx = Math.floor(Math.random()*3);
    let randcolor = btncolor[randIndx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    btnflash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp(),3000);
        }
    }
    else{
        h3.innerText=`Game Over! Your score was ${level}. Press a key to try again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnpress(){
    let btn = this;
        btnflash(btn);

        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);

        checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btns");
for(btn of allBtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started = false;
    gameseq=[];
    userseq= [];
    level=0;
}

