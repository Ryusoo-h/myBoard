
const title = '[프론트엔드 아키텍처] [React] 비지니스 로직 관리';

export const postMeta = {
    title : title,
    description: '🍋좋은 습관들이기 습관1 : 휴리스틱 끄기 우리는 문제를 풀때 휴리스틱을 사용해서 푸는데 좋지못한 습관이 될 수도 있다. 상황에 맞는 판단을 하기 위해선 종종 휴리스틱을 꺼야한다. ❓ 단어 검색 | 휴리스틱(heuristic) : 경험적인, 스스로 발견하게 하는 문제를 해결하거나 불확실한 사항에 대해 판단을 내릴 필요가 있지만, 명확한 실마리가 없을 경우에 사용하는 편의적 발견적인 방법',
    keywords : ['프론트엔드 아키텍처', 'React', '비지니스 로직', '뷰와 로직', '비지니스 로직', '관심사의 분리']
};

const post1 = `
    <h1 class="title">${title}</h1>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-05-06</span><span class="modification-date">수정일 : 2023-05-15</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글 : <a href="https://medium.com/@shinbaek89/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EB%B9%84%EC%A7%80%EB%8B%88%EC%8A%A4-%EB%A1%9C%EC%A7%81%EA%B3%BC-%EC%82%AC%EB%A1%80-f09774f53a3b">
            [React] 프론트엔드 아키텍처 비지니스 로직과 사례
        </a>
    </blockquote>
    <p>
        후기: 리액트로 앱을 만들면서 어떤 기준으로, 어떻게 뷰와 로직을 분리 하는것이 좋을지 고민이었는데 그에 대한 예시들과 코드를 볼 수 있어 좋았다. 앞으로 코드를 적으며 고민이 될때, 고려하면 좋을 기준과 예시를 다시 참고하고 싶어 요약했음.
    </p>

    <hr>
    <article id="sub1">
        <h2 class="sub-title">🍋좋은 습관들이기</h2>
        <article id="sub1-1">
            <h3>습관1 : 휴리스틱 끄기</h3>
            <ul>
                <li>
                    우리는 문제를 풀때 <mark><b>휴리스틱</b></mark>을 사용해서 푸는데 좋지못한 습관이 될 수도 있다. 상황에 맞는 판단을 하기 위해선 종종 휴리스틱을 꺼야한다.
                    <br><mark class="block">
                        ❓ <b>단어 검색 | 휴리스틱(heuristic)</b> : 경험적인, 스스로 발견하게 하는
                        문제를 해결하거나 불확실한 사항에 대해 판단을 내릴 필요가 있지만, 명확한 실마리가 없을 경우에 사용하는 편의적 발견적인 방법
                    </mark>
                </li>
                <li>
                    습관은 대부분의 도움이 되지만 전혀 예상하지 못한 문제를 만들어 낼 수 있다.
                    <ul>
                        <li>상태관리에서 나타날 수 있는 문제</li>
                        <li><strong>유지보수 하기 어려운 코드 <span class="red">←가장 큰 문제</span></strong></li>
                        <li>렌더링 성능이나 가독성 이슈 <span class="exam">ex) 습관적인 useState 사용으로 불필요한 리렌더 발생</span></li>
                    </ul>
                </li>
            </ul>
        </article>
        <article id="sub1-2">
            <h3>습관2 : 비지니스 로직(=도메인 로직) 분리하기</h3>
            <ul>
                <li>
                    <mark><b>📌도메인 로직</b></mark> : 우리가 만드는 애플리케이션 서비스가 사용되고 적용되는 영역
                    <br>⇒ 어떻게 보여줄지 논의하는 것 제외
                    <br><span class="exam block exam-tag">
                        <b>B비지니스 로직</b>과 <b>V뷰</b>로 나눈 예
                        <br><b>B</b> : 추가 상품을 3개 이상 구매하면 최종 결제 금액에서 1,000원을 제(할인)한다.
                        <br><b>V</b> : 할인 전 가격과 할인 후 가격을 노출하고, 할인 전 가격은 작고 흐릿하게, 할인 후 가격은 크고 굵게 노출한다.
                    </span>
                </li>
                <li>
                    <b>👍 컴포넌트 분리로 리렌더링을 줄임</b>
                    <br><span class="exam">input을 다룰 때 컴포넌트를 분리하면, 상태 변화시 분리된 컴포넌트만 리렌더링될 뿐 전체 Page가 렌더링 되지 않음.</span>
                </li>
                <li>
                    <b>👍 언제든 로직을 편하게 수정할 수 있도록 함</b>
                    <br><span class="exam">ex) '비밀번호는 8자 이상' 조건에서 '비밀번호는 8자이상 12자 이하'로 조건이 바뀌더라도 수정이 용이하도록</span>
                </li>
            </ul>
        </article>
    </article>

    <hr>
    <article id="sub2">
        <h2 class="sub-title">🔧비지니스 로직 관리 수준</h2>
        <mark class="block"><b>비지니스 로직은 하위 컴포넌트의 변경에 영향을 받지 않는 수준에서 관리되어야한다.</b></mark>
        <ul>
            <li>‘.’ 한 페이지에서 다루는 비지니스 로직은 컴포넌트 단위로 움직이지 않기 때문</li>
            <li>👌 단, 비지니스 로직의 규모가 작고 특정 컴포넌트 영역에만 영향을 준다면 구축 비용 절감을 위해 페이지 단위의 비지니스 로직을 구축하는 것도 효과적이다</li>
        </ul>
        <article id="sub2-1">
            <h3>방법1 : Context API, 커스텀 훅 활용</h3>
            <ul>
                <li>비지니스 로직을 언제 초기화하고 어떻게 관리할지, 비지니스 로직의 상태를 유지하기위해 <b>Context API</b> 또는 <b>커스텀 훅</b> 활용하기</li>
                <li>Context API 환경에서 비지니스 로직과 관계가 있는 훅을 관리할 때 좋은 방법들
                    <ul>
                        <li>방법1 : 필요한 훅을 가져오지 않았을 때 에러 던지기</li>
                        <li>방법2 : 인자로 받도록 하기 ( 이 경우, 다른 로직으로 변경할 수도 있어 유연성이 높다)</li>
                    </ul>
                </li>
            </ul>
        </article>
        <article id="sub2-2">
            <h3>방법2 : refresher 사용</h3>
            <ul>
                <li>Context API를 비지니스 로직을 관리하기 위해 사용한 경우 발생하는 문제
                    <br>: 이벤트가 발생한 컴포넌트를 제외하고, 로직 상태를 업데이트 해도 페이지가 렌더링 되지 않음
                    <br>⇒ 조금 억지스럽긴 하지만 <code>refresher</code>와 같은 상태를 관리하는 것도 방법
                    <br>⇒ <code>refresher</code>를 사용할 경우, 비지니스 상태의 업데이트와 View 상태의 업데이트 결합을 피할 수 있다.
                    
                    <iframe height="440" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/ryusoo/embed/dygKwry?default-tab=js&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/ryusoo/pen/dygKwry">
                        Untitled</a> by 류수현 (<a href="https://codepen.io/ryusoo">@ryusoo</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </li>
            </ul>
        </article>
        <article id="sub2-3">
            <h3>참고 : 로직의 분리는 환경을 구분하지 않는다</h3>
            <ul>
                <li><b>목적</b> : 장수할 수 있는 프로젝트를 만들고, 손쉽게 문제를 해결할 수 있는 방법을 갖는다</li>
                <li><b>방법</b> : 우리 서비스만을 위한 npm 패키지를 만든다는 이미지를 그려보자</li>
            </ul>
        </article>
    </article>

    <hr>
    <article id="sub3">
        <h2 class="sub-title">✨관심사의 분리의 효과</h2>
        <ul>
            <li><b>소통</b>에 명확함이 생김</li>
            <li>뷰와 비지니스 로직을 따로 적용하고 결합하는 <b>작업을 단계적으로 진행</b>할 수 있음</li>
            <li>간단한 요청을 개발자가 <b>간단하게 유지보수</b>를 해결할 수 있음
                <span class="exam block exam-tag">
                    ex) 관심사가 분리되어 있지 않은 경우 : 관련 로직이 어느 컴포넌트에, 어떻게 적용됐는지, View에 어떻게 결합되어있는지 고려해야함
                    <br>관심사가 분리되어 있는 경우 : 간단한 수정으로 끝남
                </span>
            </li>
            <li><b>재사용, 유연성 증가</b>
                <ul>
                    <li>OOP, FP등 특정 프레임워크에 구애받지 않음</li>
                </ul>
            </li>
            <li>뷰와 로직을 <b>독립적으로 테스트</b>할 수 있고, <b>참고 레퍼런스가 많음</b></li>
        </ul>
    </article>
    <hr>
    <blockquote>
        원본 글 보러가기 → <a href="https://medium.com/@shinbaek89/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EB%B9%84%EC%A7%80%EB%8B%88%EC%8A%A4-%EB%A1%9C%EC%A7%81%EA%B3%BC-%EC%82%AC%EB%A1%80-f09774f53a3b">
            [React] 프론트엔드 아키텍처 비지니스 로직과 사례
        </a>
    </blockquote>
`;

export default post1;