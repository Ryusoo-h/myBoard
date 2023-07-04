
import * as blogPosts from "../../blog/posts/index.js";
import * as blogMetaTag from "../../blog/posts/meta.js";
import * as codeDrawerPosts from "../../code-drawer/posts/index.js";
import * as wordMemorizationPosts from "../../word-memorization/posts/index.js";
import noPost from "../../blog/posts/noPost.js";
import  handleMetaTag from "./handleMetaTag.js";
import hideWordButton from "../page-word-memorization/hideWordButton.js";

const urlPathname = new URL(location.href).pathname;

// 단순히 제목출력, 내용 출력 기능만 구현함
class PrintPost {
    constructor(posts, postsMetaData, page) {
        this.posts = posts;
        this.postsMetaData = postsMetaData;
        this.postKeys = Object.keys(this.posts).sort((a, b) => {
            const regex = /[^0-9]/g;
            return Number(a.replace(regex, "")) - Number(b.replace(regex, "")) < 0 ? -1 : 1 ;
        }); // ['post1', 'post2', 'post3']
        this.recentPostKey = this.postKeys[this.postKeys.length - 1]; // 최신글 키 (처음 보여줄 글)
        
        this.page = page;

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

        this.quickSideMenu.innerHTML = asideList; // asideList 출력
    };

    printPost(postKey, isprintAsideList) {
        // article 출력
        if (!this.postKeys.includes(postKey)) { // 포스트가 없다면 404 출력, 탈출
            this.postElement.innerHTML = noPost;
            return;
        }
        const currentPost = this.posts[postKey];
        this.postElement.innerHTML = currentPost; // article 출력

        // asideList 출력
        if (isprintAsideList) {
            this.printAsideList(currentPost);
        }
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

        let pathname = `/myBoard/${this.page}/`;

        let postTitleList = ``;
        titles.forEach((value, key) => {
            postTitleList = postKey === key 
                ? `<li><a class="current ajax-link" href="${pathname}?post=${key}">${value}</a></li>` + postTitleList
                : `<li><a class="ajax-link" href="${pathname}?post=${key}">${value}</a></li>` + postTitleList;
        });
        this.postTitleListElement.innerHTML = postTitleList; // PostTitle 목록 출력
    };

    render(isprintAsideList) {
        const urlParams = new URL(location.href).searchParams;
        let currentPostKey = urlParams.get('post') ?? this.recentPostKey;
        this.printSubMenuList(currentPostKey);
        this.printPost(currentPostKey, isprintAsideList);
        if (this.postsMetaData) handleMetaTag(this.postsMetaData[currentPostKey]);
        if (urlPathname.includes('word-memorization')) hideWordButton();
    };
}

// blog 페이지 포스트
export const printBlogPost = new PrintPost(blogPosts, blogMetaTag, 'blog');

// code-Drawer 페이지 포스트
export const printCodeDrawerPost = new PrintPost(codeDrawerPosts, null, 'code-drawer');

// word-Memorization 페이지 포스트
export const printWordMemorization = new PrintPost(wordMemorizationPosts, null, 'word-memorization');

if (urlPathname.includes('blog')) printBlogPost.render(true)
else if (urlPathname.includes('code-drawer')) printCodeDrawerPost.render(true)
else if (urlPathname.includes('word-memorization')) printWordMemorization.render();
