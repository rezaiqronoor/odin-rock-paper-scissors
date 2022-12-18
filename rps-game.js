const rock = "rock";
const paper = "paper";
const scissors = " scissors";

const getComputerChoice = () => {
   const numChoice = Math.floor(Math.random() * 3) + 1;
   const result = numChoice == 1 ? rock : numChoice == 2 ? paper : scissors;
   return result;
};

const getPlayerChoice = () => {
   const playerChoice = prompt("Type Rock, Paper or Scissors to choose your pick").toLowerCase();

   if(playerChoice === "rock" || playerChoice === "paper" || playerChoice || "scissors") {
      return playerChoice;
   }
   else getPlayerChoice();
};

const playRound = (playerChoice, computerChoice) => {
   let winner;

   switch(playerChoice) {
      case "rock": computerChoice === "rock" ? winner = "tied" : computerChoice === "paper" ? winner = "computer" : winner = "player";
      case "paper": computerChoice === "rock" ? winner = "player" : computerChoice === "paper" ? winner = "tied" : winner = "computer";
      case "scissors": computerChoice === "rock" ? winner = "computer" : computerChoice === "paper" ? winner = "player" : winner = "tied";
      default: {};
   }

   return winner;
};

const game = () => {
   let roundResults = []
   for(let i = 0; i < 5; i++) {
      const result = playRound(getPlayerChoice(), getComputerChoice());
      console.log(result);
   }
}

game();



