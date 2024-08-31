// Temporary file for experience page content loading

document.addEventListener("DOMContentLoaded", function() {
    const workBtn = document.querySelector(".work");
    const projectsBtn = document.querySelector(".projects");

    const workSection = document.querySelector(".work-section");
    const projectsSection = document.querySelector(".projects-section");

    function showWorkSection() {
        workSection.style.display = "block";
        projectsSection.style.display = "none";

        workBtn.classList.add("active");
        projectsBtn.classList.remove("active");
    }

    function showProjectsSection() {
        workSection.style.display = "none";
        projectsSection.style.display = "block";

        workBtn.classList.remove("active");
        projectsBtn.classList.add("active");
    }

    function showcvSection() {
        workSection.style.display = "none";
        projectsSection.style.display = "none";

        workBtn.classList.remove("active");
        projectsBtn.classList.remove("active");
    }

    workBtn.addEventListener("click", showWorkSection);
    projectsBtn.addEventListener("click", showProjectsSection);

    // Initially show work section
    showWorkSection();
});