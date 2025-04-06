document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
        effect: "cube",
        allowTouchMove: false,
        grabCursor: false,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        mousewheel: true
    });

    // Add slide change event listener
    swiper.on('slideChange', function() {
        updateActiveLink(swiper.activeIndex);
    });

    // Helper function to update active link in the side menu
    function updateActiveLink(index) {
        const navLinks = document.querySelectorAll(".Links li");
        navLinks.forEach(link => link.classList.remove("activelink"));
        navLinks[index].classList.add("activelink");
    }

    // Navigation function for sidebar links
    window.Navigate = function(index) {
        updateActiveLink(index);
        swiper.slideTo(index, 1000, true);
    };

    // Initialize contact form buttons
    const contactButtons = document.querySelectorAll('button:nth-child(2)');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            Navigate(4); // Navigate to Contact Me section
        });
    });

    // Initialize hire me buttons
    const hireButtons = document.querySelectorAll('button:nth-child(1)');
    hireButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Open email or show hiring modal
            const emailLink = "mailto:Vazquezlucas721@gmail.com?subject=Job Opportunity";
            window.location.href = emailLink;
        });
    });
});