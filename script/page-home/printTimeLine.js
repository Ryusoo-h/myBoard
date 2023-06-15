import timeLine from './printTimeLine.data.js'

class PrintTimeLine {
    constructor(rootEl, listData) {
        this.rootEl = rootEl;
        this.listData = listData; // 리스트 정보
        this.listDataLength = listData.length;
        this.printedStartNum = 0;
        this.printMinLength = 5;
    }

    render() {
        const list = this.listData.slice(this.printedStartNum, this.printedStartNum + this.printMinLength)
            .map(({icon, title, content, date}) => {
                // 글이 4줄이상일 경우 true => '+더보기'버튼 추가됨
                return `<article class="flex">
                    <i class="thumb ${icon}"></i>
                    <div>
                        <h2 class="content-title">${title}</h2>
                        <p class="content forCheck hidden">${content}</p>
                        <span class="date">${date}</span>
                    </div>
                </article>`;
            })
            .join(`
        `);
        this.printedStartNum += this.printMinLength;
        this.rootEl.insertAdjacentHTML('beforeend', list);
        const listForCheck = this.rootEl.querySelectorAll('p.hidden.forCheck');
        const moreButton = `<button type="button" class="more" onclick="
            this.parentNode.querySelector('.content').classList.remove('hidden');
            this.classList.add('hidden');
        ">+더보기</button>`;
        for(let i = 0; i < listForCheck.length; i++) {
            listForCheck[i].classList.remove('forCheck');
            if (listForCheck[i].offsetHeight < listForCheck[i].scrollHeight) {
                listForCheck[i].insertAdjacentHTML('afterend', moreButton);
            }
        }

    }
};

const timeLineRootEl = document.querySelector('#time-line .card-container');
const PrintTodoReadingList = new PrintTimeLine(timeLineRootEl, timeLine);

PrintTodoReadingList.render();

timeLineRootEl.addEventListener('scroll', () => {
    if (PrintTodoReadingList.listDataLength <= PrintTodoReadingList.printedStartNum) { 
        return; // 더이상 출력할게 없으니 출력하지 않음
    }
    if (timeLineRootEl.scrollHeight - timeLineRootEl.scrollTop <= timeLineRootEl.clientHeight*1.5) {
        PrintTodoReadingList.render();
    }
});
