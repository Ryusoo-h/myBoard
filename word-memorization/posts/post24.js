
const post = `
<h1 class="title">정처기 실기 7.애플리케이션 테스트 관리1</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-14</span>
    <span class="modification-date">수정일 : 2023-07-14</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B091 애플리케이션 테스트</mark>
    <br><mark>B092 애플리케이션 테스트의 분류</mark>
    <br><mark>A093 테스트 기법에 따른 애플리케이션 테스트</mark>
    <br><mark>A094 개발 단계에 따른 애플리테이션 테스트</mark>
    <br><mark>A095 통합 테스트</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">091</b></h2>
    <ul><li><b>애플리케이션 테스트</b><ul><li>애플리케이션에 잠재되어 있는 결함을 찾아내는 일련의 행위 또는 절차</li><li>개발된 소프트웨어가 고객의 요구사항을 만족시키는지 확인(Validation)하고 소프트웨어가 기능을 정확히 준수하는지 검증(Verification)함</li><li><b>기본 원리</b><ul><li><button type="button" class="red">완벽한 테스트 불가능</button> : 소프트웨어의 잠재적인 결함을 줄일 수 있지만 소프트웨어에 결함이 없다고 증명할 수는 없음</li><li><button type="button" class="red">파레토 법칙</button>(<button type="button">Pareto Principle</button>) : 애플리케이션의 20%에 해당하는 코드에서 전체 결함의 80%가 발견된다는 법칙</li><li><button type="button" class="red">살충제 패러독스</button>(<button type="button">Pesticide Paradox</button>) : 동일한 테스트 케이스로 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 현상</li><li><button type="button" class="red">테스팅은 정황(Context) 의존</button> : 소프트웨어의 특징, 테스트 환경, 테스터의 역량 등 정황(Context)에 따라 테스트 결과가 달라질 수 있으므로, 정황에 따라 테스트를 다르게 수행해야 함</li><li><button type="button" class="red">오류-부재의 궤변</button>(<button type="button">Absence of Errors Fallacy</button>) : 소프트웨어의 결함을 모두 제거해도 사용자의 요구사항을 만족시키지 못하면 해당 소프트웨어는 품질이 높다고 말할 수 없는 것</li><li><button type="button" class="red">테스트와 위험은 반비례</button> : 테스트를 많이 하면 할수록 미래에 발생할 위험을 줄일 수 있음</li><li><button type="button" class="red">테스트의 점진적 확대</button> : 테스트는 작은 부분에서 시작하여 점점 확대하며 진행해야 함</li><li><button type="button" class="red">테스트의 별도 팀 수행</button> : 테스트는 개발자와 관계없는 별도의 팀에서 수행해야 함</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">092</b></h2>
<ul><li><b>애플리케이션 테스트의 분류</b><ul><li><b>프로그램 실행 여부에 따른 테스트</b><ul><li><button type="button">정적 테스트</button><ul><li>프로그램을 실행하지 않고 명세서나 소스 코드를 대상으로 분석하는 코드</li><li>소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도, 남은 결함 등을 발견하기 위해 사용함</li><li>종류 : <button type="button" class="not-hidden">워크스루</button>, <button type="button" class="not-hidden">인스펙션</button>, <button type="button" class="not-hidden">코드 검사</button> 등</li></ul></li><li><button type="button">동적 테스트</button><ul><li>프로그램을 실행하여 오류를 찾는 테스트</li><li>소프트웨어 개발의 모든 단계에서 테스트를 수행함</li><li>종류 : <button type="button" class="not-hidden">블랙박스 테스트</button>, <button type="button" class="not-hidden">화이트박스 테스트</button></li></ul></li></ul></li><li><b>테스트 기반(Test Bases)에 따른 테스트</b><ul><li><button type="button">명세 기반 테스트</button><ul><li>사용자의 요구사항에 대한 명세를 빠짐없이 테스트 케이스로 만들어 구현하고 있는지 확인한는 테스트</li><li>종류 : 동등 분할, 경계 값 분석 등</li></ul></li><li><button type="button">구조 기반 테스트</button><ul><li>소프트웨어 내부의 논리 흐름에 따라 테스트 케이스를 작성하고 확인하는 테스트</li><li>종류 : 구문 기반, 결정 기반, 조건 기반 등</li></ul></li><li><button type="button">경험 기반 테스트</button><ul><li>유사 소프트웨어나 기술에 대한 테스터의 경험을 기반으로 수행하는 테스트</li><li>사용자의 요구사항에 대한 명세가 불충분하거나 테스트 시간에 제약이 있는 경우 수행하면 효과적임</li><li>종류 : 에러 추정, 체크 리스트, 탐색적 테스팅</li></ul></li></ul></li><li><b>시각에 따른 테스트</b><ul><li><button type="button">검증(Verification) 테스트</button><ul><li>개발자의 시각에서 제품의 생산 과정을 테스트하는 것</li><li>제품이 명세서대로 완성됐는지를 테스트함</li></ul></li><li><button type="button">확인(Validation) 테스트</button><ul><li>사용자의 시각에서 생산된 제품의 결과를 테스트 하는것</li><li>사용자가 요구한대로 제품이 완성됐는지, 제품이 정상적으로 동작하는지를 테스트함</li></ul></li></ul></li><li><b>목적에 따른 테스트</b><ul><li><button type="button">회복(Recovery)테스트</button> : 시스템에 여러 가지 결함을 주어 실패하도록 한 후 올바르게 복구되는지를 확인하는 테스트</li><li><button type="button">안전(Security)테스트</button> : 시스템에 설치된 시스템 보호 도구가 불법적인 침입으로부터 시스템을 보호할 수 있는지를 확인하는 테스트</li><li><button type="button">강도(Stress)테스트</button> : 시스템에 과도한 정보량이나 빈도 등을 부과하여 과부하 시에도 소프트웨어가 정상적으로 실행되는지를 확인하는 테스트</li><li><button type="button">성능(Perfomance)테스트</button> : 소프트웨어의 실시간 성능이나 전체적인 효율성을 진단하는 테스트. 소프웨어의 응답 시간, 처리량 등을 테스트</li><li><button type="button">구조(Structure)테스트</button> : 소프트웨어 ㅐㄴ부의 논리적인 경로, 소스 코드의 복잡도 등을 평가하는 테스트</li><li><button type="button">회귀(Regression)테스트</button> : 소프트웨어의 변경 또는 수정된 코드에 새로운 결함이 없음을 확인하는 테스트</li><li><button type="button">병행(Parallel)테스트</button> : 변경된 소프트웨어와 기존 소프트웨어에 동일한 데이터를 입력하여 결과를 비교하는 테스트</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">093 테스트 기법에 따른 애플리케이션 테스트</b></h2>
<ul><li><button type="button" class="red">화이트박스 테스트</button>(<button type="button">White Box Test</button>)<ul><li>모듈의 원시 코드를 오픈시킨 상태에서 <b>원시코드의 논리적인 모든 경로를 테스트하여 테스트 케이스를 설계하는 방법</b></li><li>모듈 안의 작동을 직접 관찰함</li><li>원시코드(모듈)의 모든 문장을 한 번 이상 실행함로써 수행됨</li><li><b>종류</b><ul><li><button type="button" class="red">기초 경로 검사</button>(<button type="button">Base Path Testing</button>)<ul><li>테스트 케이스 설계자가 절차적 설계의 논리적 복잡성을 측정할 수 있게 해주는 테스트 기법</li><li>대표적인 화이트박스 테스트 기법</li></ul></li><li><button type="button" class="red">제어 구조 검사</button>(<button type="button">Control Structure Testing</button>)<ul><li><button type="button" class="red">조건 검사</button>(<button type="button">Contdition Testing</button>) : 프로그램 모듈 내에 있는 논리적 조건을 테스트하는 테스트 케이스 설계 기법</li><li><button type="button" class="red">루프 검사</button>(<button type="button">Loop Testing</button>) : 프로그램의 반복(Loop) 구조에 초점을 맞춰 실시하는 테스트 케이스 설계 기법</li><li><button type="button" class="red">데이터 흐름 검사</button>(<button type="button">Data Flow Testing</button>) : 프로그램에서 변수의 정의와 변수 사용의 위치에 초점을 맞춰 실시하는 테스트 케이스 설계 기법</li></ul></li></ul></li><li><b>검증 기준</b><ul><li><button type="button" class="red">문장 검증 기준</button>(<button type="button">Statement Coverage</button>) : 소스 코드의 모든 구문이 한 번 이상 수행되도록 테스트 케이스를 설계함</li><li><button type="button" class="red">분기 검증 기준</button>(<button type="button">Branch Coverage</button>) = <button type="button" class="red">결정 검증 기준</button>(<button type="button">Decision Coverage</button>) : 소스 코드의 <b>모든 조건문에 대해 조건식의 결과가</b> True인 경우와 False인 경우가 한 번 이상 수행되도록 테스트 케이스를 설계함</li><li><button type="button" class="red">조건 검증 기준</button>(<button type="button">Condition Coverage</button>) : 소스 코드의 조건문에 포함된 <b>개별 조건식의 결과가</b> True 인 경우와 False인 경우가 한 번 이상 수행되도록 테스트 케이스를 설계함</li><li><button type="button" class="red">분기/조건 검증 기준</button>(<button type="button">Branch/Condition Coverage</button>) : 분기 검증 기준과 조건 검증 기준을 모두 만족하는 설계로, 조건문이 True인 경우와 False인 경우에 따라 조건 검증 기준의 입력 데이터를 구분하는 테스트 케이스를 설계함</li></ul></li></ul></li><li><button type="button" class="red">블랙박스 테스트</button>(<button type="button">Black Box Test</button>) = <button type="button" class="red">기능 테스트</button><ul><li>소프트웨어가 수행할 특정 기능을 알기 위해서 각 기능이 완전히 작동되는 것을 입증하는 테스트</li><li>사용자의 요구사항 명세를 보면서 테스트함</li><li>주로 구현된 기능을 테스트함</li><li>소프트웨어 인터페이스를 통해 실시됨</li><li><b>종류</b><ul><li><button type="button" class="red">동치 분할 검사</button>(<button type="button">Equivalence Partitioning Testing</button>) = <button type="button" class="red">동치 클래스 분해</button> = <button type="button" class="red">동등 분할 기법</button><ul><li>프로그램의 입력 조건에 타당한 입력 자료와 타당하지 않은 입력 자료의 개수를 균등하게 하여 테스트 케이스를 정하고, 해당 입력자료에 맞는 결과가 출력되는지 확인하는 기법</li></ul></li><li><button type="button" class="red">경계값 분석</button>(<button type="button">Boundary Value Analysis</button>)<ul><li>입력 조건의 중간값보다 경계값에서 오류가 발생될 확률이 높다는 점을 이용하여 입력 조건의 경계값을 테스트 케이스로 선정하여 검사하는 기법</li></ul></li><li><button type="button" class="red">원인-효과 그래프 검사</button>(<button type="button">Cause-Effect Graphing Testing</button>)<ul><li>입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사하는 기법</li></ul></li><li><button type="button" class="red">오류 예측 검사</button>(<button type="button">Error Guessing</button>)<ul><li>과거의 경험이나 확인자의 감각으로 테스트하는 기법</li></ul></li><li><button type="button" class="red">비교 검사</button>(<button type="button">Comparison Testing</button>)<ul><li>여러 버전의 프로그램에 동일한 테스트 자료를 제공하여 동일한 결과가 출력되는지 테스트하는 기법</li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">094</b></h2>
    <ul><li><b>개발 단계에 따른 애플리케이션 테스트</b><ul><li>소프트웨어의 개발 단계에 따라 단위 테스트, 통합 테스트, 시스템 테스트, 인수 테스트로 분류됨</li><li>분류된것을 <button type="button">테스트 레벨</button>이라고 함</li><li><button type="button" class="not-hidden">애플리케이션 테스트</button>와 <button type="button" class="not-hidden">소프트웨어 개발 단계</button>를 연결하여 표현한것을 <button type="button">V-모델</button>이라고 함<ul><li><b>소프트웨어 개발 단계</b> : <button type="button" class="not-hidden">요구사항</button> → <button type="button" class="not-hidden">분석</button> → <button type="button" class="not-hidden">설계</button> → <button type="button" class="not-hidden">구현</button></li><li><b>테스트 단계</b> : <button type="button" class="not-hidden">단위 테스트</button> → <button type="button" class="not-hidden">통합 테스트</button> → <button type="button" class="not-hidden">시스템 테스트</button> → <button type="button" class="not-hidden">인수 테스트</button></li></ul></li><li><button type="button" class="red">단위 테스트</button>(<button type="button">Unit Test</button>)<ul><li>코딩 직후 소프트웨어 설계의 최소 단위인 <b>모듈이나 컴포넌트에 초점을 맞춰 테스트하는 것</b></li><li>인터페이스, 외부적 I/O, 자료 구조, 독립적 기초 경로, 오류 처리 경로, 경계 조건 등을 검사함</li><li>사용자의 요구사항을 기반으로 한 기능성 테스트를 최우선으로 수행함</li><li>구조 기반 테스트와 명세 기반 테스트로 나뉘지만 주로 구조 기반 테스트를 시행함</li></ul></li><li><button type="button" class="red">통합 테스트</button>(<button type="button">Integration Test</button>)<ul><li><b>단위 테스트가 완료된 모듈들을 결합하여 하나의 시스템으로 완성시키는 과정에서의 테스트를 의미함</b></li><li>모듈 간 또는 통합된 컴포넌트 간의 상호 작용 오류를 검사함</li></ul></li><li><button type="button" class="red">시스템 테스트</button>(<button type="button">System Test</button>)<ul><li><b>개발된 소프트웨어가 해당 컴퓨터 시스템에서 완벽하게 수행되는가를 점검하는 테스트</b></li><li>기능적 요구사항과 비기능적 요구사항으로 구분하여 각각을 만족하는지 테스트함</li></ul></li><li><button type="button" class="red">인수 테스트</button>(<button type="button">Acceptance Test</button>)<ul><li>개발한 소프트웨어가 사용자의 요구사항을 충족하는지에 중점을 두고 테스트하는 방법</li><li>개발한 소프트웨어를 사용자가 직접 테스트함</li><li><b>종류</b><ul><li><button type="button">사용자 인수 테스트</button><ul><li>사용자가 시스템 사용의 적절성 여부를 확인함</li></ul></li><li><button type="button">운영상의 인수 테스트</button><ul><li>시스템 관리자가 시스템 인수 시 수행하는 테스트 기법</li><li>백업/복원 시스템, 재난 복구, 사용자 관리, 정기 점검 등을 확인함</li></ul></li><li><button type="button">계약 인수 테스트</button><ul><li>계약상의 인수/검수 조건을 준수하는지 여부를 확인함</li></ul></li><li><button type="button">규정 인수 테스트</button><ul><li>소프트웨어가 정부 지침, 법규, 규정 등 규정에 맞게 개발되었는지 확인함</li></ul></li><li><button type="button">알파 테스트</button><ul><li>개발자의 장소에서 사용자가 개발자 앞에서 행하는 테스트 기법</li><li>테스트는 통제된 환경에서 행해지며, 오류와 사용상의 문제점을 사용자와 개발자가 함께 확인하면서 기록함</li></ul></li><li><button type="button">베타 테스트</button><ul><li>선정된 최종 사용자가 여러 명의 사용자 앞에서 행하는 테스트 기법</li><li>실업무를 가지고 사용자가 직접 테스트</li></ul></li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title"><b class="red">095</b></h2>
    <ul><li><button type="button" class="red">통합 테스트</button>(<button type="button">Integration Test</button>)<ul><li><button type="button" class="not-hidden">단위 테스트</button>가 끝난 모듈을 통합하는 과정에서 발생하는 오류 및 결함을 찾는 테스트 기법</li><li><b>종류</b><ul><li><button type="button" class="red">비점진적 통합 방식</button><ul><li>단계적으로 통합하는 절차 없이 모든 모듈이 미리 결합되어 있는 프로그램 전체를 테스트하는 방법</li><li><b>종류</b> : <button type="button">빅뱅 통합 테스트 방식</button></li></ul></li><li><button type="button" class="red">점진적 통합 방식</button><ul><li>모듈 단위로 단계적으로 통합하면서 테스트하는 방법</li><li><b>종류</b> : <button type="button">하향식 통합 테스트</button>, <button type="button">상향식 통합 테스트</button>, <button type="button">혼합식 통합 테스트</button></li></ul></li></ul></li></ul></li><li><button type="button" class="red">하향식 통합 테스트</button>(<button type="button">Top Down Integration Test</button>)<ul><li><b>프로그램의 상위 모듈에서 하위 모듈 방향으로 통합하면서 테스트하는 기법</b></li><li>깊이 우선 통합법이나 넓이 우선 통합법을 사용함</li><li><b>절차</b><ol><li>주요 제어 모듈은 작성된 프로그램을 사용하고, 주요 제어 모듈의 종속 모듈들은 <button type="button">스텁(Stub)</button>으로 대체함</li><li><button type="button" class="not-hidden">깊이 우선</button> 또는 <button type="button" class="not-hidden">넓이 우선</button> 등의 통합 방식에 따라 하위 모듈인 스텁들이 한 번에 하나씩 실제 모듈로 교체됨</li><li>모듈이 통합될 때마다 테스트 실시</li><li>새로운 오류가 발생하지 않음을 보증하기 위해 <button type="button" class="not-hidden">회귀 테스트</button> 실시<ul><li><button type="button" class="not-hidden">회기 테스팅(Regression Testing)</button><ul><li><b>통합 테스트로 인해 변경된 모듈이나 컴포넌트에 새로운 오류가 있는지 확인하는 테스트</b></li><li>이미 테스트된 프로그램의 테스팅을 반복하는 것</li><li>회귀 테스트는 수정한 모듈이나 컴포넌트가 다른 부분에 영향을 미치는지, 오류가 생기지 않았는지 테스트하여 새로운 오류가 발생하지 않음을 보증하기 위해 반복 테스트 함</li></ul></li></ul></li></ol></li></ul></li><li><button type="button" class="red">상향식 통합 테스트</button>(<button type="button">Bottom Up Integration Test</button>)<ul><li><b>프로그램의 하위 모듈에서 상위 모듈 방향으로 통합하면서 테스트하는 기법</b></li><li><b>절차</b><ol><li>하위 모듈들을 <button type="button">클러스터(Cluster)</button>로 결합함</li><li>사위 모듈에서 데이터의 입·출력을 확인하기 위해 더미 모듈인 <button type="button">드라이버(Driver)</button>를 작성함</li><li>통합된 클러스터 단위로 테스트함</li><li>테스트가 완료되면 클러스터는 프로그램 구조의 상위로 이동하여 결합하고 드라이버는 실제 모듈로 대체됨</li></ol></li></ul></li><li><button type="button" class="red">혼합식 통합 테스트</button> = <button type="button" class="red">샌드위치(Sandwitch)식 통합 테스트 방법</button><ul><li>하위 수준에서는 상향식 통합, 상위 수준에서는 하향식 통합을 사용하여 최적의 테스트를 지원하는 방식</li></ul></li></ul>
</article>
`;

export default post;