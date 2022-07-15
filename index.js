const cell = document.querySelectorAll(".cell");

cell.forEach((el) => {
  el.addEventListener("click", function () {
    this.querySelector(".figure-x").style.display = "flex";
  });
});
