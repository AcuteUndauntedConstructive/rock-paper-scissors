let userScore= 0;
let compScore= 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice =() =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);

    return option[randIdx];
    //rock ,paper,scissors 
};
const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "game was draw.";
    msg.style.backgroundColor = "black";
};
const showWinner = (userWin , userChoice ,compChoice ) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;

        // console.log("you lose!");
        msg.innerText =`you lost! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);
    // generate computer choice
    if (userChoice=== compChoice){
        drawGame();

    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
//scissor,paper
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false:true;
//scissor,rock
        }else{
            //rock ,paper
            userWin = compChoice === "rock"? false:true;

        }
        showWinner(userWin, userChoice ,compChoice);
    }



};

choices.forEach((choice) =>  {
    // console.log(choice);
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked.",userChoice);
        playGame(userChoice);



    });
});

