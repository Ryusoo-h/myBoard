
const post = `
<h1 class="title">정처기 실기 5. 인터페이스 구현1</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-13</span>
    <span class="modification-date">수정일 : 2023-07-14</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>D075 시스템 인퍼테이스 요구사항 분석</mark>
    <br><mark>C076 인터페이스 요구사항 검증</mark>
    <br><mark>D077 송·수신 데이터 식별</mark>
    <br><mark>D078 인터페이스 방법 명세화</mark>
    <br><mark>B079 미들웨어 솔루션</mark>
    <br><mark>A080 모듈 연계를 위한 인터페이스 기능 식별</mark>
    <br><mark>D081 모듈 간 인터페이스 데이터 표준 확인</mark>
    <br><mark>D082 인터페이스 기능 구현 정의</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">075</h2>
    <ul><li><button type="button">시스템 인터페이스</button> : 독립적으로 떨어져있는 시스템들끼리 서로 연동하여 상호 작용하기 위한 접속 방법이나 규칙</li><li><button type="button">시스템 인터페이스 요구사항</button><ul><li>개발할 시스템과 외부 시스템을 연동하는데 필요한 시스템 인터페이스에 대한 요구사항을 기술한 것</li><li><b>시스템 인터페이스 요구사항 명세서의 구성 요소</b><ul><li>인터페이스 이름</li><li>연계 대상 시스템</li><li>연계 범위 및 내용</li><li>연계 방식</li><li>송신 데이터</li><li>인터페이스 주기</li><li>기타 고려사항</li></ul></li><li><button type="button">시스템 인터페이스 요구사항 분석</button><ul><li><b>요구사항을 분류하고 구체적으로 명세한 후 이를 이해관계자에게 전달하는 일련의 과정</b></li><li>소프트웨어 요구사항 분석 기법을 적절히 이용함</li><li>요구사항의 분해가 필요한 경우 적절한 수준으로 세분화함</li><li>요구사항 분석 시 누락된 요구사항이나 제한 조건을 추가함</li><li>요구사항에 대한 상대적 중요도를 평가하여 우선순위를 부여함</li><li><b>절차</b><ol><li>시스템 인터페이스 관련 요구사항을 선별하여 별도로 <b><button type="button" class="not-hidden">요구사항 목록</button>을 만듬</b></li><li>요구사항과 관련된 <b>자료를 준비함</b></li><li>기능적인 요구사항과 비기능적인 <b>요구사항으로 분류함</b></li><li>요구사항을 분석하고 <b><button type="button" class="not-hidden">요구사항 명세서</button>에 내용을 추가하거나 수정함</b></li><li>추가·수정한 <button type="button" class="not-hidden">요구사항 명세서</button>와 <button type="button" class="not-hidden">요구사항 목록</button>을 관련 <b>이해관계자에게 전달함</b></li></ol></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">076</h2>
    <ul><li><button type="button">인터페이스 요구사항 검증</button><ul><li>사용자들의 요구사항이 <button type="button" class="not-hidden">요구사항 명세서</button>에 정확하고 완전하게 기술되었는지 <b>검토</b>하고 개발 범위의 기준인 <b>베이스라인을 설정</b>하는 것</li><li><b>수행 순서</b><ol><li><button type="button">요구사항 검토 계획 수립</button> : 검토 기준 및 방법, 참여자, 체크리스트, 관련 자료, 일정 등의 검토 계획 수립</li><li><button type="button">검토 및 오류 수정</button> : 인터페이스 요구사항 명세서 검토 및 오류 목록과 시정 조치서 작성</li><li><button type="button">베이스라인 설정</button> : 검증된 인터페이스 요구사항을 승인받은 후 요구사항 명세서의 베이스라인 설정</li></ol></li><li><b>요구사항 검증 방법</b><ul><li><button type="button" class="red">요구사항 검토(Requirements Review)</button> : 요구사항 명세서의 오류 확인 및 표준 준수 여부 등의 결함 여부를 검토 담당자들이 수작업으로 분석하는 방법<ul><li><button type="button" class="red">동료 검토</button>(<button type="button">Peer Review</button>)<br>: 요구사항 명세서 작성자가 명세서 내용을 직접 설명하고 동료들이 이를 들으면서 결함을 발견하는 형태의 검토 방법</li><li><button type="button" class="red">워크스루]</button>(<button type="button">Walk Through</button>)<br>: 검토 회의 전에 요구사항 명세서를 미리 배포하여 사전 검토한 후에 짧은 검토 회의를 통해 결함을 발견하는 형태의 검토 방법</li><li><button type="button" class="red">인스펙션]</button>(<button type="button">Inspection</button>)<br>: 요구사항 명세서 작성자를 제외한 다른 검토 전문가들이 요구사항 명세서를 확인하면서 결함을 발견하는 형태의 검토 방법</li></ul></li><li><button type="button" class="red">프로토타이핑(Prototyping)</button> : 사용자의 요구사항을 정확히 파악하기 위해 실제 개발될 소프트웨어에 대한 견본품(Prototype)을 만들어 최종 결과물을 예측함<ul><li><button type="button">테스트 설계</button> : 요구사항은 테스트할 수 있도록 작성되어야 하며, 이를 위해 테스트 케이스를 생성하여 요구사항이 현실적으로 테스트 가능한지를 검토함</li><li><button type="button">CASE 도구 활용</button> : 일관성 분석(Consistency Analysis)을 통해 요구사항 변경사항의 추적, 분석, 관리, 표준 준수 여부를 확인함</li></ul></li></ul></li><li><b>인터페이스 요구사항 검증의 주요 항목</b><ul><li><button type="button" class="red">완전성</button>(<button type="button">Completeness</button>) : 사용자의 모든 요구사항이 누락되지 않고 완전하게 반영되어 있는가</li><li><button type="button" class="red">일관성</button>(<button type="button">Consistency</button>) : 요구사항이 모순되거나 충돌되는 점 없이 일관성을 유지하고 있는가</li><li><button type="button" class="red">명확성</button>(<button type="button">Unambiguity</button>) : 모든 참여자가 요구사항을 명확히 이해할 수 있는가</li><li><button type="button" class="red">기능성</button>(<button type="button">Functionality</button>) : 요구사항이 '어떻게(How to)'보다 '무엇을(What)'에 중점을 두고 있는가</li><li><button type="button" class="red">검증 가능성</button>(<button type="button">Verifiability</button>) : 요구사항이 사용자의 요구를 모두 만족하고, 개발된 소프트웨어가 사용자의 요구 내용과 일치하는지를 검증할 수 있는가</li><li><button type="button" class="red">추적 가능성</button>(<button type="button">Traceability</button>) : 요구사항 명세서와 설계서를 추적할 수 있는가</li><li><button type="button" class="red">변경 용이성</button>(<button type="button">Easily Changeable</button>) : 요구사항 명세서의 변경이 쉽도록 작성되었는가<br/><br/></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title">077</h2>
    <ul><li><button type="button">식별 대상 데이터</button><ul><li>송·수신 시스템 사이에서 교환되는 데이터. 규격화된 표준 형식에 따라 전송됨</li><li><b>데이터 종류</b><ul><li><button type="button" class="red">인터페이스 표준 항목</button><ul><li>송·수신 시스템을 연계하는데 표준적으로 필요한 데이터</li><li><button type="button">시스템 공통부</button> : 시스템 간 연동 시 필요한 공통 정보.<ul><li>구성 정보 : 인터페이스 ID, 전송 시스템 정보, 서비스 코드 정보, 응답 결과 정보, 장애 정보 등</li></ul></li><li><button type="button">거래 공통부</button> : 시스템이 연동된 후 송·수신되는 데이터를 처리할 떄 필요한 정보</li></ul></li><li><button type="button" class="red">송·수신 데이터 항목</button><ul><li><b>송·수신 시스템이 업무를 수행하는데 사용되는 데이터</b></li><li>전송되는 데이터 항목과 순서는 인터페이스별로 다름</li></ul></li><li><button type="button" class="red">공통 코드</button><ul><li><b>시스템들에서 공통으로 사용하는 코드</b></li><li> 연계 시스템이나 연계 소프트웨어에서 사용하는 상태 및 오류 코드 등의 항목에 대해 코드값과 코드명, 코드 설명 등을 공통 코드로 관리함 </li></ul></li></ul></li></ul></li></ul>
    <ul><li><button type="button">정보 흐름 식별</button><ul><li>개발할 시스템과 내·외부 시스템 사이에서 전송되는 정보들의 방향성을 식별함</li><li>개발할 시스템과 내·외부 시스템에 대한 각각의 인터페이스 목록을 확인하여 정보 흐름을 식별함</li><li>식별한 정보 흐름을 기반으로 송·수신 시스템 사이에서 교환되는 주요 데이터 항목이나 정보 그룹을 도출함</li></ul></li></ul>
    <ul><li><button type="button">송·수신 데이터 식별</button><ul><li>개발할 시스템과 연계할 내·외부 시스템 사이의 정보 흐름과 데이터베이스 산출물을 기반으로 식별함</li><li><b>종류에 따라 다음과 같이 식별함</b><ul><li><button type="button" class="not-hidden">인터페이스 표준 항목과 송·수신 데이터 항목 식별</button> : 송·수신 시스템 사이의 교환 범위를 확인하고 인터페이스 표준 항목에 대해 송·수신 데이터 항목을 식별함</li><li><button type="button" class="not-hidden">코드성 데이터 항목 식별</button> : 코드성 데이터 항목에 대해 코드, 코드명, 코드 설명 등의 코드 정보를 식별함</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">078</h2>
    <ul><li><b>인터페이스 방법 명세화</b><ul><li>내·외부 시스템이 연계하여 작동할 때 인터페이스별 <button type="button" class="not-hidden">송·수신 방법</button>, <button type="button" class="not-hidden">송·수신 데이터</button>, <button type="button" class="not-hidden">오류 식별 및 처리 방안</button>에 대한 내용을 문서로 정리하는 것</li><li><button type="button">송·수신 방법 명세화</button> : 내·외부 인터페이스 목록에 있는 각각의 인터페이스에 대해 연계 방식, 통신 및 처리 유형, 발생 주기 등의 송·수신 방법을 정의하고 명세서를 작성하는 것</li><li><button type="button">송·수신 데이터 명세화</button> : 내·외부 인터페이스 목록에 있는 각각의 인터페이스에 대해 인터페이스 시 필요한 송·수신 데이터에 대한 명세를 작성하는 것</li><li><button type="button">오류 식별 및 처리 방안 명세화</button> : 내·외부 인터페이스 목록에 있는 각각의 인터페이스에 대해 인터페이스 시 발생할 수 있는 오류를 식별하고 오류 처리 방안에 대한 명세를 작성하는 것</li><li>인터페이스별로 송·수신 방법을 명세화하기 위해 필요한 정보<ul><li><button type="button" class="not-hidden">시스템 연계 기술</button><ul><li><button type="button">DB Link</button> : DB에서 제공하는 DB Link 객체를 이용하는 방식</li><li><button type="button">API/Open API</button> : 송신 시스템의 DB에서 데이터를 읽어 와 제공하는 애플리케이션 프로그래밍 인터페이스 프로그램</li><li><button type="button">연계 솔루션</button> : EAI 서버와 송·수신 시스템에 설치되는 클라이언트(Client)를 이용하는 방식<ul><li><button type="button" class="not-hidden">EAI; Enterprise Application Integration</button> : 송·수신 데이터를 식별하기 위해 송·수신 처리 및 진행 현황을 모니터링하고 통제하는 시스템</li></ul></li><li><button type="button">Socket</button> : 서버가 통신을 위한 소켓(Socket)을 생성하여 포트를 할당하고 클라이언트 통신 요청 시 클라이언트와 연결하여 통신하는 네트워크 기술</li><li><button type="button">Web Service</button> : 웹 서비스(Web Service)에서 WSDL, UDDI, SOAP 프로토콜을 이용하여 연계하는 서비스</li></ul></li><li><button type="button" class="not-hidden">인터페이스 통신 유형</button><ul><li><button type="button">단방향</button> : 시스템에서 거래를 요청만 하고 응답이 없는 방식</li><li><button type="button">동기</button> : 시스템에서 거래를 요청하고 응답이 올 때까지 대기(Request-Reply)하는 방식</li><li><button type="button">비동기</button> : 시스템에서 거래를 요청하고 다른 작업을 수행하다 응답이 오면 처리하는 방식><br>(Send-Receive, Send-Receive-Acknowledge, Publish-Subscribe)</li></ul></li><li><button type="button" class="not-hidden">인터페이스  처리 유형</button><ul><li><button type="button">실시간 방식</button> : 사용자가 요청한 내용을 바로 처리해야 할 때 사용하는 방식</li><li><button type="button">지연 처리 방식</button> : 데이터를 매건 단위로 처리할 경우 비용이 많이 발생할 때 사용하는 방식</li><li><button type="button">배치 방식</button> : 대량의 데이터를 처리할 때 사용하는 방식</li></ul></li><li><button type="button" class="not-hidden">인터페이스  발생 주기</button><ul><li>개발할 시스템과 내·외부 시스템 간 송·수신 데이터가 전송되어 인터페이스가 사용되는 주기</li><li>업무의 성격과 송·수신 데이터 전송량을 고려하여 매일, 수시, 주 1회 등으로 구분함<br/></li></ul></li></ul></li></ul></li></ul>
</article>
<hr>

<article id="sub5">
    <h2 class="sub-title"><b class="red">079</b></h2>
    <ul><li><button type="button" class="red">미들웨어(Middleware)</button><ul><li><b>운영체제와 응용 프로그램, 또는 서버와 클라이언트 사이에서 다양한 서비스를 제공하는 소프트웨어</b></li><li>표준화된 인터페이스를 제공함으로써 시스템 간의 데이터 교환에 일관성을 보장함</li><li><b>종류</b><ul><li><button type="button" class="red">DB(DataBase)</button><ul><li>데이터베이스 벤더에서 제공하는 <b>클라이언트에서 원격의 데이터베이스와 연결하는 미들웨어</b></li><li>DB를 사용하여 시스템을 구축하는 경우 보통 2-Tier 아키텍처라고 함</li></ul></li><li><button type="button" class="red">RPC(Remote Procedure Cal</button>=<button type="button">원격 프로시저 호출</button><ul><li>응용 프로그램의 프로시저를 사용하여 <b>원격 프로시저를 마치 로컬 프로시저처럼 호출하는 미들웨어</b></li></ul></li><li><button type="button" class="red">MOM(Message Oriented Middleware)</button>=<button type="button">메시지 지향 미들웨어</button><ul><li>메시지 기반의 <b>비동기형 메시지를 전달하는 미들웨어</b></li><li>온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용됨</li></ul></li><li><button type="button" class="red">TP-Monitor(Transaction Processing Monitor)</button>=<button type="button">트랜잭션 처리 모니터</button><ul><li>온라인 트랜잭션 업무에서 <b>트랜잭션을 처리 및 감시하는 미들웨어</b></li><li>항공기나 철도 예약 업무 등 사용자 수가 증가해도 빠른 응답 속도를 유지해야하는 업무에 주로 사용됨</li></ul></li><li><button type="button" class="red">ORB(Object Request Broker)</button>=<button type="button">객체 요청 브로커</button><ul><li><b>코바(CORBA) 표준 스펙을 구현한 객체 지향 미들웨어</b></li><li>최근에는 TP-Monitor의 장점인 트랜잭션 처리와 모니터링을 추가로 구현한 제품도 있음</li></ul></li><li><button type="button" class="red">WAS(Web Application Server)</button>=<button type="button">웹 애플리케이션 서버</button><ul><li>사용자의 요구에 따라 변하는 <b>동적인 콘텐츠를 처리하기 위한 미들웨어</b></li><li>클라이언트/서버 환경보다는 웹 환경을 구현하기 위한 미들웨어</li><li>HTTP 세션 처리를 위한 웹 서버 기능뿐만 아니라 미션-크리티컬한 기업 업무까지 JAVA, EJB 컴포넌트 기반으로 구현 가능</li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub6">
    <h2 class="sub-title"><b class="red">080</b></h2>
    <ul><li><button type="button" class="red">모듈 연계</button><ul><li>내부 모듈과 외부 모듈 또는 내부 모듈 간 데이터의 교환을 위해 관계를 설정하는 것</li><li><b>대표적 방법</b><ul><li><button type="button" class="red">EAI</button>(<button type="button">Enterprise Application Intergration</button>)<ul><li>기업 내 각종 애플리케이션 및 플랫폼 간의 정보 전달, 연계 통합 등 상호 연동이 가능하게 해주는 솔루션<li><b>구축 유형</b><ul><li><button type="button">Point-to-Point</button><ul><li>가장 기본적인 애플리케이션 통합 방식</li><li>애플리케이션을 1:1로 연결함</li><li>변경 및 재사용이 어려움</li></ul></li><li><button type="button">Hub & Spoke</button><ul><li>단일 접점인 허브 시스템을 이용해 데이터를 전송하는 중앙 집중형 방식</li><li>확장 및 유지 보수가 용이함</li><li>허브 장애 발생 시 시스템 전체에 영향을 미침</li></ul></li><li><button type="button">Message Bus(ESB방식)</button><ul><li>애플리케이션 사이에 미들웨어를 두어 처리하는 방식</li><li>확장성이 뛰어나며 대용량 처리가 가능함</li></ul></li><li><button type="button">Hybrid</button><ul><li>Hub & Spoke 와 Message Bus의 혼합 방식</li><li>그룹 내에서는 Hub & Spoke 방식을, 그룹 간에는 message Bus 방식을 사용함</li><li>필요한 경우 한 가지 방식으로 EAI 구현이 가능함</li><li>데이터 병목 현상을 최소화할 수 있음</li></ul></li></ul></li></li></ul></li><li><button type="button" class="red">ESB</button>(<button type="button">Enterprise Service Bus</button>)<ul><li><b>애플리케이션 간 연계, 데이터 변환, 웹 서비스 지원 등 표준 기반의 인터페이스를 제공하는 솔루션</b></li><li>애플리케이션 사이에 미들웨어를 두어 정보를 처리하는 Message Bus와 동일한 방식의 솔루션</li><li>애플리케이션 통합 측면에서 EAI와 유사하지만 애플리케이션 보다는 <b>서비스 중심의 통합을 지향함</b></li><li>특정 서비스에 국한되지 않고 범용적으로 사용하기 위하여 애플리케이션과의 결합도(Coupling)을 약하게(Loosely) 유지함</li><li>관리 및 보안 유지가 쉬움</li><li>높은 수준의 품질 지원 가능</li></ul></li><li><button type="button" class="red">웹 서비스(Web Service)</button><ul><li><b>네트워크의 정보를 표준화된 서비스 형태로 만들어 공유하는 기술</b></li><li>서비스 지향 아키텍처(SOA) 개념을 실현하는 대표적인 방법</li><li><b>구성</b><ul><li><button type="button" class="red">SOAP</button>(<button type="button">Simple Object Access Protocol</button>) : HTTP, HTTPS, SMTP 등을 활용하여 XML 기반의 메시지를 네트워크상에서 교환하는 프로토콜</li><li><button type="button" class="red">UDDI</button>(<button type="button">Universal Description Discovery and Integration</button>) : WSDL을 등록하여 서비스와 서비스 제공자를 검색하고 접근하는데 사용됨</li><li><button type="button" class="red">WSDL</button>(<button type="button">Web Services Description Language</button>) : 웹 서비스와 관련된 서식이나 프로토콜 등을 표준적인 방법으로 기술하고 게시하기 위한 언어. XML로 작성되며, UDDI의 기초가 됨</li></ul></li></ul></li></ul></li><li><b>모듈 간 연계 기능 식별</b><ul><li>모듈 간 연계 기능은 모듈과 연계된 기능ㅇ르 시나리오 형태로 구체화하여 식별함</li><li>식별된 연계 기능은 인터페이스 기능을 식별하는데 사용됨</li></ul></li><li><b>모듈 간 인터페이스 기능 식별</b><ul><li>모듈 간 인터페이스 기능은 식별된 모듈 간 관련 기능을 검토하여 인터페이스 동작에 필요한 기능을 식별함</li><li>외부 및 인터페이스 모듈 간 동작하는 기능을 통해 인터페이스 기능을 식별함</li><li>해당 업무에 대한 시나리오를 통해 내부 모듈과 관련된 인터페이스 기능을 식별함</li><li>식별된 인터페이스 기능 중에서 실제적으로 필요한 인터페이스 기능을 최종적으로 선별함</li><li>식별된 인터페이스 기능은 인터페이스 기능 구현을 정의하는데 사용됨<br/></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub7">
    <h2 class="sub-title">081</h2>
    <ul><li><b>인터페이스 데이터 표준</b><ul><li><b>모듈 간 인터페이스에 사용되는 데이터의 형식을 표준화하는 것</b></li><li>기존의 데이터 중에서 공통 영역을 추출하거나 어느 한쪽의 데이터를 변환하여 정의</li><li>확인된 인터페이스 데이터 표준은 인터페이스 기능 구현을 정의하는데 사용됨</li><li><b>인터페이스 데이터 표준 확인</b><ol><li><button type="button">데이터 인터페이스 확인</button> : 데이터 표준을 위해 식별된 <button type="button" class="not-hidden">데이터 인터페이스</button>에서 입·출력값의 의미와 데이터의 특성 등을 구체적으로 확인함</li><li><button type="button">인터페이스 기능 확인</button> : 데이터 표준을 위해 식별된 <button type="button" class="not-hidden">인터페이스 기능</button>을 기반으로 인터페이스 기능 구현을 위해 필요한 데이터 항목을 확인함</li><li><button type="button">인터페이스 데이터 표준 확인</button> : 데이터 인터페이스에서 확인된 <button type="button" class="not-hidden">데이터 표준</button>과 <button type="button" class="not-hidden">인터페이스 기능</button>을 통해 확인된 데이터 항목들을 검토하여 최종적으로 데이터 표준을 확인함</li></ol></li></ul></li></ul>
</article>
<hr>
<article id="sub8">
    <h2 class="sub-title">082</h2>
    <ul><li><b>인터페이스 기능 구현 정의</b><ul><li>인터페이스를 실제로 구현하기 위해 인터페이스 기능에 대한 구현 방법을 기능별로 기술하는 것</li><li><b>절차</b><ol><li><button type="button">컴포넌트 명세서 확인</button><ul><li>컴포넌트의 개요, 내부 클래스의 클래스명과 설명 등을 통해 컴포넌트가 가지고 있는 주요 기능을 확인함</li><li>인터페이스 클래스를 통해 인터페이스에 필요한 주요 기능을 확인함</li></ul></li><li><button type="button">인터페이스 명세서 확인</button><ul><li>컴포넌트 명세서의 인터페이스 클래스에 명시된 인터페이스의 세부 조건 및 기능을 확인함</li></ul></li><li><button type="button">일관된 인터페이스 기능 구현 정의</button><ul><li>인터페이스의 기능, 인터페이스 데이터 표준, 모듈 세부 설계서를 통해 인터페이스의 기능 구현을 정의함</li><li>정의한 인터페이스 기능 구현에 대해 송·수신 측에서 진행해야 할 절차까지 다시 세부적으로 정의함</li></ul></li><li><button type="button">정의된 인터페이스 기능 구현 정형화</button><ul><li>정의한 인터페이스 기능 구현을 특정 하드웨어나 소프트웨어에 의존적이지 않게 사람들이 보기 쉽고 표준화되도록 정형화함</li></ul></li></ol></li></ul></li><li><b>모듈 세부 설계서</b><ul><li>모듈의 구성 요소오 세부적인 동작 등을 정의한 설계서</li><li><b>종류</b><ul><li><button type="button">컴포넌트 명세서</button> : 컴포넌트의 개요 및 내부 클래스의 동작, 인터페이스를 통해 외부와 통신하는 명세 등을 정의한 것</li><li><button type="button">인터페이스 명세서</button> : 컴포넌트 명세서의 항목 중 인터페이스 클래스의 세부 조건 및 기능 들을 정의한 것<br/></li></ul></li></ul></li></ul>
</article>
`;

export default post;