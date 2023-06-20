const menuHamb = document.querySelector(".menu-hamb");
const btnClose = document.querySelector(".close");
const nav = document.querySelector(".navegacion");

document.addEventListener("DOMContentLoaded", function () {
  menuHamb.addEventListener("click", () => {
    nav.classList.add("active");
    nav.classList.remove("inactive");
  });

  btnClose.addEventListener("click", () => {
    nav.classList.add("inactive");
    nav.classList.remove("active");
  });
});
