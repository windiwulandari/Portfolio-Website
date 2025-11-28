// Scroll to portfolio section
function scrollToPortfolio() {
    document.getElementById("portfolio").scrollIntoView({
        behavior: "smooth"
    });
}

// Carousel Slider
let index = 0;

function showSlide() {
    const carousel = document.querySelector('.carousel');
    const cardWidth = document.querySelector('.card').clientWidth + 30;
    carousel.style.transform = `translateX(${-index * cardWidth}px)`;
}

function nextSlide() {
    const totalCards = document.querySelectorAll('.card').length;
    if (index < totalCards - 1) {
        index++;
        showSlide();
    }
}

function prevSlide() {
    if (index > 0) {
        index--;
        showSlide();
    }
}

const fadeItems = document.querySelectorAll('.fade-item');

function fadeInOnScroll() {
  fadeItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

