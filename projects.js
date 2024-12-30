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
  const allContainer = document.querySelector(".grid-container.all");
  const otherContainers = document.querySelectorAll(
    ".grid-container1, .grid-container2, .grid-container3, .grid-container.landscape"
  );

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove 'active' class from all filters
      filters.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked filter
      filter.classList.add("active");

      // Get the filter type from the data attribute
      const filterType = filter.getAttribute("data-filter");

      if (filterType === "all") {
        // Show only the 'all' layout
        allContainer.classList.add("active");
        otherContainers.forEach((container) => container.classList.remove("active"));
      } else if (filterType === "landscape") {
        // Show only the 'landscape' layout
        otherContainers.forEach((container) => {
          if (container.classList.contains(filterType)) {
            container.classList.add("active");
          } else {
            container.classList.remove("active");
          }
        });
        allContainer.classList.remove("active");
      } else {
        // Show the layout matching the filter and hide others
        otherContainers.forEach((container) => {
          if (container.classList.contains(filterType)) {
            container.classList.add("active");
          } else {
            container.classList.remove("active");
          }
        });
        allContainer.classList.remove("active");
      }
    });
  });
});

