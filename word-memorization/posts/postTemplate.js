
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

// ✅word-memorization은 heading태그에 따른 asideMenu를 따로 출력하지 않기 때문에
// 꼭 article에 id를 주는 규칙을 지키지 않아도 괜찮습니다.

export const postTemplate = `
<h1 class="title">💛대제목</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-00-00💛</span>
    <span class="modification-date">수정일 : 2023-00-00💛</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>💛</mark> <mark>💛</mark>
</p>
<hr>

<article id="💛sub1">
    <h2 class="sub-title">003</h2>
    <ul>
        <li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
            <ul>

            </ul>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</article>
<hr>

<!-- 아티클 복사 탬플릿 -->
<article id="💛sub2">
    <h2 class="sub-title">003</h2>
    <ul>
        <li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
            <ul>

            </ul>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</article>
<hr>

<!-- 내부 복사 탬플릿 -->
<li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
    <ul>

    </ul>
</li>

<!-- 복사 요소 -->
<button type="button">💛단어</button>
<button type="button" class="red">💛단어</button>
<button type="button" class="not-hidden">💛단어</button>

<button class="code">
    <span class="comment">/* 주석 */</span>
    <br>code <span class="text">텍스트</span> <span class="point">강조</span>
</button>
<hr>

<article id="sub2💛">
    <h2 class="sub-title">💛구현된 UI 복사해서 써!</h2>
    <article id="sub2-1💛">
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