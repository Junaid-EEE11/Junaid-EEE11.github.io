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
emailjs.init({
    publicKey: "9zWXZTWukrR-bP-O0",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send("service_s5lg1dv","template_gxed5dm",{

        from_name: document.getElementById("name").value,
        reply_to: document.getElementById("email").value,
        message: document.getElementById("message").value

    }).then(function(){

        alert("Message sent successfully!");

        form.reset();

    }).catch(function(error){

        alert("Failed to send message.");

        console.log(error);

    });

});

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
const message = document.getElementById("message").value.trim();
const lastSent = localStorage.getItem("lastMessageTime");

if (lastSent) {
    const elapsed = Date.now() - Number(lastSent);

    if (elapsed < 60000) {
        const seconds = Math.ceil((60000 - elapsed) / 1000);

        alert(`Please wait ${seconds} seconds before sending another message.`);
        return;
    }
}

localStorage.setItem("lastMessageTime", Date.now());

if (message.length < 20) {
    alert("Please enter at least 20 characters.");
    return;
}
const token = document.querySelector(
    'input[name="cf-turnstile-response"]'
)?.value;

if (!token) {
    alert("Please complete the verification.");
    return;
}

       
console.log("Portfolio loaded successfully.");
