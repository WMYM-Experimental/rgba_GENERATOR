let outputBox = document.querySelector(".output");

function getColorValue() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let alpha = document.getElementById("alpha").value;
  document.body.style.background =
    "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
  outputBox.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}

function copyColor() {
  let textColor = document.createElement("text-area");
  textColor.value = outputBox.textContent;
  document.body.appendChild(textColor);
  textColor.select();
  document.execCommand("copy");
  document.body.removeChild(textColor);
  console.log("Color Copied!")
}

getColorValue();
copy();
