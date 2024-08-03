let choices=document.querySelectorAll(".btn");
let msgBox=document.querySelector(".msg");
let userScore=document.querySelector(".user-score");
let compScore=document.querySelector(".Comp-score");
let CompOption=["rock","paper","scissors"];
let userChoice="";
let compChoice="";
let indexCalc=0;
let Cscore=0;
let Uscore=0;

let msgPrinter=(win)=>{
    if(win==""){
        msgBox.innerText="Tie! Play your move"
        // console.log("tie")
    }else{
        msgBox.innerText=`${win} Win`
    }
}

let winChecker=()=>{
    let win="";
    if(userChoice==compChoice || compChoice==userChoice){
        win="";
        msgPrinter(win);
        return;
    }
    if (compChoice=="rock" && userChoice=="scissors" || compChoice=="scissors"&& userChoice=="paper" ||  compChoice=="paper" && userChoice == "rock" ){
        win="Computer";
        Cscore++;
        compScore.textContent=Cscore;
        compScore.style.color="#4e6b47"
        msgPrinter(win);
    }else if( userChoice =="rock" && compChoice == "scissors" ||  userChoice == "paper" && compChoice == "rock" || compChoice=="scissors"&& userChoice=="paper" ){
        win="You";
        Uscore++;
        userScore.style.color="#4e6b47"
        userScore.textContent=Uscore;
        msgPrinter(win);
    }
    // console.log(`User Choice:${userChoice}`)
    // console.log(`Comp Choice:${compChoice}`)
}


let valueAssigner = (choiceId)=>{
    if(choiceId=="rock"){
        userChoice="rock";
    }else if(choiceId=="paper"){
        userChoice="paper";
    }else{
        userChoice="scissors";
    }
}



choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        indexCalc = Math.floor(Math.random() * 3);
        compChoice=CompOption[indexCalc]
        const choiceId=choice.getAttribute("id")
        valueAssigner(choiceId);
        winChecker();
    })
});

