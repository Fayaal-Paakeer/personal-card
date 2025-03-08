const roles = ["Full-Stack Developer", "UI/UX Designer", "Mobile App Developer"];
let index = 0;
const roleElement = document.getElementById("changing-role");

function changeText() {
    roleElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        roleElement.textContent = roles[index]; // Change text
        roleElement.style.opacity = 1; // Fade in
        index = (index + 1) % roles.length;
    }, 500); // Wait 0.5s before updating text
}

// Change text every 2 seconds
setInterval(changeText, 2000);
