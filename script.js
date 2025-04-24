// script.js

// Function to alert when a blog post is clicked
document.addEventListener('DOMContentLoaded', function() {
    const blogLinks = document.querySelectorAll('article h3 a');

    blogLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert('You clicked on: ' + this.innerText);
            // Here you can redirect to the actual blog post if you have a URL
            // window.location.href = this.href;
        });
    });
});