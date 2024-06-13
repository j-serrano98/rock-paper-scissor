let body = document.querySelector('body');

let humanScore = 0;
let computerScore = 0;

body.addEventListener('click', (e) => {
  let target = e.target;

  switch(target.id) {
    case 'rock':
      playGame('rock');
      break;
    case 'paper':
      playGame('paper');
      break;
    case 'scissors':
      playGame('scissors');
      break;
  }
});

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


function playGame(humanChoice) {
  
  let humanSelection = humanChoice;
  let computerSelection = getComputerChoice();

  const getResult = playRound(humanSelection, computerSelection);

  if (getResult === 'You win') {
    humanScore++;
  } else if (getResult === 'You lose') {
    computerScore++;
  } 

  
  if (humanScore === 5) {
    alert('Congrats, You win!');
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert('Sorry, better luck for the next time');
    humanScore = 0;
    computerScore = 0;
  }
  showResults(humanSelection, computerSelection);
}

function showResults(humanChoice, computerChoice) {
  const showMoves = document.querySelector('.show-moves');
  const resultsContainer = document.querySelector('.results');
  showMoves.textContent = `You picked: ${humanChoice} - Computer picked: ${computerChoice}`
  resultsContainer.textContent = `Results: Human: ${humanScore} - Computer: ${computerScore}`;
}

