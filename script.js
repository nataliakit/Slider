
const rightButton = document.querySelector('.right');
rightButton.addEventListener('click', onRightSlide);
const leftButton = document.querySelector('.left');
leftButton.addEventListener('click', onLeftSlide)

function onRightSlide() {
    const slideList = document.querySelectorAll('.img');
    let indexCurrentActiveElement;

    for (let index = 0;index < slideList.length; index++) {
        let isActive = slideList[index].classList.contains('img--active');
        if (isActive) {
            indexCurrentActiveElement = index;
        }
    }

    if (slideList.length < indexCurrentActiveElement + 1) {
        return;
    }

    slideList[indexCurrentActiveElement].classList.remove('img--active');
    slideList[indexCurrentActiveElement].classList.add('img--hide-to-left');
    slideList[indexCurrentActiveElement + 1].classList.add('img--active');
}

function onLeftSlide() {
    const slideList = document.querySelectorAll('.img');
    let indexCurrentActiveElement;

    for (let index = 0;index < slideList.length; index++) {
        let isActive = slideList[index].classList.contains('img--active');
        if (isActive) {
            indexCurrentActiveElement = index;
        }
    }

    if (slideList.length < indexCurrentActiveElement - 1) {
        return;
    }

    if (indexCurrentActiveElement === 0) {
        return;
    }

    slideList[indexCurrentActiveElement].classList.remove('img--active');
    slideList[indexCurrentActiveElement - 1].classList.remove('img--hide-to-left');
    slideList[indexCurrentActiveElement - 1].classList.add('img--active');
    slideList[indexCurrentActiveElement - 1].classList.add('img--show-from-right');
    setTimeout(() =>{
        slideList[indexCurrentActiveElement - 1].classList.add('img--show-from-right');
    })
}