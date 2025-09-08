console.log("Welcome to tic tac toe");
const audio1 = new Audio("Audio/clickaudio.mp3");
const audio2 = new Audio("Audio/gameover.mp3");

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
        boxtext[ele[0]].innerText + " is Winner!";
      document.querySelector(".img").setAttribute("style", "height:200px");
      navigator.vibrate([100,50,100]);
      audio2.play();
      isgameover = true;
    }
  });
};

// check for draw
const checkDraw = () => {
  let boxes = document.getElementsByClassName("boxtext");
  let check = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let flag = false;
  check.forEach((val) => {
    if (boxes[val].innerText === "") {
      flag = true;
    }
  });

  if(flag == false && !isgameover) {
    document.querySelector(".turn").innerText = "Game is Draw!";
    navigator.vibrate([100,50,100]);
    audio2.play();
    isgameover = true;
  }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "" && !isgameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      navigator.vibrate(50);  // for haptic feedback
      audio1.play();
      checkWin();
      checkDraw();
      if (!isgameover) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn For " + turn;
      }
    }
  });
});

// Reset Game Logic
document.getElementById("btn").addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");

  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });

  // Start new Game by making all reset
  turn = "X";
  document.getElementsByClassName("turn")[0].innerText = "Turn For " + turn;
  document.querySelector(".img").setAttribute("style", "height:0px");
  isgameover = false;
});
