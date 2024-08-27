document.addEventListener("DOMContentLoaded", function() {
    const hobbiesBtn = document.querySelector(".hobbies");
    const interestsBtn = document.querySelector(".interests");
    const otherBtn = document.querySelector(".other");
    const contentWrapper = document.querySelector(".about-content");

    // Function to load content from an external file
    function loadContent(url, callback) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Apply fade-out effect before replacing content
                contentWrapper.style.opacity = '0';
                setTimeout(() => {
                    contentWrapper.innerHTML = data;
                    contentWrapper.style.marginTop = '0'; // Ensure no margin-top is applied
                    contentWrapper.style.opacity = '1'; // Fade-in effect
                    if (callback) callback();
                }, 300); // Adjust timeout based on your desired transition duration
            })
            .catch(error => console.error("Error loading content:", error));
    }

    // Initially load and show hobbies description and mark hobbies button as active
    loadContent("hobbies-content.html", function() {
        hobbiesBtn.classList.add("active");
        interestsBtn.classList.remove("active");
        otherBtn.classList.remove("active");
    });

    // Add event listeners to the buttons
    hobbiesBtn.addEventListener("click", function() {
        loadContent("hobbies-content.html", function() {
            hobbiesBtn.classList.add("active");
            interestsBtn.classList.remove("active");
            otherBtn.classList.remove("active");
        });
    });

    interestsBtn.addEventListener("click", function() {
        loadContent("interests-content.html", function() {
            hobbiesBtn.classList.remove("active");
            interestsBtn.classList.add("active");
            otherBtn.classList.remove("active");
        });
    });

    otherBtn.addEventListener("click", function() {
        loadContent("other-content.html", function() {
            hobbiesBtn.classList.remove("active");
            interestsBtn.classList.remove("active");
            otherBtn.classList.add("active");
        });
    });
});
