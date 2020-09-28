const prev = document.getElementById('btn-prev')
      next = document.getElementById('btn-next')
      slides = document.querySelectorAll('.img')
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (img of slides) {
        img.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    }else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide =() => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    }else  {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


// const rightButton = document.getElementById('.btn-prev');
// rightButton.addEventListener('click', onRightSlide);
// const leftButton = document.getElementById('.btn-next');
// leftButton.addEventListener('click', onLeftSlide)
//
// function onRightSlide() {
//     const slideList = document.querySelectorAll('.img');
//     let indexCurrentActiveElement;
//
//     for (let index = 0;index < slideList.length; index++) {
//         let isActive = slideList[index].classList.contains('img--active');
//         let dots =document.getElementsByClassName('dot')
//         if (isActive) {
//             indexCurrentActiveElement = index;
//         }
//         for ()
//     }
//
//     if (slideList.length < indexCurrentActiveElement + 1) {
//         return;
//     }
//
//     slideList[indexCurrentActiveElement].classList.remove('img--active');
//     slideList[indexCurrentActiveElement].classList.add('img--hide-to-left');
//     slideList[indexCurrentActiveElement + 1].classList.add('img--active');
// }
//
// function onLeftSlide() {
//     const slideList = document.querySelectorAll('.img');
//     let indexCurrentActiveElement;
//
//     for (let index = 0;index < slideList.length; index++) {
//         let isActive = slideList[index].classList.contains('img--active');
//         if (isActive) {
//             indexCurrentActiveElement = index;
//         }
//     }
//
//     if (slideList.length < indexCurrentActiveElement - 1) {
//         return;
//     }
//
//     if (indexCurrentActiveElement === 0) {
//         return;
//     }
//
//     slideList[indexCurrentActiveElement].classList.remove('img--active');
//     slideList[indexCurrentActiveElement - 1].classList.remove('img--hide-to-left');
//     slideList[indexCurrentActiveElement - 1].classList.add('img--active');
//     slideList[indexCurrentActiveElement - 1].classList.add('img--show-from-right');
//     setTimeout(() =>{
//         slideList[indexCurrentActiveElement - 1].classList.add('img--show-from-right');
//     })
// }
