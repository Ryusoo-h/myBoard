
const toDark = () => { // 다크테마
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('myBoardTheme', 'dark');
};

const toLight = () => { // 라이트테마
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('myBoardTheme', 'light');
}

const changeTheme = () => {
    const button = document.querySelector('#change-theme');
    if (!button) {
        return;
    }
    
    // localStorage에 따라 테마를 바꿔줌
    window.addEventListener('load', function() {
        switch (localStorage.getItem('myBoardTheme')) {
            case "dark":
                toDark();
                button.innerText = "Light Mode";
                break;
            case "light":
            default:
                toLight();
                button.innerText = "Dark Mode";
                break;
        }
        this.setTimeout(function() { // 버튼 클릭시에는 부드럽게 봐뀌지만, 페이지에 처음 들어왔을때는 즉각 바뀌도록 하기 위함
            this.document.documentElement.style.transition = "background-color 0.2s ease-in-out";
        }, 1);
    });
    
    // #change-theme 버튼을 클릭하면 테마를 바꿔줍니다.
    button.addEventListener('click', function() {
        switch (document.documentElement.getAttribute("data-theme")) {
            case "light":
                toDark();
                button.innerText = "Light Mode";
                break;
            case "dark":
            default:
                toLight();
                button.innerText = "Dark Mode";
                break;
        }
    });
}

export default changeTheme;