const btns = document.querySelectorAll(".btn");
const controler = document.querySelector(".mainbtn");

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
}

btns.forEach(function (btn) {
  controler.addEventListener("click", function () {
    btn.style.backgroundColor = getRandomColor();
  });
});
