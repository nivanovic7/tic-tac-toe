const cell = document.querySelectorAll(".cell");
const quitModal = document.querySelector(".quit");

let isPlayingX = true;
let xPlayerMoves = [];
let oPlayerMoves = [];

const showMessage = function () {
  document.querySelector(".modal").classList.add("show");
  const figureX = document.querySelector(".modal .icon-x");
  const figureO = document.querySelector(".modal .icon-o");
  isPlayingX ? figureX.classList.add("show") : figureO.classList.add("show");
};

const checkWin = function (moves) {
  console.log(moves.includes("1"));
  if (
    (moves.includes(1) && moves.includes(2) && moves.includes(3)) ||
    (moves.includes(4) && moves.includes(5) && moves.includes(6)) ||
    (moves.includes(7) && moves.includes(8) && moves.includes(9)) ||
    (moves.includes(1) && moves.includes(4) && moves.includes(7)) ||
    (moves.includes(2) && moves.includes(5) && moves.includes(8)) ||
    (moves.includes(3) && moves.includes(6) && moves.includes(9)) ||
    (moves.includes(1) && moves.includes(5) && moves.includes(9)) ||
    (moves.includes(3) && moves.includes(5) && moves.includes(8))
  ) {
    showMessage();
  }
};

cell.forEach((el) => {
  el.addEventListener("click", function () {
    //display X or O depending on who is playing
    if (isPlayingX) {
      this.querySelector(".figure-x").classList.add("show");
      xPlayerMoves.push(+this.dataset.id);
      checkWin(xPlayerMoves);
    } else {
      this.querySelector(".figure-o").classList.add("show");
      oPlayerMoves.push(+this.dataset.id);
      checkWin(oPlayerMoves);
    }

    isPlayingX = !isPlayingX;
    this.style.pointerEvents = "none";

    //toggle whoo is playing next
    document.querySelectorAll(".next-playing .icons > div").forEach((el) => {
      el.classList.toggle("show");
    });
  });
});

quitModal.addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("show");
  const modalFigureX = document.querySelector(".modal .icon-x");
  const modalFigureO = document.querySelector(".modal .icon-o");
  const figureX = document.querySelector(".next-playing .icon-x");
  const figureO = document.querySelector(".next-playing .icon-o");

  resetBoard();
  xPlayerMoves = [];
  oPlayerMoves = [];

  figureO.classList.remove("show");
  figureX.classList.add("show");

  modalFigureX.classList.remove("show");
  modalFigureO.classList.remove("show");
  isPlayingX = true;
});

const resetBoard = function () {
  cell.forEach((el) => {
    el.querySelector(".figure-o").classList.remove("show");
    el.querySelector(".figure-x").classList.remove("show");
    el.style.pointerEvents = "auto";
  });
};
