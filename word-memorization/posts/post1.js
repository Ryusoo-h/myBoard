export const post1 = `
<h1 class="title">SQLD 1. 데이터 모델의 이해(48문)</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-08</span>
    <span class="modification-date">수정일 : 2023-06-10</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>모델링</mark> <mark>데이터 모델링</mark> <mark>엔터티</mark> <mark>속성</mark> <mark>관계</mark> <mark>식별자</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">모델링</h2>
    <ul>
        <li><b>정의</b>
            <ul>
                <li>현실세계 -> <b>단순화</b></li>
                <li>사건 사물에 관한 양상/관점 <b>명확히</b> 함</li>
                <li>현실세계의 <b>추상화</b>와 반영</li>
            </ul>
        </li>
        <li><b>특징</b>
            <ol>
                <li><button type="button" class="red">추상화</button> : 일정한 형식에 맞추어 표현</li>
                <li><button type="button">단순화</button> : 약속된 규약에 의해 제한된 표기법/언어로 표현</li>
                <li><button type="button">명확화</button> : 정확하게 기술. 애매모호함 제거</li>
            </ol>
        </li>
        <li><b>관점</b>
            <ol>
                <li><button type="button">데이터 관점</button> : 업무가 <b>어떤 데이터와 관련있는지</b>. 데이터간의 관계 모델링</li>
                <li><button type="button">프로세스 관점</button> : 업무가 무엇인지. <b>무엇을 해야하는지</b> 모델링</li>
                <li><button type="button">상관 관점</button> : 업무 처리 방법에 따라 <b>데이터는 어떻게 영향받는지</b> 모델링</li>
            </ol>
        </li>
    </ul>
</article>
<hr>

<article id="sub2">
    <h2 class="sub-title">데이터 모델링</h2>
    <ul>
        <li><b>정의</b>
            <ul>
                <li>정보 시스템을 구축하기 위한 데이터 관점의 업무분석기법</li>
                <li>약속된 표기법에 표현. <b>DB구축을 위한 분석/설계 과정</b></li>
            </ul>
        </li>
        <li><b>기능</b>
            <ol>
                <li>시스템은 현재/원하는 모습으로 <b>가시화</b></li>
                <li>시스템 구조/행동 <b>명시화</b></li>
                <li>시스템 구축하는 <b>구조화</b>된 틀 제공</li>
                <li>시스템 구축과정중 결정한것 <b>문서화</b></li>
                <li>집중을 위한 <b>다양한 관점</b> 제공</li>
                <li>특정 목표에 따라 <b>구체화</b>된 상세수준 표현방법 제공</li>
            </ol>
        </li>
        <li><b>중요성 및 유의점</b>
            <ol>
                <li><b>파급효과</b> : 데이터 설계 매우 중요</li>
                <li><b>간결한 표현</b> : 업무가 무엇인지. 무엇을 해야하는지 모델링</li>
                <li><b>데이터 품질</b> : 데이터 중복, 비 유연성, 비 일관성이 발생할 수 있음</li>
            </ol>
        </li>
    </ul>
    <article>
        <h3>3단계 진행 + <span class="exam">프로젝트 생명 주기(Life Cycle)</span></h3>
        <ol class="flex">
            <li><button type="button" class="not-hidden">현실세계</button>
                <br>👇<br>
                <mark class="block">
                    <button type="button" class="red">개념 데이터 모델링</button>
                    <ul>
                        <li>추상적, 업무중심적, 포괄적</li>
                        <li>전사적 데이터 모델링</li>
                        <li>EA 수립시 많이 사용</li>
                    </ul>
                </mark>
                👉<br><span class="exam block">정보전략 계획</span>
            </li>
            <li><button type="button" class="not-hidden">개념적 구조</button>
                <br>👇<br>
                <mark class="block">
                    <button type="button" class="red">논리 데이터 모델링</button>
                    <ul>
                        <li>KEY, 속성, 관계 표현</li>
                        <li>재사용성▲</li>
                    </ul>
                </mark>
                👉<br><span class="exam block">분석</span>
            </li>
            <li><button type="button" class="not-hidden">논리적 구조</button>
                <br>👇<br>
                <mark class="block">
                    <button type="button" class="red">물리 데이터 모델링</button>
                    <ul>
                        <li>실제 DB에 이식할 수 있도록 설계</li>
                        <li>물리적 성격 고려(성능, 저장)</li>
                    </ul>
                </mark>
                👉<br><span class="exam block">설계</span>
            </li>
            <li><button type="button" class="not-hidden">물리 구조(DB)</button>
                <br>👇<br>
                <span class="exam block">개발</span>
                <br>👇<br>
                <span class="exam block">테스트</span>
                <br>👇<br>
                <span class="exam block">전환/이행</span>
            </li>
        </ol>
    </article>
    <article>
        <h3>DB 3단계 구조</h3>
        <div class="flex">
            <ol>
                <li>단계:</li>
                <li>관점:</li>
            </ol>
            <ol class="flex" style="width: 100%">
                <li style="flex-grow: 1">
                    <mark class="block">
                        <button type="button">외부단계</button>
                        <br><button type="button" class="red">외부 스키마</button> <br>: 개개 사용자 관점<br><br>
                    </mark>
                </li>
                <li style="flex-grow: 1">
                    <mark class="block">
                        <button type="button">개념적 단계</button>
                        <br><button type="button" class="red">개념 스키마</button> <br>: 통합 관점 <br>- DB데이터, 응용 시스템, 사용자간의 관계 표현<br>
                    </mark>
                </li>
                <li style="flex-grow: 1">
                    <mark class="block">
                        <button type="button">내부적 단계</button>
                        <br><button type="button" class="red">내부 스키마</button> <br>: 물리적 관점. 실제 저장 방법 표현<br><br>
                    </mark>
                </li>
            </ol>
        </div>
        <div class="flex">
            <ol start="3">
                <li>사상:</li>
            </ol>
            <ol class="flex">
                <li>└─</li>
                <li><span class="exam block">1과 2 사이 : 
                        <br><button type="button">논리적 사상</button> <br>= 외부적/개념적 사상
                        <br><button type="button">논리적 독립성</button> <br>: 개념 스키마 변경 -> 외부스키마에 영향X
                    </span>
                </li>
                <li>─┘</li>
                <li>└─</li>
                <li><span class="exam block">2와 3 사이 : 
                        <br><button type="button">물리적 사상</button> <br>= 개념적/내부적 사상
                        <br><button type="button">물리적 독립성</button> <br>: 내부 스키마 변경 -> 개념/외부스키마에 영향X
                    </span>
                </li>
                <li>─┘</li>
            </ol>
        </div>

    </article>
    <article>
        <h3>데이터 모델링 3가지 요소</h3>
        <ul>
            <li><button type="button" class="not-hidden">Things</button> : 업무관여 어떤것 (엔터티 타입, 엔터티 > 인스턴스, 어커런스)</li>
            <li><button type="button" class="not-hidden">Attributes</button> : 어떤것의 성격 (속성 > 속성값)</li>
            <li><button type="button" class="not-hidden">Relationships</button> : 업무, 어떤것 간의 관계 (관계 > 페어링)</li>
        </ul>
    </article>
    <article>
        <h3>데이터 모델링 작업 순서</h3>
        <ol>
            <li>엔터티 그림</li>
            <li>엔터티 배치</li>
            <li>엔터티 관계 설정</li>
            <li>관계명 기술</li>
            <li>참여도 기술</li>
            <li>필수여부기술</li>
        </ol>
    </article>
    <article>
        <h3>좋은 데이터 모델의 요소</h3>
        <ul>
            <li><button type="button" class="not-hidden">완전성</button> : 필요 데이터 모두 정의</li>
            <li><button type="button" class="not-hidden">중복배제</button></li>
            <li><button type="button" class="not-hidden">업무규칙</button> : 데이터 모델 분석만으로 비즈니스 로직 이해 完</li>
            <li><button type="button" class="not-hidden">데이터 재사용</button> : 통합성, 독립성 고려</li>
            <li><button type="button" class="not-hidden">의사소통</button></li>
            <li><button type="button" class="not-hidden">통합성</button> : 동일한 데이터 = 유일하게 정의 -> 참조</li>
        </ul>
    </article>
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title">요소</h2>
    <button type="button">엔터티(Entity)</button>
    <ul>
        <li><b>개념</b> : 명사. 업무상 관리가 필요한 관심사. <b>인스턴스의 집합</b>. 저장되기 위한 어떤것</li>
        <li><b>특징</b>
            <ol>반드시 관리하고자 하는 <b>정보</b></ol>
            <ol><b>식별자</b>에 의해 식별 가능</ol>
            <ol><b>인스턴스의 집합</b>(인스턴스 2개 이상)</ol>
            <ol>업무 프로세스에 이용되어야 함</ol>
            <ol>반드시 <b>속성</b>이 있어야함</ol>
            <ol>최소 1개 이상의 <b>다른 엔터티와 관계</b>가 있어야 함</ol>
        </li>
        <li><b>분류</b>
            <ul>
                <li><button type="button" class="not-hidden">유무형</button>에 따른 분류
                    <ul>
                        <li><button type="button">유형</button> : <b>물리적 형태 有.</b> 지속적으로 활용되는 엔터티</li>
                        <li><button type="button">개념</button> : <b>물리적 형태 x.</b> 개념적 정보</li>
                        <li><button type="button">시간</button> : <b>업무 수행에 따라 발생.</b> 비교적 발생량多. 각종 통계자료에 이용될 수 있음</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">발생 시점</button>에 따른 분류
                    <ul>
                        <li><button type="button">기본</button> : <b>원래 존재.</b> 독립적 생성 가능. 타 엔터티의 부모</li>
                        <li><button type="button">중심</button> : <b>본 엔터티로부터 발생.</b> 업무의 중심. 데이터양多 발생. 행위 엔터티 생성</li>
                        <li><button type="button">행위</button> : <b>두 개 이상의 부모 엔터티로부터 발생.</b> 자주 내용이 바뀌거나 데이터량 증가. 상세 설계단계, 프로세스, 상관모델링 진행하며 도출</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>명명</b>
            <ol>
                <li>현업 업무 용어 사용</li>
                <li>약어 지양</li>
                <li><b>단수명사</b> <span class="exam">ex)사원들x, 사원o</span></li>
                <li>유일한 이름 부여</li>
                <li>엔터티 생성 의미대로 이름 부여</li>
            </ol>
        </li>
    </ul>
    <br><br><br>

    <mark class="block">
        <b>*엔터티, 인스턴스, 속성, 속성값 관계</b>
        <ul>
            <li>엔터티 : 두개 이상의 <button type="button">인스턴스</button>의 집합이어야 한다</li>
            <li>인스턴스 : 두 개 이상의 <button type="button">속성</button>을 갖는다</li>
            <li>속성 : 한 개의 <button type="button">속성값</button>을 갖는다</li>
        </ul>
    </mark>
    <br><br><br>

    <button type="button">속성(Attribute)</button>
    <ul>
        <li><b>개념</b> : 업무에 필요함. 더이상 분리X, 엔터티를 설명함. 인스턴스의 구성요소</li>
        <li><b>특징</b>
            <ol>
                <li>업무에서 관리하고자 하는 정보</li>
                <li>정규화 이론에 근간하여 주식별자에 <button type="button" class="red">함수적 종속성</button>을 가져야함</li>
                <li>한개의 속성값을 가져야함</li>
            </ol>
        </li>
        <li><b>분류</b>
            <ul>
                <li><button type="button" class="not-hidden">특성</button>에 따른 분류
                    <ul>
                        <li><button type="button">기본속성 Basic Attribute</button> : 업무 분석을 통해 바로 정의한 속성</li>
                        <li><button type="button">설계속성 Designed Attribute</button> : 업무상 존재X. 설계 => 도출해냄</li>
                        <li><button type="button">파생속성 Derived Attribute</button> : 타 속성으로부터 계산, 변형 -> 생성</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">엔터티 구성방식</button>에 따른 분류
                    <ul>
                        <li><button type="button">PK(Primary Key)속성</button> : 엔터티를 식별할 수 있는 속성</li>
                        <li><button type="button">FK(Foreign Key)속성</button> : 타 엔터티와의 관계에서 포함된 속성</li>
                        <li><button type="button">일반속성</button> : PK, FK외 속성</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">도메인(Domain)</button> : 각 속성이 가질 수 있는 값의 범위</li>
    </ul>
    <br><br><br>

    <button type="button">관계</button>
    <ul>
        <li><b>정의</b> : 엔터티의 인스턴스 사이의 논리적인 연관성으로서 <b> 존재의 형태, 행위</b>로서 서로에게 연관성이 부여된 상태
            <br>=> <b>패어링</b>
        </li>
        <li><b>표기법</b>
            <ul>
                <li>관계명 <span class="exam">= 현재형o, 애매한동사x</span></li>
                <li>관계 차수 : <button type="button" class="not-hidden">1:1</button>, <button type="button" class="not-hidden">1:M</button>, <button type="button" class="not-hidden">M:N</button></li>
                <li>관계 선택 사양 : <button type="button" class="not-hidden">필수관계</button>, <button type="button" class="not-hidden">선택관계</button></li>
            </ul>
            <img src="./posts/img/post1/relationship.png" alt="관계 표기법 예시 이미지">
        </li>
        <li><b>읽기</b>
            <ol>
                <li>각각 / 하나의 <b>[ 엔터티명 ]</b>은</li>
                <li>하나 / 여러개의 <b>[ 대상 엔터티명 ]</b>을</li>
                <li>때때로 / 반드시 <b>[ 관계명 ]</b> 한다</li>
            </ol>
        </li>
    </ul>

    <button type="button">식별자(Idetifiers)</button>
    <ul>
        <li><b>정의</b> : 엔터티의 인스턴스를 개별적으로 식별하기 위해 사용되는 관계/속성들의 조합. 각각을 구분할 수 있는 논리적인 이름
        </li>
        <li><b>특징</b>
            <ul>
                <li><button type="button" class="not-hidden">유일성</button>: 주식별자에 의해 모든 인스턴스들이 유일하게 구분되어야함</li>
                <li><button type="button" class="not-hidden">최소성</button>: 주식별자를 구성하는 속성의 수 = 유일성을 만족하는 최소의 수</li>
                <li><button type="button" class="not-hidden">불변성</button>: 주식별자 값 = 자주 변하지 않는것</li>
                <li><button type="button" class="not-hidden">존재성</button>: 주식별자가 지정되면 반드시 값이 들어와야 함 <span class="exam">ex) 고객번호 없는 고객 존재x, 주문번호 없는 주문 존재x</span></li>
            </ul>
        </li>
        <li><b>분류</b>
            <ul>
                <li><button type="button" class="not-hidden">대표성 여부</button>
                    <ul>
                        <li><button type="button">주 식별자</button> : 구분자O. 타 엔터티와 참조관계 연결 가능</li>
                        <li><button type="button">보조 식별자</button> : 구분자O. 대표성X</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">스스로 생성 여부</button>
                    <ul>
                        <li><button type="button">내부 식별자</button> : 자동 생성</li>
                        <li><button type="button">외부 식별자</button> : 타 엔터티와의 관계를 통해 받아옴</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">속성의 여부</button>
                    <ul>
                        <li><button type="button">단일 식별자</button> : 한 개 속성</li>
                        <li><button type="button">복합 식별자</button> : 둘 이상의 속성</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">대체 여부</button>
                    <ul>
                        <li><button type="button">본질 식별자</button> : 업무에 의해 생성</li>
                        <li><button type="button">인조 식별자</button> : 업무에 의해 생성X. 인위적으로 만듬</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <mark class="block">
                <ul class="flex">
                    <li><button type="button" class="not-hidden">식별자 관계 Identifying Relationship</button>
                        <br><b>: 외부 식별자의 주식별자 역할
                        <br>=> 강한 관계
                        <br>고려상황</b> : 상속받은 주식별자 속성을 타 엔터티에 이전 필요<br>
                        <br><span class="exam">*주식별자로만 설정시 발생하는 문제 : 식별자가 너무 많아짐</span></li>
                    <li>vs</li>
                    <li><button type="button" class="not-hidden">비식별자 관계 Non-Identifying Relationship</button>
                        <br><b>: 외부식별자는 FK로써 역할함
                        <br>=> 식별자보다 덜 강한 관계
                        <br>고려상황</b> : 상속받은 주식별자 속성을 타엔터티에 차단 필요. <br>자식 주식별자를 독립적으로 구성
                        <br><span class="exam">*식별자 관계인 여러 엔터티를 하나의 엔터티로 줄일 수 있다(느슨)</span></li>
                </ul>
            </mark>
        </li>
    </ul>
</article>
`;

export default post1;