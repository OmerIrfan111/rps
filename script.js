let userScore=0;
let compScore=0;


const choices = document.querySelectorAll(".choice img");
choices.forEach((image)=>{
    image.addEventListener("click", ()=>{
        const choiceID = image.getAttribute("id");
        console.log("You clicked: " + choiceID);
        playGame(choiceID);
    });
});
const userWin = null;
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        console.log("It is a draw!");
         let textBox = document.querySelector("#msg");
        textBox.innerText = `It is a draw! Opponent chose ${compChoice} and you chose ${userChoice}`;
        return;
    }
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        console.log("You win!");
        let textBox = document.querySelector("#msg");
        textBox.innerText = `You win! Opponent chose ${compChoice} and you chose ${userChoice}`;
        userScore++;
        const yourScore= document.querySelector("#yrsc");
        yourScore.innerText = userScore;

    } else {
        console.log("Computer wins!");
        let textBox = document.querySelector("#msg");
        textBox.innerText = `Computer wins! Opponent chose ${compChoice} and you chose ${userChoice}`;
        compScore++;
        const oppScore= document.querySelector("#opsc");
        oppScore.innerText = compScore;
    }
    console.log(`User: ${userScore} | Computer: ${compScore}`);
};

const genCompChoice=()=>{
    const randIndx= Math.floor(Math.random()*3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randIndx];
}
