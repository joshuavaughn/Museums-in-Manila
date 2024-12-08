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

//----------- MAP --------------//

function openMap() {
    document.getElementById("mapModal").style.display = "flex";
  }
  
  function closeMap() {
    document.getElementById("mapModal").style.display = "none";
  }