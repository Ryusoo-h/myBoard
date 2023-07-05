
export const postTemplate = `
<h1 class="title">정처기 실기 2. 데이터 입·출력 구현2</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-28</span>
    <span class="modification-date">수정일 : 2023-07-06</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B033 E-R 모델</mark>
    <br><mark>A034 관계형 데이터베이스의 구조 / 관계형 데이터 모델</mark>
    <br><mark>A035 관계형 데이터베이스의 제약조건 - 키(Key)</mark>
    <br><mark>B036 관계형 데이터베이스의 제약조건 - 무결성(Integrity)</mark>
    <br><mark>A037 관계대수 ㅁ치 관계 해석</mark>
    <br><mark>A038 이상 / 함수적 종속</mark>
</p>
<hr>

<article id="💛sub1">
    <h2 class="sub-title"><b class="red">033</b></h2>
    <ul>
        <li><button type="button" class="red">E-R(개체-관계) 모델</button>
            <ul>
                <li>
                    개체와 개체 간의 관계를 기본 요소로 이용하여 
                    <br>현실 세계의 무질서한 데이터를 <b>개념적인 논리 데이터</b>로 표현하기 위한 방법
                </li>
                <li>1976년 <b>피터 첸</b>에 의해 제안되고 기본적인 구성 요소 정립됨</li>
                <li><b>개념적 데이터 모델</b>의 가장 대표적인것</li>
                <li><button type="button" class="not-hidden">개체 타입</button>과 이들 간의 <button type="button" class="not-hidden">관계 타입</button>을 이용해 현실세계를 개념적으로 표현함</li>
                <li><button type="button">E-R 다이어그램</button>으로 표현. 1:1, 1:N, N:M 등 관계 유형을 제한없이 나타낼 수 있음</li>
            </ul>
        </li>
        <li><button type="button">E-R 다이어그램</button>
            <table>
                <thead>
                    <tr>
                        <th>기호이름</th>
                        <th>의미</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>사각형</td>
                        <td><button type="button">개체(Entity) 타입</button></td>
                    </tr>
                    <tr>
                        <td>마름모</td>
                        <td><button type="button">관계(Relationship) 타입</button></td>
                    </tr>
                    <tr>
                        <td>타원</td>
                        <td><button type="button">속성(Attribute)</button></td>
                    </tr>
                    <tr>
                        <td>이중 타원</td>
                        <td><button type="button">다중값 속성(복합 속성)</button></td>
                    </tr>
                    <tr>
                        <td>밑줄 타원</td>
                        <td><button type="button">기본키 속성</button></td>
                    </tr>
                    <tr>
                        <td>복수 타원</td>
                        <td><button type="button">복합 속성</button></td>
                    </tr>
                    <tr>
                        <td>사각형 - N - 마름모 - M - 사각형</td>
                        <td><button type="button">관계 1:1, 1:N, N:M 등 개체 간 관계에 대한 대응수를 선 위에 기술함</button></td>
                    </tr>
                    <tr>
                        <td>선, 링크</td>
                        <td><button type="button"> 개체 타입과 속성 연결</button></td>
                    </tr>
                </tbody>
            </table>
        </li>
    </ul>
</article>
<hr>

<article id="sub2">
    <h2 class="sub-title"><b class="red">034</b></h2>
    <ul>
        <li><button type="button" class="red">관계형 데이터베이스</button>
            <ul>
                <li><b>2차원적인 Table을 이용해서 데이터 상호 관계를 정의하는 <span class="red">데이터베이스</span></b></li>
                <li>1970년 IBM에 근무하던 <b>코드(E. F. Codd)</b>에 의해 처음 제안됨</li>
                <li>개체, 관계를 모두 <button type="button" class="red">릴레이션(Relation)</button>이라는 표로 표현
                    <br>.'.개체를 표현하는 <button type="button">개체 릴레이션</button>과 관계를 표현하는 <button type="button">관계 릴레이션</button>이 존재함
                </li>
                <li>장점 : 간결. 보기 편리. 다른 데이터베이스로의 변환 용이</li>
                <li>단점 : 성능이 다소 떨어짐</li>
            </ul>
        </li>
        <li>관계형 데이터베이스의 릴레이션 구조
            <ul>
                <li><button type="button" class="red">릴레이션</button> : 데이터들을 표의 형태로 표현한것
                    <ul>
                        <li>구성
                            <ul>
                                <li><button type="button">릴레이션 스키마</button> : 구조를 나타냄 (필드들)
                                    <ul>
                                        <li><button type="button">속성(Attribute)</button>
                                            <ul>
                                                <li><b>데이터베이스를 구성하는 가장 작은 논리적 단위</b></li>
                                                <li>파일 구조상의 데이터 항목 또는 데이터 필드에 해당함</li>
                                                <li>개체의 특성 기술</li>
                                                <li>속성의 수 = <button type="button" class="red">디그리</button> = <button type="button">차수</button></li>
                                            </ul>
                                        </li>
                                        <li><button type="button">도메인(Domain)</button>
                                            <ul>
                                                <li><b>하나의 애트리뷰트가 취할 수 있는 같은 타입의 원자(Atomic)값들의 집합</b></li>
                                                <li>실제 애트리뷰트 값이 나타날 때 그 값의 합법 여부를 시스템이 검사하는데도 이용됨</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><button type="button">릴레이션 인스턴스</button> : 실제 값들 (튜플들)
                                    <ul>
                                        <li><button type="button">튜플(Tuple)</button>
                                            <ul>
                                                <li><b>릴레이션을 구성하는 각각의 행</b></li>
                                                <li>속성의 모임으로 구성됨</li>
                                                <li>파일 구조에서 <b>레코드</b>와 같은 의미</li>
                                                <li>튜플의 수 = <button type="button" class="red">카디널리티(Cardinality)</button> = <button type="button">기수</button> = <button type="button">대응수</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>특징
                            <ul>
                                <li>한 릴레이션에는 똑같은 튜플 포함x .'. 릴레이션에 포함된 튜블들은 모두 상이함</li>
                                <li>한 릴레이션에 포함된 튜플 사이에는 순서가 없음</li>
                                <li>튜플들의 삽입, 삭제 등의 작업으로 <b>릴레이션은 시간에 따라 변한다</b></li>
                                <li>릴레이션 스키마를 구성하는 속성들 간의 순서 중요x</li>
                                <li>속성의 유일한 식별을 위해 속성 명칭은 유일해야하지만,</li>
                                <li>속성을 구성하는 값은 동일한 값이 있을 수 있음</li>
                                <li>릴레이션을 구성하는 튜플을 유일하게 식별하기 위해 속성들의 부분집합을 키(Key)로 설정함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">관계형 데이터 모델</button>(<button type="button">Relational Data Model</button>)
            <ul>
                <li><b>2차원적인 표(Table)을 이용해서 데이터 상호 관계를 정의하는 <span class="red">DB 구조</span></b></li>
                <li>가장 널리 사용되는 데이터 모델</li>
                <li>
                    파일 구조처럼 구성한 테이블들을 하나의 DB로 묶어서 테이블 내에 있는 <b>속성들 간의 관계</b>를 설정하거나 
                    <br><b>테이블 간의 관계</b>를 설정하여 이용함
                </li>
                <li><button type="button" class="not-hidden">기본키(Primary Key)</button>와 이를 참조하는 <button type="button" class="not-hidden">외래키(Foreign Key)</button>로 데이터간의 관계를 표현함</li>
                <li>계층 모델과 망 모델의 복잡한 구조를 단순화시킨 모델</li>
                <li>관계형 모델의 대표적인 언어 = <button type="button" class="not-hidden">SQL</button></li>
                <li>1:1, 1:N, N:M 자유롭게 표현 가능</li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title"><b class="red">035</b></h2>
    <ul>
        <li><button type="button" class="red">키(Key)</button>
            <ul>
                <li>데이터베이스에서 조건에 만족하는 튜플을 찾거나 순서대로 정렬할 때 <b>기준이 되는 속성</b></li>
                <li>종류
                    <ul>
                        <li><button type="button" class="red">후보키</button>(<button type="button">Candidate Key</button>)
                            <ul>
                                <li>속성들 중에서 튜플을 유일하게 식별하기 위해 사용되는 속성들의 부분집합</li>
                                <li>기본키로 사용할 수 있는 속성들</li>
                                <li><button type="button">유일성(Unique)</button>와 <button type="button">최소성(Minimality)</button>을 모두 만족시켜야함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">기본키</button>(<button type="button">Primary Key</button>)
                            <ul>
                                <li>후보키 중 특별히 선정된 주키(Main Key)</li>
                                <li>중복된 값을 가질 수 없음</li>
                                <li>한 릴레이션에서 특정 튜플을 유일하게 구별할 수 있는 속성들</li>
                                <li><code>NULL</code>값 가질 수 없음</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">대체키 </button>(<button type="button">Alternate Key</button>) = <button type="button">보조키</button>
                            <ul>
                                <li>후보키가 둘 이상일 때, 기본키를 제외한 나머지 후보키</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">슈퍼키</button>(<button type="button">Super Key</button>)
                            <ul>
                                <li>한 릴레이션 내에 있는 속성들의 집합으로 구성된 키</li>
                                <li>릴레이션을 구성하는 모든 튜플 중 슈퍼키로 구성된 속성의 집합과 동일한 값은 나타나지 않음</li>
                                <li>릴레이션을 구성하는 모든 튜플에 대해 <span class="red"><button type="button">유일성(Unique)</button>은 만족하지만, <button type="button">최소성(Minimality)</button>을 만족하지 못함</span></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">외래키</button>(<button type="button">Foreign Key</button>)
                            <ul>
                                <li>다른 릴레이션의 기본키를 참조하는 속성 또는 속성들의 집합</li>
                                <li>한 릴레이션에 속한 <b>속성 A</b>와 참조 릴레이션의 <b>기본키인 B</b>가 동일한 도메인 상에서 정의되었을 때의 <b>속성 A를 외래키라고 함</b></li>
                                <li>외래키로 지정되면 참조 릴레이션의 기본키에 없는 값은 입력할 수 없음</li>
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
    <h2 class="sub-title"><b class="red">036</b></h2>
    <ul>
        <li><button type="button">무결성(Integrity)</button>
            <ul>
                <li><b>데이터베이스에 저장된 데이터 값</b>과 그것이 표현하는 <b>현실 세계의 실제값</b>이 일치하는 정확성을 의미함</li>
                <li><b>무결성 제약 조건</b> : 데이터베이스에 들어있는 데이터의 정확성을 보장하기위해 부정확한 자료가 데이터베이스 내에 저장되는것을 방지하기 위한 제약조건을 말함</li>
                <li>종류
                    <ul>
                        <li><button type="button" class="red">개체 무결성</button> : 기본 테이블의 <b>기본키</b>를 구성하는 어떤 속성도 <code>Null</code> 값이나 중복값을 가질 수 없다는 규정</li>
                        <li>
                            <button type="button" class="red">참조 무결성</button> : 릴레이션은 참조할 수 없는 외래키 값을 가질 수 없다는 규정. 
                            <br>외래키 값은 <code>Null</code>이거나 참조 릴레이션의 기본키 값과 동일해야 함. 
                        </li>
                        <li><button type="button" class="red">도메인 무결성</button> : 주어진 속성 값이 정의된 도메인에 속한 값이어야 한다는 규정</li>
                        <li><button type="button" class="red">사용자 정의 무결성</button> : 속성 값들이 사용자가 정의한 제약조건에 만족되어야 한다는 규정</li>
                        <li><button type="button">NULL 무결성</button> : 릴레이션의 특정 속성 값이 <code>Null</code>이 될 수 없도록 하는 규정</li>
                        <li><button type="button">고유 무결성</button> : 릴레이션의 특정 속성에 대해 각 튜플이 갖는 속성값들이 서로 달라야 한다는 규정</li>
                        <li><button type="button">키 무결성</button> : 하나의 릴레이션에는 적어도 하나의 키가 존재해야 한다는 규정</li>
                        <li>
                            <button type="button">관계 무결성</button> : 릴레이션에 어느 한 튜플의 삽입 가능 여부 또는 
                            <br>한 릴레이션과 다른 릴레이션의 튜플들 사이의 관계에 대한 적절성 여부를 지정한 규정
                        </li>
                    </ul>
                </li>
                <li><b>데이터 무결성 강화</b>
                    <ul>
                        <li><b>데이터 무결성</b> : 데이터 품질에 직접적인 영향을 미침 .'.데이터 특성에 맞는 적절한 무결성을 정의하고 강화해야함
                        </li>
                        <li>방법
                            <ul>
                                <li><button type="button">애플리케이션</button> : 데이터 생성, 수정, 삭제 시 무결성 조건을 검증하는 코드를 프로그램 내에 추가함</li>
                                <li><button type="button">데이터베이스 트리거</button> : 트리거 이벤트에 무결성 조건을 실행하는 절차형 SQL을 추가함</li>
                                <li><button type="button">제약 조건</button> : 데이터베이스에 제약 조건을 설정하여 무결성을 유지함</li>
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
    <h2 class="sub-title"><b class="red">037</b></h2>
    <ul>
        <li><button type="button">관계대수</button>
            <ul>
                <li>관계형 데이터베이스에서 원하는 정보와 그 정보를 검색하기 위해서 <b class="red">어떻게 유도하는가를 기술하는 절차적인 언어</b></li>
                <li>릴레이션을 처리하기 위해 연산자와 연산규칙을 제공함. 피연산자와 연산 결과가 모두 릴레이션임</li>
                <li>질의에 대한 해를 구하기 위해 수행해야 할 연산의 순서를 명시함</li>
                <li><b>연산자</b>
                    <ul>
                        <li><button type="button">순수 관계 연산자</button> : 관계 데이터베이스에 적용하기 위해 특별히 개발한 관계 연산자
                            <ul>
                                <li>
                                    <button type="button" class="red">Select</button> (기호 : <button type="button">σ(시그마)</button>)
                                    <ul>
                                        <li>= <button type="button">수평 연산</button> : 릴레이션의 행에 해당하는 튜플을 구함</li>
                                        <li>릴레이션에 존재하는 튜플 중에서 <b>선택 조건을 만족하는 튜플의 부분집합</b>을 구하여 새로운 릴레이션을 만드는 연산</li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" class="red">Project</button> (기호 : <button type="button">π(파이)</button>)
                                    <ul>
                                        <li>= <button type="button">수직 연산자</button> : 릴레이션의 열에 해당하는 속성을 추출함</li>
                                        <li>주어진 릴레이션에서 <b>속성 리스트에 제시된 속성 값만을 추출</b>하여 새로운 릴레이션을 만드는 연산</li>
                                        <li>연산 결과에 중복이 발생하면 <b class="red">중복 제거</b>됨</li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" class="red">Join</button> (기호 : <button type="button">▷◁</button>)
                                    <ul>
                                        <li><b>공통 속성을 중심</b>으로 두 개의 릴레이션을 하나로 합쳐</b>서 새로운 릴레이션을 만드는 연산</li>
                                        <li><mark>Join의 결과는 Cartesian Product(교차곱)를 수행한 다음 Select를 수행한 것과 같음</mark></li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" class="red">Division</button> (기호 : <button type="button">÷</button>)
                                    <ul>
                                        <li>
                                            X⊃Y인 두 개의 릴레이션 R(X)와 S(Y)가 있을 때, 
                                            <br>R의 속성이 S의 속성값을 모두 가진 튜플에서 <b class="red">S가 가진 속성을 제외</b>한 속성만을 구하는 연산
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">일반 집합 연산자</button> : 수학적 집합 이론에서 사용하는 연산자
                            <br>합집합, 교집합, 차집합을 처리하기 위해서는 합병 조건을 만족해야 함
                            <br>합병 가능한 두 릴레이션 R과 S가 있을때 각 연산의 특징 요약 <span class="exam">참고 : <b>디그리</b> = 속성 수, <b>카디널리티</b> = 튜플 수</span>
                            <ul>
                                <li><button type="button" class="red">합집합 UNION</button> (기호 : <button type="button">∪</button>)
                                    <ul>
                                        <li>두 릴레이션에 존재하는 튜플의 <b>합집합</b>을 구하되, 결과로 생성된 릴레이션에서 <b class="red">중복되는 튜플은 제거</b>되는 연산</li>
                                        <li>합집합의 카디널리티는 두 릴레이션 카디널리티의 합보다 크지 않음</li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" class="red">교집합 INTERSECTION</button> (기호 : <button type="button">∩</button>)
                                    <ul>
                                        <li>두 릴레이션에 존재하는 튜플의 <b>교집합</b>을 구하는 연산</li>
                                        <li>교집합의 카디널리티는 두 릴레이션 중 카디널리티가 적은 릴레이션의 카디널리티보다 크지 않음</li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" class="red">차집합 DIFFERENCE</button> (기호 : <button type="button">─</button>)
                                    <ul>
                                        <li>두 릴레이션에 존재하는 튜플의 <b>차집합</b>을 구하는 연산</li>
                                        <li>R─S일때 차집합의 카디널리티는 릴레이션 R의 카디널리티보다 크지 않음</li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" class="red">교차곱 CARTESIAN PRODUCT</button> (기호 : <button type="button">×</button>)
                                    <ul>
                                        <li>두 릴레이션에 있는 튜플들의 <b>순서쌍</b>을 구하는 연산</li>
                                        <li>교차곱의 디그리는 두 릴레이션의 디그리를 더한것과 같고, 카디널리티는 두 릴레이션의 카디널리티를 곱한것과 같음</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">관계해석</button>(<button type="button">Relational Calculus</button>)
            <ul>
                <li>관계 데이터의 연산을 표현하는 방법</li>
                <li>관계 데이터 모델의 제안자인 코드(E. F. Codd)가 수학읜 Predicate Calculus(술어 해석)에 기반을 두고 관계 데이터베이스를 위해 제안함</li>
                <li>원하는 정보가 무엇이라는 것만 정의하는 <b class="red">비절차적 특성</b>을 지님</li>
                <li>원하는 정보를 정의할 때는 계산 수식을 사용함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>


<article id="sub6">
    <h2 class="sub-title"><b class="red">038</b></h2>
    <ul>
        <li><button type="button" class="red">이상</button>(<button type="button">Anomaly</button>)
            <ul>
                <li>테이블에서 일부 속성들의 종속으로 인해 데이터의 중복(Redundancy)이 발생하고, 이 <b>중복으로 인해 테이블 조작 시 문제가 발생하는 현상</b></li>
                <li><b>종류</b>
                    <ul>
                        <li>
                            <button type="button" class="red">삽입 이상</button>(<button type="button">Insertion Anomaly</button>)
                            : 데이터 삽입 시 의도와 상관없이 <b>원하지 않는 값</b>들로 인해 삽입할 수 없게 되는 현상
                        </li>
                        <li>
                            <button type="button" class="red">삭제 이상</button>(<button type="button">Deletion Anomaly</button>)
                            : 튜플 삭제 시 의도와 상관 없는 값들도 함께 삭제되는, 즉 <b>연쇄 삭제</b>가 발생하는 현상
                        </li>
                        <li>
                            <button type="button" class="red">갱신 이상</button>(<button type="button">Update Anomaly</button>)
                            : 튜플에 있는 속성 값 갱신 시 <b>일부 튜플의 정보만 갱신</b>되어 정보에 <b>불일치성(Inconsistency)</b>가 생기는 현상
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">함수적 종속</button>(<button type="button">Functional Dependency</button>)
            <ul>
                <li>데이터의 의미를 표현하는 것으로, 현실 세계를 표현하는 제약 조건이 되는 동시에 데이터베이스에서 항상 유지되어야 할 조건</li>
                <li>B가 A에 종속되어 A값을 알면 B값을 알 수 있을 때 A를 <button type="button">결정자</button>, B를 <button type="button">종속자</button> 라고 하고 <button type="button">A→B</button>로 표기함</li>
                <li><b>종류</b>
                    <ul>
                        <li><button type="button" class="red">완전 함수적 종속</button>(<button type="button">Full Functional Dependency</button>)
                            : 기본키에 대해 완전히 종속적일 때
                        </li>
                        <li><button type="button" class="red">부분 함수적 종속</button>(<button type="button">Partial Functional Dependency</button>)
                            : 기본키의 일부분에만 족송적일 때
                        </li>
                        <li><button type="button" class="red">이행적 함수적 종속</button>(<button type="button">Transitive Functional Dependency</button>)
                            : X→Y이고 Y→Z 일때, X→Z를 만족하는 관계
                            <br />(Y는 X에 함수적 종속이고 Z는 Y에 함수적 종속일 때, Z가 X에 함수적 종속을 만족하는 관계)
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default postTemplate;