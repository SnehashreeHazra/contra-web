



document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const gridContainers = document.querySelectorAll(".grid-container, .grid-container1, .grid-container2, .grid-container3");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove 'active' class from all filters
      filters.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked filter
      filter.classList.add("active");

      // Get the filter type from the clicked filter's data attribute
      const filterType = filter.getAttribute("data-filter");

      // Show/hide grid containers based on the selected filter
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