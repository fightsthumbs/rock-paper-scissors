const button3 = document.querySelector("#button-3");
console.log(button3);

function giveRan() {
  let ranNum = Math.floor(Math.random()*80);
return ranNum;
}

button3.addEventListener("click",() => alert("Jen alarmo \n Jen hazarda nombro: " + giveRan()))

//Ludo
const userPlay = 2;
const options = {
  1:"Rock",
  2:"Paper",
  3:"Scissors"
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resultComputer = document.querySelector("#computerResult");
const resultUser = document.querySelector("#userResult");
const resultFinal = document.querySelector("#final-result");


rockButton.addEventListener("click", () => whoWins(1));
paperButton.addEventListener("click", () => whoWins(2));
scissorsButton.addEventListener("click", () => whoWins(3));





function computerPlay(){

  let ranNum = Math.floor(Math.random()*3)+1;
  return ranNum;
}

function whoWins(user) {
  let comp = computerPlay();
  let finalResult = ""
  console.log("La uzanto elektis " + options[user]);
  console.log("La Komputilo elektis " + options[comp]);
  if (comp === user) {
    console.log("Draw")
    finalResult = "It's a draw 🤷‍♀️";

  } else if (comp == 1 && user == 3) {
    console.log("You lose");
    finalResult = `You lose! 😣`;
  } else if (comp > user)
  {
    finalResult = `You lose! 😣`
  } else {
    console.log("You win")
    finalResult = `You win!🤘😁🎉`
  }

  resultComputer.innerHTML = `<span class="icon icon-${options[comp].toLowerCase()}"></span>`;
  resultUser.innerHTML = `<span class="icon icon-${options[user].toLowerCase()}"></span>`;
  resultFinal.textContent = finalResult;
  
}

let compElection = computerPlay();

console.log(compElection);


// whoWins(userPlay);
// console.log("Console elektis " + options[compElection]);
// console.log("Vi elektis " + options[userPlay]);

