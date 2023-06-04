export const post1 = `
<h1 class="title">CSS</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-04</span>
    <span class="modification-date">수정일 : 2023-06-04</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 이 글은 개인적 편의를 위해 정리한 것으로, 보다 자세한 설명과 코드 등은 원본 글을 보시길 바랍니다!</span>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">🚫드래그 금지/마우스 우클릭 금지</h2>
    <pre><code class="block">div {
    -webkit-touch-callout: none;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}</code></pre>
    <blockquote>
        읽은 글 : <a href="https://eunyoe.tistory.com/33">
        [HTML/CSS] 드래그 금지/마우스 우클릭 금지 하는방법
        </a>
    </blockquote>
</article>

<article id="sub2">
    <h2 class="sub-title">🌈border에 그라데이션 적용</h2>
    <pre><code class="block">.border-gradient {
    border-width: 4px;
    border-style: solid;
    border-image: linear-gradient(to right, darkblue, darkorchid) 1;
}</code></pre>
    <blockquote>
        읽은 글 : <a href="https://codyhouse.co/nuggets/css-gradient-borders">
        Gradient Borders
        </a>
    </blockquote>
</article>
`;

export default post1;