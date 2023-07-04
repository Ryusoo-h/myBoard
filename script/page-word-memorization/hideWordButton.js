
const printButtonCount = (buttonElements) => {
    const buttonCountElement = document.querySelector('#button-count');
    const totalCount = buttonElements.length;
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

const toggleClassOnClick = (isButtonShowed, element, className) => {
    element.addEventListener('click', function () {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
            isButtonShowed(false);
            return;
        }
        element.classList.add(className);
        isButtonShowed(true);
    })
};

const hideWordButton = () => {
    const postButtonElements = document.querySelectorAll('#post article button:not(.not-hidden)');
    const isButtonShowed = printButtonCount(postButtonElements);
    isButtonShowed();
    postButtonElements.forEach(button => toggleClassOnClick(isButtonShowed, button, 'show'));
};

export default hideWordButton;