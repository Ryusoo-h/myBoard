export const post3 = `
<h1 class="title">SQLD 3-1. SQL 기본(69문)</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-08</span>
    <span class="modification-date">수정일 : 2023-06-08</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br>3-1 : <mark>RDB개요</mark> <mark>DDL</mark> <mark>DML</mark> <mark>TCL</mark> 
    <br>3-2 : <mark>WHERE 절</mark> <mark>함수</mark> <mark>GROUP BY, HAVING 절</mark> <mark>ORDER BY 절</mark> <mark>조인</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">관계형 데이터 베이스 개요</h2>
    <ul>
        <li><button type="button">DBMS(Database Management System)</button> : 효율적인 데이터 관리, 데이터 손상 피함, 데이터 복구를 위한 강력한 소프트웨어</li>
        <li><button type="button">관계형 데이터베이스</button> : 정규화 -> 합리적인 테이블 모델링 => 이상현상 제거, 데이터 중복 피함, 동시성관리, 병행제어
            <br>=> 많은 사용자 동시 데이터 공유, 조작할 수 있는 기능 제공
        </li>
        <li><button type="button">SQL(Structured Query Language)</button> : 관계형 DB에서 데이터 정의·조작·제어를 위해 사용되는 언어
            <ul>
                <li><button type="button">DML(Data Manipulation Language)</button> : DB데이터 조회, 검색, 변형. <b>데이터 조작어</b>
                    <br>명령어 : <button type="button" class="red">SELECT</button>
                    <button type="button" class="red">INSERT</button>
                    <button type="button" class="red">UPDATE</button>
                    <button type="button" class="red">DELETE</button>
                </li>
                <li><button type="button">DDL(Data Definition Language)</button> : DB 구조 정의. <b>데이터 정의어</b>
                    <br>명령어 : <button type="button" class="red">CREATE</button>
                    <button type="button" class="red">ALTER</button>
                    <button type="button" class="red">DROP</button>
                    <button type="button" class="red">RENAME</button>
                </li>
                <li><button type="button">DCL(Data Control Language)</button> : DB 접근/사용 권한 부여/회수. <b>데이터 제어어</b>
                    <br>명령어 : <button type="button" class="red">GRANT</button>
                    <button type="button" class="red">REVOKE</button>
                </li>
                <li><button type="button">TCL(Transaction Control Language)</button> : 논리적 작업 단위를 묶어 DML에 의해 조작된 결과를 작업단위별로 적용 및 취소하는 명령어. <b>트랜잭션 제어어</b>
                    <br>명령어 : <button type="button" class="red">COMMIT</button>
                    <button type="button" class="red">ROLLBACK</button>
                </li>
            </ul>
        </li>
        <li>테이블 : 가로/세로 = 행/열 
            = <button type="button">로우/칼럼</button>
            = <button type="button">튜플/필드</button>
            = <button type="button">레코드/어트리뷰트</button>
        </li>
        <li><button type="button">ERD(Entity Relationship Diagram)</button> : 테이블 간 서로의 상관관계를 그림으로 도식화한것
            <br>구성요소 : <button type="button">엔터티</button>, <button type="button">관계</button>, <button type="button">속성</button>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">DDL</h2>
    <ul>
        <li><button type="button" class="not-hidden">테이블/칼럼명</button> : 문자로 시작, A-Z, a-z, 0-9, _, #, $ 문자만 허용</li>
        <li><button type="button" class="not-hidden">데이터 타입</button>
            <ul>
                <li><button type="button">CHAR(L)</button> : 고정길이 문자열. 차이만큼 공백 채워짐</li>
                <li><button type="button">VARCHAR2(L)</button> : 가변길이 문자열</li>
                <li><button type="button">NUMBER(L, D)</button> : 정수, 실수저장. L: 전체자리수, D: 소수점자리수</li>
                <li><button type="button">DATE</button> : 날짜와 시각정보, 년월일시분초</li>
            </ul>
        </li>
        <li><button type="button" class="not-hidden">제약조건</button>
            <ul>
                <li><button type="button">Primary Key</button> : 기본키. 한테이블에 단 하나의 기본키. <span class="red"><b>NULL</b> 입력 불가. 자동으로 UNIQUE 인덱스 생성</span></li>
                <li><button type="button">Unique Key</button> : 고유키. 행데이터 고유 식별. <span class="red"><b>NULL</b> 입력 가능</span></li>
                <li><button type="button">NOT NULL</button> : NULL 값 입력 금지 (NOT NULL 명시하지 않은 경우 -> NULL이 기본값임)</li>
                <li><button type="button">CHECK</button> : 입력값 종류, 범위 제한 <span class="exam">ex) 1~100까지만 가능</span></li>
                <li><button type="button">Foreign Key</button> : 타테이블의 기본키를 외래키로 지정. <br><b class="red">*참조무결성제약조건</b><span class="exam">ex) 주문은 반드시 고객 필요. 고객번호 없는 주문번호는 존재할 수 없다</span></li>
            </ul>
        </li>
        <li><b>테이블 생성</b>
<button class="code">
<pre>CREATE TABLE <span class="text">테이블명</span>
(
    <span class="text">칼럼명 타입 제약조건,
    ...</span>
)
</pre>
</button>
<button class="code">
<pre><span class="comment">/* CTAS */</span>
CREATE TABLE <span class="text">테이블명</span> AS
SELECT <span class="text">*</span> FROM <span class="text">타테이블명</span>;
</pre>
</button>
        </li>
        <li><b>테이블 수정</b>
            <ul>
                <li>칼럼 추가
                    <button class="code">ALTER TABLE <span class="text">테이블명</span> ADD <span class="text">(칼럼 타입)</span>;</button>
                </li>
                <li>PK 칼럼 추가
                    <button class="code">
                        ALTER TABLE <span class="text">테이블명</span>
                        ADD CONSTRAINT <span class="text">제약조건명</span>
                        PRIMARY KEY (<span class="text">칼럼</span>);
                    </button>
                </li>
                <li>FK 칼럼 추가
                    <button class="code">
                        <span class="comment">/* 테이블 마지막에 새 칼럼 추가됨 */</span>
                        <br>ALTER TABLE <span class="text">테이블명</span>
                        ADD CONSTRAINT <span class="text">제약조건명</span>
                        FOREIGN KEY (<span class="text">칼럼</span>) REFERENCES<span class="text"> 타테이블명(칼럼)</span>;
                    </button>
                </li>
                <li>칼럼 삭제
                    <button class="code">
                        <span class="comment">/* 복구 불가 */</span>
                        <br>ALTER TABLE <span class="text">테이블명</span>
                        DROP COLUMN <span class="text">칼럼명</span>;
                    </button>
                </li>
                <li>칼럼 수정
                    <button class="code">
                        ALTER TABLE <span class="text">테이블명</span>
                        MODIFY (<span class="text">칼럼 타입 제약조건</span>);
                    </button>
                </li>
                <li>칼럼 수정 : 디폴트를 N으로 변경
                    <button class="code">
                        ALTER TABLE <span class="text">테이블명</span>
                        MODIFY (<span class="text">칼럼 타입</span> DEFAULT <span class="text">'N'</span> NOT NULL <span class="text">NOVALIDATE</span>);
                    </button>
                </li>
                <li>칼럼 명 수정
                    <button class="code">
                        <span class="comment">/* 한꺼번에 여러개 수정x */</span>
                        <br>ALTER TABLE <span class="text">테이블명</span>
                        RENAME COLUMN <span class="text">칼럼명</span> TO <span class="text">새칼럼명</span>
                    </button>
                </li>
                <li>제약조건 제거
                    <button class="code">
                        ALTER TABLE <span class="text">테이블명</span>
                        DROP CONSTRAINT <span class="text">제약조건명</span>
                    </button>
                </li>
                <li>제약조건 추가<button class="code">
                    ALTER TABLE <span class="text">테이블명</span>
                    ADD CONSTRAINT <span class="text">제약조건명 제약조건</span>
                </button>
                </li>
            </ul>
        </li>
        <li>테이블명 수정
            <button class="code">
                RENAME <span class="text">테이블명</span> TO <span class="text">새테이블명</span>
            </button>
        </li>
        <li>테이블 제거
            <button class="code">
                DROP TABLE <span class="text">테이블명</span>
            </button>
        </li>
        <li>테이블 베이터 비움
            <button class="code">
                TRUNCATE TABLE <span class="text">테이블명</span>
            </button>
            <br><mark class="block">
                <button type="button">DROP</button> : 테이블 스키마 및 데이터가 영구적 삭제됨. ROLLBACK 가능
                <br><button type="button">TRUNCATE</button> : 테이블 비움 = 데이터만 DB에서 영구적 삭제됨. 스키마 남음. ROLLBACK 불가
            </mark>
        </li>
    </ul>
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title">DML</h2>
    <ul>
        <li>값 추가
            <button class="code">
                INSERT INTO <span class="text">테이블 (칼럼1, 칼럼2, ...)</span> VALUE <span class="text">(값1, 값2, ...)</span>;
                <br>COMMIT;
            </button>
        </li>
        <li>값 수정
            <button class="code">
                UPDATE <span class="text">테이블 A</span>
                <br> SET <span class="text">A.칼럼1 = 값1</span>
                <br>WHERE <span class="text">A.칼럼2 = 값2</span>;
                <br>COMMIT;
            </button>
        </li>
        <li>값 삭제
            <button class="code">
                DELETE FROM <span class="text">테이블 A</span>
                <br>WHERE <span class="text">A.칼럼 = 값1</span>;
                <br>COMMIT;
            </button>
        </li>
        <li>값 조회
            <button class="code">
                SELECT <span class="text">A.칼럼1, A.칼럼2</span>
                <br>FROM <span class="text">테이블 A</span>
            </button>
        </li>
        <li>값 조회 : 중복 제거
            <button class="code">
                SELECT <span class="point">DISTINCT</span> <span class="text">A.칼럼1</span>
                <br>FROM <span class="text">테이블 A</span>
            </button>
        </li>
        <li>값 조회 : 모든 칼럼 조회
            <button class="code">
                SELECT <span class="text">*</span>
                <br>FROM <span class="text">테이블 A</span>
            </button>
        </li>
        <li>ALIAS 지정
            <button class="code">
                SELECT <span class="text">A.칼럼1</span> AS <span class="text">칼럼이름1</span>
                <br><span class="text">A.칼럼2</span> AS <span class="text">칼럼이름2</span>
                <br>FROM <span class="text">테이블 A</span>
            </button>
            결과 => <img style="vertical-align: bottom; margin: 0;" src="./posts/img/post3/alias-table.png" alt="alias 지정 결과 테이블">
        </li>
        <li>합성 연산자로 문자 연결
            <button class="code">
                SELECT  <span class="text">A.칼럼1 <span class="point">||</span> '(' <span class="point">||</span> 칼럼2  <span class="point">||</span> ')' <span class="point">||</span> '-' <span class="point">||</span> A.칼럼3</span> AS <span class="text">칼럼이름1</span>
                FROM <span class="text">테이블 A</span>;
            </button>
            결과 => <img style="vertical-align: bottom; margin: 0;" src="./posts/img/post3/합성연산자.png" alt="합성연산자 결과 테이블">
        </li>
        <li>DUAL 테이블로 연산 수행
            <button class="code">
                SELECT <span class="text">연산</span> AS <span class="text">칼럼이름1</span>
                <br>FROM <span class="text">DUAL</span>
            </button>
        </li>
    </ul>
</article>
<hr>

<article id="sub4">
    <h2 class="sub-title">TCL</h2>
    <ul>
        <li><button type="button">트랜잭션</button>
            <ul>
                <li>DB의 논리적 연산 단위, 분할할 수 없는 최소단위 <b class="red">=> ALL or NOTHING</b></li>
                <li>1개 트랜잭션 = 하나 이상의 SQL 문장 포함</li>
                <li>특징
                    <ul>
                        <li><button type="button" class="red">원자성(Atomicity)</button> : 모두 성공 or 모두 실패</li>
                        <li><button type="button" class="red">일관성(Consistency)</button> : 실행 이후 DB 내용 잘못X</li>
                        <li><button type="button" class="red">고립성(Isolation)</button> : 트랜잭션 실행 도중 다른 트랜잭션의 영향X</li>
                        <li><button type="button" class="red">지속성(Durability)</button> : 트랜잭션 성공적 수행 => 갱신된 DB내용 영구적 저장</li>
                    </ul>
                </li>
                <li>명령어 <b class="red">*무결성 보장</b>
                    <ul>
                        <li>
                            <button type="button" class="red">COMMIT</button> : 트랜잭션 완료 <span class="point">=> 영구 반영</span></li>
                        <li>
                            <button type="button" class="red">ROLLBACK</button> : 입력·수정·삭제 데이터 <b>COMMIT</b> 이전에 취소 <span class="point">=> 변경전으로 복구</span></li>
                        <li>
                            <button type="button" class="red">SAVEPOINT</button> : <span class="point">저장점 지정</span>
                            <code class="block">
                                SAVEPOINT <span class="text">저장점이름1</span>;
                                <br>...
                                <br>SAVEPOINT <span class="text">저장점이름2</span>;
                                <br>...
                                <br>ROLLBACK TO <span class="text">저장점이름1</span>;
                                <br>ROLLBACK TO <span class="text">저장점이름2</span>;
                            </code>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="flex">
                        <li>
                            <mark class="block">
                                <b class="red">*커밋, 롤백 이전 데이터 상태</b>
                                <br>단지 BUFFER만 영향받은 상태 .’. 복구 가능
                                <br>현재 사용자 : <b class="red">SELECT문</b>으로 결과 확인 가능 
                                <br><span class="point">타사용자 : 볼 수 없음
                                <br>변경된 행 -> <b>LOCKING</b>
                            </span>
                            </mark>
                        </li>
                        <li>
                            <mark class="block">
                                <b class="red">*커밋, 롤백 이후</b>
                                <br>변경사항을 DB에 반영.
                                <br><span class="point">모든 사용자가 결과 확인 가능
                                    <br>관련행 <b>LOCKING 풀림</b>
                                </span>
                            </mark>
                        </li>
                    </ul>
                </li>
                <li><b class="red">* DML 문장 이후 커밋없이 DDL 문장이 실행되면 
                    <br>=> <button type="button" class="red">DDL 수행 전 DML들이 자동으로 커밋됨</button> .’. 주의가 필요함</b>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post3;