const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter() {
    h2.innerText = "The mouse is here.";
    h2.style.color = colors[0];
  },
  handleMouseLeave() {
    h2.innerText = "The mouse is gone.";
    h2.style.color = colors[1];
  },
  handleWindowResize() {
    // 리사이징 이벤트
    h2.innerText = "You just resized.";
    h2.style.color = colors[2];
  },
  handleWindowContextmenu() {
    // 우클릭 시에
    h2.innerText = "It was right click.";
    h2.style.color = colors[3];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("resize", superEventHandler.handleWindowResize);
h2.addEventListener("contextmenu", superEventHandler.handleWindowContextmenu);
// On right click the title
