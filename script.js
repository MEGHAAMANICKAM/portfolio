// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Typing Animation
const roles = ["Cloud Enthusiast", "DevOps Learner", "Problem Solver", "Tech Explorer"];
let i = 0, j = 0, currentRole = "", deleting = false;

function typingEffect() {
  if (i < roles.length) {
    if (!deleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
      document.querySelector(".typing").textContent = currentRole;
    } else if (deleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
      document.querySelector(".typing").textContent = currentRole;
    }

    if (j === roles[i].length + 1) deleting = true;
    if (j < 0) {
      deleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(typingEffect, deleting ? 100 : 150);
}
typingEffect();

// Contact form dummy handler
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
