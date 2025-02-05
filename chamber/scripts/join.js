// Set the current timestamp on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('timestamp').value = new Date().toISOString();
     // Set last modification date
     document.getElementById('last-modification').innerText = document.lastModified;

     // Set the current year
     document.getElementById('current-year').innerText = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function() {
     // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        this.textContent = nav.classList.contains('show') ? '✖ Close' : '☰ Menu'; // Toggle label
    });
});

    // Functions for modal handling
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Close modals when clicking outside of them
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }