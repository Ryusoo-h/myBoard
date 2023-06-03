
import * as posts from "../../blog/posts/index.js";
import noPost from "../../blog/posts/noPost.js";

// 단순히 제목출력, 내용 출력 기능만 구현함

const postKeys = Object.keys(posts); // ['post1', 'post2', 'post3']

const recentPostKey = postKeys[postKeys.length - 1]; // 최신글 (처음 보여줄 글)

const printPost = (postKey) => {
    // article 출력
    const postElement = document.querySelector('#post > article');
    if (!postKeys.includes(postKey)) {
        postElement.insertAdjacentHTML('afterbegin', noPost);
        return;
    }
    const currentPost = posts[postKey];
    postElement.insertAdjacentHTML('afterbegin', currentPost); // article 출력

    // asideList 출력
    const quickSideMenu = document.querySelector('#quick-side-menu');
    const printAsideList = (currentPost) => {
        const reg = new RegExp(/\<h[2-6].*\<\/h[2-6]\>/, 'g');
        const currentPostHeadings = currentPost.match(reg);
        if (!currentPostHeadings) {
            return;
        }
        // console.log(currentPostHeadings);

        let headingTagElement = '';
        let prevHeadingLevel;
        let articleNumber = [1,1,1];
        let articleId = ''; // ex) 1, 1-1, 1-2
        currentPostHeadings.forEach((element, index) => {
            const currentHeadingLevel = element[2];
            const title = element.split('>')[1].split('<')[0];
            if (index === 0) {
                prevHeadingLevel = currentHeadingLevel;
                articleId = `${articleNumber[0]}`;
                headingTagElement += `<li><a href="#sub${articleId}">${title}</a>`;
                return;
            }
            if (prevHeadingLevel === currentHeadingLevel) {
                articleNumber[currentHeadingLevel - 2]++;
                let newArticleId = articleId.split('-');
                newArticleId[newArticleId.length - 1] = articleNumber[currentHeadingLevel - 2];
                articleId = newArticleId.join('-');
                headingTagElement += `</li><li><a href="#sub${articleId}">${title}</a>`;
            } else if (prevHeadingLevel < currentHeadingLevel) {
                articleId = articleId + '-1';
                articleNumber[currentHeadingLevel - 2] = 1;
                headingTagElement += `<ol><li><a href="#sub${articleId}">${title}</a>`;
                prevHeadingLevel = currentHeadingLevel;
            } else {
                let newArticleId = articleId.split('-');
                newArticleId.pop();
                articleNumber[currentHeadingLevel - 2]++;
                newArticleId[newArticleId.length - 1] = articleNumber[currentHeadingLevel - 2];
                articleId = newArticleId.join('-');
                headingTagElement += `</li></ol></li><li><a href="#sub${articleId}">${title}</a>`;
                prevHeadingLevel = currentHeadingLevel;
            }
        });
        headingTagElement += '</li>';

        quickSideMenu.insertAdjacentHTML('afterbegin', headingTagElement);
        // console.log(headingTagElement);
    };
    printAsideList(currentPost);
};

const printSubMenuList = (postKey) => {
    const titles = new Map();

    const getTitles = () => {
        postKeys.forEach((key) => {
            const reg = new RegExp(/\<h1.*>.*\<\/h1\>/);
            const h1Element = posts[key].match(reg)[0].split('>')[1].split('<')[0];
            titles.set(key, h1Element);
        })
    };
    getTitles();

    const postTitleListElement = document.querySelector('#post-title-list');

    let pathname = '/myBoard/blog/'; // location.host가 'ryusoo-h.github.io'일 때
    if (location.host === 'localhost:8080') { // local 테스트를 위해
        pathname = '/blog/index.html'
    }

    let postTitleList = ``;
    titles.forEach((value, key) => {
        postKey === key ? postTitleList = `<li><a class="current" href="${pathname}?post=${key}">${value}</a></li>` + postTitleList
        : postTitleList = `<li><a href="${pathname}?post=${key}">${value}</a></li>` + postTitleList;
    });
    postTitleListElement.insertAdjacentHTML('afterbegin', postTitleList);
}

window.addEventListener('load', function() {
    const urlParams = new URL(location.href).searchParams;
    const currentPostKey = urlParams.get('post');
    if (!currentPostKey) { // 만약 파라미터가 없다면 recentPostKey 출력
        printSubMenuList(recentPostKey);
        printPost(recentPostKey);
        return;
    }
    printSubMenuList(currentPostKey);
    printPost(currentPostKey);
})