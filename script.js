
const lightMode = document.querySelector("#modo_light");
const elementSwitch = document.querySelector("#switch");
const img = document.querySelector("#profile img");

elementSwitch.addEventListener("click", () => {
  lightMode.classList.toggle("light");

  if (lightMode.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/Group 21 (2).png");
  } else {
    img.setAttribute("src", "./assets/assets/Group 21 (2).png");
  }
});

