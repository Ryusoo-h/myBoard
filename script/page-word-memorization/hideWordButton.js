
const postButtonElements = document.querySelectorAll('#post button:not(.not-hidden)');

const printButtonCount = () => {
    const buttonCountElement = document.querySelector('#button-count');
    
    const totalCount = postButtonElements.length;
    let currentCount = 0; // 현재 클릭된 버튼수

    const updateCurrentCount = (isShowed) => {
        if (isShowed !== undefined) {
            isShowed ? currentCount++ : currentCount--;
        }
        buttonCountElement.innerHTML = `<span id="currentCount">${currentCount}</span><span>/</span><span>${totalCount}</span>`;
        return currentCount;
    }
    return updateCurrentCount;
};

const isButtonShowed = printButtonCount();
isButtonShowed();

const toggleClassOnClick = (element, className) => {
    element.addEventListener('click', function () {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
            isButtonShowed(false);
            return;
        }
        element.classList.add(className);
        isButtonShowed(true);
    })
}

postButtonElements.forEach(button => toggleClassOnClick(button, 'show'));
