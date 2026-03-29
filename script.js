const nav = document.querySelector(".nav-links");

document.querySelector(".logo").addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Typing Effect
const text = ["Android Developer", "Web Developer", "Software Engineer","Automation Engineer", "IOT Embedded Engineer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerHTML = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// AOS Init
AOS.init();


const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.querySelector("i").classList.toggle("fa-moon");
  toggleBtn.querySelector("i").classList.toggle("fa-sun");
});



/*image slider inside the project card*/

document.querySelectorAll(".slider").forEach(slider => {
  let slides = slider.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 2000);
});



document.getElementById("contact-form")
.addEventListener("submit", function(e) {

  e.preventDefault(); // stop page reload

  emailjs.sendForm(
    "service_wswxnhf",
    "template_75qklpw",
    this
  ).then(function() {

    alert("✅ Message sent successfully!");

  }, function(error) {

    alert("❌ Failed to send message");
    console.log(error);

  });

});