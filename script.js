let body = document.querySelector("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let print = document.querySelector("h3");
let random = document.querySelector(".btn-random");
let copy = document.querySelector(".btn-copy");

// Function to change gradient color values
function gradientColorChanger() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  print.textContent = body.style.background;
}

// Function to generate random color codes in Hex format
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to copy gradient details from h3 tag to the clipboard of the computer
function copyGradient() {
  let text = document.querySelector("h3").innerText;
  let elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

// Function to generate random colors and update the new color values
function randomColorGenerator() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  gradientColorChanger();
}

gradientColorChanger();

random.addEventListener("click", randomColorGenerator);
copy.addEventListener("click", copyGradient);
color1.addEventListener("input", gradientColorChanger);
color2.addEventListener("input", gradientColorChanger);

console.log(copy);
