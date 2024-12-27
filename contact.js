const navBar = document.querySelector('.navbar');

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