
const post = `
<h1 class="title">정처기 실기 9.소프트웨어 개발 보안 구축1</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-16</span>
    <span class="modification-date">수정일 : 2023-07-17</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B109 Secure SDLC</mark>
    <br><mark>B110 입력 데이터 검증 및 표현</mark>
    <br><mark>C111 보안 기능</mark>
    <br><mark>C112 코드 오류</mark>
    <br><mark>C113 캡슐화</mark>
    <br><mark>A114 암호 알고리즘</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">109</b></h2>
    <ul><li><button type="button" class="red">Sequre SDLC</button><ul><li>보안상 안전한 소프트웨어를 개발하기 위해 <button type="button" class="not-hidden">SDLC</button>에 보안 강화를 위한 프로세스를 포함한 것<ul><li><button type="button" class="not-hidden">SDLC</button>(<button type="button">Software Development Life Cycle</button>) : 소프트웨어 개발 생명주기. 소프트웨어 개발 방법론의 바탕이 되는 것. 소프트웨어를 개발하기 위해 정의하고 운용, 유지보수 등의 전 과정을 각 단계별로 나눈 것.</li></ul></li><li>요구사항 분석, 설계, 구현, 테스트, 유지보수 등 SDLC 전체 단계에 걸쳐 수행되어야 할 보안 활동을 제시함</li><li><b>대표적인 방법론</b><ul><li><button type="button">CLASP</button> : SDLC의 초기 단계에서 보안을 강화하기 위해 개발된 방법론</li><li><button type="button">SDL</button> : 마이크로소프트 사에서 안전한 소프트웨어 개발을 위해 기존의 SDLC를 개선한 방법론</li><li><button type="button">Seven Touchpoints</button> : 소프트웨어 보안의 모범사례를 SDLC에 통합한 방법론</li></ul></li><li><b>SDLC 단계별 보안 활동</b><ul><li><button type="button">요구사항 분석 단계</button> : 보안 항목에 해당하는 요구사항을 식별하는 작업 수행</li><li><button type="button">설계 단계</button> : 식별된 보안 요구사항들을 소프트웨어 설계서에 반영하고, 보안 설계서를 작성함</li><li><button type="button">구현 단계</button> : 표준 코딩 정의서 및 소프트웨어 개발 보안 가이드를 준수하며, 설계서에 따라 보안 요구사항들을 구현함</li><li><button type="button">테스트 단계</button> : 설계 단계에서 작성한 보안 설계서를 바탕으로 보안 사항들이 정확히 반영하고 동작되는지 점검함</li><li><button type="button">유지보수 단계</button> : 이전 과정을 모두 수행하였음에도 발생할 수 있는 보안사고들을 식별함. 사고 발생 시 이를 해결하고 보안 패치를 실시함</li></ul></li></ul></li><li><b>소프트웨어 개발 보안 요소</b><ul><li>3대 요소 : <button type="button" class="red">기밀성</button>, <button type="button" class="red">무결성</button>, <button type="button" class="red">가용성</button></li><li><button type="button" class="red">기밀성</button>(<button type="button">Confidentiality</button>)<ul><li>시스템 내의 정보와 자원은 인가된 사용자에게만 접근이 허용됨</li><li>정보가 전송 중에 노출되더라도 데이터를 읽을 수 없음</li></ul></li><li><button type="button" class="red">무결성</button>(<button type="button">Integrity</button>)<ul><li>시스템 내의 정보는 오직 인가된 사용자만 수정할 수 있음</li></ul></li><li><button type="button" class="red">가용성</button>(<button type="button">Availability</button>)<ul><li>인가받은 사용자는 시스템 내의 정보와 자원을 언제라도 사용할 수 있음</li></ul></li><li><button type="button" class="red">인증</button>(<button type="button">Authentication</button>)<ul><li>시스템 내의 정보와 자원을 사용하려는 사용자가 합법적인 사용자인지를 확인하는 모든 행위</li><li>대표적 방법 : 패스워드, 인증용 카드, 지문 검사 등</li></ul></li><li><button type="button" class="red">부인 방지</button>(<button type="button">NonRepudiation</button>)<ul><li>데이터를 송·수신한 자가 송·수신 사실을 부인할 수 없도록 송·수신 증거를 제공함</li></ul></li></ul></li><li><button type="button" class="red">시큐어 코딩</button>(<button type="button">Secure Coding</button>)<ul><li>구현 단계에서 발생할 수 있는 보안 취약점들을 최소화하기 위해 <b>보안 요소들을 고려하며 코딩하는 것</b>을 의미함</li><li>보안 취약점을 사전 대응하여 안정성과 신뢰성을 확보함</li><li>보안 정책을 바탕으로 시큐어 코딩 가이드를 작성하고, 개발 참여자에게는 시큐어 코딩 교육을 실시함</li></ul></li></ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">110 입력 데이터 검증 및 표현</b></h2>
    <ul><li>입력 데이터로 인해 발생하는 문제들을 예방하기 위해 구현 단계에서 검증해야하는 보안 점검 항목들</li><li><b>보안 약점</b><ul><li><button type="button">SQL 삽입(Injection)</button><ul><li>웹 응용 프로그램에 SQL을 삽입하여 내부 데이터베이스(DB) 서버의 데이터를 유출 및 변조하고, 관리자 인증을 우회하는 보안 약점</li><li>동적 쿼리에 사용되는 입력 데이터에 예약어 및 특수문자가 입력되지 않게 필터링 되도록 설정하여 방지할 수 있음</li></ul></li><li><button type="button">경로 조작 및 자원 삽입</button><ul><li>데이터 입출력 경로를 조작하여 서버 자원을 수정·삭제할 수 있는 보안 약점</li><li>사용자 입력값을 식별자로 사용하는 경우, 경로 순회 공격을 막는 필터를 사용하여 방지할 수 있음</li></ul></li><li><button type="button">크로스사이트스크립팅</button><ul><li>웹페이지에 악의적인 스크립트를 삽입하여 방문자들의 정보를 탈취하거나, 비정상적인 기능 수행을 유발하는 보안 약점</li><li>HTML 태그의 사용을 제한하거나 스크립트에 삽입되지 않도록 '<', '>', '&'등의 문자를 다른 문자로 취환함으로써 방지할 수 있음</li></ul></li><li><button type="button">운영체제 명령어 삽입</button><ul><li>외부 입력값을 통해 시스템 명령어의 실행을 유도함으로써 권한을 탈취하거나 시스템 장애를 유발하는 보안 약점</li><li>웹 인터페이스를 통해 시스템 명령어가 전달되지 않도록 하고, 외부 입력값을 검증 없이 내부 명령어로 사용하지 않음으로써 방지할 수 있음</li></ul></li><li><button type="button">위험한 형식 파일 업로드</button><ul><li>악의적인 명령어가 포함된 스크립트 파일을 업로드함으로써 시스템에 손상을 주거나, 시스템을 제어할 수 있는 보안 약점</li><li>업로드 되는 파일의 확장자 제한, 파일명의 암호화, 웹사이트와 파일 서버의 경로 분리, 실행 속성을 제거하는 등의 방법으로 방지할 수 있음</li></ul></li><li><button type="button">신뢰되지 않는 URL주소로 자동접속 연결</button><ul><li>입력 값으로 사이트 주소를 받는 경우 이를 조작하여 방문자를 피싱 사이트로 유도하는 보안 약점</li><li>연결되는 외부 사이트의 주소를 화이트 리스트로 관리함으로써 방지할 수 있음</li></ul></li><li><button type="button">메모리 버퍼 오버플로</button><ul><li>연속된 메모리 공간을 사용하는 프로그램에서 할당된 메모리의 범위를 넘어선 위치에서 자료를 읽거나 쓰려고 할 때 발생하는 보안 약점</li><li>메모리 버퍼를 사용할 경우 적절한 버퍼의 크기를 설정하고, 설정된 범위의 메모리 내에서 올바르게 읽거나 쓸 수 있도록 함으로써 방지할 수 있음</li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title">111 보안 기능</h2>
    <ul><li>소프트웨어 개발의 구현 단계에서 코딩하는 기능인 인증, 접근 제어, 기밀성, 암호화 등을 올바르게 구현하기 위한 보안 점검 항목들임</li><li><b>보안 약점</b><ul><li><button type="button">적절한 인증없이 중요기능 허용</button><ul><li>보안검사를 우회하여 인증과정 없이 중요한 정보 또는 기능에 접근 및 변경이 가능함</li><li>중요정보나 기능을 수행하는 페이지에서는 재인증 기능을 수행하도록 하여 방지할 수 있음</li></ul></li><li><button type="button">부적절한 인가</button><ul><li>접근제어 기능이 없는 실행경롤르 통해 정보 또는 권한을 탈취할 수 있음</li><li>모든 실행경로에 대해 접근제어 검사를 수행하고, 사용자에게는 반드시 필요한 접근 권한만을 부여하여 방지할 수 있음</li></ul></li><li><button type="button">중요한 자원에 대한 잘못된 권한 설정</button><ul><li>권한 설정이 잘못된 자원에 접근하여 해당 자원을 임의로 사용할 수 있음</li><li>소프트웨어 관리자만 자원들을 읽고 쓸 수 있도록 설정하고, 인가되지 않은 사용자의 중요 자원에 대한 접근 여부를 검사함으로써 방지할 수 있음</li></ul></li><li><button type="button">취약한 암호화 알고리즘 사용</button><ul><li>암호화된 환경설정 파일을 해독하여 비밀번호 등의 중요정보를 탈취할 수 있음</li><li>안전한 암호화 알고리즘을 이용하고, 업무관련 내용이나 개인 정보 등에 대해서는 IT 보안인증사무국이 안정성을 확인한 암호모듈을 이용함으로써 방지할 수 있음</li></ul></li><li><button type="button">중요정보 평문 저장 및 전송</button><ul><li>암호화되지 않은 평문 데이터를 탈취하여 중요한 정보를 획득할 수 있음</li><li>중요한 정보를 저장하거나 전송할 때는 반드시 암호화 과정을 거치도록 하고, HTTPS 또는 SSL과 같은 보안 채널을 이용함으로써 방지할 수 있음</li></ul></li><li><button type="button">하드코드 된 암호화 키</button><ul><li>암호화된 키도 하드코드된 경우 유출 시 역계산 또는 무차별 대입 공격에 의해 탈취될 수 있음</li><li>상수 형태의 암호키를 사용하지 않고, 암호화 키 생성 모듈 또는 보안이 보장된 외부 공간을 이용함으로써 방지할 수 있음</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">112</h2>
    <ul><li><button type="button" class="red">코드 오류</button><ul><li>소프트웨어 구현 단계에서 개발자들이 코딩 중 실수하기 쉬운 형(Type) 반환, 자원 반환 등의 오류를 예방하기 위한 보안 점검 항목들임</li><li><b>보안 약점</b><ul><li><button type="button">널 포인터(Null Pointer)역참조</button><ul><li>널 포인터가 가리키는 메모리의 위치에 값을 저장할 때 발생하는 보안 약점</li><li>포인터를 이용하기 전에 널 값을 갖고 있는지 검사함으로써 방지할 수 있음</li></ul></li><li><button type="button">부적절한 자원 해제</button><ul><li>자원을 반환하는 코드를 누락하거나 프로그램 오류로 할당된 자원을 반환하지 못했을 때 발생하는 보안 약점</li><li>프로그램 내에 자원 반환 코드가 누락되었는지 확인하고, 오류로 인해 함수가 중간에 종료되었을 때 예외처리에 관계없이 자원이 반환되도록 코딩함으로써 방지할 수 있음</li></ul></li><li><button type="button">해제된 자원 사용</button><ul><li>이미 사용이 종료되어 반환된 메모리를 참조하는 경우 발생하는 보안 약점</li><li>반환된 메모리에 접근할 수 없도록 주소를 저장하고 있는 포인터를 초기화함으로써 방지할 수 있음</li></ul></li><li><button type="button">초기화되지 않은 변수 사용</button><ul><li>변수 선언 후 값이 부여되지 않은 변수를 사용할 때 발생하는 보안 약점</li><li>변수 선언 시 할당된 메모리를 초기화함으로써 방지할 수 있음</li></ul></li></ul></li></ul></li><li><button type="button" class="red">스택 가드</button>(<button type="button">Stack Guard</button>)<ul><li>널 포인터 역참조와 같이 <b>주소가 저장되는 스택에서 발생하는 보안 약점을 막는 기술 중 하나</b></li><li>메모리상에서 프로그램의 복귀 주소와 변수 사이에 특정 값을 저장한 후 그 값이 변경되었을 경우 오버플로우 상태로 판단하여 프로그램 실행을 중단함으로써 잘못된 복귀 주소의 호출을 막음</li></ul></li></ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title">113</h2>
    <ul><li><button type="button" class="red">캡슐화</button>(<button type="button">Encapsulation</button>)<ul><li>정보 은닉이 필요한 중요한 데이터와 기능을 불완전하게 캡슐화하거나 잘못 사용함으로써 발생할 수 있는 문제를 예방하기 위한 보안 점검 항목</li><li><b>보안 약점</b><ul><li><button type="button">잘못된 세션에 의한 정보 노출</button><ul><li>다중 스레드(Multi-Thread) 환경에서 멤버 변수에 정보를 저장할 때 발생하는 보안 약점</li><li>멤버 변수보다 지역 변수를 활용하여 변수의 범위를 제한함으로써 방지할 수 있음</li></ul></li><li><button type="button">제거되지 않고 남은 디버그 코드</button><ul><li>개발 중에 버그 수정이나 결과값 확인을 위해 남겨둔 코드들로 인해 발생하는 보안 약점</li><li>소프트웨어 배포 전에 코드 검사를 수행하여 남아있는 디버그 코드를 삭제함으로써 방지할 수 있음</li></ul></li><li><button type="button">시스템 데이터 정보 노출</button><ul><li>시스템의 내부 정보를 시스템 메시지 등을 통해 외부로 출력하도록 코딩헀을 때 발생하는 보안 약점</li><li>노출되는 메시지에는 최소한의 정보만을 제공함으로써 방지할 수 있음</li></ul></li><li><button type="button">Public 메소드로부터 반환된 Private 배열</button><ul><li>선언도니 클래스 내에서만 접근이 가능한 Private 배열을 모든 클래스에서 접근이 가능한 Public 메소드에서 반환할 때 발생하는 보안 약점</li><li>Private 배열을 별도의 메소드를 통해 조작하거나, 동일한 형태의 복제본으로 반환받은 후 값을 전달하는 방식으로 방지할 수 있음</li></ul></li><li><button type="button">Private 배열에 Public 데이터 할당</button><ul><li>Private 배열에 Public으로 선언된 데이터 또는 메소드의 파라미터를 저장할 떄 발생하는 보안 약점</li><li>Public으로 선언된 데이터를 Private 배열에 저장할 때, 레퍼런스가 아닌 값을 직접 저장함으로써 방지할 수 있음</li></ul></li></ul></li><li><button type="button">접근 제어자</button><ul><li>프로그래밍 언어에서 특정 개체를 선언할 때 외부로부터의 접근을 제한하기 위해 사용되는 예약어</li><li><b>종류(접근 가능✅. 접근 불가능❌)</b><ul><li><button type="button" class="code">Public</button> : 클래스 내부✅, 패키지 내부✅, 하위 클래스✅, 패키지 외부✅</li><li><button type="button" class="code">Protected</button> : 클래스 내부✅, 패키지 내부✅, 하위 클래스✅, 패키지 외부❌</li><li><button type="button" class="code">Default</button> : 클래스 내부✅, 패키지 내부✅, 하위 클래스❌, 패키지 외부❌</li><li><button type="button" class="code">Private</button> : 클래스 내부✅, 패키지 내부❌, 하위 클래스❌, 패키지 외부❌<br/></li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub6">
    <h2 class="sub-title"><b class="red">114</b></h2>
    <ul><li><button type="button" class="red">암호 알고리즘</button><ul><li>패스워드, 주민번호, 은행계좌와 같은 중요 정보를 보호하기 위해 평문을 암호화된 문장으로 만드는 절차 또는 방법</li><li><b>암호 방식 분류</b><ul><li><button type="button" class="red">양방향</button><ul><li><button type="button">개인 암호화(Private Key Encryption) 기법</button><ul><li>= <button type="button">대칭 암호 기법</button> = <button type="button">단일키 암호화 기법</button></li><li><b>동일한 키로 데이터를 암호화하고 복호화하는 암호화기법</b></li><li>암호화/복호화 속도가 빠르지만, 관리해야 할 키의 수가 많음</li><li><b>종류</b><ul><li><button type="button" class="red">Stream 암호화 방식</button><ul><li>평문과 동일한 길이의 스트림을 생성하여 비트 단위로 암호화 하는 방식</li><li><b>종류</b><ul><li><button type="button">LFSR</button></li><li><button type="button">RC4</button></li><li><button type="button">TKIP(Temporal Key Integrity Protocol)</button><ul><li>= <button type="button">임시 키 무결성 프로토콜</button></li><li>무선랜 보안에 사용된 WEP을 보완한 데이터 보안 프로토콜</li><li>WEP의 취약성을 보완하기 위해 암호 알고리즘의 입력 키 길이를 128비트로 늘리고 패킷당 키 할당, 키값 재설정 등 키 관리 방식을 개선함</li></ul></li></ul></li></ul></li><li><button type="button" class="red">Block 암호화 방식</button><ul><li>한 번에 하나의 데이터 블록을 암호화 하는 방식</li><li><b>종류</b><ul><li><button type="button">SEED</button><ul><li>199년 한국인터넷진흥원(KISA)에서 개발한 블록 암호화 알고리즘</li><li>블록 크기 128비트. 키 길이에 따라 128, 256으로 분류됨</li></ul></li><li><button type="button">ARIA</button><ul><li>2004년 국가 정보원과 산학연협회가 개발한 블록 암호화 알고리즘</li></ul></li><li><button type="button">DES(Data Encryption Standard)</button><ul><li>1975년 미국 NBS(미국 표준 기술 연구소(NIST)의 과거 이름)에서 발표한 개인키 암호화 알고리즘</li><li>블록 크기 64 비트. 키 길이 56비트. 16회의 라운드를 수행함</li><li>DES를 3번 적용하여 보안을 더욱 강화한 3DES(Triple DES)도 있음</li><li>컴퓨터 기술이 발달함에 따라 해독이 쉬워지면서 미국의 국가 표준이 2001년 AES로 대체됨</li></ul></li><li><button type="button">AES(Advanced Encryption Standard)</button><ul><li>2001년 미국 표준 기술 연구소(NIST)에서 발표한 개인키 암호화 알고리즘</li><li>DES의 한계를 느낀 NIST에서 공모한 후 발표</li><li>블록 크기는 128비트이며, 키 길이에 따라 AES-128, AES-192, AES-256으로 분류됨</li></ul></li><li><button type="button">IDEA(International Data Encryption Algorithm)</button><ul><li>스위스의 라이(Lai)와 메시(Messey)가 1990년에 개발한 PES를 개선한 알고리즘</li><li>블록 크기 64비트. 키 길이 128비트</li></ul></li><li><button type="button">Skipjack</button><ul><li>국가 안전 보장국(NSA)에서 개발한 암호화 알고리즘</li><li>클리퍼 칩(Clipper Chip)이라는 IC 침에 내장되어 있음</li><li>블록 크기 64비트. 키 길이 80비트</li><li>주로 음성 통신 장비에 삽입되어 음성 데이터를 암호화함</li></ul></li></ul></li></ul></li></ul></li></ul></li><li><button type="button">공개키 암호화(Public Key Encryption) 기법</button><ul><li>= <button type="button">비대칭 암호 기법</button></li><li>데이터를 암호화할 때 사용하는 공개키(Public Key)는 사용자에게 공개하고, 복호화할 때의 비밀키(Secret Key)는 관리자가 비밀리에 관리하는 암호화 기법</li><li>관리해야 할 키의 수가 적지만, 암호화/복호화 속도가 느림</li><li>대표적 : <button type="button" class="red">RSA(Rivest Shamir Adleman) 기법</button><ul><li>1978년 MIT의 라이베스트(Rivest), 샤미르(Shamir), 애들먼(Adelman)에 의해 제안된 공개키 암호화 알고리즘</li><li>클 숫자를 소인수분해 하기 어렵다는 것에 기반하여 만들어짐</li></ul></li></ul></li></ul></li></ul></li><li><button type="button" class="red">단방향</button><ul><li><button type="button">HASH</button><ul><li>임의의 길이의 입력 데이터나 메시지를 고정된 길이의 값이나 키로 변환하는 것</li><li>해시 알고리즘을 <button type="button">해시 함수</button>라고 부르며, 해시 함수로 변환된 값이나 키를 <button type="button">해시값</button> 또는 <button type="button">해시키</button>라고 부름</li><li>데이터의 암호화, 무결성 검증을 위해 사용될 뿐만 아니라 정보보호의 다양한 분야에서 활용됨</li><li><b>종류</b><ul><li><button type="button">SHA 시리즈</button><ul><li>1993년 미국 국가안보국(NSA)이 설계, 미국 국립표준기술 연구소(NIST)에 의해 발표됨</li><li>초기 개발된 SHA-0 이후 SHA-1이 발표되었고, 다시 SHA-2라 불리는 SHA-224, SHA-256, SHA-384, SHA-512가 발표됨</li></ul></li><li><button type="button">MD5(Message Digest Algorithm 5)</button><ul><li>1991년 R.Rivest가 MD4를 대체하기 위해 고안한 암호화 해시 함수</li><li>블록 크기 512비트, 키 길이 128비트</li></ul></li><li><button type="button">N-NASH</button><ul><li>1989년 일본의 전신전화주식회사(NTT)에서 발표한 암호화 해시 함수</li><li>블록 크기와 키 길이가 모두 128비트</li></ul></li><li><button type="button">SNEFRU</button><ul><li>1990년 R.C.Merkle가 발표한 해시 함수</li><li>32비트 프로세서에서 구현을 용이하게 할 목적으로 개발됨<br/>                    </li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul>
</article>
`;

export default post;