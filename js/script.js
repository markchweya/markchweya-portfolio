/* ============================== typing animation ============================ */
/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    // Check if 'a' is not null before adding the event listener
    if (a) {
        a.addEventListener("click", function () {
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                const navLink = navList[j].querySelector("a");
                if (navLink && navLink.classList.contains("active")) {
                    addBackSection(j);
                }
                if (navLink) {
                    navLink.classList.remove("active");
                }
            }
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        });
    }
}



function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});



const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}



emailjs.init("zwZ830gmYZbXMTaA6"); // Replace 'user_your_user_id' with your actual user ID

function submitForm() {
  // Collect form data
  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  // Send email using emailJS
  emailjs.send('service_uc20xaq', 'template_4kkvqra', templateParams)
    .then(function(response) {
      console.log('Email sent successfully:', response);
      alert('Form submitted successfully!');
      // You can optionally redirect to another page or refresh the current page here.
    }, function(error) {
      console.error('Failed to send email:', error);
      alert('Error submitting form. Please try again later.');
    });

  // Prevent the form from submitting normally
  return false;
}