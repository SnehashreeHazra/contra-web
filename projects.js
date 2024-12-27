const navBar = document.querySelector('.navbar-section');

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


document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const gridContainers = document.querySelectorAll(".grid-container, .grid-container1, .grid-container2, .grid-container3");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove 'active' class from all filters
      filters.forEach((btn) => btn.classList.remove("active"));

      
      filter.classList.add("active");

      
      const filterType = filter.getAttribute("data-filter");

      
      gridContainers.forEach((container) => {
        if (filterType === "all") {
          // Show all containers
          container.classList.add("active");
        } else if (container.classList.contains(filterType)) {
          // Show only matching containers
          container.classList.add("active");
        } else {
          // Hide non-matching containers
          container.classList.remove("active");
        }
      });
    });
  });
});