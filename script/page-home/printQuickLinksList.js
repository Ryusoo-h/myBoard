
// QuickLinks (현재 Link for 카드)의 데이터를 출력해줌
// 문서 구성
// 데이터 : 
//      quickLinksDevListCategory, quickLinksDevList
//      quickLinksDesListCategory, quickLinksDesList
// class 함수
// 함수 실행

const quickLinksDevListCategory = new Map([
    ["bookmark", "즐겨찾기"],
    ["study", "스터디"],
    ["library", "라이브러리/툴"],
]);
const quickLinksDevList = {
    bookmark : [
        {
            title: ["github/Ryusoo-h"],
            url: ["https://github.com/Ryusoo-h"]
        },
        {
            title: ["codepen : Your Work"],
            url: ["https://codepen.io/your-work/"]
        },
        {
            title: ["내 설정 VSCode 단축키"],
            url: ["https://ryu-soohyeon.notion.site/VSCode-1dc7b5361f1e40b49f509709c5b34747"]
        },
        {
            title: ["CSS Flex", "CSS Grid"],
            url: ["https://heropy.blog/2018/11/24/css-flexible-box/", "https://heropy.blog/2019/08/17/css-grid/"],
            text: ["완벽가이드 : ", " / ", ""]
        },
        {
            title: ["[CSS] 드래그/마우스 우클릭 금지"],
            url: ["https://eunyoe.tistory.com/33"],
        },
        {
            title: ["[CSS] border에 그라데이션 적용하기"],
            url: ["https://codyhouse.co/nuggets/css-gradient-borders"],
        }
    ],
    study : [
        {
            title: ["정규표현식(예이니가 공유해줌💙)"],
            url: ["https://fan-satellite-458.notion.site/2ef4769cbc7e4f83aa31bcc1ebd38506"]
        },
        {
            title: ["이력서 팁"],
            url: ["https://twitter.com/jinuskr/status/1604180719416139776?t=JjsVz79EWEFuvP8lFCUtYQ&s=32"]
        },
        {
            title: ["[게임] Flexbox Froggy"],
            url: ["https://flexboxfroggy.com/#ko"]
        },
        {
            title: ["[게임] CSS grid 퍼즐 게임"],
            url: ["https://codingfantasy.com/games/css-grid-attack/play"]
        }
    ],
    library : [
        {
            title: ["Responsive Viewer 크롬 확장 설치 | 반응형 디자인 쉽게 테스트하기"],
            url: ["https://twitter.com/_a6g_/status/1581132495445061632?t=jgDNiOO-9Jz3Oc4Zbf4u8A&s=32"]
        },
        {
            title: ["FLOATING UI"],
            url: ["https://floating-ui.com/"]
        },
    ],
    // sample : [
    //     {
    //         title: [""],
    //         url: [""],
    //         text: [
    //             "링크들의 맨 앞에 추가하고 싶은 글자", 
    //             "링크 사이에 추가 하고싶은 글자 또는 기호 ex) /-,", 
    //             "링크들의 맨 뒤에 추가하고 싶은 글자"]
    //     }
    // ]
};

const quickLinksDesListCategory = new Map([
    ["source", "자료"],
    ["service", "서비스/툴"]

]);
const quickLinksDesList = {
    source : [
        {
            title: ["💙자료백업계¹⁴³"],
            url: ["https://twitter.com/data_bu?t=2KWArEhz14yVEDeS7lFh7A&s=32%EC%97%90%EC%84%9C"]
        },
    ],
    service : [
        {
            title: ["무료 아이콘 제작 서비스 (Iconray)"],
            url: ["https://yozm.wishket.com/magazine/detail/1798/"]
        },
        {
            title: ["UX Design Challenges | UX 디자인 도구들을 잘 정리해둔 사이트"],
            url: ["https://uxtools.co/challenges/"]
        },
        {
            title: ["이미지 확장자 변경, 용량 줄이기"],
            url: ["https://squoosh.app/"]
        },
        {
            title: ["gif 용량 줄이기"],
            url: ["https://gifcompressor.com/ko/"]
        },
        {
            title: ["이미지에서 지우고 싶은 부분을 자동으로 지워주는 사이트"],
            url: ["https://www.hama.app/ko"]
        },
        {
            title: ["FLAT UI COLORS", "명도, 대비에 따른 색 추천", "Open-color"],
            url: ["https://flatuicolors.com/", "https://www.learnui.design/tools/accessible-color-generator.html", "https://yeun.github.io/open-color/"],
            text: ["🎨컬러칩<br>", ", ", ""]
        },
        {
            title: ["오프린트미", "성원애드피아", "디티피아"],
            url: ["https://www.ohprint.me/", "https://www.swadpia.co.kr/", "https://dtpia.co.kr/"],
            text: ["굿즈 홍보물 인쇄소<br>", ", ", ""]
        },
    ],
    // sample : [
    //     {
    //         title: [""],
    //         url: [""],
    //         text: [
    //             "링크들의 맨 앞에 추가하고 싶은 글자", 
    //             "링크 사이에 추가 하고싶은 글자 또는 기호 ex) /-,", 
    //             "링크들의 맨 뒤에 추가하고 싶은 글자"]
    //     }
    // ]
};

class PrintQuickLinksList {
    constructor(ulId, listCategoryInfo, listData) {
        this.ulId = ulId; // ul(출력할 element)의 id
        this.listCategoryInfo = listCategoryInfo; // 리스트 객체의 카테고리 정보
        this.listData = listData; // 리스트 정보 
    }

    render() {
        const listCategory = Object.keys(this.listData);
        const list = listCategory.map(category => {
            const listToLi = this.listData[category].map(link => {
                if(link.title.length === 1) {
                    return `<li><a class="round-block" href="${link.url[0]}">${link.title[0]}</a></li>`;
                } else {
                    let linkLi = link.title.reduce((itemList, title, index) => {
                        const [firstText, connectText ,lastText] = link.text ? link.text : ["","",""];
                        if (index === 0) { // li 태그 열음
                            return `<li>${firstText}<a class="round-block" href="${link.url[index]}">${title}</a>${connectText}`;
                        } else if (index === link.title.length - 1) { // li 태그 닫음
                            return `${itemList}<a class="round-block" href="${link.url[index]}">${title}</a>${lastText}</li>`;
                        } else { //  a태그 + 구분자
                            return `${itemList}<a class="round-block" href="${link.url[index]}">${title}</a>${connectText}`;
                        }
                    },[]);
                    return linkLi;
                }
            }).join(`
            `);
            return `
                <li>${this.listCategoryInfo.get(category)}
                    <ul>
                        ${listToLi}
                    </ul>
                </li>
            `;
        }).join('');
        // 출력
        document.querySelector(`#${this.ulId}`).insertAdjacentHTML('afterbegin', list);
    }
}

const PrintquickLinksDevList = new PrintQuickLinksList(
    "quick-links-dev-list",
    quickLinksDevListCategory,
    quickLinksDevList
);
PrintquickLinksDevList.render();

const PrintquickLinksDesList = new PrintQuickLinksList(
    "quick-links-des-list",
    quickLinksDesListCategory,
    quickLinksDesList
);
PrintquickLinksDesList.render();