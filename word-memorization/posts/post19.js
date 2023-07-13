
const post = `
<h1 class="title">정처기 실기 4. 서버 프로그램 구현2</h1>
<p class="post-date">
<span class="creation-date">작성일 : 2023-07-11</span>
<span class="modification-date">수정일 : 2023-07-13</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>A067 모듈</mark>
    <br><mark>A068 단위 모듈</mark>
    <br><mark>B069 공통 모듈</mark>
    <br><mark>C070 코드</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">067</b></h2>
    <ul>
        <li><button type="button" class="red">모듈(Module)</button>
            <ul>
                <li>모듈화를 통해 분리된 시스템의 각 기능. 서브루틴, 서브시스템, 소프트웨어 내의 프로그램, 작업 단위 등을 의미함</li>
                <li><button type="button" class="not-hidden">모듈의 기능적 독립성</button>은 소프트웨어를 구성하는 각 모듈의 기능이 서로 독립됨을 의미함</li>
                <li><button type="button" class="not-hidden">모듈의 독립성</button>은 <button type="button">결합도(Coupling)</button>와 <button type="button">응집도(Cohesion)</button>에 의해 측정됨
                    <ul>
                        <li><button type="button">결합도(Coupling)</button>
                            <ul>
                                <li>모듈 간에 상호 의존하는 정도, 두 모듈 사이의 연관 관계</li>
                                <li>약할수록 품질이 높고, 강할수록 품질이 낮음</li>
                                <li>강함 ← <button type="button">내용 결합도</button><button type="button">공통 결합도</button><button type="button">외부 결합도</button><button type="button">제어 결합도</button><button type="button">스탬프 결합도</button><button type="button">자료 결합도</button> → 약함</li>
                                <li><b>종류</b>
                                    <ul>
                                        <li><button type="button" class="red">내용 결합도</button>(<button type="button">Content Coupling</button>) : 한 모듈이 다른 모듈의 내용 기능 및 그 내부 자료를 직접 참조하거나 수정할 때의 결합도</li>
                                        <li><button type="button" class="red">공통(공유) 결합도</button>(<button type="button">Common Coupling</button>) : 공유되는 공통 데이터 영역을 여러 모듈이 사용할 떄의 결합도. 파라미터가 아닌 모듈 밖에 선언된 전역 변수를 사용하여 전역 변수를 갱신하는 방식으로 상호작용하는 떄의 결합도</li>
                                        <li><button type="button" class="red">외부 결합도</button>(<button type="button">External Coupling</button>) : 어떤 모듈에서 선언한 데이터(변수)를 외부의 다른 모듈에서 참조할 때의 결합도</li>
                                        <li><button type="button" class="red">제어 결합도</button>(<button type="button">Control Coupling</button>) : 어떤 모듈이 다른 모듈 내부의 논리적인 흐름을 제어하기 위해 제어 신호나 제어 요소를 전달하는 결합도. 하위 모듈에서 상위 모듈로 제어 신호가 이동하여 하위 모듈이 상위 모듈에게 처리 명령을 내리는 권리 전도 현상이 발생하게 됨</li>
                                        <li><button type="button" class="red">스탬프(검인) 결합도</button>(<button type="button">Stamp Coupling</button>) : 모듈 간의 인터페이스로 배열이나 레코드 등의 자료 구조가 전달될 때의 결합도</li>
                                        <li><button type="button" class="red">자료 결합도</button>(<button type="button">Data Coupling</button>) : 모듈 간의 인터페이스가 자료 요소로만 구성될 때의 결합도</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">응집도(Cohesion)</button>
                            <ul>
                                <li>모듈 내부 요소들이 서로 관련되어 있는 정도</li>
                                <li>강할수록 품질이 높고, 약할수록 품질이 낮음</li>
                                <li>응집도 강함 ← <button type="button">기능적 응집도</button><button type="button">순차적 응집도</button><button type="button">교환적 응집도</button><button type="button">절차적 응집도</button><button type="button">시간적 응집도</button><button type="button">논리적 응집도</button><button type="button">우연적응집도</button>→ 약함</li>
                                <li><button type="button" class="red">기능적 응집도</button>(<button type="button">Functional Cohesion</button>) : 모듈 내부의 모든 기능 요소들이 단일 문제와 연관되어 수행될 경우의 응집도</li>
                                <li><button type="button" class="red">순차적 응집도</button>(<button type="button">Sequential Cohesion</button>) : 모듈 내 하나의 활동으로부터 나온 출력 데이터를 그 다음 활동의 입력 데이터로 사용할 경우의 응집도</li>
                                <li><button type="button" class="red">교환(통신)적 응집도</button>(<button type="button">Communication Cohesion</button>) : 동일한 입력과 출력을 사용하여 서로 다른 기능을 수행하는 구성요소들이 모였을 경우의 응집도</li>
                                <li><button type="button" class="red">절차적 응집도</button>(<button type="button">Procedural Cohesion</button>) : 모듈이 다수의 관련 기능을 가질 때 모듈 안의 구성 요소들이 그 기능을 순차적으로 수행할 경우의 응집도</li>
                                <li><button type="button" class="red">시간적 응집도</button>(<button type="button">Temporal Cohesion</button>) : 특정 시간에 처리되는 몇 개의 기능을 모아 하나의 모듈로 작성할 경우의 응집도</li>
                                <li><button type="button" class="red">논리적 응집도</button>(<button type="button">Logical Cohesion</button>) : 유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들로 하나의 모듈이 형성되는 경우의 응집도</li>
                                <li><button type="button" class="red">우연적 응집도</button>(<button type="button">Coincidental Cohesion</button>) : 모듈 내부의 각 구성 요소들이 서로 관련 없는 요소로만 구성된 경우의 응집도</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">팬인(Fan-In)</button> : 어떤 모듈을 제어하는 모듈의 수
            <ul>
                <li>높다 = 재사용 측면에서 설계가 잘 되어있음</li>
                <li>높은 경우 = 단일 장애점이 발생할 수 있으므로 중점적인 관리 및 테스트가 필요함</li>
            </ul>
        </li>
        <li><button type="button">팬아웃(Fan-Out)</button> : 어떤 모듈에 의해 제어되는 모듈의 수</li>
        <li><button type="button" class="red">N-S 차트</button>(<button type="button">Nassi-Schneiderman Chart</button>)
            <ul>
                <li>논리의 기술에 중점을 두고 도형을 이용해 표현하는 방법</li>
                <li><button type="button">박스 다이어그램</button>, <button type="button">Chapin Chart</button> 라고도 함</li>
                <li>GOTO나 화살표를 사용하지 않음</li>
                <li>연속, 선택 및 다중 선택, 반복의 3가지 제어 논리 구조로 표현함</li>
                <li>조건이 복합되어 있는 곳의 처리를 시각적으로 명확히 식별하는데 적합함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">068</b></h2>
    <ul>
        <li><button type="button" class="red">단위 모듈</button>(<button type="button">Unit Module</button>)
            <ul>
                <li>소프트웨어 구현에 필요한 여러 동작 중 <b>한 가지 동작을 수행하는 기능을 모듈로 구현한 것</b></li>
                <li>단위 모듈로 구현되는 하나의 기능을 <button type="button" class="not-hidden">단위 기능</button>이라고 부름</li>
                <li>독립적인 컴파일이 가능하며, 다른 모듈에 호출되거나 삽입되기도 함</li>
                <li><b>구현 과정</b>
                    <ol>
                        <li>단위 기능 명세서 작성 : 기능 및 코드 명세서나 설계 지침과 같은 단위 기능을 명세화하는 단계</li>
                        <li>입·출력 기능 구현 : 입·출력 기능을 위한 알고리즘 및 데이터를 구현하는 단계</li>
                        <li>알고리즘 구현 : 단위 기능별로 모듈을 구현하는 단계</li>
                    </ol>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">IPC</button>(<button type="button">Inter-Proceess Communication</button>)
            <ul>
                <li><b>모듈 간 통신 방식을 구현하기 위해 사용되는 대표적인 프로그래밍 인터페이스 집합</b></li>
                <li>복수의 프로세스를 수행하며 이뤄지는 프로세스 간 통신까지 구현이 가능함</li>
                <li><b>대표 메소드 5가지</b>
                    <ul>
                        <li><button type="button">Shared Memory</button> : 공유 가능한 메모리를 구성하여 다수의 프로세스가 통신하는 방식</li>
                        <li><button type="button">Socket</button> : 네트워크 소켓을 이용하여 네트워크를 경유하는 프로세스간에 통신하는 방식</li>
                        <li><button type="button">Semaphores</button> : 공유 자원에 대한 접근 제어를 통해 통신하는 방식</li>
                        <li><button type="button">Pipe&named Pipes</button> : Pipe라고 불리는 선입선출 형태로 구성된 메모리를 여러 프로세스가 공유하여 통신하는 방식. Pipe느 ㄴ하나의 프로세스가 이용 중이라면 다른 프로세스는 접근할 수 없음</li>
                        <li><button type="button">Message Queueing</button> : 메시지가 발생하면 이를 전달하는 방식으로 통신하는 방식</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">단위 모듈 테스트</button>
            <ul>
                <li> = <button type="button">단위 테스트(Unit Test)</button></li>
                <li>프로그램의 단위 기능으로 구현된 <b>모듈이 정해진 기능을 정확히 수행하는지 검증하는 것</b></li>
                <li>기준 : 단위 모듈에 대한 코드<br>.'. 시스템 수준의 오류는 잡아낼 수 없음</li>
            </ul>
        </li>
        <li><button type="button" class="red">테스트 케이스(Test Case)</button>
            <ul>
                <li><b>구현된 소프트웨어가 사용자의 요구사항을 정확하게 준수했는지를 확인하기 위한 테스트 항목에 대한 명세서</b></li>
                <li>테스트 케이스를 이용하지 않은 테스트는 특정 요소에 대한 검증이 누락되거나, 불필요한 검증의 반복으로 인해 인력과 시간을 낭비할 수 있음</li>
                <li><button type="button" class="red">ISO/IEC/IEEE 29119-3 표준</button>에 따른 테스트 케이스의 구성 요소
                    <ul>
                        <li><button type="button" class="red">식별자</button>(<button type="button">Identifier</button>) : 항목 식별자, 일련번호</li>
                        <li><button type="button" class="red">테스트 항목</button>(<button type="button">Test Item</button>) : 테스트 대상(모듈 또는 기능)</li>
                        <li><button type="button" class="red">입력 명세</button>(<button type="button">Input Specification</button>) : 입력 데이터 또는 테스트 조건</li>
                        <li><button type="button" class="red">출력 명세</button>(<button type="button">Output Specification</button>) : 테스트 케이스 수행 시 예상되는 출력 결과</li>
                        <li><button type="button" class="red">환경 설정</button>(<button type="button">Enviromental Needs</button>) : 필요한 하드웨어나 소프트웨어의 환경</li>
                        <li><button type="button" class="red">특수 절차 요구</button>(<button type="button">Special Procedure Requirement</button>) : 테스트 케이스 수행 시 특별히 요구되는 절차</li>
                        <li><button type="button" class="red">의존성 기술</button>(<button type="button">Inter-case Dependencies</button>) : 테스트 케이스 간의 의존성</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">069</b></h2>
    <ul>
        <li><button type="button">공통 모듈</button>
            <ul>
                <li><b>여러 프로그램에서 공통으로 사용할 수 있는 모듈</b></li>
                <li>자주 사용되는 계산식이나 매번 필요한 사용자 인증과 같은 기능들이 공통 모듈로 구성될 수 있음</li>
                <li>구현 시, 해당 기능을 명확히 이해할 수 있도록 <b>명세 기법</b>을 준수해야함</li>
                <li><b>명세 기법의 종류</b>
                    <ul>
                        <li><button type="button" class="red">정확성</button>(<button type="button">Correctness</button>) : 시스템 구현 시 해당 기능이 필요하다는 것을 알 수 있도록 정확히 작성함</li>
                        <li><button type="button" class="red">명확성</button>(<button type="button">Clarity</button>) : 해당 기능을 이해할 때 중의적으로 해석되지 않도록 명확하게 작성함</li>
                        <li><button type="button" class="red">완전성</button>(<button type="button">Completeness</button>) : 시스템 구현을 위해 필요한 모든 것을 기술함</li>
                        <li><button type="button" class="red">일관성</button>(<button type="button">Consistency</button>) : 공통 기능들 간 상호 충돌이 발생하지 않도록 작성함</li>
                        <li><button type="button" class="red">추적성</button>(<button type="button">Traceability</button>) : 기능에 대한 요구사항의 출처, 관련 시스템 등의 관계를 파악할 수 있도록 작성함</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">재사용</button>(<button type="button">Reuse</button>)
            <ul>
                <li><b>이미 개발된 기능들을 새로운 시스템이나 기능 개발에 사용하기 적합하도록 최적화하는 작업</b></li>
                <li>새로 개발하는데 필요한 비용과 시간을 줄일 수 있음</li>
                <li>누구나 이해할 수 있고 사용이 가능하도록 사용법을 공개해야함</li>
                <li><b>재사용 규모에 따른 분류</b>
                    <ul>
                        <li><button type="button">함수와 객체</button> : 클래스나 메소드 단위의 소스 코드를 재사용함</li>
                        <li><button type="button">컴포넌트</button> : 독립적인 업무 또는 기능을 수행하는 실행 코드 기반으로 작성된 모듈. 컴포넌트 자체에 대한 수정 없이 인터페이스를 통해 통신하는 방식으로 재사용함</li>
                        <li><button type="button">애플리케이션</button> : 공통된 기능들을 제공하는 애플리케이션을 공유하는 방식으로 재사용함</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>효과적인 모듈 설계 방안</b>
            <ul>
                <li><button type="button">결합도(Coupling)</button>은 줄이고 <button type="button">응집도(Cohesion)</button>는 높여서 모듈의 독립성과 재사용성을 높임</li>
                <li><button type="button">복잡도</button>와 <button type="button">중복성</button>을 줄이고 <button type="button">일관성</button>을 유지시킴</li>
                <li><button type="button" class="not-hidden">모듈의 기능</button>은 예측이 가능해야 하며 지나치게 제한적이어서는 안됨</li>
                <li><button type="button" class="not-hidden">모듈의 크기</button>는 시스템의 전반적인 기능과 구조를 이해하기 쉬운 크기로 분해함</li>
                <li><button type="button" class="not-hidden">효과적인 제어</button>를 위해 모듈 간의 계층적 관계를 정의하는 자료가 제시되어야함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">070</h2>
    <ul>
        <li><button type="button">코드(Code)</button><ul><li><b>자료의 분류·조합·집계·추출을 용이하게 하기 위해 사용하는 기호</b></li><li>정보를 신속·정확·명료하게 전달할 수 있게함</li><li>일정한 규칙에 따라 작성됨</li><li>정보 처리의 효율과 처리된 정보의 가치에 많은 영향을 미침</li><li><b>주요 기능</b><ul><li><button type="button">식별 기능</button> : 데이터 간의 성격에 따라 구분이 가능함</li><li><button type="button">분류 기능</button> : 특정 기준이나 동일한 유형에 해당하는 데이터를 그룹화 할 수 있음</li><li><button type="button">배열 기능</button> : 의미를 부여하여 나열할 수 있음</li><li><button type="button">표준화 기능</button> : 다양한 데이터를 기준에 맞추어 표현할 수 있음</li><li><button type="button">간소화 기능</button> : 복잡한 데이터를 간소화할 수 있음</li></ul></li><li><b>종류</b><ul><li><button type="button" class="red">순차 코드</button>(<button type="button">Sequence Code</button>) : = <button type="button">순서 코드</button> = <button type="button">일련번호 코드</button>. 자료의 발생 순서, 크기 순서 등 일정 기준에 따라서 최초의 자료부터 차례로 일련번호를 부여하는 방법</li><li><button type="button" class="red">블록 코드</button>(<button type="button">Block Code</button>) : = <button type="button">구분 코드</button>. 코드화 대상 항목 중에서 공통성이 있는 것끼리 블록으로 구분하고, 각 블록 내에서 일련번호르 ㄹ부여하는 방법</li><li><button type="button" class="red">10진 코드</button>(<button type="button">Decimal Code</button>) : = <button type="button">도서 분류식 코드</button>. 코드화 대상 항목을 0~9까지 10진 분할하고, 다시 그 각각에 대하여 10진 분할하는 방법을 필요한 만큼 반복하는 방법</li><li><button type="button" class="red">그룹 분류 코드</button>(<button type="button">Group Classification Code</button>) : 코드화 대상 항목을 일정 기준에 따라 대분류, 중분류, 소분류 등으로 구분하고, 각 그룹 안에서 일련번호를 부여하는 방법</li><li><button type="button" class="red">연상 코드</button>(<button type="button">Mnemonic Code</button>) : 코드화 대상 항목의 명칭이나 약호와 관계있는 숫자나 문자, 기호를 이용하여 코드를 부여하는 방법</li><li><button type="button" class="red">표의 숫자 코드</button>(<button type="button">Significant Digit Code</button>) : = <button type="button">유효 숫자 코드</button>. 코드화 대상 항목의 성질, 즉 길이, 넓이, 부피, 지름, 높이 등의 물리적 수치를 그대로 코드에 적용시키는 방법</li><li><button type="button" class="red">합성 코드</button>(<button type="button">Combined Code</button>) : 필요한 기능을 하나의 코드로 수행하기 어려운 경우 2개 이상의 코드를 조합하여 만드는 방법</li></ul></li></ul></li>
    </ul>
</article>
<hr>
`;

export default post;