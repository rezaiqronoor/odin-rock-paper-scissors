const rock = "rock";
const paper = "paper";
const scissors = " scissors";

const getComputerChoice = () => {
   const numChoice = Math.floor(Math.random() * 3) + 1;
   const result = numChoice == 1 ? rock : numChoice == 2 ? paper : scissors;
   return result;
};

const playRound = (playerChoice, computerChoice) => {
   const roundDOM = document.querySelector(".round");
   const playerChoiceDOM = document.querySelector(".playerChoice");
   const computerChoiceDOM = document.querySelector(".computerChoice");
   const roundWinnerDOM = document.querySelector(".roundWinner");

   // It breaks after 10, fix it in the future.
   const currentRoundCount = roundDOM.textContent.charAt(
      roundDOM.textContent.length - 1
   );
   roundDOM.textContent = "Round " + (Number(currentRoundCount) + 1);
   playerChoiceDOM.textContent = "Player's Choice: " + playerChoice;
   computerChoiceDOM.textContent = "Computer's Choice: " + computerChoice;

   let winner;

   switch (playerChoice) {
      case "rock":
         computerChoice === "rock"
            ? (winner = "tied")
            : computerChoice === "paper"
            ? (winner = "computer")
            : (winner = "player");
      case "paper":
         computerChoice === "rock"
            ? (winner = "player")
            : computerChoice === "paper"
            ? (winner = "tied")
            : (winner = "computer");
      case "scissors":
         computerChoice === "rock"
            ? (winner = "computer")
            : computerChoice === "paper"
            ? (winner = "player")
            : (winner = "tied");
      default: {
      }
   }

   roundWinnerDOM.textContent = "Round Winner: " + winner;
   calcScore(winner, Number(currentRoundCount));
};

const calcScore = (winner, roundCount) => {
   const playerScoreDOM = document.querySelector(".playerScore");
   const computerScoreDOM = document.querySelector(".computerScore");

   if (winner === "player") {
      const currentScore = playerScoreDOM.textContent.charAt(
         playerScoreDOM.textContent.length - 1
      );
      playerScoreDOM.textContent = "Player: " + (Number(currentScore) + 1);
   } else if (winner === "computer") {
      const currentScore = computerScoreDOM.textContent.charAt(
         computerScoreDOM.textContent.length - 1
      );
      computerScoreDOM.textContent = "Computer: " + (Number(currentScore) + 1);
   } else {
      const playerCurrentScore = playerScoreDOM.textContent.charAt(
         playerScoreDOM.textContent.length - 1
      );
      playerScoreDOM.textContent =
         "Player: " + (Number(playerCurrentScore) + 1);
      const computerCurrentScore = computerScoreDOM.textContent.charAt(
         computerScoreDOM.textContent.length - 1
      );
      computerScoreDOM.textContent =
         "Computer: " + (Number(computerCurrentScore) + 1);
   }

   if (roundCount === 4) {
      const playerScore = playerScoreDOM.textContent.charAt(
         playerScoreDOM.textContent.length - 1
      );
      const computerScore = computerScoreDOM.textContent.charAt(
         computerScoreDOM.textContent.length - 1
      );

      Number(playerScore) > Number(computerScore)
         ? alert("Winner: Player!")
         : Number(playerScore) < Number(computerScore)
         ? alert("Winner: Computer")
         : alert("TIED!");
   }
};

const optionBtns = document.querySelectorAll(".btn");
optionBtns.forEach((element) => {
   element.addEventListener("click", (e) => {
      const roundDOM = document.querySelector(".round");
      // It breaks after 10, fix it in the future.
      const currentRoundCount = roundDOM.textContent.charAt(
         roundDOM.textContent.length - 1
      );

      if (Number(currentRoundCount) === 5) location.reload();
      else {
         const selected = e.target.getAttribute("class").split(" ")[1];
         playRound(selected, getComputerChoice());
      }
   });
});
