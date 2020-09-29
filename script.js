const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.img');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (img of slides) {
        img.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const currentSlide = (n) => {
    index = n;
    activeSlide(index);
    activeDot(index);
};

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
        return;
    } 
    index++;
    activeSlide(index);
    activeDot(index);
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
