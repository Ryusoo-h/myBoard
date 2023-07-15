
const post = `
<h1 class="title">정처기 실기 8.SQL 응용</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-15</span>
    <span class="modification-date">수정일 : 2023-07-15</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>A102 SQL-DDL</mark>
    <br><mark>A103 SQL-DCL</mark>
    <br><mark>A104 SQL-DML</mark>
    <br><mark>A105 DML-SELECT-1</mark>
    <br><mark>A106 DML-SELECT-2</mark>
    <br><mark>B107 DML-JOIN</mark>
    <br><mark>C108 트리거(Trigger)</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">102</b></h2>
    <ul><li><button type="button" class="red">DDL(Data Definition Language, 데이터 정의어)</button><ul><li>DB 구조, 데이터 형식, 접근 방식 등 <b>DB를 구축하거나 수정할 목적으로 사용하는 언어</b></li><li>번역한 결과가 데이터 사전(Data Dictionary)이라는 특별한 파일에 여러 개의 테이블로 저장됨</li><li><b>3가지 유형</b><ul><li><button type="button">CREATE</button> : SCHEMA, DOMAIN, TABLE, VIEW, INDEX를 정의함</li><li><button type="button">ALTER</button> : TABLE에 대한 정의를 변경하는 데 사용함</li><li><button type="button">DROP</button> : SCHEMA, DOMAIN, TABLE, VIEW, INDEX를 삭제함</li></ul></li><li><button type="button" class="red">CREATE SCHEMA</button><ul><li>스키마를 정의하는 명령문</li><li><b>표기 형식</b> <button class="code">CREATE SCHEMA <span class="text">스키마명</span> AUTHORIZATION <span class="text">사용자_id</span>;</button><br><span class="exam block">예제) 소유권자의 사용자 ID가 '홍길동'인 스키마 '대학교'를 정의하는 SQL문<br><button class="code">CREATE SCHEMA <span class="text">대학교</span> AUTHORIZATION <span class="text">홍길동</span></button></span></li></ul></li><li><button type="button" class="red">CREATE DOMAIN</button><ul><li>도메인을 정의하는 명령문</li><li><b>표기 형식</b> <button class="code">CREATE DOMAIN <span class="text">도메인명</span> [AS] <span class="text">데이터_타입</span><br>[DEFAULT <span class="text">기본값</span>] <br>[CONSTRAINT <span class="text">제약조건명</span> CHECK (<span class="text">범위값</span>)];</button><br><span class="exam block">예제) '성별'을 '남' 또는 '여'와 같이 정해진 1개의 문자로 표현되는 도메인 SEX를 정의하는 SQL문. 기본값 '남' <br><button class="code">CREATE DOMAIN <span class="text">SEX CHAR(1)</span> DEFAULT <span class="text">'남'</span> CONSTRAINT <span class="text">VALUE-SEX</span> CHECK(<span class="text">VALUE IN ('남', '여')</span>);</button></span></li></ul></li><li><button type="button" class="red">CREATE TABLE</button><ul><li>테이블을 정의하는 명령문</li><li>기본 테이블에 포함될 모든 속성에 대하여 속성명과 그 속성의 <b>데이터 타입, 기본값, NOT NULL</b> 여부를 지정함</li><li><b>표기 형식</b> <button class="code"><pre>CREATE TABLE <span class="text">테이블명</span><br/>    (<span class="text">속성명 데이터_타입</span> [DEFAULT <span class="text">기본값</span>][NOT NULL], ...<br/>    [, PRIMARY KEY(<span class="text">기본키_속성명, ...</span>)]<br/>    [, UNIQUE(<span class="text">대체키_속성명, ...</span>)]<br/>    [, FOREIGN KEY(<span class="text">외래키_속성명, ...</span>)]<br/>        REFERENCES <span class="text">참조테이블(기본키_속성명, ...)</span><br/>        [ON DELETE <span class="text">옵션</span>]<br/>        [ON UPDATE <span class="text">옵션</span>]<br/>    [, CONSTRAINT <span class="text">제약조건명</span>][CHECK (<span class="text">조건식</span>)]<br/>);<br/></pre></button><ul><li><code>PRIMARY KEY</code> : 기본키로 사용할 속성을 지정함</li><li><code>UNIQUE</code> : 대체키로 사용할 속성을 지정함. 중복된 값X</li><li><code>FOREIGN KEY ~ REFERENCES ~</code> : 외래키로 사용할 속성을 지정함<ul><li><code>ON DELETE</code> 옵션 : 참조 테이블의 튜플이 삭제되었을 때 기본 테이블에 취해야 할 사항 지정</li><li><code>ON UPDATE</code> 옵션 : 참조 테이블의 참조 속성 값이 변경되었을 때 기본 테이블에 취해야 할 사항 지정</li></ul></li><li><code>CONSTRAINT</code> : 제약 조건의 이름 지정</li><li><code>CHECK</code> : 속성 값에 대한 제약 조건 정의</li></ul></li><li><span class="exam block">예제) 책2 8페이지 참고</span></li></ul></li><li><button type="button" class="red">CREATE VIEW</button><ul><li><b>표기 형식</b> <button class="code"><pre>CREATE VIEW <span class="text">뷰명[(속성명[, 속성명, ...])]</span><br/>AS <span class="text">SELECT문</span></pre></button></li><li><span class="exam block">예제) 책2 8페이지 참고</span></li></ul></li><li><button type="button" class="red">CREATE INDEX</button><ul><li>인덱스 정의 명령문</li><li><b>표기 형식</b> <button class="code"><pre>CREATE [UNIQUE] INDEX <span class="text">인덱스명</span><br/>ON <span class="text">테이블명</span>(<span class="text">속성명</span> [ASC | DESC] [, <span class="text">속성명</span> [ASC | DESC]])<br/>[CLUSTER];<br/></pre></button><ul><li><code>UNIQUE</code><ul><li>사용된 경우 : 중복 값이 없는 속성으로 인덱스를 생성함</li><li>생략된 경우 : 중복 값을 허용하는 속성으로 인덱스를 생성함</li></ul></li><li>정렬 여부 지정<ul><li><code>ASC</code> : 오름차순 정렬</li><li><code>DESC</code> : 내림차순 정렬</li><li>생략된 경우 : 오름차순으로 정렬됨</li></ul></li><li><code>CRUSTER</code> : 사용하면 인덱스가 클러스터드 인덱스로 설정됨</li></ul></li><li><span class="exam block">예제) 책2 9페이지 참고</span></li></ul></li><li><button type="button" class="red">ALTER TABLE</button><ul><li>테이블에 대한 정의를 변경하는 명령문</li><li><b>표기 형식</b> <button class="code"><pre>ALTER TABLE <span class="text">테이블명</span> ADD <span class="text">속성명 데이터_타입</span> [DEFAULT <span class="text">'기본값'</span>];<br/>ALTER TABLE <span class="text">테이블명</span> ALTER <span class="text">속성명</span> [SET DEFAULT<span class="text">'기본값'</span>];<br/>ALTER TABLE <span class="text">테이블명</span> DROP COLUMN <span class="text">속성명</span> [DEFAULT <span class="text">'기본값'</span>];<br/></pre></button><ul><li><code>ADD</code> : 새로운 속성(열)을 추가할 때 사용</li><li><code>ALTER</code> : 특정 속성의 Default 값을 변경할 때 사용</li><li><code>DROP COLUMN</code> : 특정 속성을 삭제할 때 사용</li></ul></li><li><span class="exam block">예제) 책2 10페이지 참고</span></li></ul></li><li><button type="button" class="red">DROP</button><ul><li>스키마, 도메인, 기본 테이블, 뷰 테이블, 인덱스, 제약 조건 등을 제거하는 명령문</li><li><b>표기 형식</b> <button class="code"><pre>DROP SCHEMA <span class="text">스키마명</span> [CASCADE | RESTRICT];<br/>DROP DOMAIN <span class="text">도메인명</span> [CASCADE | RESTRICT];<br/>DROP TABLE <span class="text">테이블명</span> [CASCADE | RESTRICT];<br/>DROP VIEW <span class="text">뷰명</span> [CASCADE | RESTRICT];<br/>DROP INDEX <span class="text">인덱스명</span> [CASCADE | RESTRICT];<br/>DROP CONSTRAINT <span class="text">제약조건명</span>;<br/></pre></button><br/><ul><li><code>CASCADE</code> : 제거할 요소를 참조하는 다른 모든 개체를 함께 제거함</li><li><code>RESTRICT</code> : 다른 개체가 제거할 요소를 참조중일 때는 제거를 취소함</li></ul></li><li><span class="exam block">예제) 책2 10페이지 참고</span></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">103</b></h2>
    <ul><li><button type="button" class="red">DCL(Data Control Language, 데이터 제어어)</button><ul><li><b>데이터의 보안, 무결성, 회복, 병행 제어 등을 정의하는 데 사용하는 언어</b></li><li>데이터베이스 관리자(DBA)가 데이터 관리를 목적으로 사용함</li><li><b>종류</b><ul><li><button type="button">COMMIT</button> : 명령에 의해 수행된 결과를 실제 물리적 디스크로 저장하고, 데이터베이스 조작 작업이 정상적으로 완료되었음을 관리자에게 알려줌</li><li><button type="button">ROLLBACK</button> : 데이터베이스 조작 작업이 비정상적으로 종료되었을 때 원래의 상태로 복구함</li><li><button type="button">GRANT</button> : 데이터베이스 사용자에게 사용 권한을 부여함</li><li><button type="button">REVOKE</button> : 데이터베이스 사용자의 사용 권한을 취소함</li></ul></li><li><button type="button" class="red">GRANT/REVOKE</button><ul><li>데이터베이스 관리자가 데이터베이스 사용자에게 권한을 부여하거나 취소하기 위한 명령어</li><li>사용자등급 지정 및 해제<br/>            <button class="code">GRANT <span class="text">사용자 등급</span> TO <span class="text">사용자_ID_리스트</span>[IDENTIFIED BY <span class="text">암호</span>];<br>REVOKE <span class="text">사용자 등급</span> FROM <span class="text">사용자_ID_리스트</span>;</button></li><li><span class="exam block">예제) 책2 16, 17페이지 참고</span></li></ul></li><li><button type="button" class="red">COMMIT</button><ul><li>트랜잭션 처리가 정상적으로 완료된 후 <b>트랜잭션이 수행한 내용을 데이터베이스에 반영하는 명령</b></li><li>DML문이 성공적으로 완료되면 자동으로 <code>COMMIT</code>되고, DML이 실패하면 자동으로 <code>ROLLBACK</code>이 되도록 <button type="button">Auto Commit</button> 기능을 설정할 수 있음</li></ul></li><li><button type="button" class="red">ROLLBACK</button><ul><li><b>변경되었으나 아직 <code>COMMIT</code>되지 않은 모든 내용들을 취소하고 데이터베이스를 이전 상태로 되돌리는 명령어</b></li><li>트랜잭션 전체가 성공적으로 끝나지 못하면 일부 변경된 내용에만 데이터베이스에 반영되는 <button type="button" class="not-hidden">비일관성(Inconsistency) 상태</button>가 될 수 있기 때문에 일부분만 완료된 트랜잭션은 롤백(Roolback)되어야 함</li></ul></li><li><button type="button" class="red">SAVEPOINT</button><ul><li><b>트랜잭션 내에 <code>ROLLBACK</code>할 위치인 저장점을 지정하는 명령어</b></li><li>저장점을 지정할 때는 이름을 부여함</li><li><code>ROLLBACK</code>할 때 지정된 저장점까지의 트랜잭션 처리 내용이 모두 취소됨</li><li><span class="exam block">예제) 책2 18페이지 참고</span></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">104</b></h2>
    <ul><li><button type="button" class="red">DML(Data Manipulation Language, 데이터 조작어)</button><ul><li><b>데이터베이스 사용자가 저장된 데이터를 실질적으로 관리하는데 사용되는 언어</b></li><li>데이터베이스 사용자와 데이터베이스 관리 시스템 간의 인터페이스를 제공함</li><li><b>유형</b><ul><li><button type="button">SELECT</button> : 테이블에서 튜플을 검색함</li><li><button type="button">INSERT</button> : 테이블에 새로운 튜플을 삽입함</li><li><button type="button">DELETE</button> : 테이블에서 튜플을 삭제함</li><li><button type="button">UPDATE</button> : 테이블에서 튜플의 내용을 갱신함</li></ul></li><li><b>삽입문</b>(<button type="button" class="red">INSERT INTO ~</button>)<ul><li>기본 테이블에 새로운 튜플을 삽입할 때 사용</li><li><b>일반 형식</b> <button class="code">INSERT INTO <span class="text">테이블명(속성명1, 속성명2, ...)</span><br>VALUES <span class="text">(데이터1, 데이터2, ...)</span>;</button><ul><li>대응하는 속성과 데이터는 개수와 데이터 유형이 일치해야 함</li><li>기본 테이블의 모든 속성을 사용할 때는 속성명을 생략할 수 있음</li><li><code>SELECT문</code>을 사용하여 다른 테이블의 검색 결과를 삽입할 수 있음</li></ul></li></ul></li></ul></li><li><b>삭제문</b>(<button type="button" class="red">DELETE FROM ~</button>)<ul><li>기본 테이블에 있는 튜플들 중에서 특정 튜플(행)을 삭제할 떄 사용</li><li><b>일반 형식</b> <button class="code">DELETE<br>FROM <span class="text">테이블명</span><br>[WHERE <span class="text">조건</span>];</button><ul><li>모든 레코드를 삭제할 때는 <code>WEHRE절</code>을 생략함</li><li>모든 레코드를 삭제하더라도 테이블 구조는 남아 있기 때문에 디스크에서 테이블을 완전히 제거하는 <code>DROP</code>과는 다름</li></ul></li><li><span class="exam block">예제) 책2 26페이지 참고</span></li></ul></li><li><b>갱신문</b>(<button type="button" class="red">UPDATE ~ SET ~</button>)<ul><li>기본 테이블에 있는 튜플들 중에서 특정 튜플의 내용을 변경할 때 사용함</li><li><b>일반 형식</b> <button class="code">UPDATE <span class="text">테이블명</span><br>SET <span class="text">속성명 = 데이터[, 속성명=데이터, ...]</span><br>[WHERE <span class="text">조건</span>];</span></button></li><li><span class="exam block">예제) 책2 26페이지 참고</span><br/><br/></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">105</b></h2>
    <ul><li><button type="button" class="not-hidden">SELECT절</button><ul><li><button class="code">SELECT [PREDICATE] <span class="text">[테이블명.]속성명</span> [AS <span class="text">별칭</span>]<span class="text">[, [테이블명.]속성명]</span><br>FROM <span class="text">테이블명[, 테이블명, ...]</span><br>[WHERE <span class="text">조건</span>]<br>[GROUP BY <span class="text">속성명, 속성명, ...</span>]<br>[HAVING <span class="text">조건</span>]<br>[ORDER BY <span class="text">속성명</span> [ASC | DESC]];</button></li><li><code>PREDICATE</code> : 검색할 튜플 수를 제한하는 명령어 기술<ul><li><code>DISTINCT</code> : 중복된 튜플이 있으면 그 중 첫 번째 한 개만 표시함</li></ul></li><li><code>속성명</code> : 검색하여 불러올 속성(열) 또는 속성을 이용한 수식을 지정함</li><li><code>AS</code> : 속성이나 연산의 이름을 다른 이름으로 표시하기 위해 사용함</li><li><code>FROM절</code> : 검색할 데이터가 들어있는 테이블 이름을 기술함</li><li><code>WEHRE절</code> : 검색할 조건을 기술함</li><li><code>ORDER BY절</code> : 데이터를 정렬하여 검색할 때 사용함 (정렬방식 생략시 오름차순)<ul><li><code>속성명</code> : 정렬의 기준이 되는 속성명 기술</li><li><code>ASC</code> : 오름차순</li><li><code>DESC</code> : 내림차순</li></ul></li><li><b>조건 연산자</b><ul><li><b>비교 연산자</b> : <button class="code">=</button> 같다, <button class="code"><></button> 같지 않다, <button class="code">></button> 크다, <button class="code"><</button> 작다, <button class="code">>=</button> 크거나 같다, <button class="code"><=</button> 작거나 같다</li><li><b>논리 연산자</b> : <button class="code">NOT</button>, <button class="code">AND</button>, <button class="code">OR</button></li><li><b>LIKE 연산자</b> : 대표 문자를 이용해 지정된 속성의 값이 문자 패턴과 일치하는 튜플을 검색하기 위해 사용됨<ul><li><button class="code">%</button> : 모든 문자를 대표함</li><li><button class="code">_</button> : 문자 하나를 대표함</li><li><button class="code">#</button> : 숫자 하나를 대표함</li></ul></li></ul></li><li><b>기본 검색, 조건 지정 검색, 정렬 검색, 하위 질의, 복수 테이블 검색</b><br><span class="exam block">예제) 책2 31~36페이지 참고</span><br/><br/></li></ul></li></ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title"><b class="red">106</b></h2>
    <ul><li><button type="button" class="not-hidden">SELECT절 + WINDOW함수</button><ul><li><button class="code"><pre>SELECT [PREDICATE] <span class="text">[테이블명.]속성명</span> [AS <span class="text">별칭</span>]<span class="text">[, [테이블명.]속성명, ...][, 그룹함수(속성명)</span> [AS <span class="text">별칭</span>]<span class="text">]</span><br/>[, <span class="point">WINDOW함수</span> OVER (PARTITION BY <span class="text">속성명1, 속성명2, ...</span><br/>    ORDER BY <span class="text">속성명3, 속성명4, ...</span>) [AS <span class="text">별칭</span>]]<br/>FROM <span class="text">테이블명[, 테이블명, ...]</span><br/>[WHERE <span class="text">조건</span>]<br/>[<span class="point">GROUP BY</span> <span class="text">속성명, 속성명, ...</span>]<br/>[<span class="point">HAVING</span> <span class="text">조건</span>]<br/>[ORDER BY <span class="text">속성명</span>[ASC | DESC]];</pre></button><ul><li><code>그룹함수</code> : <code>GROUP BY절</code>에 지정된 그룹별로 속성의 값을 집계할 함수를 기술함</li><li><code>WINDOW 함수</code> : <code>GROUP BY절</code>을 이용하지 않고 속성의 값을 집계할 함수를 기술함<ul><li><code>PARTITION BY</code> :  <code>WINDOW 함수</code>의 적용 범위가 될 속성을 지정함</li><li><code>ORDER BY</code> : <code>PARTITION</code> 안에서 정렬 기준으로 사용할 속성을 지정함</li></ul></li><li><code>GROUP BY절</code> : 특정 속성을 기준으로 그룹화하여 검색할 떄 사용. 일반적으로 <code>GROUP BY절</code>은 <code>그룹함수</code>와 함께 사용됨</li><li><code>HAVING절</code> : <code>GROUP BY</code>와 함께 사용되며, 그룹에 대한 조건을 지정함</li></ul></li><li><b>그룹 함수</b><ul><li><code>GROUP BY절</code>에 지정된 그룹별로 속성의 값을 집계할 때 사용</li><li><button class="code">COUNT(<span class="text">속성명</span>)</button> : 그룹별 튜플 수를 구하는 함수</li><li><button class="code">SUM(<span class="text">속성명</span>)</button> : 그룹별 합계를 구하는 함수</li><li><button class="code">AVG(<span class="text">속성명</span>)</button> : 그룹별 평균을 구하는 함수</li><li><button class="code">MAX(<span class="text">속성명</span>)</button> : 그룹별 최대값을 구하는 함수</li><li><button class="code">MIN(<span class="text">속성명</span>)</button> : 그룹별 최소값을 구하는 함수</li><li><button class="code">STDDEV(<span class="text">속성명</span>)</button> : 그룹별 표준편차를 구하는 함수</li><li><button class="code">VARIANCE(<span class="text">속성명</span>)</button> : 그룹별 분산을 구하는 함수</li><li><button class="code">ROLLUP(<span class="text">속성명, 속성명, ...</span>)</button> : 인수로 주어진 속성을 대상으로 그룹별 소계를 구하는 함수. 속성의 개수가 n개면, n+1 레벨까지, 하위 레벨에서 상위 레벨 순으로 데이터가 집계됨</li><li><button class="code">CUBE(<span class="text">속성명, 속성명, ...</span>)</button> : <code>ROLLUP</code>과 유사한 형태지만 <code>CUBE</code>는 인수로 주어진 속성을 대상으로 모든 조합의 그룹별 소계를 구함. 속성의 개수가 n개이면, 2^n 레벨까지, 상위 레벨에서 하위 레벨 순으로 데이터가 집계됨</li></ul></li><li><b>WINDOW 함수</b><ul><li><code>GROUP BY절</code>을 이용하지 않고 함수의 인수로 지정한 속성의 값을 집계함</li><li><button type="button">윈도우(WINDOW)</button> : 함수의 인수로 지정한 속성이 집계할 범위</li><li><b>WINDOW 함수</b><ul><li><button class="code">ROW_NUMBER()</button> : 윈도우별로 각 레코드에 대한 일련번호를 반환함</li><li><button class="code">RANK()</button> : 윈도우별로 순위를 반환하며, <mark>공동 순위를 반영함</mark></li><li><button class="code">DENSE_RANK()</button> : 윈도우별로 순위를 반환하며, <mark>공동 순위를 무시</mark>하고 순위를 부여함</li></ul></li></ul></li></ul></li><li><b>WINDOW 함수 이용 검색, 그룹 지정 검색</b><br><span class="exam block">예제) 책2 44~48페이지 참고</span></li><li><b>집합 연산자를 이용한 통합 질의</b><ul><li>집합 연산자를 사용하여 2개 이상의 테이블의 데이터를 하나로 통합함</li><li><b>표기 형식</b> <button class="code"><pre>SELECT <span class="text">속성명1, 속성명2, ...</span><br/>FROM <span class="text">테이블명</span><br/><span class="point">UNION | UNION ALL | INTERSECT | EXCEPT</span><br/>SELECT <span class="text">속성명1, 속성명2, ...</span><br/>FROM <span class="text">테이블명</span><br/>[ORDER BY <span class="text">속성명</span>[ASC | DESC]];</pre></button><ul><li>두 개의 <code>SELECT문</code>에 기술한 속성들은 개수와 데이터 유형이 서로 동일해야 함</li><li><b>집합 연산자의 종류(통합 질의의 종류)</b><ul><li><button class="code">UNION</button> : 두 <code>SELECT문</code>의 조회 결과를 통합하여 모두 출력함. <mark>중복된 행은 한 번만 출력함</mark> <mark>합집합</mark></li><li><button class="code">UNION ALL</button> : 두 <code>SELECT문</code>의 조회 결과를 통합하여 모두 출력함. <mark>중복된 행도 그대로 출력함</mark> <mark>합집합</mark></li><li><button class="code">INTERSECT</button> : 두 <code>SELECT문</code>의 조회 결과 중 공통된 행만 출력함 <mark>교집합</mark></li><li><button class="code">EXCEPT</button> : 첫 번째 <code>SELECT문</code>의 조회 결과에서 두 번째 <code>SELECT문</code>의 조회 결과를 제외한 행을 출력함 <mark>차집합</mark><br/><br/></li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub6">
    <h2 class="sub-title"><b class="red">107</b></h2>
    <ul><li><button type="button" class="red">JOIN</button><ul><li>2개의 릴레이션에서 연관된 튜플들을 결합하여, 하나의 새로운 릴레이션을 반환함</li><li>일반적으로 <code>FROM절</code>에 기술하지만, 릴레이션이 사용되는 곳 어디에나 사용할 수 있음</li><li><b>구분</b><ul><li><code>INNER JOIN</code><ul><li>조건 없는 <code>INNER JOIN</code>을 수행하면 <code>CROSS JOIN</code>과 동일한 결과를 얻을 수 있음</li><li><button type="button" class="red">EQUI JOIN</button><ul><li>JOIN 대상 테이블에서 공통 속성을 기준으로 <code>=</code>(equal) 비교에 의해 같은 값을 가지는 행을 연결하여 결과를 생성하는 JOIN 방법</li><li><button type="button">NATURAL JOIN</button> : <button type="button" class="not-hidden">EQUI JOIN</button>에서 JOIN 조건이 <code>=</code>일 때 동일한 속성이 두 번 나타나는데, 이 중 중복된 속성을 제거하여 같은 속성을 한 번만 표기하는 방법</li><li><button type="button">JOIN 속성</button> : <button type="button" class="not-hidden">EQUI JOIN</button>에서 연결고리가 되는 공통 속성</li><li><code>WHERE절</code>을 이용한 표기 형식<button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1, 테이블명2, ...</span><br/>WHERE <span class="text">테이블명1.속성명 = 테이블명2.속성명</span>;</pre></button></li><li><code>NATURAL JOIN절</code>을 이용한 표기 형식<button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1</span> NATURAL JOIN <span class="text">테이블명2</span>;</pre></button></li></ul></li><li><button type="button" class="red">NON-EQUI JOIN</button><ul><li>JOIN 조건에 <code>=</code>조건이 아닌 나머지 비교 연산자, 즉 <code>></code>, <code><</code>, <code><></code>, <code>>=</code>, <code><=</code> 연산자를 사용하는 JOIN 방법</li><li><b>표기 형식</b> <button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1, 테이블명2, ...</span><br/>WHERE <span class="text">(NON-EQUI JOIN 조건)</span>;</pre></button></li></ul></li><li><button type="button" class="red">OUTER JOIN</button><ul><li>릴레이션에서 JOIN 조건에 만족하지 않는 튜플도 결과로 출력하기 위한 JOIN 방법</li><li><button type="button">LEFT OUTER JOIN</button> : INNER JOIN의 결과를 구한 후, 우측 항 릴레이션의 어떤 튜플과도 맞지 않는 좌측 항의 릴레이션에 있는 튜플들에 <code>NULL</code>값을 붙여서 INNER JOIN의 결과에 추가함<ul><li><b>표기 형식</b><br><button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1</span> <span class="point">LEFT OUTER JOIN</span> <span class="text">테이블명2</span><br/>ON <span class="text">테이블명1.속성명 = 테이블명2.속성명</span>;<br/></pre></button><br><button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1, 테이블명2</span><br/>ON <span class="text">테이블명1.속성명 = 테이블명2.속성명</span><span class="point">(+)</span>;</pre></button></li></ul></li><li><button type="button">RIGHT OUTER JOIN</button> : INNER JOIN의 결과를 구한 후, 좌측 항 릴레이션의 어떤 튜플과도 맞지 않는 우측 항의 릴레이션에 있는 튜플들에 <code>NULL</code>값을 붙여서 INNER JOIN의 결과에 추가함<ul><li><b>표기 형식</b><br><button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1</span> <span class="point">RIGHT OUTER JOIN</span> <span class="text">테이블명2</span><br/>ON <span class="text">테이블명1.속성명 = 테이블명2.속성명</span>;<br/></pre></button><br><button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1, 테이블명2</span><br/>ON <span class="text">테이블명1.속성명<span class="point">(+)</span> = 테이블명2.속성명</span>;</pre></button></li></ul></li><li><button type="button">FULL OUTER JOIN</button> : <button type="button" class="not-hidden">LEFT OUTER JOIN</button>과 <button type="button" class="not-hidden">RIGHT OUTER JOIN</button>을 합쳐 놓은 것<ul><li>INNER JOIN의 결과를 구한 후, 좌측 항의 릴레이션의 튜플들에 대해 우측 항의 릴레이션의 어떤 튜플과도 맞지 않는 튜플들에 <code>NULL</code> 값을 뭍여서 INNER JOIN의 결과에 추가함. 그리고 유사하게 우측항의 릴레이션의 튜플들에 대해 좌측 항의 릴레이션의 어떤 튜플과도 맞지 않는 튜플들에 <code>NULL</code>값을 붙여서 INNER JOIN의 결과에 추가함</li><li><b>표기 형식</b> <button class="code"><pre>SELECT <span class="text">[테이블명1.]속성명, [테이블명2.]속성명, ...</span><br/>FROM <span class="text">테이블명1</span> <span class="point">FULL OUTER JOIN</span> <span class="text">테이블명2</span><br/>ON <span class="text">테이블명1.속성명 = 테이블명2.속성명</span>;<br/></pre></button></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub7">
    <h2 class="sub-title">108</h2>
    <ul><li><button type="button" class="red">트리거(Trigger)</button><ul><li>데이터베이스 시스템에서 데이터의 삽입(Insert), 갱식(Update), 삭제(Delete) 등의 <b>이벤트(Event)가 발생할 때 관련 작업이 자동으로 수행되게 하는 절차형 SQL</b></li><li>트리거는 데이터베이스에 저장되며, 데이터 변경 및 무결성 유지, 로그 메시지 출력 등의 목적으로 사용됨</li><li>트리거의 구문에는 <button type="button" class="not-hidden">DCL(데이터 제어어)</button>을 사용할 수 없으며, <button type="button" class="not-hidden">DCL</button>이 포함된 프로시저나 함수를 호출하는 경우에 오류 발생함</li><li><b>트리거의 구성도</b><ul><li><button type="button" class="not-hidden">이벤트</button> → <button type="button" class="not-hidden">트리거</button> → <button type="button" class="not-hidden">데이터 변경</button></li><li><button type="button" class="not-hidden">트리거</button><ul><li><button type="button">DECLARE</button> : <mark>필수</mark>. 트리거의 명칭, 변수 및 상수, 데이터 타입을 정의하는 선언부</li><li><button type="button">EVENT</button> : <mark>필수</mark>. 트리거가 실행되는 조건 명시</li><li><button type="button">BEGIN</button> : <mark>필수</mark>트리거의 시작 의미</li><li><button type="button">CONTROL</button> : 조건문 또는 반복문이 삽입되어 순차적으로 처리됨</li><li><button type="button">SQL</button> : DML문이 삽입되어 데이터의 관리를 위한 조회, 추가, 수정, 삭제 작업을 수행함</li><li><button type="button">EXCEPTION</button> : BEGIN ~ END 안의 구문 실행시 예외가 발생하면 이를 처리하는 방법을 정의함</li><li><button type="button">END</button> : <mark>필수</mark>. 트리거의 종료 의미</li></ul></li></ul></li><li><button type="button" class="not-hidden">트리거의 생성</button><ul><li><b>표기 형식</b> <button class="code"><pre>CREATE [OR REPLACE] TRIGGER <span class="text">트리거명 [동작시기 옵션][동작 옵션]</span> ON <span class="text">테이블명</span><br/>REFERENCING [NEW | OLD] AS <span class="text">테이블명</span><br/>FOR EACH ROW<br/>[WHEN <span class="text">조건식</span>]<br/>BEGIN<br/>    <span class="text">트리거 BODY;</span><br/>END;</pre></button><ul><li><code>ON REPLACE</code> : 선택적인(Optional) 예약어. 이 예약어를 사용하면 한 트리거의 이름이 이미 존재하는 경우, 기존의 트리거를 대체할 수 있음</li><li><code>동작시기 옵션</code> : 트리거가 실행될 때를 지정함<ul><li><code>AFTER</code> : 테이블이 변경된 후에 트리거가 실행됨</li><li><code>BEFORE</code> : 테이블이 변경되기 전에 트리거가 실행됨</li></ul></li><li><code>동작 옵션</code> : 트리거가 실행되게 할 작업의 종류를 지정함</li><li><code>INSERT</code> : 테이블에 새로운 튜플을 삽입할 때 트리거가 실행됨</li><li><code>DELETE</code> : 테이블의 튜플을 삭제할 때 트리거가 실행됨</li><li><code>UPDATE</code> : 테이블의 튜플을 수정할 때 트리거가 실행됨</li><li><code>NEW | OLD</code> : 트리거가 적용될 테이블의 별칭을 지정함<ul><li><code>NEW</code> : 추가되거나 수정에 참여할 튜플들의 집합(테이블)을 의미함</li><li><code>OLD</code> : 수정되거나 삭제 전 대상이 되는 튜플들의 집합(테이블)을 의미함</li></ul></li><li><code>FOR EACH ROW</code> : 각 튜플마다 트리거를 적용한다는 의미</li><li><code>WHEN 조건식</code> : 선택적인(Optional) 예약어. 트리거를 적용할 튜플의 조건을 지정함</li><li><code>트리거 BODY</code> : 트리거의 본문 코드를 입력하는 부분. BEGIN으로 시작해서 END로 끝나는데, 적어도 하나 이상의 SQL문이 있어야함. 아니면 오류 발생함</li></ul></li></ul></li><li><button type="button" class="not-hidden">트리거의 제거</button><ul><li>표기 형식 <button class="code">DROP TRIGGER <span class="text">트리거명</span>;</button></li></ul></li></ul></li></ul>
</article>
`;

export default post;