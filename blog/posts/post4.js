
const title = '[프론트엔드 아키택처] API 요청 관리';

export const postMeta = {
    title : title,
    description: '📂API 요청 폴더 관리 프론트엔드에서 습관적으로 api라고 이름짓고 사용한다 ❔ 왜 repository, request를 사용하지 않는가? 안되나? => 백엔드를 살펴보자 백엔드는 어떻게 하고있나 ✅새로 알게된 단어 | ORM(Object-relational mapping) : 객체지향으로 구성된 프로그램과 스칼라 데이터를 다루는 관계형 데이터베이스 사이에 데이터 매핑을 해주는 프로그래밍기법 Repository : 창고. 서버에서 데이터를 보관하고 관리하는 대상을 Repository로 추상화하여 이해하기 쉽고 유연하게 관리가 가능하도록함. 프론트엔드에 적용하기 서버와 API 통신, Cookie, LocalStorage 등을 Repository로 추상화하면 장점1. 이 중 어떤 방식인지 알 필요없이 목적을 파악하고 사용할 수 있다 장점2. 언제든 관련 엔드 포인트를 변경할 수도 있다.',
    keywords : ['프론트엔드 아키택처', 'API 요청', '백엔드', 'API 이름 짓기', '로직 분리', '추상화']
}; 
const post4 = `
    <h1 class="title">${title}</h1>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-05-17</span>
        <span class="modification-date">수정일 : 2023-05-17</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글 : <a href="https://medium.com/@shinbaek89/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-api-%EC%9A%94%EC%B2%AD-%EA%B4%80%EB%A6%AC-113c31d7bcee">
        프론트엔드 아키텍처: API 요청 관리
        </a>
    </blockquote>
    <p>
        동기: <a href="/myBoard/blog/?post=post1">[React] 프론트엔드 비지니스 로직 관리</a>의 연장 공부
        <br>후기: 어떻게 하면 API 요청을 잘 관리할 수 있을지, 고려할 점들을 알려준 글.
        <br>API 요청이 익숙하지 않을때는 학습을 위해서 책이나 강의에서 봤던 예제들을 따라하며 배웠던 방식 그대로 작성을 했지만, 
        자주 다루고, 비지니스 로직이 바뀌어 수정하는 과정을 겪으면서 배웠던 방법이 유지보수에 좋지 않은 것 같다고 느꼈었다.
        불편함은 느꼈지만, 정확히 어떤부분을 고쳐야할지 알지 못했는데 이 글을 읽고 어떻게 개선하면 좋을지 알게되었다.
    </p>

    <hr>

    <article id="sub1">
        <h2 class="sub-title">📂API 요청 폴더 관리</h2>
        <p>프론트엔드에서 습관적으로 <code>api</code>라고 이름짓고 사용한다
            <br>❔ 왜 <code>repository</code>, <code>request</code>를 사용하지 않는가? 안되나?
            <br>=> 백엔드를 살펴보자
        </p>
        <article id="sub1-1">
            <h3>백엔드는 어떻게 하고있나</h3>
            <ul>
                <li>
                    <mark class="block">
                        ✅<b>새로 알게된 단어 | ORM(Object-relational mapping) : </b> <br>객체지향으로 구성된 프로그램과 스칼라 데이터를 다루는 관계형 데이터베이스 사이에 데이터 매핑을 해주는 프로그래밍기법
                    </mark>
                </li>
                <li>
                    <mark><b>Repository</b></mark> : 창고. 서버에서 데이터를 보관하고 관리하는 대상을 <u>Repository로 추상화</u>하여 이해하기 쉽고 유연하게 관리가 가능하도록함.
                </li>
            </ul>
        </article>
        <article id="sub1-2">
            <h3>프론트엔드에 적용하기</h3>
            <ul>
                <li>
                    <b>서버와 API 통신, Cookie, LocalStorage 등을 <mark>Repository로 추상화</mark>하면</b>
                    <br>장점1. 이 중 어떤 방식인지 알 필요없이 목적을 파악하고 사용할 수 있다
                    <br>장점2. 언제든 관련 엔드 포인트를 변경할 수도 있다.
                </li>
                <li><b>폴더 네이밍 : repository</b>
                    <ul>
                        <li>네이밍에 집착할 필요는 없지만 <b>request</b>를 사용하는게 적절하다고 생각하지 않는 이유
                            <ol>
                                <li>다른 요청과 혼동될 수 있다.
                                    <br>'.' 프론트엔드에서 하는 요청이 서비스 데이터를 보관/관리하는것만 있는게 아님
                                </li>
                                <li>하지만 프론트엔드에서 요청이라고하면 api요청을 떠올리기에, 감당할만한 수준의 문제라고 생각됨.</li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li><b>폴더 구조</b>
                    <br><iframe height="510" style="width: 100%;" scrolling="no" title="post4" src="https://codepen.io/ryusoo/embed/LYggLBb?default-tab=js&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/ryusoo/pen/LYggLBb">
                        post4</a> by 류수현 (<a href="https://codepen.io/ryusoo">@ryusoo</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </li>
                <li><b>적절한 폴더에 그룹핑하기</b>
                    <ul>
                        <li>어느 <b>입구</b>를 지나가는지 생각하기
                            <br>입구 ≒ SQL을 통해 질의를 할때 사용하는 메인 테이블
                            <mark class="block">
                                ⇒ 직관에 의존한 네이밍❌<br>
                                ⇒ 도메인 지식에 근거한 결정👍
                                <span class="exam block exam-tag">
                                    <u>(조건1)할 일 목록</u>과 <u>(조건2)목록에 포함된 할일</u>을 함께 조회한다 
                                    <br>→ todo list 입구를 반드시 지남
                                    <br>⇒ .’.<code>todoListRequest</code>에 포함
                                </span>
                                <span class="exam block exam-tag">
                                    <u>특정 단어를 포함하는 할일</u> 조회
                                    <br>→ 정보 접근 입구는 할일들이 유일함
                                    <br>⇒ <code>todoRequest</code>에 포함
                                </span>
                            </mark>
                        </li>
                    </ul>
                </li>
            </ul>
        </article>
    </article>

    <hr>
    <article id="sub2">
        <h2 class="sub-title">📛API 이름 짓기</h2>
        <ul>
            <li><b>컨벤션 정하기</b> : 프론트와 백 협업 시 API가 많이 만들어진다!
                <span class="exam block exam-tag">
                    <ul>
                        <li>데이터 조회 : <code>find</code>, <code>get</code></li>
                        <li>수정 : <code>update</code></li>
                        <li>추가 : <code>save</code>, <code>create</code></li>
                        <li>삭제 : <code>remove</code>, <code>delete</code></li>
                    </ul>
                </span>
            </li>
            <li><b>이름과 같은 의미로 함수가 구현되어야함</b>
                <ul>
                    <li>부수 효과가 있어선 안된다.</li>
                </ul>
            </li>
        </ul>
    </article>
    
    <hr>
    <article id="sub3">
        <h2 class="sub-title">✨API에서 로직 분리</h2>
        <ul>
            <li>데이터를 보내거나 받을 때 데이터를 관리하는 방식을 <b>어디에서 처리</b>할 것인가</li>
            <li><b>분리 기준 : <mark>타입/자료구조와 관련이 있는가 <span class="red">vs</span> 비지니스 로직과 관련이 있는가</b></mark>
                <ul>
                    <li><b>API요청 코드</b>와 <b>비지니스 로직 코드</b>가 각각 수정될 수 있도록</li>
                    <li>'.' <u>비지니스 로직은 서비스 전반에 걸쳐 사용되는 로직</u>이다!
                        <br>만약 비지니스로직과 자료구조 로직을 분리해두지 않는다면 수정이 번거로운 상황이 생긴다
                        <br><span class="exam">ex) 비지니스 로직만 수정하면되는데 API 요청도 수정하게되는 불편함</span>
                    </li>
                </ul>
            </li>
            <li><b>분리시 로직이 전처리/후처리로 분리된다</b>
                <mark class="block">
                    <ol>
                        <li>API 요청 전처리1 = <span class="red">비지니스 로직</span>
                            <br> ▼
                        </li>
                        <li>API 요청 전처리2 = <span class="red">자료구조 로직</span>
                            <br> ▼
                        </li>
                        <li>API 요청</li>
                        <li>서버에 요청을 받아옴</li>
                        <li>API 응답
                            <br> ▼
                        </li>
                        <li>API 응답 후처리1 = <span class="red">자료구조 로직</span>
                            <br> ▼
                        </li>
                        <li>API 응답 후처리2 = <span class="red">비지니스 로직</span></li>
                    </ol>
                </mark>
            </li>
            <li><b>분리시 장점</b>
                <ul>
                    <li>에러 핸들링에 도움이 됨</li>
                    <li>에러 카테고리를 만들기 수월해짐</li>
                </ul>
            </li>
        </ul>
    </article>

    <hr>
    <article id="sub4">
        <h2 class="sub-title">🔧추상화와 API 코드 관리</h2>
        <article id="sub4-1">
            <h3>인터페이스를 사용해 요청 추상화하기</h3>
            <ul>
                <li><b>개념</b>
                    <br>추상 = 핵심기능
                    <br> 인터페이스 = 핵심기능을 추상화해 코드로 만든것
                    <br> => .’. 인터페이스만 지키면 코드는 정상작동함!!
                </li>
                <li><b>방법</b>
                    <ul>
                        <li>바닐라 JS일 경우 JSDoc을 사용함
                            <br><a href="https://poiemaweb.com/jsdoc-type-hint">JSDoc</a>
                            : TS 처럼 타입과 필요한 인자, 반환값을 명시해 핵심 기능이 무엇인지 알게함
                        </li>
                        <li>TS일 경우 수월함</li>
                    </ul>
                </li>
                <li><b>장점</b>
                    <ul>
                        <li>인터페이스를 지키는 범위내에서 자유로운 변경이 가능하다</li>
                        <li>테스트를 작성할 때에도 도움이 된다</li>
                    </ul>
                </li>
            </ul>
        </article>
        <article id="sub4-2">
            <h3>추상화와 도구가 강하게 의존하지 않아야함</h3>
            <ul>
                <li>
                    <span class="exam block">ex) axios를 fetch로 바꾸는 등 도구의 변경이 있어도 코드 수정이 수월함
                        <br><iframe height="301" style="width: 100%;" scrolling="no" title="post4 sub4-2" src="https://codepen.io/ryusoo/embed/NWOOvgQ?default-tab=js&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                            See the Pen <a href="https://codepen.io/ryusoo/pen/NWOOvgQ">
                            post4 sub4-2</a> by 류수현 (<a href="https://codepen.io/ryusoo">@ryusoo</a>)
                            on <a href="https://codepen.io">CodePen</a>.
                        </iframe>
                    </span>
                </li>
            </ul>
        </article>
    </article>
`;

export default post4;