let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 500; // 500px is the width of each image
    slides.style.transform = `translateX(${offset}px)`;
}

function moveSlides(step) {
    showSlide(currentSlide + step);
}

showSlide(currentSlide);
