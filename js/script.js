document.getElementById('davaToday').valueAsDate = new Date();


function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        if (slide.classList.contains('active')) {
            document.body.style.background = "#F2F2F2";
        }
        slide.addEventListener('click', () => {
            clearActiveClasses();    
            slide.classList.add('active');
            document.body.style.background = "#F2F2F2";
        });
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidesPlugin(4);