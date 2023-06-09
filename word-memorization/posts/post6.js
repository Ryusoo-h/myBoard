export const post5 = `
<h1 class="title">SQLD 5. SQL 최적화 기본원리(63문)</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-09</span>
    <span class="modification-date">수정일 : 2023-06-09</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>옵티마이저와 실행계획</mark> <mark>인덱스 기본</mark> <mark>조인 수행 원리</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><button type="button">옵티마이저</button></h2>
    <p>
        : 사용자가 질의한 sql문에 대한 최적의 실행방법(= 실행 계획)을 결정함
        <br><span class="red">* 완벽하지 않음</span>
        <br>사용자 -> 옵티마이저 -> 프로시저
        <br><mark class="block">
            <button type="button">비용기반 옵티마이저</button> : 비용이 가장 적게 드는 실행계획 선택하는 방식
            <br><span class="point">비용 = SQL 문을 처리하는데 예상되는 시간/자원</span>
            <br>테이블, 인데스 등의 통계 정보와 시스템 통계정보를 이용하여 최적의 실행계획 도출
            <br><b>인덱스 사용 비용 > 테이블 전체 스캔비용</b> 일때 <button type="button">테이블 풀 스캔</button> 유도
        </mark>
    </p>
    <ul>
        <li><b>구성요소</b>
            <ul>
                <li><button type="button">질의 변환기 Query Transformer</button> : SQL문을 처리하기에 보다 <b>용이한 형태로 변환</b></li>
                <li>
                    <button type="button">비용 예측기 Estimator</button> : 대안 계획의 비용을 예측하는 모듈
                    <ul>
                        <li>연산의 중간 집합 크기 및 결과 집합의 크기, 분포도 등의 예측함
                            <br>-> 보다 나은 예측을 이해 <span class="point">정확한 통계 정보가 필요함
                        </li>
                    </ul>
                </li>
                <li>
                    <button type="button">대안계획생성기 Plan Generator</button> : 동일한 결과를 생성하는 다양한 대안 계획을 생성하는 모듈
                    <ul>
                        <li>연산의 적용 순서, 연산방법변경, 조인 순서 변경 등을 통해서 생성</li>
                        <li><span class="point">가능한 모든 대안 계획을 생성</span>해야 나은 최적화를 수행할 수 있음</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>실행계획 읽는법</b> : 위에서 아래로, 바깥쪽에서 안쪽으로 읽는다.
            <br>실행계획에는 사용 객체, 조인 방법, 조인 순서, 액세스 패턴등 정보가 출력됨</li>
        <li></li>
    </ul>
</article>
<hr>

<article id="sub2">
    <h2 class="sub-title">인덱스 기본</h2>
    <p>
        <b>인덱스</b> : 원하는 데이터를 효과적으로 검색할 수 있도록 도움
        <br>한 테이블은 <button type="button">0~N</button>개의 인덱스 가짐
        <br><span class="red">*한 테이블에 인덱스가 과도하게 많으면 <button type="button" class="red">DML</button>작업 시 부하가 발생함</span>
        <br><b>실행 계획</b>에서 인덱스는 <button type="button" class="red">ACCESS</button>로 접근하는 부분이다
    </p>
    <ul>
        <li>
            <b>블록 종류</b>
            <ul>
                <li><button type="button">루트 블록</button> : 가장 상위에 존재하는 블록.</li>
                <li><button type="button">브랜치 블록</button> : 분기를 목적으로 하는 블록</li>
                <li><button type="button">리프 블록</button> : 트리의 가장 아래 단계 존재</li>
            </ul>
            <mark><b>루트/블랜치 블록의 각 레코드</b> : 하위 블록에 대한 주소값 가짐.</mark>
        </li>
        <li>
            <b>구성</b>
            <ul>
                <li><b class="point">칼럼의 데이터</b></li>
                <li>
                    <b class="point">ROWID</b> : 해당 데이터를 가지고 있는 행 위치를 가리키는 레코드 식별자
                    <br><b>구성</b>
                    <ul>
                        <li>
                            <button style="vertical-align: top;" type="button">ROWID</button> : 
                            <mark style="vertical-align: top;" class="block"><button type="button">데이트 블록 주소</button><br>(=데이터 파일 번호 
                                + <mark class="block"><button type="button">블록 번호</button>(=데이터 파일 내에서 부여한 상대적 순번)</mark>)
                            </mark>
                            + <mark style="vertical-align: top;" class="block"><button type="button">로우 번호</button>(=블록 내 순번)<br><br></mark>
                        </li>
                    </ul>
                </li>
                <li>구성 상세
                    <img src="./posts/img/post6/BTree 구조.png" alt="B*Tree 구조로 보는 인덱스 구성 상세">
                    <ul>
                        <li>Doubly Linked List 이중 연결 리스트</li>
                        <li>
                            <button type="button">LMC(LeftMost Child)</button> : 자식 노드 중 가장 왼쪽 끝에 위치한 블록 가리킴
                            <br> 가리키는 주소로 찾아간 블록에는 키 값을 가진 <span class="point">첫번째 레코드보다 작거나 같은 레코드가 저장</span>돼 있음
                        </li>
                    </ul>
                </li>
                <li><b>SQL 튜닝 = <button type="button">RANDOM I/O</button>와의 전쟁</b></li>
            </ul>
        </li>
        <li class="flex">
            <mark class="block">
                <button type="button" class="red">Single Block I/O 발생</button>
                <ul>
                    <li>인덱스 루트 블록을 읽을 때</li>
                    <li>인덱스 루트블록에서 얻은 주소로 브랜치 블록을 읽을 때</li>
                    <li>인덱스 브랜치 블록에서 읽은 주소로 리프 블록을 읽을 때</li>
                    <li>인덱스 리프블록에서 읽은 주소로 테이블 블록을 읽을 때</li>
                </ul>
                <mark class="block">
                    <span class="red"><b>변별력 좋은 경우</b> : 인덱스 스캔</span> <span class="exam">ex) 주문번호, 고객번호, 주민번호</span>
                </mark>
            </mark>
            <mark class="block">
                <button type="button" class="red">Multi Block I/O</button>
                <ul>
                    <li>: 캐시에서 찾지 못한 특정 블록을 읽으려고 I/O Call을 할때,
                        <br>디스크 상에 그 블록과 인접한 블록을 한꺼번에 읽어 캐시에 미리 적재하는 것
                        <br><b>BD_FILE_MULTIBLOCK_READ_COUNT</b>
                    </li>
                </ul>
                <mark class="block">
                    <span class="red"><b>변별력이 좋지 않은 경우</b> : 풀 테이블 스캔이 더 좋을 수 있다</span> <span class="exam">ex) 성별</span>
                </mark>
            </mark>
        </li>
        <li>
            <mark class="block">
                <button type="button" class="red">인덱스 스캔</button>
                <ul>
                    <li>인덱스를 구성하는 칼럼의 값 기반 -> <b>데이터 추출 엑세스 기법</b></li>
                    <li>
                        <b>인덱스 리프 블록 구성</b> : 인덱스 구성 칼럼, ROWID
                        <br>.'. 인덱스를 읽음 => 대상 ROWID를 찾음
                        <br>=> 해당 ROWID로 테이블 찾음
                        <br><span class="red">*SQL문에서 필요로하는 칼럼이 모두 인덱스 구성 칼럼이면
                            <br>=> 테이블 찾을 필요없음
                        </span>
                    </li>
                    <li>
                        <span class="point">
                            일반적으로 인덱스 스캔을 통해 데이터 추출
                            <br>=> 결과 : <b>인덱스 칼럼 순서로 정렬</b>된 상태로 반환
                        </span>
                        <br><br><br><br><br>
                    </li>
                    <li><b>특징</b>
                        <ul>
                            <li>인덱스가 존재해야만 이용 가능</li>
                            <li>한번에 한 개의 BLOCK만 읽음</li>
                            <li><span class="point">극히 일부분의 데이터 조회시 유리</span></li>
                            <li><span class="red">Table Random Access에 의한 부하 발생</span></li>
                            <li><span class="red">읽었던 블록을 반복해서 읽는 비효율 발생<Br>(논리적인 블록 I/O의 개수 많아짐)</span></li>
                        </ul>
                    </li>
                </ul>
            </mark>
            <mark class="block">
                <button type="button" class="red">풀 테이블 스캔</button>
                <ul>
                    <li>테이블의 모든 데이터를 읽음 -> 조건에 맞으면 결과 추출, 아니면 버림
                    </li>
                    <li><button type="button">HWM(HIGH WATER MARK)</button>
                        <br>: 테이블에 데이터가 쓰여졌던 블록 상의 최상위 위치
                    </li>
                    <li>모든 데이터 읽음 => 시간이 오래 걸릴 수 있음</li>
                    <li>
                        <span class="point">풀 테이블 스캔으로 읽은 블록은 재사용성이 낮다고 보고 
                            <br><b>메모리 버퍼 캐시</b>에서 금방 제거될 수 있도록 관리함
                        </span>
                    </li>
                    <li>
                        <b>옵티마이저가 풀 테이블 스캔을 선택하는 이유</b>
                        <ul>
                            <li>조건 존재X</li>
                            <li>조건 기준으로 사용가능한 인덱스 X</li>
                            <li>풀 테이블 스캔이 유리하다고 판단하는 경우</li>
                            <li>전체 테이블 스캔하도록 강제로 힌트를 지정한 경우</li>
                        </ul>
                        <br>
                    </li>
                    <li><b>특징</b>
                        <ul>
                            <li>항상 이용 가능</li>
                            <li>한번에 여러개의 BLOCK을 읽음</li>
                            <li><span class="point">많은 데이터 조회 시 성능 상 유리</span></li>
                            <li>Table Random Access부하 없음</li>
                            <li>읽었던 블록을 반복해서 읽는 경우 없음<br><br></li>
                        </ul>
                    </li>
                </ul>
            </mark>
        </li>
        <li>
            <b>인덱스 스캔 종류</b>
            <ul>
                <li>
                    <button type="button" class="red">인덱스 범위 스캔</button>
                    <ol>
                        <li>인덱스 이용 => <b>한건 이상의 데이터 추출</b></li>
                        <li>
                            인덱스스캔 -> 특정 범위 스캔 -> 대상 레코드 하나하나 리턴
                        </li>
                        <li><b><code>INDEX (RANGE SCAN) OF ...</code></b></li>
                    </ol>
                </li>
                <li>
                    <button type="button" class="red">인덱스 유일 스캔</button>
                    <ol>
                        <li>인덱스 이용 => <b>단 하나의 데이터 추출</b></li>
                        <li>중복 레코드 허용X</li>
                        <li>반드시 <code>=</code>조건 으로 조회</li>
                        <li><b><code>INDEX (UNIQUE SCAN) OF ...</code></b></li>
                    </ol>
                </li>
                <li>
                    <button type="button" class="red">인덱스 전체 스캔</button>
                    <ol>
                        <li><b>인덱스 처음~끝, 전체 읽으면서</b> 조건에 맞는 데이터 추출</li>
                        <li>데이터 추출시 리프블록의 ROWID로 테이블 레코드 찾음 -> 조건 부합 시 해당 행 리턴</li>
                        <li><b><code>INDEX (FULL SCAN) OF ...</code></b></li>
                    </ol>
                </li>
                <li>
                    <button type="button" class="red">인덱스 스킵 스캔</button>
                    <ol>
                        <li><b>인덱스 선두 컬럼이 조건절에 없어도 인덱스를 활용하는 스캔 방식</b></li>
                        <li>조건절에 빠진 인덱스
                            <br>선두 컬럼(성별)의 Distinct Value의 개수가 적고, 후행 컬럼(연봉)의 Distinct Value의 개수가 많을 때 유용</li>
                        <li>인덱스 스킵 스캔은 <b>루트/브랜치에서 읽은 컬럼 값</b> 정보 이용 -> 조건절에 부합하는 레코드를 포함할 <b>가능성이 있는 리프 블록만 엑세스</b>함</li>
                        <li><b><code>INDEX (SKIP SCAN) OF ...</code></b></li>
                    </ol>
                </li>
                <li>
                    <button type="button" class="red">인덱스 고속 전체 스캔</button>
                    <ol>
                        <li><b>물리적으로 디스크에 저장된 순서대로</b> 인덱스 리프 블록들을 <button type="button">Multi Block I/O 방식</button>으로 읽음</li>
                        <li><button type="button" class="red">병렬 인덱스 스캔</button>도 가능</li>
                        <li><span class="red">인덱스 정렬 순서의 보장x</span></li>
                    </ol>
                </li>
                <li>
                    <button type="button" class="red">인덱스 역순 범위 스캔</button>
                    <ol>
                        <li>
                            <span class="point"><b>인덱스 리프 블록</b> = Doubly Linked List방식으로 저장되어 있음</span>
                            <br>위 성질을 이용하여 인덱스를 역순으로 읽을 수 있음
                        </li>
                        <li>내림차순 정렬 결과 집합 얻을 수 있다. 스캔 순서를 제외하면 <button type="button" class="red">인덱스 범위 스캔</button>과 동일함</li>
                        <li><span class="exam">ex) 최신 데이터를 가져올 때</span></li>
                        <li><b><code>INDEX (RANGE SCAN DESCENDING) OF ...</code></b></li>
                    </ol>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title">조인 수행 원리</h2>
    <p>
        조인은 3개 이상의 테이블을 조인한다고 해도
        <br><b>특정 시점에 2개의 테이블 단위로 조인</b>이 된다
        <br><span class="exam">ex) A,B조인 후 -> 결과 집합과 C를 조인하는 방식</span>
        <br>
        <br>각각 조인단계에서 다른 조인 기법이 사용될 수 있다
        <br><span class="exam">ex) A,B 조인 시 NL조인 -> 결과와 C 조인 시 해시조인</span>
    </p>
    <ul>
        <li>
            <b>조인 기법 비교</b>
            <table style="text-align: center;">
                <thead>
                    <tr>
                        <th width="31%"><button type="button" class="red">NL 조인(NL Join)</button></th>
                        <th width="35%"><button type="button" class="red">소트 머지 조인(Sort Merge Join)</button></th>
                        <th width="34%"><button type="button" class="red">해시 조인(Hash Join)</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><mark>부분 범위 처리 가능</mark></td>
                        <td>
                            <mark>전체 범위 처리(일부분 제외)</mark>
                            <ul>
                                <li>
                                    <b>양쪽 집합을 개별적으로 읽음</b>
                                    <br>-> 조인 컬럼에 인덱스가 없는 상황에서 
                                    <br>두 테이블을 독립적으로 읽어 
                                    <br><b class="point">조인 대상 집합을 줄일 수 있을때 아주 유리</b>
                                </li>
                                <li>
                                    <b>양쪽 집합 정렬 후</b> 
                                    <br>-> NL조인과 같은 오퍼레이션
                                </li>
                                <li>
                                    <b>스캔 위주의 액세스 방식</b>
                                    <br>양쪽 소스 집합에서 정렬 대상 레코드를 
                                    <br>찾는 작업 => 인덱스를 이용
                                    <br><b>Random 액세스 방식</b>으로 처리될 수 있음
                                </li>
                            </ul>
                        </td>
                        <td>
                            <mark>대량의 데이터 처리</mark> 필요, 쿼리 수행 시간이
                            <br>오래 걸리는 대용량 테이블 조인할때 사용
                            <br><span class="point"><b>=> 대량 범위 처리, 배치, SP처리에 유리</b>
                                <br><br>*SP : SQL 명령문들을 마치 하나의 함수처럼 사용하기 위해 DB 내부에 저장된 쿼리의 집합
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button">OLTP 적합<br>(Online Transaction Processing)</button>
                            <br>= 소량의 데이터를 처리하거나 <br>부분범위처리가 가능한
                        </td>
                        <td></td>
                        <td><button type="button">OLAP 적합<br>(Online Analytical Processing)</button></td>
                    </tr>
                    <tr>
                        <td>
                            부하 : <button type="button" class="red">Random Access =>부하</button>
                            <br>RANBOM 엑세스 위주
                            <br>(인덱스 구성이 완벽해도 <br>대량 데이터 조인 시 불리)
                        </td>
                        <td>
                            부하 : <button type="button" class="red">Sort 부하</button>
                            <button type="button" class="red">PGA 과다 사용 우려</button>
                            <br><br>정렬 작업을 생략할 수 있는 인덱스가 존재하는 경우 사용
                                <br><span class="point">* PGA : DB 접속한 모든 유저에게 할당되는 
                                <br>각각의 서버 프로세스가 독자적으로 사용하는 <br>오라클 메모리 영역</span>
                        </td>
                        <td>부하 : <button type="button" class="red">Random Access, Sort 부하X</button></td>
                    </tr>
                    <tr>
                        <td>
                            <b><button type="button">Inner</button> 테이블의 인덱스 스캔이 중요</b>
                            <br><button type="button">Driving</button> 테이블 처리 범위가 전체 성능을 결정함 <span class="point">.’. 작은 집합이 Driving 되어야 함</span>
                            <br><br><b>인덱스 유무, 인덱스 구성에 <button type="button">크게 영향 받음</button></b>
                        </td>
                        <td>
                            <b>인덱스 유무에 <button type="button">영향x</button></b>
                            <br><br>: 미리 정렬된 인덱스有
                            <br>-> 좀 더 빠르게 수행할 수는 있음
                        </td>
                        <td>
                            <b><button type="button">Hash Area Size</button> 중요</b>
                            <br>-> 해시 테이블을 생성하는 비용에 따라 
                            <br>Build Input이 작을 때 효과적
                            <br>=> '.'메모리 연산에서 끝난다
                            <br>(Hash Area에 담을 수 있을정도록 충분히)
                            <br><br><b><button type="button">등치(=) 조인</button> 매우 중요</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            순차/동시 : <button type="button">순차적</button>
                            <br><span class="point">.'. 부분 범위 처리를 유도해야 효율적 수행</span>
                            <br>JOIN 조건 : <button type="button">중요함</button>
                            <br>JOIN 방향성 : <button type="button">방향성</button>
                        </td>
                        <td>
                            순차/동시 : <button type="button">동시적</button>
                            <br><br>JOIN 조건 : <button type="button">무관함</button>
                            <br>JOIN 방향성 : <button type="button">무 방향성</button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>Driving -> Driver</b></td>
                        <td></td>
                        <td><b>Build Input</b> => 해시 테이블 -> <b>Hash Area</b>  ~ 반복
                            <b>Probe Input</b> => 해당 버킷 찾음 -> 조인성공 -> 결과 집합 포함 ~ 반복
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li>
            <b>조인 순서 중요성</b>
            <br><mark class="block" style="vertical-align: middle;">
                <b>먼저 처리되는 테이블</b>
                <br>WHERE 절에 상수/바인드 변수 조건이
                <br>존재하는 것이 성능상 유리<br><br><br>
                <ul>
                    <li><b>First Table</b></li>
                    <li><b><button type="button">Outer</button> Table</b></li>
                    <li><b><button type="button">Driving</button> Table</b></li>
                    <li><b><button type="button">Build</button> Input</b></li>
                </ul>
            </mark>
            <--------------->
            <mark class="block" style="vertical-align: middle;">
                <b>뒤에 처리되는 테이블</b>
                <br>조인 조건의 여부 및 성질이
                <br>조인 조건 성능에 영향을 미침
                <br>조인 조건 및 상수/바인드 변수 조건에 
                <br>인덱스 존재 여부가 매우 중요(NL 조인 경우)
                <ul>
                    <li><b>Second Table</b></li>
                    <li><b><button type="button">Inner</button> Table</b></li>
                    <li><b><button type="button">Driven</button> Table</b></li>
                    <li><b><button type="button">Probe</button> Input</b></li>
                </ul>
            </mark>
            <br>
            <b class="red">최적화된 Join Order</b> : First Table이 Second Table에 비해 작은 집합이어야 성능상 유리(NL, Hash 조인 경우)
        </li>
        <li>
            해시조인 연산 과정
            <ol>
                <li><button type="button">OUTER 집합</button>에서 주어진 조건을 만족하는 행을 찾음</li>
                <li>OUTER 집합의 조인 키를 기준으로 HASH 함수를 적용하며 <button type="button">HASH 테이블</button> 생성 (조인칼럼과 필요 칼럼 함께 저장)</li>
                <li>HASH 테이블에 모든 대상 집합이 들어갈때까지 <b>반복</b></li>
                <li><button type="button">INNER 집합</button>에서 주어진 조건을 만족하는 행 찾음</li>
                <li>INNER 집합의 조인 키를 기준으로 HASH 함수를 적용하여 <button type="button">해당 버킷</button>을 찾음</li>
                <li>조인에 성공하면 해당 ROW를 <b>결과집합에 포함</b></li>
                <li>INNER 집합에서 모든 대상건을 찾을때까지 해당 과정 <b>반복</b></li>
            </ol>
        </li>
    </ul>
</article>
`;

export default post5;