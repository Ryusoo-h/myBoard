
export const postTemplate = `
<h1 class="title">모듈이란</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-00-00💛</span>
    <span class="modification-date">수정일 : 2023-00-00💛</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 이 글은 알게된 정보들을 모아 정리한것 입니다. 혹 잘못된 내용이 있거든 언제든 <a href="https://github.com/Ryusoo-h/myBoard/issues" target="_blank">이슈</a>로 알려주세요..! 감사합니다 </span>
</p>
<blockquote>
    읽은 글1 : <a href="https://velog.io/@ruddnjs5816/%EB%AA%A8%EB%93%88Module%EA%B3%BC-%EB%AA%A8%EB%93%88%ED%99%94Modularization#%EB%AA%A8%EB%93%88" target="_blank">
        모듈(Module)과 모듈화(Modularization)
    </a>
    <br>읽은 글2 : <a href="https://jeong-pro.tistory.com/23">
        순수 함수란? (함수형 프로그래밍의 뿌리, 함수의 부수효과를 없앤다)
    </a>
    <br>읽은 글3 : <a href="https://www.inflearn.com/questions/478816/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%AA%A8%EB%93%88%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%B4-%EB%AD%94%EA%B0%80%EC%9A%94" target="_blank">
        컴포넌트와 모듈의 차이점이 뭔가요?
    </a>
    <br>읽은 글4 : <a href="https://brunch.co.kr/@taehyo/29" target="_blank">모듈은 규칙이다</a>
</blockquote>
<p>
    동기: FE스터디 단톡방에서 모듈에 대해 이야기했어서 남친(1n년째 개발자의 삶을 살고있는 찐개발자놈)한테 그 얘기를 하다가, 제대로된 모듈 개념으로 후두루챱챱 맞았다. 모듈이 뭔지 정리해서 잊지말자
</p>

<hr>

<article id="sub1">
    <h2 class="sub-title">모듈 개념찾기</h2>
    <ul>
        <li>
            단순히 '모듈'을 구글 검색해보면 대부분 아래와 같은 설명들이 나온다
            <ul>
                <li>프로그램을 구성하는 구성 요소로, 관련된 데이터와 함수를 하나로 묶은 단위</li>
                <li>모듈은 대개 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나</li>
                <li>여러 기능들에 관한 코드가 모여있는 하나의 파일</li>
                <li>하나의 소스 파일에 모든 함수를 작성하지 않고, 함수의 기능별로 따로 모듈을 구성</li>
            </ul>
        </li>
        <li>저렇게만 알고있던 나는 이 질문을 받고 부서지게된다
            <span class="exam block">
                남친 : "그러면 함수를 담은 파일은 모듈이냐?"
                <br>나 : "..맞지않나?"
                <br>남친 : (망한 표정)
                <br>이 뒤로 엄청나게 설명들었다
            </span>
            '아니 왜? js로 모듈을 <code>import</code>, <code>export</code>하며 당연하게 써왔는데 아니라고?'
            라는 생각 말고 나눌때 어떤 기준으로 나눴던지 생각을 했다면 대답할 수 있었을텐데, (코딩할때 아무렇게나 나누진 않잖아..)
            <br>이때 <b>모듈화</b>라는 개념을 떠올렸어야하는데 그러지 못했다.
        </li>
    </ul>
    <article id="sub1-1">
        <h3>모듈화와 모듈</h3>
        <mark class="block">
            <ul>
                <li><b class="red">모듈화</b>
                    <ul>
                        <li><b>기능적인 분리</b>를 통해서 다른 프로그램을 개발할 때에도<br><b>유지보수</b>와 <b>코드 재사용성</b>을 높여 소프트웨어를 설계하는 기법</li>
                    </ul>
                </li>
                <li><b class="red">모듈</b>
                    <ul>
                        <li><b>재사용</b> 가능한 <b>독립적인 프로그래밍 파트</b> 이다.</li>
                        <li>다른 것들과 구분될 수 있는 <b>독립적인 기능</b>을 가져야한다</li>
                        <li>다른 프로그램이나 다른 모듈에서 <b>호출</b>하여 사용할 수 있어야한다</li>
                    </ul>
                </li>
            </ul>
        </mark>
        <ul>
            <li>아무거나 붙잡고 "특정 기능이 있는 함수를 파일로 나눴으니까 모듈이야!" 라고 하면 틀렸다는거다</li>
            <li><b>함수를 담은 파일은 모듈인가? 이 질문이 틀릴 수 있는 이유</b>
                <br>만약 그 파일만 가져와서 온전히 기능을 수행할 수 있다면 모듈이지만,
                <br>그렇지 못하고 다른 파일의 함수를 호출해야하는 등 다른 코드에 의존적이라면 모듈이 아니다.('.'독립성x)
                <br>.'. 함수를 순수함수로 만든다면 <b>모듈화 수준이 높다</b>고 한다.
            </li>
            <li>이렇듯 <mark>모듈은 <b>독립적인 기능</b>이 있어야하고, <b>재사용성</b>과 <b>독립성</b>이 보장되어야한다.</mark> 
                <br>하지만 모듈이라는 개념이 프로그래밍 생태계에서 <span class="red">넓은 의미로의 사용</span>되기 때문에 모듈이라고 말하는 것들에 <span class="red">모순</span>이 있다고 한다
            </li>
        </ul>
        <br><br>
        ...어렵군 파일 나눌때 잘 생각해봐야겠어
    </article>
</article>
`;

export default postTemplate;