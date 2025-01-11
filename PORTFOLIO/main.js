// Select the section and counters
const countSection = document.getElementById("count-section");
const fullstackCount = document.getElementById("fullstack-count");
const uiUxCount = document.getElementById("ui-ux-count");
const certificateCount = document.getElementById("certificate-count");
const internCount = document.getElementById("intern-count");

let animated = false; // To ensure counters animate only once

// Function to animate the counter
function animateCounter(element, maxCount) {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        element.textContent = count; 
        if (count >= maxCount) {
            element.textContent=count+"+";
            clearInterval(interval); // Stop the interval once maxCount is reached
        }
    }, 120);
}

countSection.addEventListener("mouseover", () => {
    if (!animated) { // Check if animation has already occurred
        animated = true;
        animateCounter(fullstackCount, 10);  // Count up to 20 for Fullstack Projects
        animateCounter(uiUxCount, 15);      // Count up to 15 for UI/UX Projects
        animateCounter(certificateCount, 10); // Count up to 10 for Certificates
        animateCounter(internCount, 2);     // Count up to 5 for Internships
    }
});



function toggleIcon(element) {
    const span = element.querySelector("span");
    if (span.textContent === "light_mode") {
        span.textContent = "brightness_3"; // Change to moon icon
    } else {
        span.textContent = "light_mode"; // Change to sun icon
    }
}



document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './PORTFOLIO/img/BOOPATHI_V(RESUME).pdf'; // Replace with your PDF file path
    link.download = 'BOOPATHI_VIJAYAN(RESUME).pdf'; // Optional: set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});