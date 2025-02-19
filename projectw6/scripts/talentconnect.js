// talentconnect.js

// Handle mobile navigation toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle the 'active' class to show/hide navigation links
    navLinks.classList.toggle('active');
    
    // Change the button text between hamburger and close (X)
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'block'; // Show the links
        this.innerHTML = '&times;'; // Show X symbol when menu is open
    } else {
        navLinks.style.display = 'none'; // Hide the links
        this.innerHTML = '&#9776;'; // Show hamburger icon when menu is closed
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Modal handling
    document.querySelectorAll('.card a').forEach(link => {
        link.onclick = function (e) {
            e.preventDefault();
            let modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = "block";
        };
    });

    // Close modal functionality
    document.querySelectorAll('.close').forEach(span => {
        span.onclick = function () {
            this.parentElement.parentElement.style.display = "none";
        };
    });

    window.onclick = function (event) {
        if (event.target.className === 'modal') {
            event.target.style.display = "none";
        }
    };

    // Load job listings from jobs.json
    fetch('data/jobs.json')  // path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const listings = data.jobs; // Using JSON 'jobs' array
            const randomListings = [];
            while (randomListings.length < 3 && randomListings.length < listings.length) {
                let randIndex = Math.floor(Math.random() * listings.length);
                if (!randomListings.includes(listings[randIndex])) {
                    randomListings.push(listings[randIndex]);
                }
            }

            const jobListingsContainer = document.getElementById('job-listings');
            randomListings.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.classList.add('job-listing');
                jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p>${job.description}</p>
                `;
                jobListingsContainer.appendChild(jobCard);
            });
        })
        .catch(error => {
            console.error('Error fetching job listings:', error);
            const jobListingsContainer = document.getElementById('job-listings');
            jobListingsContainer.innerHTML = `<p>Error fetching job listings. Please try again later.</p>`;
        });
});

    // Set last modification date
    document.getElementById('last-modification').innerText = document.lastModified;

    // Set the current year
    document.getElementById('current-year').innerText = new Date().getFullYear();


// Wayfinding - Current URL path
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split("/").pop(); 

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); 
        }
    });
});

// Forms 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('webinar-signup-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (form) { // Check if the form exists
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Show the user thank you message
            thankYouMessage.style.display = 'block';
            
            // Optionally, clear the form
            this.reset();
        });
    }
});