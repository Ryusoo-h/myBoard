
import * as blogPosts from "../../blog/posts/index.js";
import * as codeDrawerPosts from "../../code-drawer/posts/index.js";
import noPost from "../../blog/posts/noPost.js";

// 단순히 제목출력, 내용 출력 기능만 구현함

class PrintPost {
    constructor(posts) {
        this.posts = posts;
        this.postKeys = Object.keys(this.posts); // ['post1', 'post2', 'post3']
        this.recentPostKey = this.postKeys[this.postKeys.length - 1]; // 최신글 키 (처음 보여줄 글)
        
        this.postTitleListElement = document.querySelector('#post-title-list'); // PostTitle 목록을 출력할 위치
        this.postElement = document.querySelector('#post > article'); // Post를 출력할 위치
        this.quickSideMenu = document.querySelector('#quick-side-menu'); // AsideList를 출력할 위치
    }

    printAsideList(post) {
        const reg = new RegExp(/\<h[2-6].*\<\/h[2-6]\>/, 'g');
        const currentPostHeadings = post.match(reg);
        if (!currentPostHeadings) {// Heading 목록이 없다면 탈출
            return;
        }

        // Heading 목록으로 asideList만들기
        let asideList = '';
        let prevHeadingLevel;
        let articleNumber = [1,1,1];
        let articleId = ''; // ex) 1, 1-1, 1-2
        currentPostHeadings.forEach((element, index) => {
            const currentHeadingLevel = element[2];
            const title = element.split('>')[1].split('<')[0];
            if (index === 0) {
                prevHeadingLevel = currentHeadingLevel;
                articleId = `${articleNumber[0]}`;
                asideList += `<li><a href="#sub${articleId}">${title}</a>`;
                return;
            }
            if (prevHeadingLevel === currentHeadingLevel) {
                articleNumber[currentHeadingLevel - 2]++;
                let newArticleId = articleId.split('-');
                newArticleId[newArticleId.length - 1] = articleNumber[currentHeadingLevel - 2];
                articleId = newArticleId.join('-');
                asideList += `</li><li><a href="#sub${articleId}">${title}</a>`;
            } else if (prevHeadingLevel < currentHeadingLevel) {
                articleId = articleId + '-1';
                articleNumber[currentHeadingLevel - 2] = 1;
                asideList += `<ol><li><a href="#sub${articleId}">${title}</a>`;
                prevHeadingLevel = currentHeadingLevel;
            } else {
                let newArticleId = articleId.split('-');
                newArticleId.pop();
                articleNumber[currentHeadingLevel - 2]++;
                newArticleId[newArticleId.length - 1] = articleNumber[currentHeadingLevel - 2];
                articleId = newArticleId.join('-');
                asideList += `</li></ol></li><li><a href="#sub${articleId}">${title}</a>`;
                prevHeadingLevel = currentHeadingLevel;
            }
        });
        asideList += '</li>';

        this.quickSideMenu.insertAdjacentHTML('afterbegin', asideList); // asideList 출력
    };

    printPost(postKey) {
        // article 출력
        if (!this.postKeys.includes(postKey)) { // 포스트가 없다면 404 출력, 탈출
            this.postElement.insertAdjacentHTML('afterbegin', noPost);
            return;
        }
        const currentPost = this.posts[postKey];
        this.postElement.insertAdjacentHTML('afterbegin', currentPost); // article 출력

        // asideList 출력
        this.printAsideList(currentPost);
    };
    
    getTitles() {
        const titles = new Map();
        this.postKeys.forEach((key) => {
            const reg = new RegExp(/\<h1.*>.*\<\/h1\>/);
            const h1Element = this.posts[key].match(reg)?.[0].split('>')[1].split('<')[0] || '';
            titles.set(key, h1Element);
        })
        return titles;
    };

    printSubMenuList(postKey) { // 좌측 PostTitle 목록 출력
        const titles = this.getTitles();

        let pathname = '/myBoard/blog/'; // location.host가 'ryusoo-h.github.io'일 때
        if (location.host === 'localhost:8080') { // local 테스트를 위해
            pathname = '/blog/index.html'
        }

        let postTitleList = ``;
        titles.forEach((value, key) => {
            postTitleList = postKey === key 
                ? `<li><a class="current" href="${pathname}?post=${key}">${value}</a></li>` + postTitleList
                : `<li><a href="${pathname}?post=${key}">${value}</a></li>` + postTitleList;
        });
        this.postTitleListElement.insertAdjacentHTML('afterbegin', postTitleList); // PostTitle 목록 출력
    };

    render() {
        const urlParams = new URL(location.href).searchParams;
        const currentPostKey = urlParams.get('post');
        if (!currentPostKey) { // 만약 파라미터가 없다면 최신글(recentPostKey와 일치하는 글) 출력
            this.printSubMenuList(this.recentPostKey);
            this.printPost(this.recentPostKey);
            return;
        }
        this.printSubMenuList(currentPostKey);
        this.printPost(currentPostKey);
    };
}

// blog 포스트
const printBlogPost = new PrintPost(blogPosts);

// code-Drawer 포스트
const printCodeDrawerPost = new PrintPost(codeDrawerPosts);

const urlPathname = new URL(location.href).pathname;
if (urlPathname.includes('blog')) {
    printBlogPost.render();
} else if (urlPathname.includes('code-drawer')) {
    printCodeDrawerPost.render();
}
