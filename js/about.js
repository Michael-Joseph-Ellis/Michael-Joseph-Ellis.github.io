document.addEventListener("DOMContentLoaded", function() {
    const hobbiesBtn = document.querySelector(".hobbies");
    const interestsBtn = document.querySelector(".interests");
    const otherBtn = document.querySelector(".other");

    const hobbiesDesc = document.querySelector(".hobbies-section");
    const interestsDesc = document.querySelector(".interests-section");
    const otherDesc = document.querySelector(".other-section");

    // Initially show hobbies description and mark hobbies button as active
    hobbiesDesc.style.display = "block";
    interestsDesc.style.display = "none";
    otherDesc.style.display = "none";
    hobbiesBtn.classList.add("active");

    // Add event listeners to the buttons
    hobbiesBtn.addEventListener("click", function() {
        // Show hobbies description
        hobbiesDesc.style.display = "block";
        interestsDesc.style.display = "none";
        otherDesc.style.display = "none";

        // Mark hobbies button as active
        hobbiesBtn.classList.add("active");
        interestsBtn.classList.remove("active");
        otherBtn.classList.remove("active");
    });

    interestsBtn.addEventListener("click", function() {
        // Show interests description
        hobbiesDesc.style.display = "none";
        interestsDesc.style.display = "block";
        otherDesc.style.display = "none";

        // Mark interests button as active
        hobbiesBtn.classList.remove("active");
        interestsBtn.classList.add("active");
        otherBtn.classList.remove("active");
    });

    otherBtn.addEventListener("click", function() {
        // Show skills description
        hobbiesDesc.style.display = "none";
        interestsDesc.style.display = "none";
        otherDesc.style.display = "block";

        // Mark skills button as active
        hobbiesBtn.classList.remove("active");
        interestsBtn.classList.remove("active");
        otherBtn.classList.add("active");
    });
});
