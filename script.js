document.addEventListener('DOMContentLoaded', () => {
    console.log('Main Page Loaded');

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const slider = document.querySelector('.slides');
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
});
