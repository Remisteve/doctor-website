// Select all "Read More" buttons
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Function to toggle visibility of the content
function toggleContent(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the target content ID from the button's data attribute
    const targetId = event.currentTarget.getAttribute('data-target');
    const moreContent = document.getElementById(targetId);

    // Toggle the display property of the targeted content
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';  // Show the content
        event.currentTarget.textContent = 'Read Less'; // Change button text to "Read Less"
    } else {
        moreContent.style.display = 'none';  // Hide the content
        event.currentTarget.textContent = 'Read More'; // Change button text back to "Read More"
    }
}

// Attach click event listeners to each "Read More" button
readMoreBtns.forEach(button => {
    button.addEventListener('click', toggleContent);
});

// Handle the second "Read More" button if it's outside the blog section
// (Make sure to update this according to your HTML if needed)
const aboutReadMoreBtn = document.getElementById('readMoreBtn2');
if (aboutReadMoreBtn) {
    aboutReadMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const aboutContent = document.getElementById('moreContent2');

        if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
            aboutContent.style.display = 'block'; // Show the content
            aboutReadMoreBtn.textContent = 'Read Less'; // Change button text to "Read Less"
        } else {
            aboutContent.style.display = 'none'; // Hide the content
            aboutReadMoreBtn.textContent = 'Read More'; // Change button text back to "Read More"
        }
    });
}
