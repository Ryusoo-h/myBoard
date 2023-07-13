
const post = `
<h1 class="title">정처기 실기 4. 서버 프로그램 구현1</h1>
<p class="post-date">
<span class="creation-date">작성일 : 2023-07-11</span>
<span class="modification-date">수정일 : 2023-07-11</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>D062 개발 환경 구축</mark>
    <br><mark>A063 소프트웨어 아키텍처</mark>
    <br><mark>B064 아키텍처 패턴</mark>
    <br><mark>A065 객체지향(Object-Oriented)</mark>
    <br><mark>A066 객체지향 분석 및 설계</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">062</h2>
    <ul>
        <li><b>개발 환경 구축</b></li>
            <ul>
                <li>응용 소프트웨어 개발을 위해 <b>개발 프로젝트를 이해하고 소프트웨어 및 하드웨어 장비를 구축하는 것</b></li>
                <li>개발 환경은 응용 소프트웨어가 운영될 환경과 유사한 구조로 구축함</li>
                <li>분석 단계의 산출물을 바탕으로 개발에 필요한 하드웨어와 소프트웨어를 선정함</li>
                <li>하드웨어와 소프트웨어의 성능, 편의성, 라이선스 등의 비즈니스 환경에 적합한 제품들을 최종적으로 결정하여 구축함</li>
            </ul>
        </li>
        <li><b>하드웨어 환경</b>
            <ul>
                <li>사용자와의 인터페이스 역할을 하는 <button type="button" class="red">클라이언트(Client)</button> 그리고 클라이언트와 통신하여 서비스를 제공하는 <button type="button" class="red">서버(Server)</button>로 구성됨</li>
                <li><b>클라이언트 종류</b> : <button type="button">개인용 컴퓨터(PC)</button>, <button type="button">스마트폰</button> 등</li>
                <li><b>서버의 종류</b>
                    <ul>
                        <li><button type="button" class="red">웹 서버</button>(<button type="button">Web Server)</button>) : 클라이언트로부터 직접 요청을 받아 처리함. 저용량의 정적파일 제공함.</li>
                        <li><button type="button" class="red">웹 애플리케이션 서버</button>(<button type="button">WAS; Web Application Server</button>) : 동적 서비스를 제공하거나, <button type="button" class="not-hidden">웹 서버와 데이터베이스 서버</button> 또는 <button type="button" class="not-hidden">웹 서버와 파일 서버</button> 사이에서 인터페이스 역할을 수행함</li>
                        <li><button type="button" class="red">데이터베이스 서버</button>(<button type="button">DB Server</button>) : 데이터베이스와 이를 관리하는 DBMS를 운영함</li>
                        <li><button type="button" class="red">파일 서버</button>(<button type="button">File Server</button>) : 데이터베이스에 저장하기에는 비효율적이거나, 서비스 제공을 목적으로 유지하는 파일들을 저장함</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>소프트웨어 환경</b>
            <ul>
                <li>클라이언트와 서버 운영을 위한 <button type="button" class="red">시스템 소프트웨어</button>와 개발에 사용되는 <button type="button" class="red">개발 소프트웨어</button>로 구성됨</li>
                <li><b>시스템 소프트웨어의 종류</b> : <button type="button">운영체제(OS)</button>, <button type="button">웹서버 및 WAS 운영을 위한 서버 프로그램</button>, <button type="button">DBMS</button> 등</li>
                <li><b>개발 소프트웨어의 종류</b>
                    <ul>
                        <li><button type="button">요구사항 관리 도구</button> : 요구사항의 수집과 분석, 추적 등을 편리하게 도와주는 소프트웨어</li>
                        <li><button type="button">설계/모델링 도구</button> : UML(통합 모델링 언어)을 지원하며, 개발의 전 과정에서 설계 및 모델링을 도와주는 소프트웨어</li>
                        <li><button type="button">구현 도구</button> : 개발 언어를 통해 애플리케이션의 실제 구현을 지원하는 소프트웨어</li>
                        <li><button type="button">빌드 도구</button> : 구현 도구를 통해 작성된 소스의 빌드 및 배포, 라이브러리 관리를 지원하는 소프트웨어</li>
                        <li><button type="button">테스트 도구</button> : 모듈들이 요구사항에 적합하게 구현되었는지 테스트하는 소프트웨어</li>
                        <li><button type="button">형상 관리 도구</button> : 산출물들을 버전별로 관리하여 품질 향상을 지원하는 소프트웨어</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>웹 서버(Web Server)의 기능</b>
            <ul>
                <li><button type="button">HTTP/HTTPS 지원</button> : 브라우저로부터 요청을 받아 응답할 때 사용되는 프로토콜</li>
                <li><button type="button">통신 기록(Communication Log)</button> : 처리한 요청들을 로그 파일로 기록하는 기능</li>
                <li><button type="button">정적 파일 관리(managing Static Files)</button> : HTML, CSS, 이미지 등의 정적 파일을 저장하고 관리하는 기능</li>
                <li><button type="button">대역폭 제한(Bandwidth Throttling)</button> : 네트워크 트래픽의 포화를 방지하기 위해 응답 속도를 제한하는 기능</li>
                <li><button type="button">가상 호스팅(Virtual Hosting)</button> : 하나의 서버로 여러 개의 도메인 이름을 연결하는 기능</li>
                <li><button type="button">인증(Authentication)</button> : 사용자가 합법적인 사용자인지를 확인하는 기능</li>
            </ul>
        </li>
        <li><b>개발 언어의 선정 기준</b>
            <ul>
                <li><button type="button">적정성</button> : 개발하려는 소프트웨어의 목적에 적합해야 함</li>
                <li><button type="button">효율성</button> : 코드의 작성 및 구현이 효율적이어야 함</li>
                <li><button type="button">이식성</button> : 다양한 시스템 및 환경에 적용이 가능해야 함</li>
                <li><button type="button">친밀성</button> : 개발 언어에 대한 개발자들의 이해도와 활용도가 높아야 함</li>
                <li><button type="button">범용성</button> : 다른 개발 사례까 존재하고 여러 분야에서 활용되고 있어야 함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">063</b></h2>
    <ul>
        <li>소프트웨어 아키택처
            <ul>
                <li><b>소프트웨어를 구성하는 요소들 간의 고나계를 표현하는 시스템의 구조 또는 구조체</b></li>
                <li>애플리케이션의 분할 방법과 분할된 모듈에 할당될 기능, 모듈 간의 인터페이스 등을 결정함</li>
                <li><b>소프트웨어 아키택처 설계의 기본 원리</b>
                    <ul>
                        <li><button type="button" class="red">모듈화</button>(<button type="button">Modularity</button>)
                            <ul>
                                <li>소프트웨어의 성능 향상, 시스템의 수정 및 재사용, 유지 관리 등이 용이하도록 <b>시스템의 기능들을 모듈 단위로 나누는 것</b></li>
                                <li>모듈의 크기를 너무 작게 나누면 개수가 많아져 모듈 간의 통합 비용이 많이 듬</li>
                                <li>모듈의 크기를 너무 크게 나누면 개수가 적어 통합 비용은 적게 들지만 모듈 하나의 개발 비용이 많이 듬</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">추상화</button>(<button type="button">Abstraction</button>)
                            <ul>
                                <li>문제의 <b>전체적이고 포괄적인 개념을 설계한 후</b> 차례로 세분화하여 <b>구체화시켜 나가는 것</b></li>
                                <li>완전한 시스템을 구축하기 전에 그 시스템과 유사한 모델을 만들어서 여러가지 요인들을 테스트할 수 있음</li>
                                <li><b>유형</b><ul><li><button type="button">과정 추상화</button> : 자세한 수행 과정을 정의하지 않고, 전반적인 흐름만 파악할 수 있게 설계하는 방법</li>
                                <li><button type="button">데이터 추상화</button> : 데이터의 세부적인 속성이나 용도를 정의하지 않고, 데이터 구조를 대표할 수 있는 표현으로 대체하는 방법</li>
                                <li><button type="button">제어 추상화</button> : 이벤트 발생의 정확한 절차나 방법을 정의하지 않고, 대표할 수 있는 표현으로 대체하는 방법</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><button type="button" class="red">단계적 분해</button>(<button type="button">Stepwise Refinement</button>)
                    <ul>
                        <li>문제를 <b>상위의 중요 개념으로부터 하위의 개념으로 구체화시키는 분할 기법</b></li>
                        <li>Niklaus Wirth에 의해 제안된 하향식 설계 전략</li>
                        <li>소프트웨어의 포괄적인 기능에서부터 시작하여 점차적으로 구체화되고, 알고리즘, 자료구조 등 상세한 내역은 가능한 한 뒤로 미루어 진행함</li>
                    </ul>
                </li>
                <li><button type="button" class="red">정보 은닉</button>(<button type="button">Information Hiding</button>)
                    <ul>
                        <li><b>한 모듈 내부에 포함된 절차와 자료들의 정보가 감추어져 다른 모듈이 접근하거나 변경하지 못하도록 하는 기법</b></li>
                        <li>정보 은닉을 통해 모듈을 독립적으로 수행할 수 있음</li>
                        <li>하나의 모듈이 변경되더라도 다른 모듈에 영향을 주지 않으므로 수정, 시험, 유지보수가 용이함</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>소프트웨어 개발의 설계 단계 구분</b>
            <ul>
                <li><button type="button">상위 설계</button>
                    <ul>
                        <li>별칭 : 아키텍처 설계, 예비 설계</li>
                        <li>설계 대상 : 시스템의 전체적인 구조</li>
                        <li>세부 목록 : 구조, DB, 인터페이스</li>
                    </ul>
                </li>
                <li><button type="button">하위 설계</button>
                    <ul>
                        <li>별칭 : 모듈 설계, 상세 설계</li>
                        <li>설계 대상 : 시스템의 내부 구조 및 행위</li>
                        <li>세부 목록 : 컴포넌트 , 자료 구조, 알고리즘</li>
                    </ul>
                </li>
                <li><b> 소프트웨어 아키택처의 품질 속성</b>
                    <li>소프트웨어 아키택처가 이해 관계자들이 요구하는 수준의 품질을 유지 및 보장할 수 있게 설계되었는지 확인하기 위해 품질 평가 요소들을 구체화 시켜 놓은 것</li>
                    <li><b>품질 평가 요소의 종류</b>
                        <ul>
                            <li><button type="button">시스템 측면</button> : 성능, 보안, 가용성, 기능성, 사용성, 변경 용이성, 확장성 등</li>
                            <li><button type="button">비즈니스 측면</button> : 시장 적시성, 비용과 혜택, 예상 시스템 수명, 목표 시장, 공개 일정 등</li>
                            <li><button type="button">아키택처 측면</button> : 개념적 무결성, 정확성, 완결성, 구축 가능성, 변경성, 시험성 등</li>
                        </ul>
                    </li>  
                </li>
            </ul>
        </li>
        <li><b>소프트웨어 아키택처의 설계 과정</b>
            <ol>
                <li><button type="button">설계 목표 설정</button> : 요구사항을 분석하여 전체 시스템의 설계 목표 설정</li>
                <li><button type="button">시스템 타입 결정</button> : 시스템과 서브시스템의 타입을 결정하고, 아키택처 패턴 선택</li>
                <li><button type="button">아키택처 패턴 적용</button> : 시스템의 표준 아키택처 설계</li>
                <li><button type="button">서브시스템 구체화</button> : 서브시스템의 기능 및 서브시스템 간의 상호작용을 위한 동작과 인터페이스 정의</li>
                <li><button type="button">검토</button> : 설계 목표, 요구사항, 설계의 기본원리 등을 만족하는지 아키택처 검토</li>
            </ol>
        </li>
        <li><b><button type="button" class="red">협약(Contract)</button>에 의한 설계</b>
            <ul>
                <li><b>컴포넌트를 설계할 때 클래스에 대한 여러 가정을 공유할 수 있도록 명세한 것</b></li>
                <li>컴포넌트에 대한 정확한 인터페이스를 명세함</li>
                <li>명세에 포함될 조건
                    <ul>
                        <li><button type="button">선행 조건(Precondition)</button> : 오퍼레이션이 호출되기 전에 참이 되어야할 조건</li>
                        <li><button type="button">결과 조건(Postcondition)</button> : 오퍼레이션이 수행된 후 만족되어야 할 조건</li>
                        <li><button type="button">불변 조건(Invariant)</button> : 오퍼레이션이 실행되는 동안 항상 만족되어야 할 조건</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">064</b></h2>
    <ul>
        <li>아키택처 패턴
            <ul>
                <li>아키텍처를 설계할 때 참조할 수 있는 전형적인 해결 방식 또는 예제</li>
                <li>소프트웨어 시스템의 구조를 구성하기 위한 기본적인 윤곽을 제시함</li>
                <li>서브시스템들과 그 역할이 정의되어 있음</li>
                <li>서브시스템 사이의 관계와 여러 규칙, 지침 등이 포함되어 있음</li>
                <li><b>주요 아키택처 패턴의 종류</b>
                    <ul>
                        <li><button type="button" class="red">레이어 패턴</button>(<button type="button">Layer Pattern</button>)
                            <ul>
                                <li><b>시스템을 계층으로 구분하여 구성하는 고전적인 방법의 패턴</b></li>
                                <li>하위 게층은 상위 계층에 대한 <b>서비스 제공자</b>가 되고, 상위 계층은 하위 계층의 <b>클라이언트</b>가 됨</li>
                                <li>서로 마주보는 두 개의 계층 사이에서만 상호작용이 이루어짐</li>
                                <li>대표적으로 <button type="button" class="not-hidden">OSI 참조 모델</button>이 있음</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">클라이언트-서버 패턴</button>(<button type="button">Client-Server Pattern</button>)
                            <ul>
                                <li><b>하나의 서버 컴포넌트와 다수의 클라이언트 컴포넌트로 구성되는 패턴</b></li>
                                <li>사용자가 <button type="button" class="not-hidden">클라이언트</button>를 통해 <button type="button" class="not-hidden">서버</button>에 요청하면 클라이언트가 응답을 받아 사용자에게 제공하는 방식</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">파이프-필터 패턴</button>(<button type="button">Pipe-Filter Pattern</button>)
                            <ul>
                                <li><b>데이터 스크림 절차의 각 단계를 필터로 캡슐화하여 파이프를 통해 전송하는 패턴</b></li>
                                <li>앞 시스템의 처리 결과물을 <button type="button" class="not-hidden">파이프</button>를 통해 전달받아 처리한 후 그 결과물을 다시 <button type="button" class="not-hidden">파이프</button>를 통해 다음 시스템으로 넘겨주는 패턴 반복</li>
                                <li>데이터 변환, 버퍼링, 동기화 등에 주로 사용됨</li>
                                <li>대표적으로 <button type="button" class="not-hidden">UNIX의  쉘(Shell)</button>이 있음</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">모델-뷰-컨트롤러 패턴</button>(<button type="button">Model-View-Controller Pattern</button>)
                            <ul>
                                <li><b>서브시스템을 모델, 뷰, 컨트롤러로 구조화하는 패턴</b></li>
                                <li><button type="button" class="not-hidden">컨트롤러</button>가 사용자의 요청을 받으면 핵심 기능과 데이터를 보관하는 <button type="button" class="not-hidden">모델</button>을 이용하여 <button type="button" class="not-hidden">뷰</button>에 정보를 출력하는 구조</li>
                                <li>여러개의 뷰를 만들 수 있음</li>
                                <li>한 개의 모델에 대해 여러 개의 뷰를 필요로 하는 대화형 애플리케이션에 적합함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>기타 패턴</b>
                    <ul>
                        <li><button type="button" class="red">마스터-슬레이브 패턴</button>(<button type="button">Master-Slave Pattern</button>) : 슬레이브 컴포넌트에서 처리된 결과물을 다시 돌려받는 방식으로 작업을 수행하는 패턴 <span class="exam">ex) 장애 허용 시스템, 병렬 컴퓨팅 시스템</span></li>
                        <li><button type="button" class="red">브로커 패턴</button>(<button type="button">Broker Pattern</button>) : 사용자가 원하는 서비스와 특성을 브로커 컴포넌트에 요청하면 브로커 컴포넌트가 요청에 맞는 컴포넌트와 사용자를 연결해주는 패턴<span class="exam">ex) 분산 환경 시스템</span></li>
                        <li><button type="button" class="red">피어-투-피어 패턴</button>(<button type="button">Peer-To-Peer Peattern</button>) : 피어(Peer)라 불리는 하나의 컴포넌트가 클라이언트가 될 수도, 서버가 될 수도 있는 패턴<span class="exam">ex) 파일 공유 네트워크</span></li>
                        <li><button type="button" class="red">이벤트-버스 패턴</button>(<button type="button">Event-Bus Pattern</button>) : 소스가 특정 채널에 이벤트 메시지를 발생(Publish)하면, 해당 채널을 구독(Subscribe)한 리스너(Listener)들이 메시지를 받아 이벤트를 처리하는 패턴<span class="exam">ex) 알림 서비스</span></li>
                        <li><button type="button" class="red">블랙보드 패턴</button>(<button type="button">Blackboard Pattern</button>) : 모든 컴포넌트들이 공유 데이터 저장소와 블랙보드 컴포넌트에 접근이 가능한 패턴</li>
                        <li><button type="button" class="red">인터프리터 패턴</button>(<button type="button">Interpreter Pattern</button>) : 프로그램 코드의 각 라인을 수행하는 방법을 지정하고, 기호마다 클래스를 갖도록 구성된 패턴<br/></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">065</h2>
    <ul>
        <li><button type="button" class="red">객체지향</button>
            <ul>
                <li>소프트웨어의 각 요소들을 객체(Object)로 만든 후, 객체들을 조립해서 소프트웨어를 개발하는 기법</li>
                <li>구조적 기법의 문제점으로 인한 소프트웨어 위기의 해결책으로 채택되어 사용되고 있음</li>
                <li>소프트웨어의 재사용 및 확장이 용이하여 고품질의 소프트웨어를 빠르게 개발할 수 있고 유지보수가 쉬움</li>
                <li><b>구성 요소</b>
                    <ul>
                        <li><button type="button" class="red">객체</button>(<button type="button">Object</button>)
                            <ul>
                                <li>데이터와 이를 처리하기 위한 함수를 묶어놓은 소프트웨어 모듈</li>
                                <li>데이터 : 객체가 가지고 있는 정보. 속성이나 상태, 분류 등</li>
                                <li>함수 : 객체가 수행하는 기능으로 객체게 갖는 데이터를 처리하는 알고리즘. 객체의 상태를 참조하거나 변경하는 수단</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">클래스</button>(<button type="button">Class</button>)
                            <ul>
                                <li><b>공통된 속성과 연산을 갖는 객체의 집합</b></li>
                                <li>각각의 객체들이 갖는 속성과 연산을 정의하고 있는 틀</li>
                                <li>클래스에 속한 각각의 객체를 인스턴스(Instance)라고 함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">메시지</button>(<button type="button">Message</button>)
                            <ul>
                                <li><b>객체들 간의 상호작용을 하는데 사용되는 수단.</b> 객체에게 어떤 행위를 하도록 지시하는 명령 또는 요구사항</li>
                                <li>메시지를 받은 객체는 대응하는 연산을 수행하여 예상된 결과를 반환함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>객체지향의 특징</b>
                    <ul>
                        <li><button type="button" class="red">캡슐화</button>(<button type="button">Encapsulation</button>)
                            <ul>
                                <li><b>외부에서의 접근을 제한하기 위해 인터페이스를 제외한 세부 내용을 은닉하는 것</b></li>
                                <li>캡슐화된 객체는 외부 모듈의 변경으로 인한 <b>파급 효과가 적음</b></li>
                                <li>객체들 간에 메시지를 주고받을 때 상대 객체의 세부 내용은 알 필요가 없으므로 <b>인터페이스가 단순</b>해지고, 객체 간의 <b>결합도가 낮아짐</b></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">상속</button>(<button type="button">Inheritance</button>)
                            <ul>
                                <li><b>상위 클래스의 모든 속성과 연산을 하위 클래스가 물려받는 것</b></li>
                                <li>하위 클래스는 물려받은 속성과 연산을 다시 정의하지 않아도 즉시 자신의 속성으로 사용할 수 있음</li>
                                <li>하위 클래스는 상속받은 속성과 연산 외에 새로운 속성과 연산을 첨가하여 사용할 수 있음</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">다형성</button>(<button type="button">Polymorphism</button>)
                            <ul>
                                <li><b>하나의 메시지에 대해 각각의 객체가 가지고 있는 고유한 방법으로 응답할 수 있는 능력</b></li>
                                <li>객체들은 동일한 메소드명을 사용하며 같은 의미의 응답을 함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">연관성</button>(<button type="button">Relationship</button>)
                            <ul>
                                <li><b>두 개 이상의 객체들이 상호 참조하는 관계</b></li>
                                <li><b>종류 - 의미 : 특징</b>
                                    <ul>
                                        <li><button type="button" class="red">is member of</button> - <button type="button">연관화(Association)</button> : 2개 이상의 객체가 상호 관련되어 있음을 의미함</li>
                                        <li><button type="button" class="red">is instance of</button> - <button type="button">분류화(Classfication)</button> : 동일한 형의 특성을 갖는 객체들을 모아 구성하는 것</li>
                                        <li><button type="button" class="red">is part of</button> - <button type="button">집단화(Aggregation)</button> : 관련있는 객체들을 묶어 하나의 상위 객체를 구성하는것</li>
                                        <li><button type="button" class="red">is a</button> - <button type="button">일반화(Generalization)</button> : 공통적인 성질들로 추상화한 상위 객체를 구성하는 것<br><button type="button" class="red">is a</button> - <button type="button">특수화/상세화(Specialization)</button> : 상위 객체를 구체화하여 하위 객체를 구성하는 것</li>
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
<article id="sub5">
    <h2 class="sub-title"><b class="red">066</b></h2>
    <ul>
        <li><button type="button" class="red">객체지향 분석</button>(<button type="button">OOA; Object Oriented Analysis</button>)
            <ul>
                <li>사용자의 요구사항과 관련된 객체, 속성, 연산, 관계 등을 정의하여 모델링하는 작업</li>
                <li>개발을 위한 업무를 객체와 속성, 클래스와 멤버, 전체와 부분 등으로 나누어서 분석함</li>
                <li>주요 목적 : 클래스를 식별하는 것</li>
                <li><b>방법론</b>
                    <ul>
                        <li><button type="button">Rumbaugh(럼바우) 방법</button> : 분석 활동을 객체 모델, 동적 모델, 기능 모델로 나누어 수행함</li>
                        <li><button type="button">Booch(부치) 방법</button> : 미시적(Micro) 개발 프로세스와 거시적(Macro) 개발 프로세스를 모두 사용함. 클래스와 객체들을 분석 및 식별하고 클래스의 속성과 연산을 정의함</li>
                        <li><button type="button">Jacobson 방법</button> : 유스케이스(Use Case)를 강조하여 사용함</li>
                        <li><button type="button">Coad와 Yourdon 방법</button> : E-R 다이어그램을 사용하여 객체의 행위를 모델링함. 객체 식별, 구조 식별, 주체 정의, 속성과 인스턴스 연결 정의, 연산과 메시지 연결 정의 등의 과정으로 구성함</li>
                        <li><button type="button">Wirfs-Brock 방법</button> : 분서고가 설계 간의 구분이 없고, 고객 명세서를 평가해서 설계 작업까지 연속적으로 수행함</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>럼바우(Rumbaugh)의 분석 기법</b>
            <ul>
                <li>모든 소프트웨어 구성 요소를 그래픽 표기법을 이용하여 모델링하는 기법</li>
                <li><button type="button" class="red">객체 모델링 기법</button>(<button type="button">OMT, Object-Modeling Technique</button>)이라고도 함</li>
                <li>분석 활동 순서 : <button type="button" class="red">객체 모델링</button> → <button type="button" class="red">동적 모델링</button> → <button type="button" class="red">기능 모델링</button>
                    <ul>
                        <li><button type="button" class="red">객체 모델링</button>(<button type="button">Object Modeling</button>) : <button type="button" class="not-hidden">정보 모델링(Information Modeling)</button>이라고도 하며, 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 객체 다이어그램으로 표시함</li>
                        <li><button type="button" class="red">동적 모델링</button>(<button type="button">Dynamic Modeling</button>) : 상태 다이어그램을 이용하여 시간의 흐름에 따른 객체들 간의 제어 흐름, 상호 작용, 동작 순서 등의 동적인 행위를 표현하는 모델링</li>
                        <li><button type="button" class="red">기능 모델링</button>(<button type="button">Functional Modeling</button>) : <button type="button" class="not-hidden">자료 흐름도(DFD)</button>를 이용하여 다수의 프로세스들 간의 자료 흐름을 중심으로 처리 과정을 표현한 모델링</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>객체지향 설계 원칙</b>
            <ul>
                <li>변경이나 확장에 유연한 시스템을 설계하기 위해 지켜져야할 원칙</li>
                <li>아래 다섯가지 앞글자를 따 <button type="button" class="red">SOLID 원칙</button>이라고 부름
                    <ul>
                        <li><button type="button">단일 책임 원칙(SRP)</button> :  객체는 단 하나의 책임만 가져야한다는 원칙</li>
                        <li><button type="button">개방-폐쇄 원칙(OCP)</button> : 기존의 코드를 변경하지 않고 기능을 추가할 수 있도록 설계해야 한다는 원칙</li>
                        <li><button type="button">리스코프 치환 원칙(LSP)</button> : 자식 클래스는 최소한 부모 클래스의 기능은 수행할 수 있어야 한다는 원칙</li>
                        <li><button type="button">인터페이스 분리 원칙(ISP)</button> : 자신이 사용하지 않는 인터페이스와 의존 관계를 맺거나 영향을 받지 않아야 한다는 원칙</li>
                        <li><button type="button">의존 역전 원칙(DIP)</button> : 의존 관계 성립 시 추상성이 높은 클래스와 의존 관계를 맺어야 한다는 원칙</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post;