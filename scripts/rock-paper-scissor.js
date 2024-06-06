
function getComputerChoice() {
  const computerMove = Math.random();
    
  if (computerMove <= 1/3) {
    return 'rock'
  } else if ((computerMove > 1/3) && (computerMove <= 2/3)) {
    return 'paper'
    } else {
      return 'scissors'
      }
      }

function getHumanChoice() {
  let humanMove = prompt('Make a move: 1.rock 2.paper 3.scissors')
  if ((humanMove.toLowerCase() === 'rock') || (humanMove.toLowerCase() === 'paper') || (humanMove.toLowerCase() === 'scissors')) {
    return humanMove
  } else {
    alert('Please enter a valid move');
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
 let result = '';

 if (humanChoice === 'rock') {
   if (computerChoice === 'rock') {
     result = "It's even";
     } else if (computerChoice === 'paper') {
       result = 'You lose';
   } else if (computerChoice == 'scissors') {
     result = 'You win';
   }

   } else if (humanChoice === 'paper') {
   if (computerChoice === 'rock') {
     result = "You win";
   } else if (computerChoice === 'paper') {
     result = "It's even";
   } else if (computerChoice == 'scissors') {
     result = 'You lose';
   }

   } else if (humanChoice === 'scissors') {
   if (computerChoice === 'rock') {
     result = "You lose";
   } else if (computerChoice === 'paper') {
     result = 'You win';
   } else if (computerChoice == 'scissors') {
     result = "It's even";
   }
 }
 console.log(`Human picked ${humanChoice}
Computer picked ${computerChoice}
${result}`)
return result;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  
  for (let i = 0; i < 5; i++) {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const getResult = playRound(humanSelection, computerSelection);

    if (getResult === 'You win') {
      humanScore++;
    } else if (getResult === 'You lose') {
      computerScore++;
    } 
    console.log(`Human ${humanScore} - Computer ${computerScore}`)
  }
  
  }
  

  playGame();

