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

function showHidden (){
    const slideshow = document.getElementById('slideshow');
    const nav = document.getElementsByTagName('nav'); // Correctly pass 'nav' as a string
    const cards = document.getElementsByClassName('card');

    // Show the slideshow
    slideshow.style.display = "block";

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
    const modal = document.getElementById(id);

    const slideshow = document.getElementById('slideshow');
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
function plusSlides(x) {
    const img_container = document.getElementsByClassName('image-container')[0]; // Access the first element

    // Get the current left position or default to 0 if not set
    let currentLeft = parseInt(window.getComputedStyle(img_container).left) || 0;

    // Update the left position based on x
    if (x === 1) {
        img_container.style.left = (currentLeft - 85) + '%'; // Move left
        console.log (img_container);
    } else if (x === -1) {
        img_container.style.left = (currentLeft + 85) + '%'; // Move right
        console.log (img_container);

    }
}

//----------- MAP --------------//

function openMap() {
    document.getElementById("mapModal").style.display = "flex";
  }
  
  function closeMap() {
    document.getElementById("mapModal").style.display = "none";
  }