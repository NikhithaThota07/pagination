function paginate(items, itemsPerPage, container) {
    // Calculate total number of pages
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    // Function to display items for a specific page
    function displayPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(page * itemsPerPage, items.length);
      container.innerHTML = ""; // Clear previous content
  
      for (let i = startIndex; i < endIndex; i++) {
        const item = items[i];
        // Create HTML element for each item (replace with your item display logic)
        const itemElement = document.createElement("div");
        itemElement.textContent = item;
        container.appendChild(itemElement);
      }
    }
  
    // Function to update pagination controls
    function updatePagination() {
      const controls = document.getElementById("pagination-controls");
      controls.innerHTML = ""; // Clear previous controls
  
      // Create buttons for previous and next page (if applicable)
      if (currentPage > 1) {
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.addEventListener("click", () => {
          currentPage--;
          displayPage(currentPage);
          updatePagination();
        });
        controls.appendChild(prevButton);
      }
  
      // Create page number buttons
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.classList.add("page-number"); // Add CSS class for styling
  
        if (i === currentPage) {
          pageButton.classList.add("active"); // Mark current page as active
        }
  
        pageButton.addEventListener("click", () => {
          currentPage = i;
          displayPage(currentPage);
          updatePagination();
        });
        controls.appendChild(pageButton);
      }
  
      if (currentPage < totalPages) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", () => {
          currentPage++;
          displayPage(currentPage);
          updatePagination();
        });
        controls.appendChild(nextButton);
      }
    }
  
    // Initial variables
    let currentPage = 1;
  
    // Display first page of items
    displayPage(currentPage);
  
    // Update and display pagination controls
    updatePagination();
  }
  
  // Example usage: (Replace with your actual data)
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];
  const itemsPerPage = 3;
  const container = document.getElementById("items-container");
  
  paginate(items, itemsPerPage, container);
//   ................................................MULTIPLE FILE UPLOADING.....................................................................
const uploadForm = document.getElementById("upload-form");
const uploadButton = document.getElementById("upload-button");

uploadButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const files = document.getElementById("file-input").files;

  if (files.length === 0) {
    alert("Please select at least one file to upload.");
    return;
  }

  // Handle file uploads here (using XMLHttpRequest or Fetch API)
  // ... your upload logic here ...

  // Example using Fetch API (replace with your server-side logic)
  fetch("/upload", {
    method: "POST",
    body: new FormData(uploadForm),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Upload successful:", data);
      // Handle successful upload response
    })
    .catch((error) => {
      console.error("Upload failed:", error);
      // Handle upload error
    });
});
