 // JavaScript to toggle the additional content
 document.getElementById('readMoreBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const moreContent = document.getElementById('moreContent');

    // Toggle the display of the additional content
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block"; // Show more content
        this.textContent = "Read less"; // Change button text
    } else {
        moreContent.style.display = "none"; // Hide more content
        this.textContent = "Read more"; // Change button text back
    }
});