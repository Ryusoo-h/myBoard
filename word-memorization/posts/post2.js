export const post2 = `
<h1 class="title">SQLD 2. 데이터 모델과 성능(62문)</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-08</span>
    <span class="modification-date">수정일 : 2023-06-08</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>성능 데이터 모델링</mark> <mark>정규화</mark> <mark>반정규화</mark> <mark>대량 데이터에 따른 성능</mark> <mark>데이터베이스 구조와 성능</mark> <mark>분산 데이터베이스와 성능</mark> 
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">성능 데이터 모델링</h2>
    <ul>
        <li><b>정의</b> : 성능향상 목적. 데이터 모델링 때부터 <b>정규화, 반정규화, 테이블 통합, 테이블 분할, 조인 구조, PK, FK</b> 등 성능 관련 사항 반영</li>
        <li><b>수행시점</b>
            <ul>
                <li>사전 수행시 비용▼</li>
                <li>분석/설계 단계에서 DB처리 성능을 향상시킬 수 있는 방법을 주도면밀하게 고려해야함</li>
            </ul>
        </li>
        <li><b>고려사항</b>
            <ol>
                <li>데이터모델링 시 <b>정규화</b> 정확히 수행</li>
                <li><b>DB 용량 산정</b> 수행</li>
                <li>DB에 발생하는 <b>트랜잭션의 유형 파악</b></li>
                <li>용량, 트랜잭션 유형에 따라 <b>반정규화</b> 수행</li>
                <li><b>이력 모델의 조정. PK/FK조정, 슈퍼 타입/서브 타입 조정 수행</b></li>
                <li>성능 관점에서 <b>데이터 모델 검증</b></li>
            </ol>
        </li>
        <li><b>정규화를 통한 성능 향상 전략</b>
            <ul>
                <li>입력/수정/삭제 <b>이상 현상 제거</b></li>
                <li>중복 속성 제거 -> 한 테이블의 데이터 용량 최소화</li>
                <li><span class="red">데이터 처리 속도가 빨라질수도 느려질수도 있다
                    <br>* 조회는 조건에 따라 향상/저하됨
                    <br>* 입력/수정/삭제 시는 무조건 성능 향상됨
                </span></li>
            </ul>
        </li>
        <li><b>정규화 용어</b>
            <ul>
                <li><button type="button">정규화</button> : 더 작은 단위 테이블로 설계하는 과정. 데이터 모델을 정규형에 맞도록 고치는 과정</li>
                <li><button type="button">정규형</button> : 정규화 규정. 정규화 결과에 의해 도출된 데이터 모델이 갖춰야할 특성</li>
                <li><button type="button">함수적 종속성</button> : 테이블의 특정 <mark>칼럼A</mark>의 값을 알면 다른 칼럼B를 알 수 있을 때, <mark>칼럼B</mark>는 <mark>칼럼A</mark>에 <b>함수적 종속성</b>이 있다함</li>
                <li><button type="button">결정자와 종속자</button> : <b>결정자</b> = <mark>칼럼A</mark> <b>종속자</b> = <mark>칼럼B</mark></li>
                <li><button type="button">다치종속</button> : 결정자 <mark>칼럼A</mark>에 의해 <mark>칼럼B</mark>의 값을 다수 알 수 있을때 <mark>칼럼B</mark>는 <mark>칼럼A</mark>에 <b>다치종속</b>되었다 함</li>
            </ul>
        </li>
        <li><b>정규화 효과 및 장점</b>
            <ol>
                <li>상호종속성이 강한 데이터 요소 분리. 독립적 개념으로 정의
                    <br>-> <mark><b>High Cohesion & Loose Coupling 원칙</b></mark>에 충실 <b class="point">=> 유연성 극대화</b></li>
                <li>개념세분화 <b class="point">=> 재활용 가능성▲</b></li>
                <li>Non-key 데이터 요소 한번만 표현 <b class="point">=> 중복최소화(데이터 품질확보, 저장공간 절약, DML 성능)</b></li>
            </ol>
        </li>
    </ul>
</article>
<hr>

<article id="sub2">
    <h2 class="sub-title">정규화</h2>
    <ul>
        <li>이론
            <ul>
                <li><button type="button">1차 정규화</button> : 함수 종속성에 근거 <b class="point">-> 속성의 원자성 확보 (복수 속성값X)</b></li>
                <li><button type="button">2차 정규화</button> : 함수 종속성에 근거 <b class="point">-> 부분종속 속성 분리</b></li>
                <li><button type="button">3차 정규화</button> : 함수 종속성에 근거 <b class="point">-> 일반속성에 종속적인 속성 분리 = 이전종속 속성 분리</b></li>
                <li><button type="button">보이스-코드 정규화</button> : 함수 종속성에 근거 <b class="point">-> 결정자 안에 함수종속을 가진 주식별자 분리</b></li>
                <li><button type="button">4차 정규화</button> : 다치 종속 <b class="point">-> 다가 종속 속성 분리</b></li>
                <li><button type="button">5차 정규화</button> : 조인에 의해 발생하는 이상 제거 <b class="point">-> 결합종속일 경우 두개 이상의 N개로 분리</b></li>
            </ul>
        </li>
        <li>성능
            <ol>
                <li><b>인덱스 사용</b>을 통해 <b>조인 연산</b> 수행시 성능상 단점X</li>
                <li>정규화 -> <b>소량 테이블 생성</b> => 성능상 유리</li>
                <li>정규화시 <b>동일한 종류 속성은 1개</b>임 => 하나의 인덱스만 만들어짐</li>
            </ol>
        </li>
    </ul>
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title"><button type="button">반정규화</button></h2>
    <ul>
        <li><b>정의</b>
            <ul>
                <li>for <b>성능향상</b>. 개발/운영의 단순화를 위해 <b>중복, 통합, 분리함</b></li>
                <li><b class="red">데이터 무결성이 깨질 수 있는 위험 有</b></li>
                <li><b>데이터 조회시 디스크 I/O량 多로 인한 <span class="red">성능저하</span></b> 또는 <b>경로가 먼 JOIN으로 인한 <span class="red">성능저하 예상시</span></b> 반정규화 함</li>
            </ul>
        </li>
        <li><b>절차</b>
            <ol class="flex">
                <li>1. 반졍규화 대상 조사 <b class="point">→</b></li>
                <li>2. 다른 방법 유도 검토 <b class="point">→</b></li>
                <li>3. 테이블, 속성, 관계 반정규화</li>
            </ol>
        </li>
        <li><b>분류</b>
            <ul class="flex" style="flex-direction: column">
                <li>
                    <mark class="block">
                        <button type="button" class="red">테이블 반정규화</button>
                        <ul>
                            <li><button type="button">테이블 병합</button>
                                <ul>
                                    <li>1:1 관계 테이블 병합</li>
                                    <li>1:M 관계 테이블 병합</li>
                                    <li>슈퍼/서브 타입 테이블 병합</li>
                                </ul>
                            </li>
                            <li><button type="button">테이블 분할</button> <b class="point">=> 디스크 I/O 분산처리/데이터 효율▲</b>
                                <ul>
                                    <li><button type="button">수직분할</button> : 칼럼 단위 테이블 1:1로 분리</li>
                                    <li><button type="button">수평분할</button> : 로우 단위 테이블 쪼갬</li>
                                </ul>
                            </li>
                            <li><button type="button">테이블 추가</button>
                                <ul>
                                    <li><button type="button">중복 테이블 추가</button> : 서버가 다른 경우 테이블 구조 중복 <b class="point">-> 원격 조인 제거</b></li>
                                    <li><button type="button">통계 테이블 추가</button> : 미리 계산수행 <b class="point">=> 조회 성능▲</b></li>
                                    <li><button type="button">이력 테이블 추가</button> : 마스터 테이블 레코드 중복</li>
                                    <li><button type="button">부분 테이블 추가</button> : 자주 이용하는 집중화된 칼럼을 별도 테이블로 생성 <b class="point">=> 디스크 I/O 줄임</b></li>
                                </ul>
                            </li>
                        </ul>
                    </mark>
                </li>
                <li>
                    <mark class="block">
                        <button type="button" class="red">칼럼 반정규화</button>
                        <ul>
                            <li><button type="button">중복 칼럼 추가</button> : 중복 칼럼 위치 <b class="point">=> 조인 감소</b></li>
                            <li><button type="button">파생 칼럼 추가</button> : 미리 계산 => 칼럼에 보관</li>
                            <li><button type="button">이력 테이블 칼럼 추가</button> : 불특정날, 최근값 조회 사용. <b class="point">=> 성능저하 예방</b></li>
                            <li><button type="button">PK에 의한 칼럼 추가</button> : PK안 데이터를 일반 속성으로 생성 <b class="point">=> PK안 특정값을 조회할 때 성능 향상</b></li>
                            <li><button type="button">응용시스템의 오작동을 위한 칼럼 추가</button> : 원래 값 복구 원할 시 이전 데이터 중복 보관기법 (임시 기법) <br>=> 이력 데이터 모델로 풀면 정상 데이터 모델 기법이 됨</li>
                        </ul>
                    </mark>
                </li>
                <li>
                    <mark class="block">
                        <button type="button" class="red">관계 반정규화</button>
                        <ul>
                            <li><button type="button">중복 관계 추가</button> : 여러 경로를 거친 조인 시 성능 저하 예방 => 추가적인 관계를 맺음</li>
                        </ul>
                    </mark>
                </li>
            </ul>
        </li>
    </ul>
    <button type="button">💛단어</button>
    <button type="button" class="red">💛단어</button>
    <button type="button" class="not-hidden">💛단어</button>
</article>
<hr>

<article id="sub4">
    <h2 class="sub-title">대량 데이터에 따른 성능</h2>
    <ul>
        <li><b>분할개요</b>
            <ul>
                <li><b>수평/수직 분할로 I/O감소 시킴</b></li>
                <li>테이블 데이터는 블록단위로 디스크에 저장됨
                    <br><b class="point">=> 대용량 테이블에서 발생할 수 있는 현상</b>
                    <ul>
                        <li><button type="button">로우 체이닝</button> : 로우의 길이가 너무 김 => <b>두 개 이상의 블록에 걸쳐</b> 하나의 로우가 저장된 상태</li>
                        <li><button type="button">로우 마이그레이션</button> : 데이터 수정시, 해당 블록에 저장하지 못하고 <b>다른 데이터블록 빈공간에 저장</b>되는 방식</li>
                    </ul>
                    <br><b class="point">=> 로우 체이닝, 로우 마이그레이션 발생</b>
                    <br>-> 조회시 절대적인 Block I/O 횟수 多
                    <br>-> Dist I/0할 가능성▲ <b class="red">=> 성능이 급격히 저하됨</b>
                </li>
            </ul>
        </li>
        <li>.’. 한 테이블에 많은 수의 칼럼을 가지고 있는 경우, 대용량 테이블 성능 향상 방안
            <ul>
                <li><button type="button">수직분할</button></li>
                <li><button type="button">수평분할</button>
                    <ul>
                        <li><button type="button" class="red">Range 파티셔닝</button> : 범위</li>
                        <li><button type="button" class="red">List 파티셔닝</button> : 특정값</li>
                        <li><button type="button" class="red">Hash 파티셔닝</button> : hash 알고리즘</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub5">
    <h2 class="sub-title">데이터베이스 구조와 성능</h2>
    <ul>
        <li><button type="button">슈퍼/서브 타입 모델</button> : 슈퍼/서브타입 데이터 모델 변환 = 성능 데이터 모델링
            <ul>
                <li><b>변환의 중요성</b>
                    <ul>
                        <li>트랜잭션은 항상 일괄처리하는데 <b>테이블을 개별로 유지시</b> => <b class="red">UNION 연산에 성능저하</b> 될 수 있음</li>
                        <li>트랜잭션은 항상 서브타입 개별 처리하는데 <b>테이블 통합시</b> => 불필요하게 많은 <b class="red">데이터집약으로 성능이 저하</b> 될 수 있음</li>
                        <li>트랜잭션은 항상 슈퍼+서브타입 공통처리하는데 <b>개별 유지/한테이블</b> => <b class="red">집약되어 성능이 저하</b> 될 수 있음</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>기준</b> : <button type="button">데이터양</button>, <button type="button">트랜잭션 유형</button></li>
        <li><b>타입 특징</b>
            <ul>
                <li><button type="button">1:1 타입 (One to One 타입)</button> : 개별 테이블 유리</li>
                <li><button type="button">슈퍼+서브 타입(Plus 타입)</button> : 슈퍼+서브 타입 테이블</li>
                <li><button type="button">All in One 타입(Single 타입)</button> : 하나의 테이블</li>
            </ul>
            <img src="./posts/img/post2/db-structure.png" alt="슈퍼/서브타입 데이터 모델 변환 이미지">
        </li>
        <li><b>PK/FK 칼럼 순서와 성능</b>
            <ul>
                <li>트랜잭션 조회 패턴에 따라 PK/FK 칼럼 순서를 조정해야함</li>
                <li>PK가 복합키일 경우 
                    <br>-> 인덱스 선두 칼럼에 대한 조건이 가능한한 <code>=</code>조건으로 들어와야 함.
                    <br>'.' <b class="red"><code>=</code>조건이 아니면 인덱스 전체/ 테이블 전체를 읽게됨</b>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<article id="sub6">
    <h2 class="sub-title"><button type="button">분산 데이터베이스</button>와 성능</h2>
    <ul>
        <li>= 여러곳에 분산되어있는 DB => 하나의 가상 시스템으로 사용할 수 있도록 한 DB</li>
        <li><b>개요</b> : 논리적으로 동일한 시스템에 속하지만, 컴퓨터 네트워크를 통해 물리적으로 분산되어있는 데이터들의 모임</li>
        <li>
            <ul>
                <li><button type="button">분할 투명성(단편화)</button> : 하나의 논리적 관계가 단편 분할됨 -> <b>단편 사본이 여러 SITE에 저장됨</b></li>
                <li><button type="button">위치 투명성</button> : 사용하려는 데이터의 <b>저장 장소 명시 불필요</b></li>
                <li><button type="button">지역 사상 투명성</button> : <b>각 지역 시스템의 이름과 무관한 이름 사용 가능</b>. 지역 DBMS와 물리적 DB 사이의 MAPPING 보장</li>
                <li><button type="button">중복 투명성</button> : DB객체가 <b>여러 SITE에 중복되었는지 알 필요가 없는</b> 성질</li>
                <li><button type="button">장애 투명성</button> : 구성요소(DBMS, computer)의 <b>장애에 무관한</b> 트랜잭션의 원자성 유지</li>
                <li><button type="button">병행 투명성</button> : 다수 트랜잭션 동시 수행 시 <b>결과의 일관성 유지</b>. Time Stamp, 분산 2단계 Locking을 이용 구현</li>
            </ul>
        </li>
        <li>적용 방법
            <ul>
                <li>업무 흐름, 업무 구성에 따른 아키텍쳐 특징에 따라 DB 구성</li>
                <li>업무 특징에 따라 DB분산 구조를 선택적으로 설계하는 능력 필요</li>
            </ul>
        </li>
        <li>장단점
            <ul class="flex">
                <li>장점
                    <ul>
                        <li>지역 자치성</li>
                        <li>점증적 시스템 용량 확장</li>
                        <li>신뢰성과 가용성, 효용성과 융통성</li>
                        <li><b class="point">빠른 응답속도 & 통신비용▼</b></li>
                        <li>시스템 규모의 적절한 조절</li>
                        <li><b class="point">각 지역 사용자의 요구 수용 증대</b></li>
                    </ul>
                </li>
                <li>단점
                    <ul>
                        <li><b class="red">소프트웨어 개발 비용▲</b></li>
                        <li>오류 잠재성 증대</li>
                        <li>처리 비용 증대</li>
                        <li>설계·관리 복잡성·비용</li>
                        <li><b class="red">불규칙한 응답속도</b></li>
                        <li>통제 어려움. 데이터 무결성에 대한 위협</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>적용 기법
            <ul>
                <li><button type="button">테이블 위치 분산</button></li>
                <li><button type="button">테이블 분할 분산</button>
                    <ul>
                        <li><button type="button">수평분할</button></li>
                        <li><button type="button">수직분할</button></li>
                    </ul>
                </li>
                <li><button type="button">테이블 복제 분산</button> : 동일한 테이블을 다른 지역/서버에 동시 생성·관리
                    <ul>
                        <li><button type="button">부분복제</button> : 통합된 테이블 -> 본사 가짐. 각 지사별로 <b>지사해당 로우 가짐</b></li>
                        <li><button type="button">광역복제</button> : 통합된 테이블 -> 본사 가짐. 각 지사에도 <b>본사와 동일한 데이터를 모두 가짐</b></li>
                    </ul>
                </li>
                <li><button type="button">테이블 요약 분산</button> : 지역/서버간 데이터가 비슷하지만 다른 유형으로 존재하는 경우
                    <ul>
                        <li><button type="button">분석요약</button> : 각 지사별 존재하는 <b>요약정보를 본사에 통합</b> -> 다시 전체에 대해 요약 정보 산출</li>
                        <li><button type="button">통합요약</button> : 각 지사별 존재하는 <b>다른 내용 정보를 본사에 통합</b> -> 다시 전체에 대해 요약정보 산출</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post2;