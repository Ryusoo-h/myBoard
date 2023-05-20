
// [
//     {
//         keyword: "",
//         title: "",
//         url: ""
//     },
// ]
const todoReadingList = [
    {
        keyword: "벨로그",
        title: "Javascript에서도 SOLID 원칙이 통할까?",
        url: "https://velog.io/@teo/Javascript%EC%97%90%EC%84%9C%EB%8F%84-SOLID-%EC%9B%90%EC%B9%99%EC%9D%B4-%ED%86%B5%ED%95%A0%EA%B9%8C"
    },
    {
        keyword: "블로그",
        title: "코드 악취를 맡는 후각 훈련의 시간",
        url: "https://helloworld.kurly.com/blog/rms-refactoring/"
    },
    {
        keyword: "우아한형제들 기술블로그",
        title: "회원시스템 이벤트기반 아키텍처 구축하기",
        url: "https://techblog.woowahan.com/7835/"
    },
    {
        keyword: "벨로그",
        title: "단위 테스트 리뷰",
        url: "https://velog.io/@youngerjesus/%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%A6%AC%EB%B7%B0-zwrdhz3c"
    },
    {
        keyword: "블로그",
        title: "Moment.js 대신 Day.js - 프론트엔드 번들 사이즈 줄이기",
        url: "https://blog.hoseung.me/2022-03-13-dayjs-instead-of-momentjs/"
    },
    {
        keyword: "블로그",
        title: "TypeScript, 왜 써야할까?",
        url: "https://velog.io/@server30sopt/WhyTS"
    },
    {
        keyword: "벨로그",
        title: "소프트웨어 설계의 근본 원칙, 관심사의 분리",
        url: "https://velog.io/@eddy_song/separation-of-concerns"
    },
    {
        keyword: "요즘IT",
        title: "당신이 NFT에 대해 알아야 할 모든 것",
        url: "https://yozm.wishket.com/magazine/detail/1192/"
    },
    {
        keyword: "요즘IT",
        title: "10배 이상 뛰어난 개발자가 되는 법",
        url: "https://yozm.wishket.com/magazine/detail/1373/"
    },
    {
        keyword: "벨로그",
        title: "토스 FE로서의 1년 6개월",
        url: "https://velog.io/@lingodingo/%ED%86%A0%EC%8A%A4%EC%97%90%EC%84%9C%EC%9D%98-FE%EB%A1%9C%EC%8D%A8-1%EB%85%84-6%EA%B0%9C%EC%9B%94"
    },
    {
        keyword: "벨로그",
        title: "자바스크립트에서 객체 지향을 하는 게 맞나요?",
        url: "https://velog.io/@teo/oop"
    },
    {
        keyword: "벨로그",
        title: "웹과 HTML & CSS에서 놓치기 쉬운 개념들",
        url: "https://velog.io/@zerone/%EC%9B%B9%EA%B3%BC-HTMLCSS%EC%97%90%EC%84%9C-%EB%86%93%EC%B9%98%EA%B8%B0-%EC%89%AC%EC%9A%B4-%EA%B0%9C%EB%85%90%EB%93%A4"
    },
    {
        keyword: "요즘IT",
        title: "가장 똑똑한 소프트웨어 엔지니어에게 배운 10가지 교훈",
        url: "https://yozm.wishket.com/magazine/detail/969/"
    },
    {
        keyword: "블로그",
        title: "온라인 트리를 만든 산타들의 이야기",
        url: "https://www.inflearn.com/pages/weekly-inflearn-45-20220330",
    },
    {
        keyword: "블로그",
        title: "javaScript는 어떻게 동작하는 거야?",
        url: "https://velog.io/@khd1018/javaScript%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94%EA%B1%B0%EC%95%BC",
    },
    {
        keyword: "블로그",
        title: "나는 얼마나 CSS를 알고 있을까? CSS 자가진단 체크리스트",
        url: "https://velog.io/@teo/css-self-checklist",
    },
    {
        keyword: "블로그",
        title: "그런 포트폴리오로 괜찮은가",
        url: "https://velog.io/@junghyeonsu/%EA%B7%B8%EB%9F%B0-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EB%A1%9C-%EA%B4%9C%EC%B0%AE%EC%9D%80%EA%B0%80",
    },
    {
        keyword: "블로그",
        title: "HTTP/3 - 차세대 웹 프로토콜에 대해 알아야하는 모든 것",
        url: "https://velog.io/@sehyunny/everthing-you-need-to-know-about-http3",
    },
    {
        keyword: "블로그",
        title: "SVG를 알아보자",
        url: "https://velog.io/@sbyeol3/SVG%EB%A5%BC-%EA%B3%B5%EB%B6%80%ED%95%B4%EB%B3%B4%EC%9E%90-1-SVG%EB%9E%80",
    },
    {
        keyword: "블로그",
        title: "[React] public폴더 src폴더 어디에 넣어야 되는걸까?",
        url: "https://velog.io/@daeun/React-public%ED%8F%B4%EB%8D%94-src%ED%8F%B4%EB%8D%94-%EC%96%B4%EB%94%94%EC%97%90-%EB%84%A3%EC%96%B4%EC%95%BC-%EB%90%98%EB%8A%94%EA%B1%B8%EA%B9%8C",
    },
    {
        keyword: "블로그",
        title: "피그마 협업기(트렌비 PO가 일하는 방식)",
        url: "https://tech.trenbe.com/2022/03/14/%ED%94%BC%EA%B7%B8%EB%A7%88-%ED%98%91%EC%97%85%EA%B8%B0.html",
    },
    {
        keyword: "블로그",
        title: "페이스북 개발자의 성과 만들기",
        url: "https://blog.shiren.dev/2022-03-07/?utm_source=gaerae.com&utm_campaign=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4&utm_medium=social",
    },
    {
        keyword: "블로그",
        title: "코드 리뷰 가이드(BBC 코드 리뷰 가이드 번역)",
        url: "https://tech.trenbe.com/2022/03/01/CodeReviewGuide.html",
    },
    {
        keyword: "블로그",
        title: "채팅서비스를 구현하며 배워보는 Websocket 원리 (feat.node.js)",
        url: "https://hudi.blog/websocket-with-nodejs/",
    },
    {
        keyword: "블로그",
        title: "제목은 메리 크리스마스로 하겠습니다. 그런데 이제 프로그래밍을 곁들인",
        url: "https://techblog.yogiyo.co.kr/%EC%A0%9C%EB%AA%A9%EC%9D%80-%EB%A9%94%EB%A6%AC-%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4%EB%A1%9C-%ED%95%98%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4-%EA%B7%B8%EB%9F%B0%EB%8D%B0-%EC%9D%B4%EC%A0%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%84-%EA%B3%81%EB%93%A4%EC%9D%B8-7ae1980f61c1",
    },
    {
        keyword: "블로그",
        title: "React Native에서 ios 빌드 퍼포먼스 최적화",
        url: "https://hyperconnect.github.io/2022/01/17/rn-ios-build-optimization.html",
    },
    {
        keyword: "블로그",
        title: "Real Browser Testing 으로 보다 쉽게 프론트엔드 테스트 코드 작성하기",
        url: "https://medium.com/mildang/real-browser-testing-%EC%9C%BC%EB%A1%9C-%EB%B3%B4%EB%8B%A4-%EC%89%BD%EA%B2%8C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0-e3a8811f47e0",
    },
    {
        keyword: "블로그",
        title: "주니어를 넘어서, 성장하는 개발자의 길",
        url: "https://www.inflearn.com/pages/weekly-inflearn-38-20211228",
    },
    {
        keyword: "블로그",
        title: "웹 컴포넌트가 프론트엔드 프레임워크를 대신할까?",
        url: "https://yozm.wishket.com/magazine/detail/1193/",
    },
    {
        keyword: "블로그",
        title: "브라우저 주소창에 URL을 치면 일어나는 일들",
        url: "https://maxkim-j.github.io/posts/packet-travel/",
    },
    {
        keyword: "블로그",
        title: "차세대 빌드 도구 비교",
        url: "https://ui.toast.com/weekly-pick/ko_20220127/",
    },
    {
        keyword: "블로그",
        title: "윈도우 11은 실패작이다",
        url: "https://yozm.wishket.com/magazine/detail/1611/",
    },
    {
        keyword: "블로그",
        title: "웹 어셈블리에 주목하라",
        url: "https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%EC%9B%B9%EC%96%B4%EC%85%88%EB%B8%94%EB%A6%AC%EC%97%90-%EC%A3%BC%EB%AA%A9%ED%95%98%EB%9D%BC-280ff4e9ce01",
    },
    {
        keyword: "블로그",
        title: "개발자의 성장 가능성은 어떻게 평가 가능한가?",
        url: "https://euncho.medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EC%84%B1%EC%9E%A5-%EA%B0%80%EB%8A%A5%EC%84%B1%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%B8%A1%EC%A0%95-%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B0%80-238dd3f0f33",
    },
    {
        keyword: "블로그",
        title: "Alert, Confirm UI를 편하게 다루기 위한 고민과 해결법",
        url: "https://medium.com/wantedjobs/%E3%85%81%E3%84%B4%E3%85%87%E3%84%B9-9b5c21028071",
    },
    {
        keyword: "블로그",
        title: "[구글 엔지니어는 이렇게 일한다] 요약",
        url: "https://twitter.com/JbeeLjyhanll/status/1553997005373902848?t=NWGEP3k4g617OatNPGU2lQ&s=32",
    },
    {
        keyword: "유투브",
        title: "토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code",
        url: "https://www.youtube.com/watch?v=edWbHp_k_9Y",
    },
    {
        keyword: "MDN",
        title: "[mdn]will-change",
        url: "https://developer.mozilla.org/ko/docs/Web/CSS/will-change",
    },
    {
        keyword: "블로그",
        title: "[번역] 모든 개발자가 알아야 하는 61가지 프론트엔드 웹 개발 트렌드 용어",
        url: "https://velog.io/@cookie004/61-frontend-web-development-buzz-words",
    },
    {
        keyword: "트위터",
        title: "삼성 One UI 공식 CSS",
        url: "https://twitter.com/hyunbinseo97/status/1578541710174392320?t=m1FPBJd5unM4fIYNmXKzAw&s=32",
    },
    {
        keyword: "트위터",
        title: "개발 공부 링크 타래",
        url: "https://twitter.com/sujk912/status/1587480970860515334?t=0lj5-37DYSAZus6XX1wvPg&s=32",
    },
    {
        keyword: "유튜브",
        title: "IPv4주소 체계에 대한 암기사항",
        url: "https://www.youtube.com/watch?v=gOMljj6K2V0",
    },
    {
        keyword: "유튜브",
        title: "섬세한 ISFP의 코드 가독성 개선 경험 / if(kakao)2022",
        url: "https://www.youtube.com/watch?v=emGLxi0LvNI",
    },
    {
        keyword: "강의 문서",
        title: "벨로퍼트와 함께하는 모던 리액트",
        url: "https://react.vlpt.us/",
    },
    {
        keyword: "요즘IT",
        title: "좋은 개발 스터디를 운영하는 법",
        url: "https://yozm.wishket.com/magazine/detail/1593/",
    },
    {
        keyword: "노션",
        title: "Map Set 정리-타자치는 너구리님",
        url: "https://develop-neoguri.notion.site/2022-12-05-Map-Set-4d70e376137a48e3b781a626528fc0d0",
    },
    {
        keyword: "유튜브",
        title: "개발자 면접 단골질문 자바스크립트 this",
        url: "https://www.youtube.com/watch?v=tDZROpAdJ9w",
    },
    {
        keyword: "블로그",
        title: "버그 리포팅을 위한 Sentry : React에 적용하기",
        url: "https://medium.com/hcleedev/web-%EB%B2%84%EA%B7%B8-%EB%A6%AC%ED%8F%AC%ED%8C%85%EC%9D%84-%EC%9C%84%ED%95%9C-sentry-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-react-webpack-b9690b8f5b45",
    },
    {
        keyword: "유튜브",
        title: "2023 웹개발 트렌드",
        url: "https://www.youtube.com/watch?v=clbI-NL4s2k&t=1s",
    },
    {
        keyword: "강의 문서",
        title: "벨로퍼트와 함께하는 모던 자바스크립트",
        url: "https://learnjs.vlpt.us/",
    },
    {
        keyword: "블로그",
        title: "TypeScript React에서 useRef의 3가지 정의와 각각의 적절한 사용법",
        url: "https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5",
    },
    {
        keyword: "블로그",
        title: "Object(구조 분해 할당, 전개 연산자, 깊은 복사, 얕은 복사), JSON",
        url: "https://velog.io/@ja960508/Javascript2-Object%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9-%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-JSON",
    },
    {
        keyword: "공식 문서",
        title: "타입스크립트 핸드북(번역본)",
        url: "https://typescript-kr.github.io/pages/tutorials/ts-for-the-new-programmer.html",
    },
    {
        keyword: "공식 문서",
        title: "리엑트 공식문서 이제 읽을때가 되었다!!!",
        url: "https://ko.reactjs.org/docs/hello-world.html",
    },
];

class PrintLinksList {
    constructor(ulId, listData) {
        this.ulId = ulId; // ul(출력할 element)의 id
        this.listData = listData; // 리스트 정보
    }

    render() {
        const list = this.listData.map(link => {
            return `<li><a href="${link.url}">[${link.keyword}] ${link.title}</a></li>`;
        }).join(`
        `);

        document.querySelector(`#${this.ulId}`).insertAdjacentHTML('afterbegin', list);
    }
}

const PrintTodoReadingList = new PrintLinksList(
    "to-do-reading-list",
    todoReadingList
)
PrintTodoReadingList.render();