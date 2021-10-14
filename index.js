let outputBox = document.querySelector(".output");

function getColorValue() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let alpha = document.getElementById("alpha").value;
  document.body.style.background =
    "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
  outputBox.innerHTML = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function copyColorToClipBoard() {
  let textColor = document.getElementById("output");
  textColor.select();
  document.execCommand('copy');
  console.log("COLOR COPIED!!");
}

getColorValue();
copyColorToClipBoard()
