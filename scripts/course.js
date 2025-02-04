const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to research and call functions.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience, accessibility, performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // Completed
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = document.lastModified;

    displayCourses(courses); // Initial display
});

function displayCourses(courseArray) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear the list before displaying

    let totalCredits = 0;

    courseArray.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card" + (course.completed ? " completed" : "");
        card.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;
        courseList.appendChild(card);
        totalCredits += course.credits;
    });

    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;
}

function filterCourses(filter) {
    let filteredCourses;
    if (filter === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === filter);
    }
    displayCourses(filteredCourses);
}

// Toggle menu for mobile view
document.getElementById("menu-toggle").addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    var hamburger = document.getElementById("hamburger");

    menu.classList.toggle("active"); // Toggle display of the menu

    if (menu.classList.contains("active")) {
        hamburger.innerHTML = '❌'; // Change to 'X'
    } else {
        hamburger.innerHTML = '&#9776;'; // Change back to Hamburger icon
    }
}

// Function displays the details of a course in the modal
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal(); // Show the modal

    // Event listener for closing the modal
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDiv.addEventListener('click',() => {
    displayCourseDetails(course);
});