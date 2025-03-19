let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const carousel = document.querySelector('.carrossel');

function updateCarousel() {
    const offset = -(currentIndex * (cards[0].offsetWidth + 20)); 
    carousel.style.transform = `translateX(${offset}px)`; 
}


function autoScroll() {
    currentIndex = (currentIndex + 1) % totalCards; 
    updateCarousel();
}


setInterval(autoScroll, 3000);
