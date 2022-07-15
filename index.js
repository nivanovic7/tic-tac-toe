const cell = document.querySelectorAll(".cell");

let isPlayingX = true;
cell.forEach((el) => {
  el.addEventListener("click", function () {
    //display X or O depending on who is playing
    isPlayingX
      ? this.querySelector(".figure-x").classList.add("show")
      : this.querySelector(".figure-o").classList.add("show");
    isPlayingX = !isPlayingX;
    this.style.pointerEvents = "none";

    //toggle whoo is playing next
    document.querySelectorAll(".next-playing .icons > div").forEach((el) => {
      el.classList.toggle("show");
    });
  });
});
