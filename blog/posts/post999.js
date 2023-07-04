
// class 잊을까봐 따로 적는 탬플릿..
// 💛마다 빼먹지말고 내용 적고 💛지우기

/*📌 article마다 sub1, sub1-2 이렇게 아이디를 주어야합니다.
    article이 각 heading tag를 감싼 구조여야함('.' aside-menu 출력을 위해) 
    구조 예시) 

<article id="sub1">
    <h2 class="sub-title">제목</h2>
</article>

<hr>

<article id="sub2">
    <h2 class="sub-title">제목</h2>
    <article id="sub2-1">
        <h3>소제목</h3>
    </article>
    <article id="sub2-2">
        <h3>소제목</h3>
    </article>
</article> 
*/

/* 
<article id="sub1💛">
    <h2 class="sub-title">📦 💛</h2>
    <p class="post-date">
        <span class="creation-date">학습일 : 2023-00-00💛</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글 : <a href="💛">
        타이틀💛
        </a>
    </blockquote>
    <p>
        동기: 💛
    </p>
    <span class="exam">정리는 다음에..</span>
</article>
<hr>
*/

const postTemplate = `
<h1 class="title">📦 찾아본 기록</h1>


<article id="sub1">
    <h2 class="sub-title">📦 니가 논리 연산자를.. 잊어먹어? 정리</h2>
    <p class="post-date">
        <span class="creation-date">학습일 : 2023-06-29</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글 : <a href="https://im-designloper.tistory.com/86">
        [ JavaScript ] 논리 연산자 정리 &&, ||, <<, >>, !, !!, ?, ??
        </a>
        <br>읽은 글 : <a href="https://aiday.tistory.com/102">
        [Javascript] 자바스크립트 물음표(?) 2개 / 느낌표(!) 2개 / 물결(~) 2개 연산자(feat.예시코드)
        </a>
    </blockquote>
    <p>
        동기: 책 학습하며 코드중에 !!를 봤는데 기억이 안나서 당황했다. 안쓰면.. 잊어먹는건 순식간이구만.. 정리해서 잊지말자!
    </p>
    <span class="exam">정리는 다음에..</span>
</article>
<hr>


<article id="sub2">
    <h2 class="sub-title">📦 Git 브랜치 이름 컨벤션을 알아보자</h2>
    <p class="post-date">
        <span class="creation-date">학습일 : 2023-06-28</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글1 : <a href="https://junjunrecord.tistory.com/131">
        [Git] branch 종류 및 naming 참고 및 주의사항
        </a>
        <br>읽은 글2 : <a href="https://www.inbogi.com/bok/2020/04/1/">
        [GIT] GIT branch strategy 명명규칙 및 전략
        </a>
        <br>읽은 글3 : <a href="https://applecider2020.tistory.com/36">
        [Git] Git 브랜치 이름은 어떻게 정할까? - Git Flow로 브랜치 관리하기
        </a>
    </blockquote>
    <p>
        동기: 카페에서 깃허브에 커밋했던걸 집에서 머지하려다가 commit 컨벤션은 전에 검색해서 잘쓰고있는데, 브런치도 컨벤션이 있지 않을까 싶어서 검색하게 되었다!
    </p>
    <span class="exam">정리는 다음에..</span>
</article>
<hr>


<article id="sub3">
    <h2 class="sub-title">📦 UML 컴포넌트 다이어그램을 사용해볼까?</h2>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-06-27</span>
        <span class="modification-date">수정일 : 2023-06-27</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글1 : <a href="https://boardmix.com/kr/skills/component-diagrams/">
        [boardmix] 컴포넌트 다이어그램 정의와 그리기 좋은 도구 추천
        </a>
        <br>읽은 글2 : <a href="https://velog.io/@jakeseo_me/UML-%EC%8B%A4%EC%A0%84%EC%97%90%EC%84%9C%EB%8A%94-%EC%9D%B4%EA%B2%83%EB%A7%8C-%EC%93%B4%EB%8B%A4-%EC%A0%95%EB%A6%AC-2%EC%9E%A5">
        UML 실전에서는 이것만 쓴다 정리 #2장 다이어그램으로 작업하기
        </a>
    </blockquote>
    <p>
        동기: 정보처리기사 실기책을 보다가 필기와 다르게 UML에 대해서 좀더 자세히 설명했는데 컴포넌트 다이어그램에 관심이 갔다. 
        얼마전 투두리스트를 리액트로 만들었는데, 시간이 지나서 다시 코드를 리팩토링할때마다 컴포넌트를 매번 다시 살펴야하는것이 불편했다.
        (단순히 기억력의 문제인거같지만..) 그런데 컴포넌트 다이어그램으로 시각적으로 빠르게 파악이 될 수 있도록 작성해둔다면 좋지 않을까 싶었다.
        그래서 검색하여 발견한 Boardmix를 다음에 사용해보고 글을 작성해보려고한다!
        <br>우선 다른 공부 일정이 먼저라 미뤄둠 : <a href="https://boardmix.com/app/editor/NDYz_8CwJpuaYuujsNimOA">
            여유로울때 학습해보자
        </a>
    </p>
    <hr>
    그리고 실제로 UML을 실무에서 사용하는지 궁금해서 물어봤더니, 사용하긴하는데 개발이라는게 항상 변화가 일어나기때문에
    그때마다 UML을 다시 업데이트 해줘야해서 관리가 잘 안되면 오히려 문서화하는데 시간만 들이고 안좋을 수 있다고 했다.음.. 그런점도 있군
    리액트로 컴포넌트를 만들고, Hook을 만들어 쓰다보니 시간이 지난 뒤 다시 코딩한걸 살펴볼때면
    <br><span class="exam">정리는 다음에..</span>
</article>
`;

export default postTemplate;