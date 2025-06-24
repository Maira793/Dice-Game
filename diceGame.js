const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const start = document.getElementById("rolldice");
const restart = document.getElementById("restart");
const dice = document.getElementById("dice");
const hold = document.getElementById("hold");
const rolldice = document.getElementById("rolldice");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const currentScore = document.getElementById("currentScore");

//=====================VARIABLES======================

let p1 = {
    score: 0,
    turn: true,
  },
  p2 = {
    score: 0,
    turn: false,
  };

let temp = 0;

const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;

//===============FUNCTIONS===============================

const playerSelection = () => {
  handleTurn();
  tocheckWinner();
  temp = 0;
  currentScore.innerHTML = 0;
};

const handleTurn = ()=>{
  if (p1.turn) {
    player2.classList.add("active");
    player2.classList.remove("inactive")
    player1.classList.add("inactive");
    player1.classList.remove("active")
    p1.score += temp ;
    score1.innerHTML = p1.score;
  } else {
    player1.classList.add("active");
    player1.classList.remove("inactive")
    player2.classList.remove("active")
    player2.classList.add("inactive");
    p2.score +=temp;
    score2.innerHTML = p2.score;
  }

  p1.turn = !p1.turn
  p2.turn = !p2.turn
}


const winnerSelection = (activePlayer, inactivePlayer, activeScore) => {
  activePlayer.classList.add("win");
  inactivePlayer.classList.add("lose");
  disabled();
};

const tocheckWinner = () => {
  
  if (p1.score >= 20) {
    winnerSelection(player1, player2, score1);
  } else if(p2.score >= 20) {
    winnerSelection(player2, player1, score2);
  }
  
};

// Example usage:

const handleDiceImage = (num) =>{

  if(num == 1)
  {
    
    temp = 0;
    currentScore.innerHTML = 0;
    handleTurn()
  }

  dice.innerHTML = `<img src='../res/dice${num}.png'>`;
}


const diceChoices = () => {
  const num = getRandomNumber();
  handleDiceImage(num)
  if(num !=1)
  {
    temp += num
  currentScore.innerHTML = temp;
  }
  
  
};




const disabled = () => {
  hold.setAttribute("disabled", "true");
  rolldice.setAttribute("disabled", "true");
  dice.setAttribute("disabled", "true");
};

const enabled = () => {
  hold.removeAttribute("disabled");
  rolldice.removeAttribute("disabled");
  dice.removeAttribute("disabled");
};

rolldice.addEventListener("click", diceChoices);
hold.addEventListener("click", playerSelection);
restart.addEventListener("click", () => {
  enabled();
  p1 = {
    score : 0,
    turn : true
  }
  p2 = {
    score : 0,
    turn : false,
  }


  player1.classList.add("active");
  player1.classList.remove("inactive");

  player2.classList.add("inactive");
  player2.classList.remove("active");
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  temp = 0
  currentScore.innerHTML = 0;
  player1.classList.remove("win");
  player1.classList.remove("lose");
  player2.classList.remove("win");
  player2.classList.remove("lose");
  
});
