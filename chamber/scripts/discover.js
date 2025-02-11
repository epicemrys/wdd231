document.addEventListener('DOMContentLoaded', function() {
    // Create item data
    const items = [
        {
            name: "Timbuktu Museum",
            address: "1 Museum St, Timbuktu",
            description: "Explore the rich cultural history of Timbuktu.",
            img: "images/timbuktu-museum.webp"
        },
        {
            name: "Grand Mosque of Djinguereber",
            address: "8 Mosque Ave, Timbuktu",
            description: "A historical mosque renowned for its architecture.",
            img: "images/grand-mosque.webp"
        },
        {
            name: "Timbuktu Library",
            address: "33 Library Rd, Timbuktu",
            description: "Home to ancient manuscripts and books.",
            img: "images/timbuktu-library.webp"
        },
        {
            name: "Sankore Madrasah",
            address: "14 Madrasah St, Timbuktu",
            description: "A prestigious medieval learning center.",
            img: "images/sankore-madrasah.webp"
        },
        {
            name: "Bandiagara Escarpment",
            address: "5 Natural Site, Timbuktu",
            description: "A breathtaking natural site with stunning views.",
            img: "images/bandiagara-escarpment.webp"
        },
        {
            name: "Timbuktu Market",
            address: "102 Market Blvd, Timbuktu",
            description: "A vibrant market showcasing local crafts and food.",
            img: "images/timbuktu-market.webp"
        },
        {
            name: "Timbuktu Music Festival",
            address: "77 Festival St, Timbuktu",
            description: "Join the celebration of music and culture every year.",
            img: "images/timbuktu-music-festival.webp"
        },
        {
            name: "Dessert Excursions",
            address: "35 Adventure Rd, Timbuktu",
            description: "Experience, explore the sands of the Sahara.",
            img: "images/desert-excursions.webp"
        }
    ];

    // Populate items into the grid
    const itemsContainer = document.getElementById('items-container');
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('item');
        card.style.gridArea = `item${index + 1}`;
        card.innerHTML = `
            <figure>
                <img src="${item.img}" alt="${item.name}">
                <figcaption>${item.name}</figcaption>
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn more</button>
        `;
        itemsContainer.appendChild(card);
    });

    // Calculate and display visit message
    const visitMessageElement = document.getElementById('visit-message');
    const now = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else {
            visitMessageElement.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }
    
    // Update the last visit in local storage
    localStorage.setItem('lastVisit', now);
    
    // Set the current year and last modification date
    document.getElementById('current-year').innerText = new Date().getFullYear();
    document.getElementById('last-modification').innerText = document.lastModified;

});

// Wayfinding - Get the current URL path
const currentPath = window.location.pathname;

// Select all navigation links
const navLinks = document.querySelectorAll('.nav a');

// Loop through the nav links to find the matching one
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (link.getAttribute('href') === '#' && currentPath === '')) { 
        link.classList.add('active');
    }
});

// Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        this.innerHTML = '&times;'; // X symbol when the menu is open
    } else {
        this.innerHTML = '&#9776;'; // Hamburger icon when the menu is closed
    }
});