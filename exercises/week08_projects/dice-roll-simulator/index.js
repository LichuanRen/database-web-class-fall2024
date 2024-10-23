const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history");

const historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}


function updateRollHistory() {
  const lastRollIndex = historyList.length - 1;  // Get the last roll index
  const listItem = document.createElement("li");
  listItem.innerHTML = `Roll ${lastRollIndex + 1}: <span>${getDiceFace(historyList[lastRollIndex])}</span>`;
  rollHistoryEl.appendChild(listItem);  // Append the new result
}


function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonEl.addEventListener("click", rollDice);
