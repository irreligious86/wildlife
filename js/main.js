const prev = document.getElementById('control-left');
const next = document.getElementById('control-right');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot-bar-item');
let index = 0;
console.log(dots);
console.log(slides)
console.log(prev);
console.log(next);

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.add('hidden');
    }
    slides[n].classList.remove('hidden');
};

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('dot-active');
    }
    dots[n].classList.add('dot-active');
};

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, 3500);