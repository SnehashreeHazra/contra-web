const navBar = document.querySelector('.nav-bar');

// Listen to scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    // When scrolled down, move navbar to the top
    navBar.style.top = '0';
  } else {
    // Restore the initial position
    navBar.style.top = '7.9%';
  }
});



const grid = document.getElementById("grid");
const links = document.querySelectorAll(".links a");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const layout = e.target.dataset.layout;

    switch (layout) {
      case "all":
        grid.style.gridTemplateColumns = "repeat(2, 1fr)";
        grid.style.gridTemplateRows = "repeat(3, 1fr)";
        break;
      case "commertial":
        grid.style.gridTemplateColumns = "1fr 2fr";
        grid.style.gridTemplateRows = "repeat(2, auto)";
        break;
      case "landscape":
        grid.style.gridTemplateColumns = "repeat(3, 1fr)";
        grid.style.gridTemplateRows = "auto auto";
        break;
      case "interior":
        grid.style.gridTemplateColumns = "1fr 3fr 1fr";
        grid.style.gridTemplateRows = "auto";
        break;
      case "architecture":
        grid.style.gridTemplateColumns = "repeat(4, 1fr)";
        grid.style.gridTemplateRows = "auto auto";
        break;
      default:
        break;
    }
  });
});