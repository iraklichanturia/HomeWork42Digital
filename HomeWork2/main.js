const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//     // Set a random number as the text content of each button
//     btn.textContent = Math.floor(Math.random() * 100);

//     // Add a click event listener to each button
//     btn.addEventListener("click", function () {
//         var divides = [];
//         for (let i = 1; i <= parseInt(btn.textContent); i++) {
//             if (parseInt(btn.textContent) % i === 0) {
//                 divides.push(i);
//             }
//         }
//         alert(divides.join(", "));
//     });
// });

btns.forEach(function (btn) {
  btn.textContent = Math.floor(Math.random() * 100);

  btn.addEventListener("click", function () {
    var divides = Array.from({ length: parseInt(btn.textContent) })
      .map((_, i) => i + 1)
      .filter((divisor) => parseInt(btn.textContent) % divisor === 0);
    alert(divides.join(", "));
  });
});
