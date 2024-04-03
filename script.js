const clicked = document.getElementById("sidebar");
const content = document.querySelector(".content");
let tit = document.querySelector("h1");
let pOne = document.querySelectorAll("p");

btn.addEventListener("click", () => {
  clicked.classList.toggle("active");
});

content.addEventListener("click", () => {
  clicked.classList.remove("active");
});

btn1.addEventListener("click", () => {
  tit.textContent = "Sidebar with Js ";
  tit.style.background = "red";
  tit.style.color = "black";
  tit.style.border = "1px solid black ";
});
