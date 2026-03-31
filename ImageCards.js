const FestiveCard = document.querySelectorAll(".Card");
const DisplayCard = document.getElementById("DisplayCard");
const DisplayCardContainer = document.getElementById("ImageTapped");
const ContentContainer = document.getElementById("ImageisTapped");

const BackBtn = document.getElementById("Back");

BackBtn.addEventListener('click', function() { 
    DisplayCardContainer.classList.remove("Show"); 
    DisplayCardContainer.classList.add("Hide"); 

    ContentContainer.classList.remove("Hide"); 
    ContentContainer.classList.add("Show"); 
});

FestiveCard.forEach(card => {
    card.addEventListener('click', function() {
        const bg = window.getComputedStyle(card).backgroundImage;
        DisplayCard.style.backgroundImage = bg;

        DisplayCardContainer.classList.add("Show");
        ContentContainer.classList.add("Hide");
    });
});