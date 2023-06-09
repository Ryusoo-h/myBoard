export const post5 = `
<h1 class="title">SQLD 3-2. SQL 활용(84문)</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-09</span>
    <span class="modification-date">수정일 : 2023-06-09</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>표준조인</mark> <mark>집합 연산자</mark> <mark>계층형 질의</mark> <mark>서브쿼리</mark>
    <mark>그룹함수</mark> <mark>윈도우 함수</mark> <mark>DCL</mark> <mark>절차형 SQL</mark> 
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">표준조인</h2>
    <ul>
        <li>
            <b>일반 집합 연산자와 SQL 집합 연산자 비교</b>
            <ul class="flex">
                <li>
                    <ul>
                        <li><button type="button" class="not-hidden">UNION</button><br><br></li>
                        <li><button type="button" class="not-hidden">INTERSECTION</button></li>
                        <li><button type="button" class="not-hidden">DIFFERENCE</button></li>
                        <li><button type="button" class="not-hidden">PRODUCT</button></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><button type="button" class="red">UNION</button><br><br></li>
                        <li><button type="button" class="red">INTERSECTION</button></li>
                        <li><button type="button" class="red">EXCEPT(오라클 MINUS)</button></li>
                        <li><button type="button" class="red">CROSS JOIN</button></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <button type="button" class="not-hidden">합집합</button>. 중복x => 시스템 부하
                            <br>.’. 이후 UNION ALL 추가됨 : 중복o => 시스템 부하x
                        </li>
                        <li><button type="button" class="not-hidden">교집합</button></li>
                        <li><button type="button" class="not-hidden">차집합</button></li>
                        <li>
                            <button type="button" class="not-hidden">곱집합</button> : 조인 조건이 없는 경우 생길 수 있는 모든 데이터의 조합
                            <br>M*N건 데이터 조합 발생
                            <br><button type="button" class="red">CARTESIAN PRODUCT</button>라고도 함
                        </li>
                    </ul>
                </li>
            </ul>
            <mark class="block">
                * 집합연산자는 <b class="red">SQL 튜닝 관점</b>에서 실행계획을 분리하고자 하는 목적으로도 사용한다
                <code class="block">
                    SQL문
                    <br><b class="red">집합연산자</b>
                    <br>SQL문
                    <br>...
                </code>
            </mark>
        </li>
        <li>
            <b>순수 관계 연산자와 SQL의 비교</b>
            <ul class="flex">
                <li>
                    <ul>
                        <li><button type="button" class="not-hidden">SELECT</button></li>
                        <li><button type="button" class="not-hidden">PROJECT</button></li>
                        <li><button type="button" class="not-hidden">(NATURAL)JOIN</button></li>
                        <li><button type="button" class="not-hidden">DIVIDE</button></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><button type="button" class="red">WHERE 절</button></li>
                        <li><button type="button" class="red">SELECT 절</button></li>
                        <li>
                            <button type="button" class="red">다양한 JOIN</button>
                            <br><b>WHERE 절</b> : <button type="button">INNER JOIN</button>
                            <br><b>FROM 절</b> : <button type="button">NATURAL JOIN</button>, <button type="button">INNER JOIN</button>, <button type="button">OUTER JOIN</button>, <button type="button">USING 조건절</button>, <button type="button">ON 조건절</button>
                        </li>
                        <li><button type="button" class="red">현재x</button> </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <b>조인의 형태</b>
            <ul>
                <li><button type="button" class="red">INNER JOIN</button> : default 조인, 내부 JOIN, 동일한 값이 있는 행만 반환</li>
                <li>
                    <button type="button" class="red">OUTER JOIN</button> : 외부 JOIN, 동일한 값이 있는 행만 반환, <span class="point">좌변 테이블을 먼저 읽음</span>
                    <code class="block">
                        /* LEFT OUTER 조인 */
                        <br><br>/* 방법1 */
                        <br><b>FROM</b> 테이블1 A <b>JOIN</b> 테이블2 B
                        <br><b>WHERE</b> A.칼럼1 = B.칼럼1<b class="point">(+)</b>
                        <br><br>/* 방법2 */
                        <br><b>FROM</b> 테이블1 A <b class="point">LEFT OUTER JOIN</b> 테이블2 B
                        <br><b>ON</b> (A.칼럼1 = B.칼럼1)
                    </code>
                    <code class="block">
                        /* RIGHT OUTER 조인 */
                        <br><br>/* 방법1 */
                        <br><b>FROM</b> 테이블1 A <b>JOIN</b> 테이블2 B
                        <br><b>WHERE</b> A.칼럼1<b class="point">(+)</b> = B.칼럼1
                        <br><br>/* 방법2 */
                        <br><b>FROM</b> 테이블1 A <b class="point">RIGHT OUTER JOIN</b> 테이블2 B
                        <br><b>ON</b> (A.칼럼1 = B.칼럼1)
                    </code>
                </li>
                <li>
                    <button type="button" class="red">NATURAL JOIN</button> : 두 테이블 간 동일한 이름 갖는  모든 칼럼에 대해서 <b>EQUI(=) JOIN</b> 수행
                    <br><span class="red">* ALIAS를 가질 수 없음(‘.’ 자동)</span>
                </li>
                <li><button type="button" class="red">CROSS JOIN</button> : E.F.CODD 박사 언급, 일반 집합 연산자 <b>PRODUCT 개념</b>, <br>JOIN조건이 없는 경우 생길 수 있는 모든 조합</li>
                <li>
                    <button type="button" class="red">USING 조건절</button> : FROM절의 USING 절, 같은 이름 칼럼 중 <b>원하는 칼럼만 선택적으로 EQUI(=) JOIN</b> 수행
                    <br><span class="red">* 사용시 <code><b>FROM</b> 테이블1 A <b>JOIN</b> 테이블2 B <b>USING</b> (<span class="point">칼럼명만 써야함 ALIAS사용x</span>)</code></span>
                </li>
                <li>
                    <button type="button" class="red">ON 조건절</button> : <b>JOIN 서술부</b><span class="point">(=ON 조건절)</span>, <b>비 JOIN 서술부 분리</b><span class="point">(=WEHRE 절)</span> => 이해쉬움. <span class="red">칼럼명이 달라도 JOIN 조건 사용 가능</span>
                    <br><span class="red">* 사용시 ALIAS 정확히 기재해야함 <code><b>FROM</b> 테이블1 A <b>JOIN</b> 테이블2 B <b>ON</b> (<span class="point"><b>A</b>.칼럼1 = <b>B</b>.칼럼1</span>)</code></span>
                </li>
            </ul>
            <martk class="block">* <button type="button" class="red">INNER JOIN</button>, <button type="button" class="red">NATURE JOIN</button>, <button type="button" class="red">USING 조건절</button> = 동등조인</martk>
        </li>
    </ul>
    <mark class="block">
        <b><span class="red">WHERE A IN B</span> 과 <span class="red">WHERE A EXISTS B</span> 차이</b>
        <br><button type="button" class="red">IN / NOT IN</button> : NULL은 연산 자체가 안됨. 없으면 공집합
        <br><button type="button" class="red">EXISTS / NOT EXISTS</button> : A를 쭉 읽으면서 B에 있는것을 찾음. NULL도 연산가능
    </mark>
</article>
<hr>

<article id="sub2">
    <h2 class="sub-title">계층형 질의</h2>
    <ul>
        <li>
            <b>오라클 계층형 SQL</b>
            <ul>
                <li><b class="red">SELECT</b> : 조회할 칼럼 지정</li>
                <li><b class="red">FROM</b> : 대상 테이블 지정</li>
                <li><b class="red">WHERE</b> : 필터링</li>
                <li><b><button type="button" class="red">START WITH</button> 조건</b> : 루트 데이터 지정, 계층 구조 전개의 시작 위치 지정</li>
                <li>
                    <b><span class="red">CONNECT BY</span> <span class="point">NOCYCLE</span> <span class="red">PRIOR</span> A <span class="red">AND</span> B</b> : 다음에 전개될 자식 데이터를 지정하는 구문
                    <ul>
                        <li><b><span class="red">PRIOR</span> 자식 = 부모</b> : 순방향(부모 -> 자식)</li>
                        <li><b><span class="red">PRIOR</span> 부모 = 자식</b> : 역방향(자식 -> 부모)</li>
                        <li><b class="point">NOCYCLE</b>  추가 : 사이클이 발생한 이후의 데이터는 전개x</li>
                    </ul>
                </li>
                <li><b><button type="button" class="red">ORDER SIBILINGS BY</button> 칼럼</b> : 형제 노드 사이에서 정렬 수행</li>
            </ul>
        </li>
        <li>
            <b>계층 형 질의에서 사용되는 가상 칼럼</b>
            <ul>
                <li><button type="button" class="red">LEVEL</button> : 루트데이터 = 1, 하위 데이터 1씩 증가</li>
                <li><button type="button" class="red">CONNECT_BY_ISLEAF</button> : 리프데이터 = 1, 아니면 0</li>
                <li><button type="button" class="red">CONNECT_BY_ISCYCLE</button> : 조상으로서 존재하면 = 1, 아니면 0</li>
                <li><b><button type="button" class="red">CONNECT_BY_ROOT</button>칼럼</b> : </li>
                <li><b><button type="button" class="red">SYS_CONNECT_BY_PATH</button>(원하는 칼럼을 문자열로 연결)</b> : </li>
            </ul>
        </li>
        <li><b>SELF 조인</b> : 동일한 테이블끼리의 조인
            <span class="exam block" style="vertical-align: top;">
                ex) <b>FROM</b> <span class="point">테이블1</span> A <b>INNER JOIN</b> <span class="point">테이블1</span> B
                <br><b>ON</b> (A.칼럼1 = B.칼럼 2)
                <br><br>ex) <b>FROM</b> <span class="point">테이블1</span> A <b>LEFTER OUTER JOIN</b> <span class="point">테이블1</span> B
                <br><b>ON</b> (A.칼럼1 = B.칼럼 2)
            </span>
        </li>
    </ul>
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title"><button type="button">서브쿼리</button></h2>
    <ul>
        <li>
            <b>정의</b> : 하나의 SQL문에 포함되어 있는 또 다른 SQL문
            <ul>
                <li><button type="button" class="not-hidden">서브쿼리</button> : 메인쿼리의 칼럼을 <button type="button">모두 사용 가능</button>, </li>
                <li><button type="button" class="not-hidden">메인쿼리</button> : 서브쿼리의 칼럼을 <button type="button">사용x</button></li>
            </ul>
        </li>
        <li>
            <b>주의점</b> : 괄호로 감싸 사용, 단일행·복수행 비교연산자와 함께 사용 가능 
            <br>단일행 비교 연산자는 서브쿼리 결과가 반드시 1건 이하
            <br>서브쿼리에 <b class="red">ORDER BY</b> 사용x
        </li>
        <li>
            <b>사용가능 위치</b> : 
            <button type="button" class="red">SELECT</button>
            <button type="button" class="red">FROM</button>
            <button type="button" class="red">WHERE</button>
            <button type="button" class="red">HAVING</button>
            <button type="button" class="red">ORDER BY 절</button>
            <button type="button" class="red">INSERT문의 VALUE절</button>
            <button type="button" class="red">UPDATE문의 SET절</button>
        </li>
        <li>
            <b>분류</b>
            <ul>
                <li>
                    <b>동작 방식</b>
                    <ul>
                        <li><button type="button">비연관 서브쿼리</button> : 메인 쿼리에 값 제공 용도</li>
                        <li><button type="button">연관 서브쿼리</button> : 메인 쿼리 수행 -> 서브쿼리에서 조건확인 <span class="red">*서브쿼리가 메인쿼리값을 갖고 있음</span></li>
                    </ul>
                </li>
                <li>
                    <b>변환 형태</b>
                    <ul>
                        <li><button type="button">단일행 서브쿼리</button> : 실행결과 1건 이하</li>
                        <li><button type="button">다중행 서브쿼리</button> : 실행 결과 여러건</li>
                        <li><button type="button">다중칼럼 서브쿼리</button> : 실행 결과 여러 칼럼 반환 <span class="red">*메인과 서브쿼리의 칼럼 수, 순서가 동일해야함</span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="not-hidden">뷰</button>
            <ul>
                <li>
                    <b>장점</b>
                    <ul>
                        <li><button type="button">독립성</button> : 테이블 구조가 변경되어도 뷰를 사용하는 응용프로그램을 변경하지 않아도 됨</li>
                        <li><button type="button">편리성</button> : 관련 질의 단순 작성 가능</li>
                        <li><button type="button">보안성</button> : 숨기고 싶은 정보, 칼럼을 빼고 생성 가능</li>
                    </ul>
                </li>
                <li>
                    <b>호출</b>
                    <code><b>SELECT</b> * <b>FROM</b> 뷰이름</code>
                </li>
                <li>
                    <b>생성</b>
                    <code class="block">
                        <b>CREATE VIEW</b> 뷰이름
                        <b>AS<br>SELECT</b> ...;
                    </code>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub4">
    <h2 class="sub-title">그룹함수</h2>
    : 특정집합의 소계, 중계, 합계, 총합계를 구할 수 있음
    <ul>
        <li>
            <button type="button" class="red">ROLLUP</button> : <b>소그룹간 소계</b>. <b class="point">N+1</b>개의 SUBTOTAL 생성
            <br>함수 내 인자 순서 바뀜 => 결과도 바뀜('.' 계층구조)
            <br><span class="exam">ex) <b>GROUP BY ROLLUP</b>(부서칼럼, 성별칼럼) => <b>2+1개</b>(부서별, 성별별, 전체)</span>
        </li>
        <li>
            <button type="button" class="red">CUBE</button> : <b>다차원적 소계</b>, 결합 가능한 모든 값 <b class="point">2^N</b>개의 SUBTOTAL 생성 <span class="red">=> 시스템 부담▲</span>
            <br><span class="exam">ex) <b>GROUP BY CUBE</b>(부서칼럼, 성별칼럼) => <b>2^2개</b>(전체, 부서별, 부서성별별, 성별별)</span>
        </li>
        <li>
            <button type="button" class="red">GROUPING SETS</button> : <b>특정 항목에 대한 소계</b>
            <br><span class="exam">ex) <b>GROUP BY GROUPING SETS</b>(부서칼럼, 성별칼럼) => <b>2개</b>(부서별, 부서성별별)</span>
        </li>
        <li><button type="button" class="red">GROUPING(칼럼)</button> : 칼럼이 NULL인경우 1반환, 아닌경우 0반환</li>
    </ul>
</article>
<hr>

<article id="sub5">
    <h2 class="sub-title">윈도우 함수</h2>
    : 분석함수. 행과 행간 관계에서 다양한 연산처리가 가능. <span class="red">중첩호출x</span>
    <ul>
        <li><b>문법</b>
            <code class="block">
                <b>SELECT</b>
                <br><b class="point">윈도우함수(인자)</b> <b>OVER</b> (<b>PARTITION BY</b> 칼럼 <b>ORDER BY</b> 칼럼)
                <br><b class="point">윈도우절</b>
                <br><b>FROM</b> 테이블명;
            </code>
        </li>
        <li>
            <b class="point">윈도우 함수 종류</b>
            <ul>
                <li>
                    <b>순위 관련함수</b>
                    <ul>
                        <li><button type="button" class="red">RANK()</button> : 동일값=동일순위 <span class="exam">ex) 1,2,2,4</span></li>
                        <li><button type="button" class="red">DENCE_RANK()</button> : 동일값=동일순위 <span class="exam">ex) 1,2,2,3</span></li>
                        <li><button type="button" class="red">ROW_NUMBER()</button> : 순위 꼭! <span class="exam">ex) 1,2,3,4</span></li>
                    </ul>
                </li>
                <li><b>집계 관련 함수</b> : <b class="red">SUM(칼럼), MAX(칼럼), MIN(칼럼), AVG(칼럼), COUNT(칼럼 또는 *)</b></li>
                <li>
                    <b>행순서 관련 함수</b>
                    <ul>
                        <li><button type="button" class="red">FIRST_VALUE(칼럼)</button> : 첫째 값</li>
                        <li><button type="button" class="red">LAST_VALUE(칼럼)</button> : 마지막 값</li>
                        <li><button type="button" class="red">LAG(칼럼, N)</button> : N칸 위</li>
                        <li><button type="button" class="red">LEAD(칼럼, N)</button> : N칸 아래</li>
                    </ul>
                </li>
                <li>
                    <b>그룹내 비율 관련 함수</b>
                    <ul>
                        <li><button type="button" class="red">PERCENT_RANK()</button> : 백분율</li>
                        <li><button type="button" class="red">CUME_DIST()</button> : 누적 백분율</li>
                        <li><button type="button" class="red">NTILE(N)</button> : N등분 결과</li>
                        <li><button type="button" class="red">RATIO_TO_REPORT(칼럼)</button> : 비율</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b class="point">윈도우절</b> : 함수의 대상이 되는 행 기준의 범위
            <ul>
                <li>
                    <button type="button" class="red">ROWS</button> : 물리적 결과 행의 수
                    <br><span class="exam">ex) <b>ROWS BETWEEN</b> 1 PRECEDING <b>AND</b> 1 FOLLOWING : 열 1개전, 1개후</span>
                    <br><span class="exam">ex) <b>ROWS </b> UNBOUNDED PRECEDING  : 현재행 기준~ 첫번쨰 행까지</span>
                    <br><span class="exam">ex) <b>ROWS BETWEEN</b> CURRENT ROW <b>AND</b> UNBOUNDED FOLLOWING : 현재 ROW ~ 마지막 ROW</span>
                </li>
                <li>
                    <button type="button" class="red">RANGE</button> : 논리적인 값에 의한 범위
                    <br><span class="exam">ex) <b>RANGE</b> UNBOUNDED PRECEDING  : 현재행 기준~ 첫번쨰 행까지</span>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub6">
    <h2 class="sub-title">DCL</h2>
    : Data Control Language. 유저 생성, 권한 제어 가능한 명령어
    <ul>
        <li>
            <b>오라클 제공 유저</b>
            <ul>
                <li><button type="button">SCOTT</button> : 테스트용 샘플 유저</li>
                <li><button type="button">SYS</button> : DBA 권한을 부여받은 유저</li>
                <li><button type="button">SYSTEM</button> : SYSTEM DB의 모든 시스템 권한을 부여받은 유저 <span class="red">=> SYS바로 밑</span></li>
            </ul>
        </li>
        <li>
            <code class="block">
                <b>DROP USER</b> 유저명 <b class="point">CASCADE</b>;
                <br><b class="point">CREATE USER</b> 유저명 <b>IDENTIFIED BY</b> 비번; <span class="point">-- => 유저 생성(SYSTEM계정으로)</span> -> 생성됨 하지만 로그온 안됨 
                <br><b>GRANT <span class="point">CREATE SESSION</span> TO</b> 유저명; <span class="point">-- => 로그온 됨</span>-> 하지만 테이블 생성X 
                <br><b>GRANT <span class="point">CREATE TABLE</span> TO</b> 유저명; <span class="point">-- => 테이블 생성 됨</span> -> 하지만 테이블 조회X 
                <br><b>GRANT <span class="point">SELECT ON 테이블명</span></b> <b>TO</b> 유저명; <span class="point">-- => 테이블 조회 됨</span> -> 하지만 추가, 삭제, 업데이트 권한X 
                <br><b>GRANT <span class="point">INSERT, DELETE, UPDATE</span> ON</b> 테이블명 <b>TO</b> 유저명; <span class="point">-- => 가능해짐!</span>
                <br>
                <br><b>REVOKE <span class="point">CREATE TABLE</span> FROM</b> 유저명; => 테이블 생성 권한을 회수!
                <br><b>GRANT <span class="point">CONNECT, RESOURCE</span> TO</b> 유저명; => 기본 롤을 부여함
                <br>
                <br>
            </code>
            <b>기본 룰</b>
            <ul>
                <li><button type="button" class="red">CONNECT</button> : 접속 권한 줌</li>
                <li><button type="button" class="red">RESOURCE</button> : 8가지 권한을 줌(테이블, 트리거, 타입, 프로시저, 시퀀스, 크루스터, 오퍼레이터, 인덱스 타입)</li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub7">
    <h2 class="sub-title">절차형 SQL</h2>
    을 이용하면 SQL문의 연속적 실행이나 조건에 따른 분기처리 수행 모듈 생성 가능
    <ul>
        <li>
            <b>PL/SQL (= 절차혈 모듈) 개요</b>
            <ol>
                <li>BLOCK 구조, 기능별 모듈화 가능</li>
                <li>변수/상수 선언, IF/LOOP문 사용 가능</li>
                <li>DBMS/사용자 에러 정의 가능</li>
                <li>오라클 내장 가능, 오라클 서버로 이식 가능</li>
                <li>여러 SQL문장 => BLOCK으로 묶음 => 한번에 서버로 => 네트워크 패킷 수 감소</li>
            </ol>
        </li>
        <li>
            <b>PL/SQL 구조</b>
            <ul>
                <li><button type="button">DECLARE</button> 필수여부 : <button type="button" class="red">필수</button> <b>=> 선언부</b> : 변수, 인수 정의, 데이터 타입 선언</li>
                <li><button type="button">BEGIN</button> 필수여부 : <button type="button" class="red">필수</button> <b>=> 실행부</b> : SQL문, 필요한 로직 정의</li>
                <li><button type="button">EXCEPTION</button> 필수여부 : <button type="button" class="red">선택</button> <b>=> 에러 처리부</b></li>
                <li><button type="button">END</button> 필수여부 : <button type="button" class="red">필수</button></li>
            </ul>
        </li>
        <li><b>종류</b>
            <ul>
                <li><button type="button">프로시저</button> : 일련의 쿼리를 마치 하나의 함수처럼 실행하기 위한 쿼리 집합</li>
                <li>
                    <button type="button">사용자 정의 함수</button> : 프로시저처럼 SQL문을 IF/LOOF 등 로직과 함께 DB에 저장해둔 명령문
                    <br><span class="red">*프로시저와 차이 : 반드시 한 건 되돌려주어야함. 성능때문에 지양함. 하지만 생산성이 높음</span>
                </li>
                <li>
                    <button type="button">트리거</button> : 특정 테이블에 INSERT, UPDATE, DELETE 수행시 DBMS내에서 자동으로 동작하도록 작성됨
                    <br>테이블, 뷰 DB작업대상 정의
                    <br>전체 트랜잭션 / 각 행에 대해 발생
                    <br>*프로시저와 트리거 차이
                    <ul>
                        <li><b>프로시저</b>
                            <ul>
                                <li>CREATE_PROCEDURE 문법</li>
                                <li><b class="red">EXECUTE/EXEC 명령어로 실행</b></li>
                                <li>내부에서 COMMIT/ROLLBACK 사용 가능</li>
                            </ul>
                        </li>
                        <li><b>트리거</b>
                            <ul>
                                <li>CREATE_TRIGGER 문법</li>
                                <li><b class="red">자동 실행</b></li>
                                <li>내부에서 COMMI/ROLLBACK 안됨. 외부의 COMMIT/ROLLBACK 따름</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>

`;

export default post5;