
export const post9 = `
<h1 class="title">정처기 실기1. 요구사항 확인3</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-26</span>
    <span class="modification-date">수정일 : 2023-06-26</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B009 UML, UML-사물</mark> <mark>A010 UML-관계</mark> <mark>A011 UML-다이어그램</mark>
    <br>기능 모델링 : <mark>C012 유스케이스 다이어그램</mark> <mark>D013 활동 다이어그램</mark>
    <br>정적 모델링 : <mark>A014 클래스 다이어그램</mark>
    <br>동적 모델링 : <mark>B015 순차 다이어그램</mark> <mark>D016 커뮤니케이션 다이어그램</mark> <mark>D017 상태 다이어그램</mark>
    <br><mark>B018 패키지 다이어그램</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">009</b></h2>
    <ul>
        <li><button type="button" class="red">UML</button>(<button type="button">Unified Modeling Language</button>)
            <ul>
                <li>시스템 분석, 설계, 구현 등 시스템 개발 과정에서</li>
                <li>시스템 개발자의 고객 또는 개발 상호 간의 의사소통이 원활하게 이루어지도록 <b>표준화한 대표적인 객체지향 모델링 언어</b></li>
                <li>Rumbaugh, Booch, Jacobson 등의 객체지향 방법론의 장점을 통합함</li>
                <li>OMG(Object Management Group)에서 표준으로 지정함</li>
                <li>구성요소
                    <ul>
                        <li><button type="button">사물 (Things)</button></li>
                        <li><button type="button">관계 (Relationships)</button></li>
                        <li><button type="button">다이어그램 (Diagram)</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">사물 (Things)</button>
            <ul>
                <li>다이어그램 안에서 관계가 형성될 수 있는 대상들</li>
                <li>모델을 구성하는 가장 중요한 기본요소</li>
                <li>종류
                    <ul>
                        <li><button type="button" class="red">구조 사물</button>(<button type="button">Structral Things</button>)
                            <ul>
                                <li>시스템의 개념적, 물리적 요소 표현</li>
                                <li>클래스, 유스케이스, 컴포넌트, 인터페이스, 노드 등</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">행동 사물</button>(<button type="button">Behavioral Things</button>)
                            <ul>
                                <li>시간과 공간에 따른 요소들의 행위 표현</li>
                                <li>상호 작용, 상태 머신 등</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">그룹 사물</button>(<button type="button">Grouping Things</button>)
                            <ul>
                                <li>요소들을 그룹으로 묶어서 표현</li>
                                <li>패키지</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">주해 사물</button>(<button type="button">Annotation Things</button>)
                            <ul>
                                <li>부가적인 설명이나 제약조건 등을 표현</li>
                                <li>노트</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><span class="red">010</span></h2>
    <ul>
        <li><button type="button">관계 (Relationship)</button>
            <ul>
                <li>사물과 사물 사이의 연관성 표현</li>
                <li>종류
                    <ul>
                        <li><button type="button" class="red">연관 관계</button>(<button type="button">Association</button>)
                            <ul>
                                <li>2개 이상 사물이 서로 관련되어 있는 관계</li>
                                <li>
                                    <b>실선 연결</b>
                                    <br><b>방향성</b> : <span class="red">화살표 (양방향 관계의 경우 화살 표 생략)</span>
                                    <br><b>다중도</b>를 선 위에 표기함
                                    <ul>
                                        <li>1 : 1개 객체 연관됨</li>
                                        <li>n : n개의 객체 연관됨</li>
                                        <li>0..1 : 연관된 객체가 없거나 1개 존재</li>
                                        <li>0..* 또는 * : 연관된 객체가 없거나 다수일 수 있음</li>
                                        <li>1..* : 연관된 객체가 적어도 1개 이상</li>
                                        <li>n..* : 연관된 객체가 적어도 n개 이상</li>
                                        <li>n..m : 연관된 객체거 최소 n개 최대 m개임</li>
                                        <li><mark class="block"><b>주인</b> ───> <b>소유물</b></mark>
                                            <ul>
                                                <li><span class="exam">사람</span> 1 ───> 1 <span class="exam">집</span> : <button type="button">사람이 집 소유. 집은 1사람에 의해서만 소유될 수 있음. 사람은 집을 1개만 소유할 수 있음</button></li>
                                                <li><span class="exam">선생님</span> 1..* ──── 1..* <span class="exam">학생</span> : <button type="button">학생은 1명 이상의 선생님으로부터 가르침을 받음. 선생님은 1명 이상의 학생을 가르침</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">집합 관계</button>(<button type="button">Aggregation</button>)
                            <ul>
                                <li>하나의 사물이 다른 사물에 포함되어 있는 관계</li>
                                <li><b>포함하는쪽(전체, Whole)</b>과 <b>포함되는쪽(부분, Part)</b>은 서로 <span class="red">독립적</span>이다</li>
                                <li><b>포함하는쪽(전체, Whole)</b>으로 <span class="red">속이 빈 마름모</span> 연결
                                    <br><mark class="block"><b>포함하는쪽(전체, Whole)</b> ◇─── <b>포함되는쪽(부분, Part)</b></mark>
                                    <ul>
                                        <li><span class="exam">컴퓨터</span> ◇─── <span class="exam">프린터</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">포함 관계</button>(<button type="button">Composition</button>)
                            <ul>
                                <li><button type="button" class="not-hidden">집합 관계</button>의 특수한 형태</li>
                                <li><b>포함하는 사물</b>의 변화가 <b>포함되는 사물</b>에게 영향을 미치는 관계</li>
                                <li><span class="red">독립될 수 없고 생명주기를 함께함</span></li>
                                <li><b>포함하는쪽(전체, Whole)</b>으로 <span class="red">속이 채워진 마름모</span> 연결
                                    <br><mark class="block"><b>포함하는쪽(전체, Whole)</b> ◆─── <b>포함되는쪽(부분, Part)</b></mark>
                                    <ul>
                                        <li><span class="exam">문</span> ◆─── <span class="exam">키</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">일반화 관계</button>(<button type="button">Generalization</button>)
                            <ul>
                                <li>하나의 사물이 다른 사물에 비해 더 일반적이거나 구체적인 관계</li>
                                <li>일반적개념 = 상위(부모)</li>
                                <li>구체적인 개념 = 하위(자식)</li>
                                <li><b>상위(부모)</b>쪽으로 <span class="red">속이 빈 화살표</span> 연결
                                    <br><mark class="block"><b>상위(부모)</b> ◁──── <b>하위(자식)</b></mark>
                                    <ul>
                                        <li><span class="exam">커피</span> ◁──── <span class="exam">아메리카노</span></li>
                                        <li><span class="exam">커피</span> ◁──── <span class="exam">에스프레소</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">의존 관계</button>(<button type="button">Dependency</button>)
                            <ul>
                                <li>연관은 있으나 필요에 의해 서로에게 영향을 주는 짧은 시간동안만 연관을 유지하는 관계</li>
                                <li>소유관계x, 사물의 변화가 다른 사물에게도 영향을 미침</li>
                                <li><b>영향을 받는 사물(제공자)</b>쪽으로 <span class="red">점선 화살표</span> 연결
                                    <br><mark class="block"><b>영향을 주는 사물(이용자)</b> - - - -> <b>영향을 받는 사물(제공자)</b></mark>
                                    <ul>
                                        <li><span class="exam">등급</span> - - - -> <span class="exam">할인율</span> : <button type="button">등급에 따라 할인율 적용</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">실체화 관계</button>(<button type="button">Realization</button>)
                            <ul>
                                <li>사물이 할 수 있거나 해야하는 기능으로, 서로를 그룹화할 수 있는 관계</li>
                                <li><b>사물</b>에서 <b>기능</b> 쪽으로 <span class="red">속이 빈 점선 화살표</span> 연결
                                    <br><mark class="block"><b>기능</b> ◁- - - - <b>사물</b></mark>
                                    <ul>
                                        <li><span class="exam">날 수 있다</span> ◁- - - - <span class="exam">새</span></li>
                                        <li><span class="exam">날 수 있다</span> ◁- - - - <span class="exam">비행기</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><span class="red">011</span></h2>
    <ul>
        <li><button type="button">다이어그램 (Diagram)</button>
            <ul>
                <li>사물과 관계를 도형으로 표현한 것</li>
                <li>여러 관점에서 시스템을 <b>가시화한 뷰</b>를 제공함으로서 의사소통에 도움을 줌</li>
                <li><b>정적 모델링</b>에서 주로 <button type="button">구조적 다이어그램</button> 사용</li>
                <li><b>동적 모델링</b>에서 주로 <button type="button">행위 다이어그램</button> 사용</li>
                <li><button type="button" class="not-hidden">구조적(Structural) 다이어그램 종류</button>
                    <ul>
                        <li><button type="button" class="red">클래스 다이어그램</button>(<button type="button">Class Diagram</button>)
                            <ul>
                                <li>클래스와 클래스가 가지는 속성, 클래스 사이의 관계 표현</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">객체 다이어그램</button>(<button type="button">Object Diagram</button>)
                            <ul>
                                <li>클래스에 속한 사물(객체)들, 인스턴스(Instance)를 특정 시점의 객체와 객체 사이의 관계로 표현함</li>
                                <li><b>럼바우 객체지향 분석 기법</b>에서 객체 모델링에 활용됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">컴포넌트 다이어그램</button>(<button type="button">Component Diagram</button>)
                            <ul>
                                <li>실제 구현모듈인 컴포넌트 간의 관계나 컴포넌트 간의 인터페이스 표현</li>
                                <li><b>구현 단계에서 사용됨</b></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">배치 다이어그램</button>(<button type="button">Deployment Diagram</button>)
                            <ul>
                                <li>결과물, 프로세스, 컴포넌트 등 물리적 요소들의 위치를 표현함</li>
                                <li><b>구현 단계에서 사용됨</b></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">복합체 구조 다이어그램</button>(<button type="button">Composite Structure Diagram</button>)
                            <ul>
                                <li>클래스나 컴포넌트가 복합 구조를 갖는 경우 그 내부 구조를 표현함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">패키지 다이어그램</button>(<button type="button">Package Diagram</button>)
                            <ul>
                                <li>유스케이스나 클래스 등의 모델 요소들을 그룹화한 패키지들의 관계를 표현함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">행위(Behavioral) 다이어그램 종류</button>
                    <ul>
                        <li><button type="button" class="red">유스케이스 다이어그램</button>(<button type="button">Use Case Diagram</button>)
                            <ul>
                                <li>사용자 요구분석하는것. 기능 모델링 작업에서 사용함</li>
                                <li>사용자와 사용 사례로 구성됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">순차 다이어그램</button>(<button type="button">Sequence Diagra</button>)
                            <ul>
                                <li>상호 작용하는 시스템이나 <span class="red">객체들이 주고받는 메시지</span>를 표현함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">커뮤니케이션 다이어그램</button>(<button type="button">Communication Diagram</button>)
                            <ul>
                                <li>동작에 참여하는 <span class="red">객체들이 주고받는 메시지와 객체들 간의 연관 관계</span>를 표현함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">상태 다이어그램</button>(<button type="button">State Diagram</button>)
                            <ul>
                                <li>하나의 객체가 자신이 속한 클래스의 상태 변화 혹은 다른 객체와의 상호작용에 따라 <span class="red">상태가 어떻게 변화하는지</span> 표현함</li>
                                <li><b>럼바우 객체지향 분석 기법</b>에서 동적 모델링에 활용됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">활동 다이어그램</button>(<button type="button">Activity Diagram</button>)
                            <ul>
                                <li>시스템이 어떤 기능을 수행하는지 객체의 처리 로직이나 조건에 따른 <span class="red">처리의 흐름을 순서에 따라</span> 표현함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">상호작용 개요 다이어그램</button>(<button type="button">Interaction Overview Diagram</button>)
                            <ul>
                                <li>상호작용 다이어그램 간의 <span class="red">제어 흐름</span> 표현</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">타이밍 다이어그램</button>(<button type="button">Timing Diagram</button>)
                            <ul>
                                <li><span class="red">객체 상태 변화와 시간 제약</span>을 명시적으로 표현함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><button type="button" class="red">스테레오 타입</button>(<button type="button">Stereotype</button>)
                    <ul>
                        <li>UML에서 표현하는 기본 기능 외에 추가적인 기능을 표현하는것</li>
                        <li><b>길러멧(Guilemet, </b>겹화살괄호 <code>&lt;&lt; &gt;&gt;</code>) 사이에 표현할 형태를 기술</li>
                        <li>주로 표현되는 형태
                            <ul>
                                <li><code>&lt;&lt;include&gt;&gt;</code> : 연결된 다른 UML 요소에 대해 포함 관계에 있는 경우</li>
                                <li><code>&lt;&lt;extends&gt;&gt;</code> : 연결된 다른 UML 요소에 대해 확장 관계에 있는 경우</li>
                                <li><code>&lt;&lt;interface&gt;&gt;</code> : 인터페이스를 정의하는 경우</li>
                                <li><code>&lt;&lt;exception&gt;&gt;</code> : 예외를 정의하는 경우</li>
                                <li><code>&lt;&lt;constructor&gt;&gt;</code> : 생성자 역할을 수행하는 경우</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">012</h2>
    <ul>
        <li><button type="button">기능 모델링</button>
            <ul>
                <li>
                    사용자의 요구사항을 분석하여 <b>개발될 시스템이 갖춰야할 기능</b>을 정리한 후,
                    <br> 사용자와 함께 정리된 내용을 <b>공유</b>하기위해 그림으로 표현하는 것
                </li>
                <li>개발될 시스템의 전반적인 형태를 기능에 초첨을 맞춰 표현함</li>
                <li>종류
                    <ul>
                        <li><button type="button" class="red">유스케이스 다이어그램</button>(<button type="button">Use Case</button>)</li>
                        <li><button type="button" class="red">활동 다이어그램</button>(<button type="button">Activity</button>)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">유스케이스 다이어그램</button>(<button type="button">Use Case</button>)
            <ul>
                <li>사용자와 다른 외부 시스템들이 <b>개발될 시스템을 이용해 수행할 수 있는 기능을 사용자의 관점에서 표현한 것</b></li>
                <li>외부 요소와 시스템 간의 <b>상호작용</b>을 확인할 수 있음</li>
                <li><b>사용자의 요구사항을 분석</b>하기 위한 도구로 사용됨</li>
                <li><b>시스템의 범위</b>를 파악할 수 있음</li>
                <li>구성요소
                    <ul>
                        <li><button type="button">시스템(System)</button> / <button type="button">시스템 범위(System Scope)</button>
                            <ul>
                                <li>시스템 내부의 유스케이스들을 사각형으로 묶어 시스템의 범위를 표현한 것</li>
                                <li>사각형안에 시스템 명 작성</li>
                            </ul>
                        </li>
                        <li><button type="button">액터(Actor)</button>
                            <ul>
                                <li>시스템과 상호작용을 하는 모든 외부 요소(사람, 외부시스템)</li>
                                <li><button type="button" class="not-hidden">주액터</button> : <mark class="block">사람모양</mark>. 시스템을 사용함으로서 이득을 얻는 대상. 주로 사람</li>
                                <li><button type="button" class="not-hidden">부액터</button> : <span class="exam exam-tag block">&lt;&lt;Actor&gt;&gt;<br>재고 시스템</span> 주액터의 목적 달성을 위해 시스템에 서비스를 제공하는 외부 시스템. 조직/기관</li>
                            </ul>
                        </li>
                        <li><button type="button">유스케이스(Use Case)</button>
                            <ul>
                                <li>사용자가 보는 관점에서 시스템이 액터에게 제공하는 서비스나 기능을 표현한 것</li>
                                <li>타원안에 서비스/기능 명 작성</li>
                            </ul>
                        </li>
                        <li><button type="button">관계(Relationship)</button>
                            <ul>
                                <li>액터와 유스케이스, 유스케이스와 유스케이스 사이에서 나타남</li>
                                <li>
                                    <button type="button" class="not-hidden">포함 관계</button> <mark class="block">&lt;&lt;include&gt;&gt;<br>- - - - - - - - -></mark>,
                                    <button type="button" class="not-hidden">확장 관계</button> <mark class="block">&lt;&lt;extends&gt;&gt;<br><- - - - - - - - -</mark>,
                                    <button type="button" class="not-hidden">일반화 관계</button> <mark class="block">◁- - - - - - - - -</mark>,
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title">013</h2>
    <ul>
        <li><button type="button">활동(Activity) 다이어그램</button>
            <ul>
                <li><b>사용자 관점</b>에서 시스템이 수행하는 기능을 <b>처리 흐름</b>에 따라 순서대로 표현한것</li>
                <li>하나의 유스케이스 안/사이에서 발생하는 복잡한 <b>처리 흐름</b>을 명확하게 표현할 수 있음</li>
                <li><button type="button" class="not-hidden">자료 흐름도</button>와 유사하다</li>
                <li>구성 요소
                    <ul>
                        <li><button type="button">액션(Action)</button> / <button type="button">액티비티(Activity)</button>
                            <ul>
                                <li><mark class="block">둥근 네모안에 액션/액티비티 명 작성</mark></li>
                                <li><button type="button" class="not-hidden">액션</button> : <button type="button">더 이상 분해할 수 없는 단일 작업</button></li>
                                <li><button type="button" class="not-hidden">액티비티</button> : <button type="button">몇 개의 액션으로 분리될 수 있는 작업</button></li>
                            </ul>
                        </li>
                        <li><button type="button">시작 노드</button>
                            <ul>
                                <li><mark class="block">●</mark> : 액션이나 액티비티가 시작됨을 표현함</li>
                            </ul>
                        </li>
                        <li><button type="button">종료 노드</button>
                            <ul>
                                <li><mark class="block">◎(가운데가 채워진 모양임)</mark> : 액티비티 안의 모든 흐름이 종료됨을 표현함</li>
                            </ul>
                        </li>
                        <li><button type="button">조건(판단) 노드</button>
                            <ul>
                                <li>조건에 따라 제어의 흐름이 분리됨</li>
                                <li>
                                    들어오는 제어흐름 1개, 나가는 제어흐름 여러개
                                    <br><mark class="block" style="line-height: 1rem">
                                        ↓<br>◇→<br>↓
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">병합 노드</button>
                            <ul>
                                <li>여러 경로의 흐름이 합쳐짐</li>
                                <li>
                                    들어오는 제어흐름 여러개, 나가는 제어흐름 1개
                                    <br><mark class="block" style="line-height: 1rem">
                                        →◇→<br><pre style="display:inline-block; margin:0;">  </pre>↓
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">포크(Fork) 노드</button>
                            <ul>
                                <li>액티비티의 흐름이 분리되어 수행됨을 표현</li>
                                <li>들어오는 액티비티 흐름 1개, 나가는 액티비티 흐름 여러개
                                    <br><mark class="block" style="line-height: 0.7rem; letter-spacing: -0.2rem;">
                                        <pre style="display:inline-block; margin:0;"> </pre>↓<br>■■<br>↓ ↓
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">조인(Join) 노드</button>
                            <ul>
                                <li>분리되어 수행되던 액티비티의 흐름이 다시 합쳐짐을 표현</li>
                                <li>들어오는 액티비티 흐름 여러개, 나가는 액티비티 흐름 1개
                                    <br><mark class="block" style="line-height: 0.7rem; letter-spacing: -0.2rem;">
                                        ↓ ↓<br>■■<br><pre style="display:inline-block; margin:0;"> </pre>↓
                                    </mark>
                                </li>
                            </ul>
                        
                        </li>
                        <li><button type="button">스윔레인(Swim Lane)</button>
                            <ul>
                                <li>액티비티 수행을 담당하는 주체를 구분하는 선</li>
                                <li>가로 또는 세로 실선을 그어 구분함
                                    <br><mark class="block"> │ </mark>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub6">
    <h2 class="sub-title"><b class="red">014</b></h2>
    <ul>
        <li><button type="button">정적 모델링</button>
            <ul>
                <li>사용자가 요구한 기능을 구현하는데 <b>필요한 자료들의 논리적인 구조</b>를 표현한 것</li>
                <li>시스템에 의해 처리되거나 생성될 객체들 사이에 어떤 관련이 있는지를 <b>구조적인 관점</b>에서 표현한다</li>
                <li>객체(Object)들을 클래스(Class)로 <b>추상화</b>하여 표현함</li>
                <li>UML을 이용한 정적모델링의 대표적인 것이 <button type="button" class="not-hidden">클래스 다이어그램</button>임</li>
            </ul>
        </li>
        <li><button type="button">클래스(Class) 다이어그램</button>
            <ul>
                <li>클래스와 클래스가 가지는 속성, 클래스 사이의 관계 표현</li>
                <li>시스템을 구성하는 요소에 대해 이해할 수 있는 <button type="button" class="not-hidden">구조적 다이어그램</button></li>
                <li>시스템 구성 요소를 문서화 하는데 사용됨</li>
                <li>구성 요소
                    <ul>
                        <li><button type="button">클래스(Class)</button>
                            <ul>
                                <li>각각의 객체들이 갖는 속성과 오퍼레이션(동작)을 표현한 것</li>
                                <li>속성(Attribute) : 클래스의 상태나 정보를 표현함</li>
                                <li>오퍼레이션(Operation) : 클래스가 수행할 수 있는 동작. 함수(메소드, Method)라고도 함</li>
                                <li><mark class="block">사각형에 3구획으로 나눠 클래스명 / 속성 / 오퍼레이션 을 표기함</mark></li>
                            </ul>
                        </li>
                        <li><button type="button">제약조건</button>
                            <ul>
                                <li>속성에 입력될 값에 대한 제약조건이나 오퍼레이션 수행 전후에 지정해야할 조건</li>
                                <li>클래스 안에 제약조건을 기술할때는 중괄호<code>{ }</code> 이용함</li>
                                <li><mark class="block">오른쪽 모서리가 접힌 사각형 안에 제약조건 작성</mark></li>
                            </ul>
                        </li>
                        <li><button type="button">관계(Relationships)</button>
                            <ul>
                                <li>관계는 클래스와 클래스 사이의 연관성 표현</li>
                                <li>
                                    <button type="button" class="not-hidden">연관 관계</button>,
                                    <button type="button" class="not-hidden">집합 관계</button>,
                                    <button type="button" class="not-hidden">포함 관계</button>,
                                    <button type="button" class="not-hidden">일반화 관계</button>,
                                    <button type="button" class="not-hidden">의존 관계</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">연관 클래스</button>
            <ul>
                <li>연관 관계에 있는 두 클래스에 <b>추가적으로 표현해야 할 속성이나 오퍼레이션이 있는 경우</b> 생성하는 클래스</li>
                <li>연관 관계의 이름을 이용해 연관 클래스 이름을 지정함</li>
                <li><mark class="block">두 클래스의 연관 관계를 나타내는 선의 가운데로부터 점선을 연관 클래스로 이어 표시함</mark></li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub7">
    <h2 class="sub-title"><b class="red">015</b></h2>
    <ul>
        <li><button type="button">동적 모델링</button>
            <ul>
                <li>시스템의 내부 구성 요소들의 <b>상태 변화 과정</b>과 과정에서 발생하는 <b>상호 작용</b>을 표현한것</li>
                <li>시스템 내부 구성 요소들 간에 이루어지는 동작이라는 관점에서 표현</li>
                <li>시스템이 실행될 때 구성요소들 간의 메시지 호출, 즉 오퍼레이션을 통한 상호 작용에 초점을 둠</li>
                <li>종류
                    <ul>
                        <li><button type="button" class="not-hidden">순차 다이어그램</button></li>
                        <li><button type="button" class="not-hidden">커뮤니케이션 다이어그램</button></li>
                        <li><button type="button" class="not-hidden">상태 다이어그램</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">순차(Sequence) 다이어그램</button>
            <ul>
                <li>시스템이나 객체들이 <b>메시지를 주고받으며 상호 작용하는 과정</b>을 그림으로 표현</li>
                <li>시스템이나 객체들의 상호 작용 과정에서 주고받는 메시지 표현</li>
                <li>각 동작에 참여하는 시스템이나 객체들의 <b>수행 기간</b> 확인</li>
                <li>클래스 내부에 있는 객체들을 기본 단위로 하여 그들의 상호 작용을 표현함</li>
                <li>구성 요소
                    <ul>
                        <li><button type="button">액터(Actor)</button>
                            <ul>
                                <li><mark class="block">사람모양</mark> : 시스템으로부터 서비스를 요청하는 외부 요소. 사람/외부시스템</li>
                            </ul>
                        </li>
                        <li><button type="button">객체(Object)</button>
                            <ul>
                                <li><mark class="block">사각형안에 <code>: 메시지 주체</code> 작성</mark> : 메시지를 주고받는 주체</li>
                            </ul>
                        </li>
                        <li><button type="button">생명선(Lifeline)</button>
                            <ul>
                                <li>객체가 메모리에 존재하는 기간</li>
                                <li><mark class="block">객체 아래쪽에 <b>점선</b>을 그어 표현. 객체 소멸<code>❌</code>이 표시된 기간까지 존재함</mark></li>
                            </ul>
                        </li>
                        <li><button type="button">실행 상자(Active Box, 활성 상자)</button>
                            <ul>
                                <li>객체가 메시지를 주고받으며 구동되고 있음을 표현함</li>
                                <li><mark class="block">긴 사각형</mark></li>
                            </ul>
                        </li>
                        <li><button type="button">메시지(Message)</button>
                            <ul>
                                <li>객체가 상호작용을 위해 주고받는 메시지</li>
                                <li><mark class="block">화살표 위에 <code>번호 : 메시지</code></mark></li>
                            </ul>
                        </li>
                        <li><button type="button">객체 소멸</button>
                            <ul>
                                <li>해당 객체가 더 이상 메모리에 존재하지 않음을 표현</li>
                                <li><mark class="block"><code>❌</code></mark></li>
                            </ul>
                        </li>
                        <li><button type="button">프레임(Frame)</button>
                            <ul>
                                <li>다이어그램의 전체 또는 일부를 묶어 표현한 것</li>
                                <li><mark class="block">사각형 좌측 상단에 오른쪽 모서리가 깍인 사각형안에 다이어그램명 작성</mark></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub8">
    <h2 class="sub-title">016</h2>
    <ul>
        <li><button type="button">커뮤니케이션(Communication) 다이어그램</button>
            <ul>
                <li>시스템이나 객체들이 <b>메시지를 주고받으며 상호작용하는 과정</b>과 <b>객체들 간의 연관</b>을 그림으로 표현한 것</li>
                <li><b>동작에 참여하는 객체들 사이의 관계</b>를 파악하는데 사용</li>
                <li><button type="button" class="not-hidden">클래스 다이어그램</button>에서 <b>관계가 제대로 표현됐는지 점검</b>하는 용도로도 사용됨</li>
                <li>초기엔 <button type="button">협업(Collaboration) 다이어그램</button>이라고 불림</li>
                <li>구성요소
                    <li><button type="button">액터(Actor)</button>
                        <ul>
                            <li><mark class="block">사람 모양</mark></li>
                            <li>시스템으로 부터 서비스를 요청하는 외부 요소로 사람이나 외부 시스템을 의미함</li>
                        </ul>
                    </li>
                    <li><button type="button">객체(Object)</button>
                        <ul>
                            <li><mark class="block">사각형안에 <code>: 메시지 주체</code></mark></li>
                            <li>메시지를 주고받는 주체</li>
                        </ul>
                    </li>
                    <li><button type="button">링크(LInk)</button>
                        <ul>
                            <li><mark class="block">──────</mark> : 액터와 객체, 객체와 객체 간에 실선을 그어 표현</li>
                            <li></li>
                        </ul>
                    </li>
                    <li><button type="button">메시지(Message)</button>
                        <ul>
                            <li><mark class="block">화살표 위에 <code>번호 : 메시지</code></mark> : 화살표 방향은 메시지를 받는 쪽으로 향함</li>
                            <li>객체가 상호작용을 위해 주고받는 내용</li>
                            <li>일정한 순서에 의해 처리되는 메시지의 경우 숫자로 순서를 표시함</li>
                        </ul>
                    </li>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub9">
    <h2 class="sub-title">017</h2>
    <ul>
        <li><button type="button">상태(State) 다이어그램</button>
            <ul>
                <li>객체들 사이에 발생하는 이벤트에 의한 <b>객체들의 상태 변화</b>를 그림으로 표현</li>
                <li>객체의 상태 = 객체가 갖는 속성 값의 변화</li>
                <li>특정 객체가 어떤 이벤트에 의해 상태 변환 과정이 진행되는지 확인하는데 사용</li>
                <li>시스템에서 상태 변환 이벤트를 확인할 필요가 있는 객체만을 대상으로 그림</li>
                <li>구성 요소
                    <ul>
                        <li><button type="button">상태(State)</button>
                            <ul>
                                <li><mark class="block">둥근 사각형안에 상태명 작성</mark>객체의 상태 표현</li>
                            </ul>
                        </li>
                        <li><button type="button">시작 상태</button>
                            <ul>
                                <li><mark class="block">●</mark> : 상태의 시작 표현</li>
                            </ul>
                        </li>
                        <li><button type="button">종료 상태</button>
                            <ul>
                                <li><mark class="block">◎(가운데가 채워진 모양임)</mark> : 상태의 종료 표현</li>
                            </ul>
                        </li>
                        <li><button type="button">상태 전환</button>
                            <ul>
                                <li><mark class="block">화살표 위에 상태 이벤트명 작성</mark> 상태 사이의 흐름, 변화를 화살표로 표현한 것</li>
                            </ul>
                        </li>
                        <li><button type="button">이벤트(Event)</button>
                            <ul>
                                <li>상태에 변화를 주는 현상. 이벤트에는 조건, 외부 신호, 시간의 흐름 등이 있음</li>
                            </ul>
                        </li>
                        <li><button type="button">프레임(Frame)</button>
                            <ul>
                                <li><mark class="block">사각형 좌측 상단에 우측 하단 모서리가 깍인 사각형 안에 다이어그램 명 작성</mark>상태 다이어그램의 범위를 표현한 것</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub10">
    <h2 class="sub-title"><b class="red">018</b></h2>
    <ul>
        <li><button type="button">패키지(Package) 다이어그램</button>
            <ul>
                <li>유스케이스나 클래스 등의 요소들을 그룹화한 패키지간의 의존 관계를 표현한 것</li>
                <li>패키지는 또 다른 패키지의 요소가 될 수 있음</li>
                <li>대규모 시스템에서 <b>주요 요소 간의 종속성</b>을 파악하는데 사용</li>
                <li>구성 요소
                    <ul>
                        <li><button type="button">패키지(Package)</button>
                            <ul>
                                <li><mark class="block">큰사각형 좌측상단 바깥쪽에 작은 사각형이붙은 형태</mark></li>
                                <li>객체들을 그룹화 한것</li>
                                <li>단순 표기법 : 패키지 안에 패키지 이름만 표현</li>
                                <li>확장 표기법 : 패키지 안에 요소(객체)까지 표현</li>
                            </ul>
                        </li>
                        <li><button type="button">객체(Object)</button>
                            <ul>
                                <li><mark class="block">사각형 안에 객체명 작성</mark></li>
                                <li>유스케이스, 클래스, 인터페이스, 테이블 등 패키지에 포함될 수 있는 다양한 요소들</li>
                            </ul>
                        </li>
                        <li><button type="button">의존 관계(Dependency)</button>
                            <ul>
                                <li><mark class="block">패키지와 패키지, 패키지와 객체 간을 점선화살표로 표현함</mark></li>
                                <li>
                                    스테레오 타입을 이용해 의존 관계를 구체적으로 표현함. 
                                    <br>대표적 두가지 <code>&lt;&lt;import&gt;&gt;</code>, <code>&lt;&lt;access&gt;&gt;</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

`;

export default post9;