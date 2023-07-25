export const post = `
<h1 class="title">CSS</h1>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 이 글은 개인적 편의를 위해 정리한 것으로, 보다 자세한 설명과 코드 등은 원본 글을 보시길 바랍니다!</span>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">🚫드래그 금지/마우스 우클릭 금지</h2>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-06-04</span>
        <span class="modification-date">수정일 : 2023-06-04</span>
    </p>
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
<hr>

<article id="sub2">
    <h2 class="sub-title">🌈border에 그라데이션 적용</h2>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-06-04</span>
        <span class="modification-date">수정일 : 2023-06-04</span>
    </p>
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
<hr>

<article id="sub3">
    <h2 class="sub-title">📑텍스트 줄이기, 말 줄임, 생략 ... 한 줄 일때, 두 줄 이상 일때</h2>
    <p class="post-date">
        <span class="creation-date">작성일 : 2021-03-04</span>
        <span class="modification-date">수정일 : 2023-06-16</span>
    </p>
    <ul>
        <li style="list-style: none;">
            <mark class="block">
                <code>text-overflow</code>를 적용하기 위한 조건
                <ol>
                    <li>width / height 고정</li>
                    <li>넘치는것 감추기 : <code>overflow: hidden;</code></li>
                    <li>줄 바뀜을 막기 : <code>white-space: nowrap;</code></li>
                </ol>
            </mark>
        </li>
    </ul>
    <article id="sub3-1">
        <h3>📝한 줄만 보이고 싶을 때</h3>
        <p>한 줄 이상인 경우 "..."으로 줄임
            <code class="block">
                text-overflow: ellipsis; <span class="comment">/*넘치는 텍스트를 생략해줌*/</span>
                <br>overflow: hidden; <span class="comment">/* 이거안해주면 넘치겠지!*/</span>
                <br>white-space: nowrap; <span class="comment">/* 줄바뀜이 일어나지않음.*/</span>
            </code>
            <blockquote>
                읽은 글1 : <a href="https://webisfree.com/2015-08-17/[css]-text-overflow-%ED%85%8D%EC%8A%A4%ED%8A%B8%EA%B0%80-%EB%A7%8E%EC%9D%80-%EA%B2%BD%EC%9A%B0-%EC%83%9D%EB%9E%B5%EA%B8%B0%ED%98%B8%EB%A1%9C-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0">
                    [CSS] Text-Overflow 텍스트가 많은 경우 생략기호로 보여주기
                </a>
                읽은 글2 : <a href="https://yeolco.tistory.com/151">
                    css로 텍스트 ... 처리하기 - 고정, 가변 길이 element
                </a>
            </blockquote>
        </p>
    </article>
    <article id="sub3-2">
        <h3>📝n줄 이하로 보이고 싶을 때</h3>
        <p>
            <code class="block">
                width: 100%;
                <br>height: 2.6rem; <span class="comment">/* 높이나 가로를 정해야 적용됨*/</span>
                <br>overflow: hidden; <span class="comment">/* 넘치는건 보이지 않게 해주지!*/</span>
                <br>white-space: normal; <span class="comment">/* 줄바뀜이 일어남*/</span>
                <br>text-overflow: ellipsis; <span class="comment">/* 생략기호 ... 를 나타나게해줌*/</span>
                <br>display: -webkit-box; <span class="comment">/* display를 이렇게해줘야 가능해짐, 대신 ie에선 안먹겠지..ㅠ*/</span>
                <br>-webkit-line-clamp: 2; <span class="comment">/* 몇줄까지 보여줄건지*/</span>
                <br>-webkit-box-orient: vertical; <span class="comment">/*비표준이라 함 확인 못했으니 살펴보고 쓸것 : <a href="developer.mozilla.org/ko/docs/Web/CSS/-webkit-line-clamp">-webkit-line-clamp 공식문</a>*/</span>
            </code>
            <blockquote>
                읽은 글 : <a href="https://css-tricks.com/almanac/properties/l/line-clamp/">
                    line-clamp
                </a>
            </blockquote>
        </p>
    </article>
    <blockquote>
        추가 정보 : <a href="/code-drawer/?post=post2#sub2">
            ✅텍스트 줄 넘침 확인하기
        </a>
    </blockquote>
</article>
`;

export default post;