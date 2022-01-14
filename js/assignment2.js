const h2 = document.querySelector("h2"); // window width 확인용
document.body.style.backgroundColor = "LightSkyBlue";
window.addEventListener("resize", handleWindowResize);

function handleWindowResize() {
  let intViewportWidth = window.innerWidth;
  h2.innerText = intViewportWidth; // window width 확인용

  if (intViewportWidth < 500) {
    document.body.style.backgroundColor = "LightSkyBlue";
  } else if (intViewportWidth < 700) {
    document.body.style.backgroundColor = "MediumPurple";
  } else {
    document.body.style.backgroundColor = "lemonchiffon";
  }
}
