const btns = document.querySelectorAll(".btn");

// add event listener to each button, function should change the background color of the button
// to the random color

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = getRandomColor();
  });
});

// function to generate random color
function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    return color;
}


// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
