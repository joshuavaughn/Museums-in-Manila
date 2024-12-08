/*const getStartedButton = document.querySelector('button[onclick*=\"scrollToSection\"]');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', () => {
            scrollToSection('anthropology');
        }); 
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    document.getElementById("see-more").addEventListener("click", function () {
        const hiddenSections = document.querySelectorAll(".section.hidden");
        
        hiddenSections.forEach((section) => {
          section.classList.remove("hidden");
        });
      
        // Hide the "See More" button after revealing additional sections
        this.style.display = "none";
      });*/

function showHidden() {
    // Get the first element with the class 'container'
    const slideshow = document.getElementsByClassName('container')[0];
    const nav = document.getElementsByTagName('nav');
    const cards = document.getElementsByClassName('card');

    // Check if the elements exist before modifying them
    if (slideshow) {
        slideshow.style.display = "block"; // Show the slideshow
    }

    // Hide all nav elements
    for (let i = 0; i < nav.length; i++) {
        nav[i].style.display = "none";
    }

    // Hide all card elements
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
}

function closeOpen (id){
    const modal = document.getElementsByClassName(id)[0];

    const nav = document.getElementsByTagName('nav'); // Correctly pass 'nav' as a string
    const cards = document.getElementsByClassName('card');

    modal.style.display = "none";

    // Hide all nav elements
    for (let i = 0; i < nav.length; i++) {
        nav[i].style.display = "block";
    }

    // Hide all card elements
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }
}

function showModal () {
    const modal = document.getElementById("about");

    modal.style.display = "flex";
}

function closeModal (id) {
    const modal = document.getElementById(id);

    modal.style.display = "none";
}

let currentslide = 3; // Declare outside to persist between function calls
const totalSlides = 5; // Total number of slides

function plusSlides(x) {
    const images = document.querySelectorAll('.image-container img');

    // Update currentslide while clamping its value between 1 and totalSlides
    currentslide += x;
    if (currentslide < 1) {
        currentslide = 1; // Stay at the first slide
    } else if (currentslide > totalSlides) {
        currentslide = totalSlides; // Stay at the last slide
    }

    console.log(`Current slide: ${currentslide}`);

    // Loop through all images and dynamically calculate their left positions
    images.forEach((img, index) => {
        const slideIndex = index + 1; // Images are 1-indexed
        let position;

        // Calculate position based on the current slide
        if (slideIndex === currentslide) {
            position = "0%"; // Current slide is centered
        } else if (slideIndex < currentslide) {
            // Slides to the left of the current slide
            position = `${160 - (currentslide - slideIndex) * 80}%`;
        } else {
            // Slides to the right of the current slide
            position = `${-85 - (slideIndex - currentslide) * 80}%`;
        }

        // Apply the calculated position to the current image
        img.style.left = position;
    });
}


//----------- MAP --------------//

function openMap() {
    document.getElementById("mapModal").style.display = "flex";
  }
  
  function closeMap() {
    document.getElementById("mapModal").style.display = "none";
  }