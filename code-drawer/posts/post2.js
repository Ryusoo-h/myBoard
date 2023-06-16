export const post2 = `
<h1 class="title">JavaScript</h1>
<hr>

<article id="sub1">
    <h2 class="sub-title">⏳D-day 계산 (지역 시간 오차 해결하기)</h2>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-06-06</span>
        <span class="modification-date">수정일 : 2023-06-06</span>
    </p>
    <p>
        myBoard에 D-day 계산을 만들어뒀는데 어느날 새벽에 D-day가 맞지 않는걸 발견했다.
        <br>이럴수가.. 오류가 있었다고? 하고 확인해봤다.
        <br><br><b>today(현재날짜밀리초) - Dday(Dday날짜 밀리초)</b>를 <code>24*60*60*1000</code>로 나누고 내림하는 간단한 방법이었고,
        <br>현재시간과 Dday시간도 올바른것을 확인했었고, 여러 블로그들을 확인하고 만들었던 거라(다들 이와 똑같은 방법이었음) 틀리지 않았을거라 생각했다.
        그러나 오류 원인을 찾으려 밤 11시 반쯤 소숫점아래까지 출력해봤는데 아래와 같았다.
        <code class="block">-46<b>.397</b>..., // D-47일
            <br>-21<b>.397</b>...,  // D-22일
            <br>4<b>.602</b>...,  // D+4일
            <br>33<b>.602</b>...  // D+33일
        </code>
        밤 12시와 가까운 시간이라 결과가 정수에 가까울 것으로 예상했는데 <br>대략 9시간(1.00일 / 24시간 * 9시간 = 0.375일) 정도 차이가 났다.
        <br>UTC + 9시간 = 한국 시간이니까, <b>today</b>는 한국시간인데 <b>Dday</b>는 그렇지 않아서 오류가 나는것 같았다.
        <br>그래서 <b>Dday</b>에 <code>getTimezoneOffset()</code>만큼을 더해서 해결했다..
        <br><br><code>new Date()</code>가 현지시간이니 <code>new Date('yyyy-mm-dd')</code>도 현지시간일줄 알았는데 아니었다.
        <br>날짜 관련해서 놓친 부분이 있을까봐 <code>new Date()</code> 관련해서 검색도해보고, [자바스크립트 코드 레시피278] 책에서 날짜 관련 함수 다시 찾아보며 다시 훑어봤는데,
        지금 상황 같은 문제에 대한 설명은 없었다..ㅠ 묘한 찜찜한 기분.. 내일 눈뜨면 한번만 더 검색해봐야지
    </p>
    <article id="sub1-1">
        <h3>새로 알게된점</h3>
        <ul>
            <li>아래 글에서 <code>Date.now()</code>를 사용하는것이 <code>new Date().getTime()</code> 하는 것 보다 성능이 좋다는걸 알게되서 코드를 수정했다.
                <blockquote>
                    읽은 글 : <a href="https://ko.javascript.info/date">
                    [JAVASCRIPT.INFO] Date 객체와 날짜
                    </a>
                </blockquote>
            </li>
            <li>
                비슷하게 [자바스크립트 코드 레시피278] 책에서 <code>Date.parse('yyyy-mm-dd')</code>를 발견했는데 이것도 위와 같은 이유로 <code>new Date('yyyy-mm-dd').getTime()</code>하는 것보다 성능이 좋을 것 같아 똑같이 코드를 수정했다.
            </li>
            <li>
                아래 블로그보면 한국날짜로 강제로 표시하는데.. 나는 PC 설정 표준 시간대로 D-day를 계산해주는게 좋을거같아서 <code>getTimezoneOffset()</code>만큼을 더하는 코드로 작성했다.
                <blockquote>
                    읽은 글 : <a href="https://hianna.tistory.com/451">
                    [Javascript] 현재 시간을 항상 한국 날짜/시간으로 표시하기 (UTC to KST)
                    </a>
                </blockquote>
            </li>
        </ul> 
    </article>
    <article id="sub1-2">
        <h3>수정된 코드</h3>
        <iframe height="500" style="box-sizing:border-box; width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/ryusoo/embed/GRwKYLj?default-tab=js&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/ryusoo/pen/GRwKYLj">
            Untitled</a> by 류수현 (<a href="https://codepen.io/ryusoo">@ryusoo</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </article>
</article>

<article id="sub2">
    <h2 class="sub-title">✅텍스트 줄 넘침 확인하기</h2>
    <article id="sub2-3">
        <p class="post-date">
            <span class="creation-date">작성일 : 2023-06-16</span>
            <span class="modification-date">수정일 : 2023-06-16</span>
        </p>
        <p>
            <code>text-overflow: ellipsis;</code> 를 했을 때 <code>offsetHeight</code>와 <code>scrollHeight</code>의 차이를 이용하면 된다고 한다!
            <br>개발자모드로 봐도 몰랐는데.. 실제로 js로 확인해보니까 값이 다른걸 확인했다!
            <br>스크롤이 생기진 않지만 전체 길이를 알 수 있다니..!
<pre><code class="block"><span class="comment">/* textEl가 text-overflow로 인해 줄여진 Element면 
    더보기 버튼(moreButton) 요소를 추가해주기 위해 사용했다 
*/</span>
if (textEl.<b>offsetHeight</b> < textEl.<b>scrollHeight</b>) {
    textEl.insertAdjacentHTML('afterend', moreButton);
}
</code></pre>
            <blockquote>
                추가정보 : <a href="/code-drawer/?post=post1#sub3">
                    📑텍스트 줄이기, 말 줄임, 생략 ... 한 줄 일때, 두 줄 이상 일때
                </a>
            </blockquote>
            <blockquote>
                읽은 글 : <a href="https://velog.io/@rkio/Javascript-text-overflow-ellipsis-%ED%99%9C%EC%84%B1-%EC%97%AC%EB%B6%80%EB%A5%BC-JS%EB%A1%9C-%ED%8C%90%EB%8B%A8%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95">
                    [Javascript] text-overflow: ellipsis 활성 여부를 JS로 판단하는 방법
                </a>
            </blockquote>
        </p>
    </article>
</article>
`;

export default post2;