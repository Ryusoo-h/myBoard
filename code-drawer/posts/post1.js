export const post = `
<h1 class="title">HTML</h1>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 이 글은 개인적 편의를 위해 정리한 것으로, 보다 자세한 설명과 코드 등은 원본 글을 보시길 바랍니다!</span>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">aria-hidden</h2>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-07-25</span>
        <span class="modification-date">수정일 : 2023-07-25</span>
    </p>
      <p>slack 클론코딩 강의 듣다가 발견함<br>시각적으로는 숨겨주지 않지만, 접근성 트리에서 해당 요소와 모든 하위 항목이 제거된다고 함
      <br><code>aria-hidden="true"</code></p>
    <blockquote>
        읽은 글 : <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">
        [MDN] aria-hidden
        </a>
    </blockquote>
</article>
<hr>

`;

export default post;