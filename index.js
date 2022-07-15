const cell = document.querySelectorAll(".cell");

cell.forEach((el) => {
  el.addEventListener("click", function () {
    this.querySelector(".figure-x").style.display = "flex";
    document.querySelectorAll(".next-playing .icons > *").forEach((el) => {
      el.addEventListener("click", function () {
        el.classList.toggle("show");
      });
    });
  });
});
