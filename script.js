// First "Read More" button
document.getElementById('readMoreBtn1').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior

  const moreContent = document.getElementById('moreContent1');

  // Toggle the display of the additional content
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block"; // Show more content
    this.textContent = "Read Less"; // Change button text
  } else {
    moreContent.style.display = "none"; // Hide more content
    this.textContent = "Read More"; // Change button text back
  }
});

// Second "Read More" button
document.getElementById('readMoreBtn2').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior

  const moreContent = document.getElementById('moreContent2');

  // Toggle the display of the additional content
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block"; // Show more content
    this.textContent = "Read Less"; // Change button text
  } else {
    moreContent.style.display = "none"; // Hide more content
    this.textContent = "Read More"; // Change button text back
  }
});

// Third "Read More" button
document.getElementById('readMoreBtn3').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior

  const moreContent = document.getElementById('moreContent3');

  // Toggle the display of the additional content
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block"; // Show more content
    this.textContent = "Read Less"; // Change button text
  } else {
    moreContent.style.display = "none"; // Hide more content
    this.textContent = "Read More"; // Change button text back
  }
});
