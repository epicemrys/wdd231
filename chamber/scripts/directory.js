async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function displayMembers(members) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div>
                <h4>${member.name}</h4>
                <p>${member.additional_info}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>URL:</strong> <a href="${member.url}" target="_blank">${member.url}</a></p>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    // Set default view to grid
    gridContainer.classList.add('grid-view');
    changeView('grid'); // Set initial view to grid
}

// Add view switching functionality
function changeView(view) {
    const gridContainer = document.querySelector('.grid-container');
    
    if (view === 'grid') {
        gridContainer.classList.remove('list-view');
        gridContainer.classList.add('grid-view');
    } else {
        gridContainer.classList.add('list-view');
        gridContainer.classList.remove('grid-view');
    }
}

// Event listeners for view toggles
document.getElementById('grid-view').addEventListener('click', () => {
    changeView('grid');
    document.getElementById('grid-view').classList.add('active');
    document.getElementById('list-view').classList.remove('active');
});

document.getElementById('list-view').addEventListener('click', () => {
    changeView('list');
    document.getElementById('list-view').classList.add('active');
    document.getElementById('grid-view').classList.remove('active');
});

// Fetch and display members on page load
document.addEventListener('DOMContentLoaded', fetchMembers);

menuToggle.addEventListener('click', () => {
    console.log('Menu toggled');
    nav.classList.toggle('active');
});

document.querySelector('.nav').style.display = 'flex';


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        // Toggle the active class to show/hide menu links
        nav.classList.toggle('active');

        // Change the menu toggle icon from hamburger to 'X' and vice versa
        if (nav.classList.contains('active')) {
            menuToggle.innerHTML = '&times;'; // Change to "X"
        } else {
            menuToggle.innerHTML = '&#9776;'; // Change back to hamburger
        }
    });
});
