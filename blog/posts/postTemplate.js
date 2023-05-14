
// class 잊을까봐 따로 적는 탬플릿..
// 💛마다 빼먹지말고 내용 적고 💛지우기

//📌 article마다 sub1, sub1-2 이렇게 아이디를 주어야합니다.
// article이 각 heading tag를 감싼 구조여야함('.' aside-menu 출력을 위해) 
// 구조 예시)
// <article id="sub1">
//     <h2 class="sub-title">제목</h2>
// </article>

// <hr>

// <article id="sub2">
//     <h2 class="sub-title">제목</h2>
//     <article id="sub2-1">
//         <h3>소제목</h3>
//     </article>
//     <article id="sub2-2">
//         <h3>소제목</h3>
//     </article>
// </article>

export const postTemplate = `
    <h1 class="title">💛타이틀입니다</h1>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-00-00💛</span>
        <span class="modification-date">수정일 : 2023-00-00💛</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글 : <a href="💛">
        💛링크 제목
        </a>
    </blockquote>
    <p>
        후기: 💛
    </p>

    <hr>

    <article id="sub1">
        <h2 class="sub-title">💛</h2>
        <article id="sub1-1">
            <h3>💛</h3>
            <ul>
                <li>
                    <span class="red">🧡붉은 색 글자</span>
                </li>
                <li>
                    <mark>💛단어만 마크할 수 도 있고</mark>
                </li>
                <li>
                    <mark class="block">
                    💛블록 단위로 마크할 수도 있습니다.
                    </mark>
                </li>
                <li>
                    <span class="exam">💚ex)문장</span>
                </li>
                    <span class="exam block exam-tag">
                    💚블록 단위 예시, '.exam-tag'클래스 유무로 'ex)'를 추가/제거 할 수 있습니다
                    </span>
                </li>
            </ul>
        </article>
    </article>
`;

export default postTemplate;