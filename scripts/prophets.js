// TheURL endpoint for fetching the prophets data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div where cards will be displayed
const cards = document.querySelector('#cards');
let allProphets = []; // Store all prophets for filtering


// This will fetch prophet data from the JSON resource
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    allProphets = data.prophets;
    // Call the function to display the prophets data
    displayProphets(data.prophets); 
}

// Function display the list of prophets
const displayProphets = (prophets) => {
    // Clear previous content
    cards.innerHTML = '';

    // Iterate over each prophet to create a card
    prophets.forEach((prophet) => {
        // Create a section for each prophet
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthInfo = document.createElement('p');
        let deathInfo = document.createElement('p');
        let lengthInfo = document.createElement('p');
        let orderInfo = document.createElement('p');
        let birthplaceInfo = document.createElement('p');
        let childrenInfo = document.createElement('p');

        //Content of the heading
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set attributes for the image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Additional information about the prophet
        birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;
        deathInfo.textContent = `Died: ${prophet.death ? prophet.death : 'N/A'}`;
        lengthInfo.textContent = `Length of Presidency: ${prophet.length} years`;
        orderInfo.textContent = `Order: ${prophet.order}`;
        birthplaceInfo.textContent = `Birthplace: ${prophet.birthplace}`;
        childrenInfo.textContent = `Number of Children: ${prophet.numofchildren !== undefined ? prophet.numofchildren : 'N/A'}`;

        // Append the heading, image, and additional information to the card
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthInfo);
        card.appendChild(deathInfo);
        card.appendChild(lengthInfo);
        card.appendChild(orderInfo);
        card.appendChild(birthplaceInfo);
        card.appendChild(childrenInfo);

        // Append this card to the main cards div
        cards.appendChild(card);
    });
}

// Call the function to fetch and display the data
getProphetData();

// Filter functions
const filterButtons = document.querySelectorAll('#filter-buttons button');

// Filter functionality
filterButtons[0].addEventListener('click', () => {
    const filtered = allProphets.filter(prophet => prophet.birthplace.includes('Utah'));
    displayProphets(filtered);
});
filterButtons[1].addEventListener('click', () => {
    const filtered = allProphets.filter(prophet => !prophet.birthplace.includes('United States'));
    displayProphets(filtered);
});
filterButtons[2].addEventListener('click', () => {
    const filtered = allProphets.filter(prophet => prophet.length >= 10); // Filter prophets with 10+ years of presidency
    displayProphets(filtered);
});
filterButtons[3].addEventListener('click', () => {
    const filtered = allProphets.filter(prophet => prophet.numofchildren >= 10); // Filter prophets with 10+ children
    displayProphets(filtered);
});
filterButtons[4].addEventListener('click', () => {
    const filtered = allProphets.filter(prophet => prophet.order <= 5); // Filter first 5 prophets based on order
    displayProphets(filtered);
});

// Reset to show all prophets again, if needed
const resetButton = document.createElement('button');
resetButton.textContent = 'Show All Prophets';
resetButton.addEventListener('click', () => displayProphets(allProphets));
document.querySelector('#filter-buttons').appendChild(resetButton);