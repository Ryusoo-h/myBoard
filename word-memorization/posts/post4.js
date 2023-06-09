export const post4 = `
<h1 class="title">SQLD 3-2. SQL 기본(65문)</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-09</span>
    <span class="modification-date">수정일 : 2023-06-09</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br>3-1 : <mark>RDB개요</mark> <mark>DDL</mark> <mark>DML</mark> <mark>TCL</mark> 
    <br>3-2 : <mark>WHERE 절</mark> <mark>함수</mark> <mark>GROUP BY, HAVING 절</mark> <mark>ORDER BY 절</mark> <mark>조인</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">WHERE 절</h2>
    <ul>
        <li>
            <b>연산자종류</b>
            <ul>
                <li><button type="button">비교 연산자</button> : =, >, >=, <=, <</li>
                <li>
                    <button type="button">SQL 연산자</button>
                    <ul>
                        <li><code><span class="point">NOT </span>BETWEEN A AND B, , , </code></li>
                        <li><code><span class="point">NOT </span>IN(리스트1, 리스트2,...)</code></li>
                        <li><code>LIKE ‘비교문자열’</code></li>
                        <li><code>IS <span class="point">NOT </span>NULL</code></li>
                    </ul>
                </li>
                <li><button type="button">논리 연산자</button></li>
                <li>
                    <mark class="block">
                        <b class="red">*와일드 카드</b>
                        <br><button type="button" class="red">%</button> : 0개이상 어떤 문자
                        <br><button type="button" class="red">_</button> : 1개 단일 문자
                    </mark>
                </li>
            </ul>
        </li>
        <li><b>우선순위</b> :  ①()괄호    ②NOT연산자    ③비교/SQL연산자    ④AND    ⑤OR</li>
        <li>
            <b>부정비교연산자</b>
            <ul>
                <li>같지 않다 : <code>!=</code>, <code><></code>, <code>^=</code></li>
                <li>값과 같지 않다 : <code>NOT 칼럼명 = 값</code></li>
                <li>값보다 크지 않다 : <code>NOT 칼럼명 > 값</code></li>
            </ul>
        </li>
        <li>
            <b class="red">문자유형비교방법</b>
            <ul>
                <li>
                    <b class="point">양쪽 모두 CHAR타입인 경우</b> : 길이가 다르면 길이가 작은 쪽에 공백 추가-> 다른 문자가 나올때까지 비교.
                    <br><span class="red">*공백수만 다르면 <button type="button" class="red">같은값</button></span>
                </li>
                <li>
                    <b class="point">한쪽이 VARCHAR타입인 경우</b> : 길이가 다르면 짧은것이 끝날때까지 비교
                    <br><span class="red">*길이 긴것이 <button type="button" class="red">큰것</button>. 공백도 문자로 판단</span>
                </li>
                <li><b class="point">상수값과 비교</b>상수를 <button type="button" class="red">변수타입</button>과 동일하게 바꿈</li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub2">
    <h2 class="sub-title">함수</h2>
    <ul>
        <li>단일행 함수
            <ul>
                <li><button type="button" class="red">SELECT</button>, <button type="button" class="red">WHERE</button>, <button type="button" class="red">ORDER BY</button> 절에 사용 가능</li>
                <li>여러 인자를 입력해도 <b class="red">단 하나의 결과</b>만 리턴</li>
                <li><span class="point">함수 중첩 가능</span></li>
                <li>종류
                    <ul>
                        <li>
                            <b class="point">문자형함수</b> : 문자입력 -> 문자/숫자값 반환
                            <ul>
                                <li>소문자로 변환 : <button type="button">LOWER (‘문자열’)</button></li>
                                <li>대문자로 변환 : <button type="button">UPPER (‘문자열’)</button></li>
                                <li>아스키코드값 출력 : <button type="button">ASCII (‘문자열’)</button></li>
                                <li>아스키코드 문자 출력 : <button type="button">CHR (‘아스키코드값’)</button></li>
                                <li>문자열 결합 : <button type="button">CONCAT (‘문자열’)</button></li>
                                <li>문자열을 N1, N2으로 잘라냄 : <button type="button">SUBSTR (‘문자열’, N1, N2)</button></li>
                                <li>문자열 길이 : <button type="button">LENGTH (‘문자열’)</button></li>
                                <li>왼쪽 공백 제거 : <button type="button">LTRIM (‘문자열’)</button></li>
                                <li>오른쪽 공백 제거 : <button type="button">RTRIM (‘문자열’)</button></li>
                                <li>양쪽 공백 제거 : <button type="button">TRIM (‘문자열’)</button></li>
                                <br>
                            </ul>
                        </li>
                        <li>
                            <b class="point">숫자형함수</b>
                            <ul>
                                <li>절댓값 반환 : <button type="button">ABS (N)</button></li>
                                <li>사인값 반환 : <button type="button">SIGN (N)</button></li>
                                <li>N1을 N2로 나눈 나머지 : <button type="button">MOD (N1, N2)</button></li>
                                <li>올림 : <button type="button">CEIL (N)</button></li>
                                <li>버림 : <button type="button">FLOOR (N)</button></li>
                                <li>N1을 소숫점 N2자리에서 반올림 : <button type="button">ROUND (N1, N2)</button></li>
                                <li>숫자N을 0의 자리에서 자름 : <button type="button">TRUNC (N)</button></li>
                                <li>N1을 소숫점 N2자리에서 자름 : <button type="button">TRUNC (N1, N2)</button></li>
                                <li>e의 N승 : <button type="button">EXP (N)</button></li>
                                <li>N1지수 N2밑 : <button type="button">LOG (N1, N2)</button></li>
                                <li>N의 자연로그 : <button type="button">LN (N)</button></li>
                                <li>N1의 N2승 : <button type="button">POWER (N1, N2)</button></li>
                                <li>사인, 코사인, 탄젠트 : <button type="button">SIN, COS, TAN</button></li>
                                <br>
                            </ul>
                        </li>
                        <li>
                            <b class="point">날짜형함수</b>
                            <ul>
                                <li><span class="exam">ex) 2020-06-21 18:25:41</span> : <button type="button">SYSDATE</button></li>
                                <li><span class="exam">ex) 2020</span> : <button type="button">EXTRACT (YEAR FROM SYSDATE)</button></li>
                                <li><span class="exam">ex) 6</span> : <button type="button">EXTRACT (MONTH FROM SYSDATE)</button></li>
                                <li><span class="exam">ex) 21</span> : <button type="button">EXTRACT (DAY FROM SYSDATE)</button></li>
                                <li>
                                    <span class="exam">ex) 형식에 따라 출력</span> : <button type="button">TO_CHAR (SYSDATE ‘형식’)</button>
                                    <br><img src="./posts/img/post4/function-for-date.png" alt="형식 표">2023-06-09-11-46-09.png
                                </li>
                                <li><span class="exam">ex) 숫자로 변환</span> : <button type="button">TO-NUMBER (TO_CHAR (SYSDATE ‘형식’))</button></li>
                                <li><span class="exam">ex) 1일을 뺀 날짜</span> : <button type="button">SYSDATE -1</button></li>
                                <li><span class="exam">ex) 1초를 뺀 날짜 </span> : <button type="button">SYSDATE -(1/24/60/60)</button></li>
                                <br>
                            </ul>
                        </li>
                        <li>
                            <b class="point">변환형함수</b>
                            <ul>
                                <li><b>명시적 형 변환</b> : 데이터 변환형 함수로 데이터 유형을 변환하도록 <span class="point">명시</span>해주는 경우</li>
                                <li><b>암시적 형 변환</b> : <span class="point">DBMS가 자동으로</span> 데이터 유형을 변환하는 경우</li>
                                <br>
                            </ul>
                        </li>
                        <li>
                            <b class="point">NULL관련 함수</b>
                            <ul>
                                <li>
                                    <mark><b class="red">*NULL은 연산할 수 없다</b></mark>
                                </li>
                                <li>
                                    <b class="point"><code class="block"><button type="button" class="red">NVL</button>("값", "지정값") 함수</code></b>
                                    값이 <b>NULL</b>인 경우 => <button type="button">지정값을 출력하고</button>, 
                                    <br>값이 <b>NULL</b>이 아니면 => <button type="button">원래 값을 그대로 출력한다</button>.
                                    <br><span class="red"><b>MAX( )</b> 로 감쌌을 때와 아닐 때 차이</span>
                                    <img style="vertical-align: top;" src="./posts/img/post4/max예시.png" alt="max()예시">
                                </li>
                                <li>
                                    <b class="point"><code class="block"><button type="button" class="red">NULLIF</button>("값1", "값2") 함수</code></b>
                                    값이 같으면 => <button type="button">NULL</button>, 
                                    <br>값이 다르면 => <button type="button">값1 리턴</button>.
                                </li>
                                <li>
                                    <b class="point"><code class="block"><button type="button" class="red">COALESCE</button>("값1", "값2", "값3") 함수</code></b>
                                    널이 아닌 첫번째 값 리턴
                                </li>
                                <br>
                            </ul>
                        </li>
                        <li>
                            <b class="point">단일행 CASE 표현 종류</b>
                            <ul>
                                <li><code class="block">
                                    CASE WHEN 조건
                                    <br>THEN 값 혹은 SQL문
                                    <br>ELSE 값 혹은 SQL문
                                    <br>END
                                </code></li>
                                <li>
                                    <code class="block"><button type="button" class="red">DECODE</button>(칼럼, 조건1, 값1, 조건2, 값2, 디폴트값)</code>
                                    칼럼 = 조건1이 TRUE면 => 값1,
                                    <br>칼럼 = 조건2가 TRUE면 => 값2,
                                    <br>둘 다 아니면 디폴트값
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

<article id="sub3">
    <h2 class="sub-title">GROUP BY, HAVING 절</h2>
    <ul>
        <li>
            <b>집계함수</b>
            <ul>
                <li>여러 행의 그룹이 모여 그룹당 하나의 결과를 돌려줌</li>
                <li><b class="red">GROUP BY 절</b> => 행들을 소그룹화 함 (*GROUP BY절은 결과에 NULL 포함함)</li>
                <li><button type="button" class="red">SELECT</button>, <button type="button" class="red">HAVING</button>, <button type="button" class="red">ORDER BY</button> 절에 사용 가능</li>
                <li><mark><span class="red">*집계함수 사용시 <u><b>GROUP BY</b>로 그룹핑 대상을 알려주지 않은 칼럼</u>을 <b>SELECT절</b>에 기제하면 에러발생</span></mark></li>
                <li><mark class="block">
                    <b>📢 UNION과 UNION ALL</b>
                    <br><button type="button" class="red">UNION</button> : 쿼리 결과 합, 중복 제거
                    <br><button type="button" class="red">UNION ALL</button> : 쿼리 결과 합
                </mark></li>
                <li>종류
                    <ul>
                        <li>NULL 포함한 <b>행의 수</b> : <button type="button">COUNT(*)</button></li>
                        <li>표현식이 NULL이 아닌 <b>행의 수</b> : <button type="button">COUNT(표현식)</button></li>
                        <li>표현식이 NULL값인것을 제외한 <b>합계</b> : <button type="button">SUM(표현식)</button></li>
                        <li>표현식이 NULL값인것을 제외한 <b>평균</b> : <button type="button">AVG(표현식)</button></li>
                        <li>표현식이 NULL값인것을 제외한 <b>최댓값</b> : <button type="button">MAX(표현식)</button></li>
                        <li>표현식이 NULL값인것을 제외한 <b>최솟값</b> : <button type="button">MIN(표현식)</button></li>
                        <li>표현식이 NULL값인것을 제외한 <b>표준편차</b> : <button type="button">STDDEV(표현식)</button></li>
                        <li>표현식이 NULL값인것을 제외한 <b>분산</b> : <button type="button">VARIAN(표현식)</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <b class="red">GROUP BY절</b> : 소그룹별 기준 정함 -> <b class="red">SELEC절</b>에 집계함수 사용
            <br>수행순서 : <b class="red">WHERE절</b> -> <b class="red">GROUP BY절</b> -> <b class="red">HAVING절</b><span class="point"> (.’.HAVING절이 보통 GROUP BY절 뒤에 옴. 앞에와도 틀린건 아님)</span>
        </li>
        <li>
            <b class="red">HAVING절</b> : <b class="red">GROUP BY절</b>의 기준항목. 소그룹 집계함수를 이용한 조건 표시
            <br>=> 제한조건 => 조건을 만족하는 내용 출력
            <br><mark class="block">
                <span class="red">*WHERE절과 HAVING절의 차이 </span>
                <br><b class="red">WHERE 절</b> : 테이블에서 어떤 집합?
                <br><b class="red">HAVING 절</b> : GROUP BY한 결과에서 어떤 집합?
            </mark>
        </li>
    </ul>
</article>
<hr>

<article id="sub4">
    <h2 class="sub-title">ORDER BY 절</h2>
    <ul>
        <li>특정 칼럼을 기준으로 정렬하여 출력</li>
        <li><b class="red">ORDER BY</b> 절에서 칼럼명, ALIAS명, 칼럼 순서를 나타내는 정수 사용 가능</li>
        <li>
            default : 오름차순
            <br> <code><b>ORDER BY</b> 칼럼명 <button type="button" class="red">DESC</button>;</code> => 내림차순
        </li>
        <li>오라클기준 : <b>NULL</b> = 가장 큰 값으로 간주</li>
        <li><mark><span class="red">* <b>SELECT 절에 존재하지 않는 칼럼</b>으로 정렬해도 정렬해줌</span></mark></li>
        <li>
            <mark class="block">
                <span class="red">*<b>GROUP BY와 함께 쓰는 ORDER BY</b>는 ‘일반칼럼’을 사용할 수 없다
                    <br>'.' ORDER BY기준이 GROUP BY절에 있는 칼럼으로 제한되기 때문
                </span>
            </mark>
        </li>
        <li>
            <b>SELECT문의 실행 순서</b>
            <ol>
                <li><b>FROM 절</b><span class="point"> => 조회 테이블 <b>참조</b></span></li>
                <li><b>WHERE 절</b><span class="point"> => 대상 행 <b>조회</b></span></li>
                <li><b>GROUP BY 절</b><span class="point"> => 대상 행 <b>그룹화</b></span></li>
                <li><b>HAVING 절</b><span class="point"> => <b>그룹화</b>한것중에 <b>조건</b>이 맞는거 출력</span></li>
                <li><b>SELECT 절</b><span class="point"> => SELECT절에 기재한 <b>칼럼, 식 계산</b></span></li>
                <li><b>ORDER BY 절</b><span class="point"> => 결과 <b>정렬</b></span></li>
            </ol>
        </li>
    </ul>
</article>
<hr>

<article id="sub5">
    <h2 class="sub-title"><button type="button">JOIN</button></h2>
    <ul>
        <li>두 개 이상 테이블 연결 => 데이터 출력</li>
        <li>일반적으로 PK, FK 연관 조인 <span class="point">(일반칼럼끼리의 조인도 있음)</span></li>
    </ul>
</article>
`;

export default post4;