
const post = `
<h1 class="title">정처기 실기 5. 인터페이스 구현2</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-14</span>
    <span class="modification-date">수정일 : 2023-07-14</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>A083 인터페이스 구현</mark>
    <br><mark>B084 인터페이스 보안</mark>
    <br><mark>B085 인터페이스 구현 검증</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">083</b></h2>
    <ul><li><b>인터페이스 구현</b><ul><li>송·수신 시스템 간의 데이터 교환 및 처리를 실현해주는 작업</li><li><b>대표적인 방법</b><ul><li><button type="button" class="not-hidden">데이터 통신을 이용한 인터페이스 구현</button><ul><li>애플리케이션 영역에서 데이터 포맷을 인터페이스 대상으로 전송하면 이를 수신 측에서 파싱(Parsing)하여 해석하는 방식</li><li>주로 JSON이나 XML 형식의 데이터 포맷을 사용하여 인터페이스를 구현함</li></ul></li><li><button type="button" class="not-hidden">인터페이스 엔티티를 이용한 인터페이스 구현</button><ul><li>인터페이스 필요한 시스템 사이에 별도로 인터페이스 엔터티를 두어 상호 연계하는 것</li><li>일반적으로 <b>인터페이스 테이블</b>을 엔터티로 활용함</li></ul></li></ul></li></ul></li><li><button type="button" class="red">JSON</button>(<button type="button">JavaScript Object Notation</button>)<ul><li>웹고 컴퓨터 프로그램에서 용량이 적은 데이터를 교환하기 위해 <b>데이터 객체를 속성·값의 쌍(Attribute-Value Pairs) 형태로 표현하는 개방형 표준 포맷</b></li><li>비동기 처리에 사용되는 AJAX 에서 XML을 대체하여 사용되고 있음</li></ul></li><li><button type="button" class="red">AJAX</button>(<button type="button">Asynchronous JavaScript and XML</button>)<ul><li>자바스크립트를 사용하여 <b>클라이언트와 서버 간에 XML 데이터를 주고받는 비동기 통신 기술</b></li><li>전체 페이지를 새로 고치지 않고도 웹 페이지 일부 영역만을 업데이트할 수 있음</li></ul></li></ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">084</b></h2>
    <ul><li><b>인터페이스 보안</b><ul><li>인터페이스의 보안성 향상을 위해 <b>인터페이스의 보안 취약점을 분석한 후 적절한 보안 기능을 적용하는 것</b></li><li><b>일반적 기능 적용</b><ul><li><button type="button">네트워크 영역</button><ul><li>인터페이스 송·수신 간 스니핑(Sniffing) 등을 이용한 데이터 탈취 및 변조 위협을 방지하기 위해 네트워크 트래픽에 대한 암호화를 설정함</li><li>암호화는 인터페이스 아키텍처에 따라 <button type="button" class="not-hidden">IPSec</button>, <button type="button" class="not-hidden">SSL</button>, <button type="button" class="not-hidden">S-HTTP</button>등의 다양한 방식으로 적용함<ul><li><button type="button" class="not-hidden">IPsec(IP Security)</button> : 네트워크 계층에서 IP 패킷 단위의 데이터 변조 방지 및 은닉 기능을 제공하는 프로토콜</li><li><button type="button" class="not-hidden">SSL(Secure Sockets Layer)</button> : TCP/IP 게층과 애플리케이션 계층 사이에서 인증, 암호화, 무결성을 보장하는 프로토콜</li><li><button type="button" class="not-hidden">S-HTTP(Scure Hypertext Transfer Protocol)</button> : 클라이언트와 서버 간에 전송되는 모든 메시지를 암호화하는 프로토콜</li></ul></li></ul></li><li><button type="button">애플리케이션 영역</button><ul><li>소프트웨어 개발 보안 가이드를 참조하여 애플리케이션 코드 상의 보안 취약점을 보완하는 방향으로 애플리케이션 보안 기능을 적용함</li></ul></li><li><button type="button">데이터베이스 영역</button><ul><li>데이터베이스, 스키마, 엔티티의 접근 권한과 프로시저(Procedure), 트리거(Trigger) 등 데이터베이스 동작 객체의 보안 취약점에 보안 기능을 적용함</li><li>개인 정보나 업무상 민감한 데이터의 경우 암호화나 익명화 등 데이터 자체의 보안 방안도 고려함</li></ul></li></ul></li></ul></li><li><b>데이터 무결성 검사 도구</b><ul><li>인터페이스 보안 취약점을 분석하는데 사용되는 도구</li><li>시스템 파일의 변경 유무를 확인하고, 파일이 변경되었을 경우 이를 관리자에게 알려줌</li><li>종류 : <button type="button">Tripwire</button>, <button type="button">AIDE</button>, <button type="button">Samhain</button>, <button type="button">Clymore</button>, <button type="button">Slipwire</button>, <button type="button">Fcheck</button> 등</li></ul></li></ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">085</b></h2>
    <ul><li><b>인터페이스 구현 검증</b><ul><li>인터페이스가 정상적으로 문제없이 동작하는지 확인하는 것</li><li><button type="button" class="not-hidden">인터페이스 구현 검증 도구</button>와 <button type="button" class="not-hidden">감시 도구</button>를 이용하여 인터페이스의 동작 상태를 확인함</li><li><button type="button" class="not-hidden">인터페이스 구현 검증 도구</button><ul><li>인터페이스 단위 기능과 시나리오 등을 기반으로 하는 <b>통합 테스트</b>가 필요함</li><li><b>통합 테스트를 수행하기 위해 사용하는 테스트 자동화 도구</b><ul><li><button type="button">xUnit</button><ul><li>같은 테스트 코드를 여러 번 작성하지 않게 도와주고, 테스트마다 예상 결과를 기억할 필요가 업섹 하는 자동화된 해법을 제공하는 단위 테스트 프레임워크</li><li>Smalltalk에 처음 적용되어 SUnit이라는 이름이었으나 Java용의 JUnit, C++용의 CppUnit, .Net용의 NUnit, Http용의 HttpUnit 등 다양한 언어에 적용되면서 xUnit으로 통칭되고 있음</li></ul></li><li><button type="button">STAF</button><ul><li>서비스 호출 및 컴포넌트 재사용 등 다양한 환경을 지원하는 테스트 프레임워크</li><li>크로스 플랫폼이나 분산 소프트웨어에서 테스트 환경을 조성할 수 있도록 지원함</li><li>분산 소프트웨어의 경우 각 분산 환경에 설치된 데몬이 프로그램 테스트에 대한 응답을 대신하며, 테스트가 완료되면 이를 통합하고 자동화하여 프로그램을 완성함</li></ul></li><li><button type="button">FitNesse</button><ul><li>웹 기반 테스트 케이스 설계, 실행, 결과 확인 등을 지원하는 테스트 프레임워크</li></ul></li><li><button type="button">NTAF</button><ul><li>FitNesse의 장점인 협업 기능과 STAF의 장점인 재사용 및 확장성을 통합한 NHN(Naver)의 테스트 자동화 프레임워크</li></ul></li><li><button type="button">Selenium</button><ul><li>다양한 브라우저 및 개발 언어를 지원하는 웹 애플리케이션 테스트 프레임워크</li></ul></li><li><button type="button">watir</button><ul><li>Ruby를 사용하는 애플리케이션 테스트 프레임워크</li></ul></li></ul></li></ul></li><li><button type="button" class="not-hidden">인터페이스 구현 감시 도구</button><ul><li>인터페이스 동작 상태는 <button type="button" class="not-hidden">APM(애플리케이션 성능 관리)</button>을 사용하여 감시(Monitoring)할 수 있음</li><li>APM을 통해 데이터베이스와 웹 애플리케이션의 트랜잭션, 변수값, 호출 함수, 로그 및 시스템 부하 등 종합적인 정보를 조회하고 분석할 수 있음</li><li><b>대표적인 APM</b><ul><li><button type="button">스카우터(Scouter)</button> : 애플리케이션 및 OS 자원에 대한 모니터링 기능을 제공하는 오픈 소스 APM 소프트웨어</li><li><button type="button">제니퍼(Jennifer)</button> : 애플리케이션의 개발부터 테스트, 오픈, 운영, 안정화까지, 전 단계에 걸쳐 성능을 모니터링하고 분석해주는 소프트웨어</li></ul></li><li><button type="button" class="red">APM</button>(<button type="button">Application Performance Management/Monitoring</button>)<ul><li>애플리케이션 성능 관리를 위해 접속자, 자원 현황, 트랜잭션 수행 내역, 장애 진단 등 다양한 모니터링 기능을 제공하는 도구</li><li><b>유형</b><ul><li><button type="button" class="red">리소스 방식</button> : Nagios, Zabbix, Cacti 등</li><li><button type="button" class="red">엔드투엔드 방식</button> : VisualVM, 제니퍼, 스카우터 등</li></ul></li></ul></li></ul></li></ul></li></ul>
</article>
`;

export default post;