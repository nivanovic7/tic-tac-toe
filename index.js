const cell = document.querySelectorAll(".cell");
const ic = document.querySelectorAll(".next-playing .icons > div");

console.log(ic);
cell.forEach((el) => {
  el.addEventListener("click", function () {
    this.querySelector(".figure-x").style.display = "flex";
    ic.forEach((el) => {
      el.classList.toggle("show");
    });
  });
});
