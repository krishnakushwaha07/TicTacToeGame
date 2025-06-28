console.log("Welcome to tic tac toe");

let turn = "X";
let isgameover = false;
// function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check winnner
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  win.forEach((ele) => {
    if (
      boxtext[ele[0]].innerText === boxtext[ele[1]].innerText &&
      boxtext[ele[2]].innerText === boxtext[ele[1]].innerText &&
      boxtext[ele[0]].innerText !== ""
    ) {
      document.querySelector(".turn").innerText =
        boxtext[ele[0]].innerText + " is Winner";
      isgameover = true;
    }
  });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();

      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn For " + turn;
      }
    }
  });
});

// Reset Game Logic
btn.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");

  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });

  // Start new Game by making all reset
  turn = "X";
  document.getElementsByClassName("turn")[0].innerText = "Turn For " + turn;
  isgameover = false;
});
