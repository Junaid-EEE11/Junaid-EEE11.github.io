/* ==================================
   Junaid Hossain Portfolio
   script.js
=================================== */

// Current Year in Footer
const yearElement = document.querySelector("footer p");

if (yearElement) {
    yearElement.innerHTML = `© ${new Date().getFullYear()} Junaid Hossain. All Rights Reserved.`;
}

// Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert(
            "Thank you for your message!\n\nThe contact form is currently a demo. It will be connected to email later."
        );

        form.reset();
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Highlight active menu while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .project-card, section").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.7s ease";

    observer.observe(item);

});

console.log("Portfolio loaded successfully.");
