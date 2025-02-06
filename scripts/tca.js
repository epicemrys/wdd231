// TCA Javascripts

// Function to handle navigation highlights
function highlightCurrentPage() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

// Example function using localStorage
function saveUserData(name) {
    localStorage.setItem('userName', name);
}

// Function to fetch job data
async function fetchJobData() {
    try {
        const response = await fetch('https://');
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error('Error fetching job data:', error);
    }
}

// Function to display jobs in a modal
function displayJobs(jobs) {
    const modal = document.getElementById('jobModal');
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        modal.appendChild(jobElement);
    });
}

// Event Listener for DOM Content Load
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentPage();
    fetchJobData();  // Will fetch the job data on page load
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.getElementById("nav-links");
    
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "&#10005;"; // Change to 'X' when active
        } else {
            menuToggle.innerHTML = "&#9776;"; // Change back to hamburger
        }
    });
});