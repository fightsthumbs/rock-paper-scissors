const button3 = document.querySelector("#button-3");
// console.log(button3);

function giveRan() {
  let ranNum = Math.floor(Math.random()*80);
return ranNum;
}

button3.addEventListener("click",() => alert("Jen alarmo \n Jen hazarda nombro: " + giveRan()))

//Ludo
const options = {
  1:"Rock",
  2:"Paper",
  3:"Scissors"
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetBtn = document.getElementById('reset-button');

const resultComputer = document.querySelector("p#computerResult>span");
const resultUser = document.querySelector("p#userResult>span");
const resultFinal = document.querySelector("#final-result");

const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

const cardContainer = document.querySelectorAll(".cards-container");

[rockButton,paperButton,scissorsButton].forEach(btn => btn.addEventListener("click", (e) => {
  let num = parseInt(e.target.getAttribute("data-key")) 
  whoWins(num)
  // console.log(num)
}))

resetBtn.addEventListener("click", resetGame)

// rockButton.addEventListener("click", (e) => { 
//   let num = parseInt(e.target.getAttribute("data-key")) 
//   whoWins(num)
//   console.log(num)
// });
// paperButton.addEventListener("click", () => whoWins(2));
// scissorsButton.addEventListener("click", () => whoWins(3));

// computer- user
let global_result = [0,0]


function resetGame(){
  console.log("El juego ha empezado de nuevo");
  resultFinal.textContent = "";
  [resultComputer,resultUser].forEach(result => result.setAttribute("class",""))
  global_result = [0,0];
  [userScore, computerScore].forEach(score => score.textContent = "")
  cardContainer[1].classList.remove("win-highlight");
  cardContainer[0].classList.remove("win-highlight");

}

function updateScores(x) {

  
  cardContainer.forEach(card => card.classList.remove("win-highlight"))
  if (x > -1) {
    cardContainer[x].classList.add("win-highlight");
  }
  global_result[x] += 1; 
  userScore.textContent = `: ${global_result[1]}`;
  computerScore.textContent = `: ${global_result[0]}`;

}

function computerPlay(){
  let ranNum = Math.floor(Math.random()*3)+1;
  return ranNum;
}

function whoWins(user) {
  resultFinal.textContent = "";
  let comp = computerPlay();
  let finalResult = "";
  let roundWinner = "";
  console.log("La uzanto elektis " + options[user]);
  console.log("La Komputilo elektis " + options[comp]);

  if (comp === user) {
    console.log("Draw")
    roundWinner = -1;

    

  } else if ((user == 1) && (comp == 3)) {
    
    console.log("You win");
    roundWinner = 1;


  } else if (comp > user || (comp === 1 && user === 3))
  {
    console.log("You lose")
    roundWinner = 0;

  } else {
    console.log("You win")
    roundWinner = 1;

  }
  
  updateScores(roundWinner);

  resultComputer.setAttribute("class",`icon-${options[comp].toLowerCase()} icon`);
  resultUser.setAttribute("class",`icon-${options[user].toLowerCase()} icon`);

 

  // resultComputer.innerHTML = `${options[comp]} <span class="icon icon-${options[comp].toLowerCase()}"></span>`;
  // resultUser.innerHTML = `${options[user]} <span class="icon icon-${options[user].toLowerCase()}"></span>`;

  
  if(global_result[0] === 10 || global_result[1] === 10) {
    finalResult = global_result[0] < global_result[1] ? "You win!🤘😁🎉":"You lose! 😣"
    resultFinal.textContent = finalResult;
    global_result = [0,0]
    console.log("El juego se ha terminado");
  }
  console.log(`Computer ${global_result[0]}:${global_result[1]} User`);
  
}

let compElection = computerPlay();

console.log(compElection);


// whoWins(userPlay);
// console.log("Console elektis " + options[compElection]);
// console.log("Vi elektis " + options[userPlay]);

