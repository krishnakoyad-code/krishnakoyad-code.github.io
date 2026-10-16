/* =========================================
   ANALYTICS PORTFOLIO NAVIGATION
========================================= */

const navButtons = document.querySelectorAll(".nav-btn");

const overviewSection = document.getElementById("overview-section");
const skillsSection = document.getElementById("skills-section");
const projectsSection = document.getElementById("projects-section");
const experienceSection = document.getElementById("experience-section");
const certificatesSection = document.getElementById("certificates-section");
const contactSection = document.getElementById("contact-section");

const analyticsStats = document.querySelector(".analytics-stats");


navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedSection = button.dataset.section;


        /* REMOVE ACTIVE BUTTON */

        navButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* HIDE ALL SECTIONS */

        overviewSection.style.display = "none";
        skillsSection.style.display = "none";
        projectsSection.style.display = "none";
        experienceSection.style.display = "none";
        certificatesSection.style.display = "none";
contactSection.style.display = "none";

        analyticsStats.style.display = "none";


        /* OVERVIEW */

        if (selectedSection === "overview") {

            overviewSection.style.display = "grid";
            analyticsStats.style.display = "grid";

        }


        /* SKILLS */

        if (selectedSection === "skills") {

            skillsSection.style.display = "block";

        }


        /* PROJECTS */

        if (selectedSection === "projects") {

            projectsSection.style.display = "block";

        }


        /* EXPERIENCE */

        if (selectedSection === "experience") {

            experienceSection.style.display = "block";

        }


        /* CERTIFICATES */

        if (selectedSection === "certificates") {

            certificatesSection.style.display = "block";

        }
        /* CONTACT */

if (selectedSection === "contact") {

    contactSection.style.display = "block";

}

    });

});