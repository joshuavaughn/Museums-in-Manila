const getStartedButton = document.querySelector('button[onclick*=\"scrollToSection\"]');
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
      });


