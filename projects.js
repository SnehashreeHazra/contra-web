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



// Select all filter tabs and grid containers
const filters = document.querySelectorAll(".filter");
const gridContainers = document.querySelectorAll(".grid-container");

// Add click event listener to each filter tab
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // Remove active class from all filters
    filters.forEach((f) => f.classList.remove("active"));

    // Add active class to the clicked filter
    filter.classList.add("active");

    // Get the filter value from data-filter
    const filterValue = filter.getAttribute("data-filter");

    // Show or hide grid containers based on filter
    gridContainers.forEach((container) => {
      if (filterValue === "all") {
        // If "ALL" is selected, show only the "ALL" layout
        container.classList.toggle(
          "active",
          container.classList.contains("all")
        );
      } else {
        // For other filters, show matching layouts and hide others
        container.classList.toggle(
          "active",
          container.classList.contains(filterValue)
        );
      }
    });
  });
});
