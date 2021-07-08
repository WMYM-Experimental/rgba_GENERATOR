//getValue()
//copy()
let outputBox = document.querySelector(".output-text");
let bd = document.body;

function getColorValue() {
  let red = document.getElementById("red-inp").value;
  let green = document.getElementById("green-inp").value;
  let blue = document.getElementById("blue-inp").value;
  let alpha = document.getElementById("alpha-inp").value;
  bd.style.background = `rgba(${red},${green},${blue},${alpha})`;
  outputBox.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}
function copy(params) {}
