
const post = `
<h1 class="title">정처기 실기 2. 데이터 입·출력 구현3</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-06</span>
    <span class="modification-date">수정일 : 2023-07-06</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B039 정규화(Normalization)</mark>
    <br><mark>A040 반정규화(Denormalization)</mark>
    <br><mark>C041 시스템 카탈로그</mark>
    <br><mark>A042 트랜잭션 분석 / CRUD 분석</mark>
    <br><mark>C043 인덱스</mark>
    <br><mark>B044 뷰 / 클러스터</mark>
    <br><mark>B045 파티션</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">039</b></h2>
    <ul>
        <li><button type="button" class="red">정규화</button>(<button type="button">Normalization</button>)
            <ul>
                <li>테이블의 속성들이 <b>상호 종속적인 관계를 갖는 특성</b>을 이용하여 테이블을 <b>무손실 분해하는 과정</b></li>
                <li>목적 : 가능한 한 중복을 제거하여 삽입, 삭제, 갱식 이상의 발생 가능성 줄임</li>
                <li><b>정규형</b>
                    <ul>
                        <li><button type="button" class="not-hidden">제 1 정규형</button>(<b>1NF; First Normal Form</b>)
                            : 테이블에 속한 모든 속성의 <b>도메인이 원자 값만으로</b> 되어 있는 정규형
                        </li>
                        <li><button type="button" class="not-hidden">제 2 정규형</button>(<b>2NF; Second Normal Form</b>)
                            : 기본키가 아닌 모든 속성이 기본키에 대하여 <b>완전 함수적 종속을 만족</b>하는 정규형
                        </li>
                        <li><button type="button" class="not-hidden">제 3 정규형</button>(<b>3NF; Third Normal Form</b>)
                            : 기본키가 아닌 모든 속성이 기본키에 대하여 <b>이행적 함수적 종속</b>을 만족하지 않는</button> 정규형
                        </li>
                        <li><button type="button" class="not-hidden">BCNF</button>(<b>Boyce-Codd Normal Form</b>)
                            : 테이블에서 모든 결정자가 후보키인 정규형
                        </li>
                        <li><button type="button" class="not-hidden">제 4 정규형</button>(<b>4NF; Fourth Normal Form</b>)
                            : 테이블 R에 <b>다중 값 종속(MVD; Multi Valued Dependency) A→→ B</b>가 존재할 경우 R의 모든 속성이 A에 함수적 종속 관계를 만족하는 정규형
                        </li>
                        <li><utton type="button" class="not-hidden">제 5 정규형</utton>(<b>5NF; Fifth Normal Form</b>)
                            : 테이블 R의 모든 <b>조인 종속(JD; Joint Dependency)</b>이 R의 후보키를 통해서만 성립되는 정규형
                        </li>
                    </ul>
                </li>
                <li><b>정규화 과정별 필요한 작업</b>
                    <ul>
                        <li><button type="button" class="not-hidden">비정규 릴레이션</button></li>
                        <li>↓ <button type="button">도메인을 원자 값만으로 구성</button></li>
                        <li><button type="button" class="not-hidden">1NF</button></li>
                        <li>↓ <button type="button">부분적 함수적 종속 제거</button></li>
                        <li><button type="button" class="not-hidden">2NF</button></li>
                        <li>↓ <button type="button">이행적 함수적 종속 제거</button></li>
                        <li><button type="button" class="not-hidden">3NF</button></li>
                        <li>↓ <button type="button">결정자이면서 후보키가 아닌 것 제거</button></li>
                        <li><button type="button" class="not-hidden">BCNF</button></li>
                        <li>↓ <button type="button">다치 종속 제거</button></li>
                        <li><button type="button" class="not-hidden">4NF</button></li>
                        <li>↓ <button type="button">조인 종속성 이용</button></li>
                        <li><button type="button" class="not-hidden">5NF</button></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">040</b></h2>
    <ul>
        <li><button type="button" class="red">반정규화</button>(<button type="button">Denormalization</button>)
            <ul>
                <li>시스템의 성능을 향상하고 개발 및 운영의 편의성 등을 높이기 위해 <b>정규화된 데이터 모델을 의도적으로 통합, 중복, 분리하여 정규화 원칙을 위배하는 행위</b></li>
                <li>시스템 성능 향상, 관리 효율성 증가 but <span class="red">데이터의 일관성 및 정합성이 저하될 수 있음</span></li>
                <li>과도한 반정규화는 오히려 성능을 저하시킬 수 있음</li>
                <li><b>방법</b>
                    <ul>
                        <li><button type="button" class="red">테이블 통합</button>
                            <ul>
                                <li>두 개의 테이블이 Join되어 사용되는 경우가 많을 경우 성능 향상을 위해 아예 하나의 테이블로 만들어 사용하는것</li>
                                <li><b>고려 경우</b>
                                    <ul>
                                        <li>두 개의 테이블에서 발생하는 프로세스가 동일하게 자주 처리되는 경우</li>
                                        <li>항상 두 개의 테이블을 이용하여 조회 수행 시</li>
                                    </ul>
                                </li>
                                <li><b>종류</b>
                                    <ul>
                                        <li><button type="button" class="not-hidden">1:1 관계 테이블 통합</button></li>
                                        <li><button type="button" class="not-hidden">1:N 관계 테이블 통합</button></li>
                                        <li><button type="button" class="not-hidden">슈퍼타입/서브타입 테이블 통합</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">테이블 분할</button>
                            <ul>
                                <li><button type="button">수평 분할</button>
                                    <ul>
                                        <li><b>레코드</b>를 기준으로 레이블 분할</li>
                                        <li>레코드별로 사용 빈도 차이가 큰 경우 <b>사용빈도</b>에 따라 테이블 분할</li>
                                    </ul>
                                </li>
                                <li><button type="button">수직 분할</button>
                                    <ul>
                                        <li>하나의 테이블에 <b>속성이 너무 많은 경우 속성</b>을 기준으로 테이블 분할</li>
                                        <li><b>종류</b>
                                            <ul>
                                                <li><button type="button" class="not-hidden">갱신 위주의 속성 분할</button></li>
                                                <li><button type="button" class="not-hidden">자주 조회되는 속성 분할</button></li>
                                                <li><button type="button" class="not-hidden">크기가 큰 속성 분할</button></li>
                                                <li><button type="button" class="not-hidden">보안을 적용해야 하는 속성 분할</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">중복 테이블 추가</button>
                            <ul>
                                <li>추가 작업의 효율성을 향상시키기위해 테이블을 추가하는것</li>
                                <li><b>추가 경우</b>
                                    <ul>
                                        <li>여러 테이블에서 데이터를 추출해서 사용해야 할 경우</li>
                                        <li>다른 서버에 저장된 테이블을 이용해야하는 경우</li>
                                    </ul>
                                </li>
                                <li><b>방법</b>
                                    <ul>
                                        <li><button type="button">집계 테이블의 추가</button> : 집계 데이터를 위한 테이블을 생성하고, 각 원본 테이블에 트리거를 설정하여 사용하는것</li>
                                        <li><button type="button">진행 테이블의 추가</button> : 이력 관리 등의 목적으로 추가하는 테이블</li>
                                        <li><button type="button">특정 부분만을 포함하는 테이블의 추가</button> : 데이터가 많은 테이블의 특정 부분만을 사용하는 경우 해당 부분만으로 새로운 테이블을 생성</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">중복 속성 추가</button>
                            <ul>
                                <li>조인해서 데이터를 처리할 때 데이터를 조회하는 경로를 단축하기 위해 자주 사용하는 속성을 하나 더 추가하는 것</li>
                                <li>데이터 무결성 확보가 어렵고, 디스크 공간이 추가로 필요함</li>
                                <li><b>추가 경우</b>
                                    <ul>
                                        <li>조인이 자주 발생하는 속성인 경우</li>
                                        <li>접근 경로가 복잡한 속성인 경우</li>
                                        <li>액세스의 조건으로 자주 사용되는 속성인 경우</li>
                                        <li>기본키의 형태가 적절하지 않거나 여러 개의 속성으로 구성된 경우</li>
                                    </ul>
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
    <h2 class="sub-title">041</h2>
    <ul>
        <li><button type="button" class="red">시스템 카탈로그</button>(<button type="button">System Catalog</button>)
            <ul>
                <li>시스템 그 자체에 관련있는 <b>다양한 객체에 관한 정보를 포함하는 시스템 데이터베이스</b></li>
                <li>시스템 카탈로그 내의 각 테이블은 사용자를 포함하여 DBMS에서 지원하는 모든 데이터 객체에 대한 <b>정의나 명세에 관한 정보를 유지 관리하는 시스템 테이블</b>임</li>
                <li>카탈로그들이 생성되면, <button type="button" class="not-hidden">데이터 사전(Data Dictionary)</button>에 저장되기 떄문에 <b>좁은 의미로는 카탈로그를 데이터 사전이라고도 함</b></li>
            </ul>
        </li>
        <li><button type="button" class="red">메타 데이터</button>(<button type="button">Meta-Data</button>)
            <ul>
                <li>시스템 카탈로그에 저장된 정보</li>
                <li>유형
                    <ul>
                        <li><button type="button" class="not-hidden">데이터베이스 객체 정보</button> : 테이블, 인덱스, 뷰 등의 구조 및 통계 정보</li>
                        <li><button type="button" class="not-hidden">사용자 정보</button> : 아이디, 패스워드, 접근 권한 등</li>
                        <li><button type="button" class="not-hidden">테이블의 무결성 제약 조건 정보</button> : 기본키, 외래키, NULL값 허용 여부 등</li>
                        <li><button type="button" class="not-hidden">함수, 프로시저, 트리거 등에 대한 정보</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">데이터 디렉터리</button>(<button type="button">Data Directory</button>)
            <ul>
                <li>데이터 사전에 수록된 데이터에 접근하는 데 필요한 정보를 관리 유지하는 시스템</li>
                <li>시스템 카탈로그와 디렉터리 차이
                    <br><button type="button" class="not-hidden">시스템 카탈로그</button> : 사용자와 시스템 모두 접근할 수 있음,
                    <br><button type="button" class="not-hidden">데이터 디렉터리</button> : 시스템만 접근할 수 있음
                </li>
                <li></li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">042</b></h2>
    <ul>
        <li><button type="button" class="red">트랜잭션</button>(<button type="button">Transaction</button>)
            <ul>
                <li>
                    데이터베이스의 상태를 변환시키는 <b>하나의 논리적 기능을 수행하기 위한 작업의 단위</b>
                    <br>또는 <b>한꺼번에 모두 수행되어야 할 일련의 연산들</b>을 의미
                </li>
                <li>데이터베이스 시스템에서 <b>병행 제어 및 회복 작업 시 처리되는 작업의 논리적 단위</b>로 사용됨</li>
                <li>사용자가 시스템에 대한 서비스 요구 시 시스템이 응답하기 위한 <b>상태 변환 과정의 작업 단위</b></li>
                <li><b>특성</b>
                    <ul>
                        <li><button type="button" class="red">원자성</button>(<button type="button">Atomicity</button>)
                            : 트랜잭션의 연산은 데이터베이스에 모두 반영되도록 <b>완료</b>되든지 아니면 전혀 반영되지 않도록 <b>복구</b>되어야함
                        </li>
                        <li><button type="button" class="red">일관성</button>(<button type="button">Consistency</button>)
                            : 트랜잭션이 그 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 변환함
                        </li>
                        <li><button type="button" class="red">독립성</button>(<button type="button">Isolation</button>)
                            : 둘 이상의 트랜잭션이 동시에 병행 실행되는 경우 어느 하나의 트랜잭션 실행중에 다른 트랜잭션의 연산이 끼어들 수 없음
                        </li>
                        <li><button type="button" class="red">영속성</button>(<button type="button">Durability</button>)
                            : 성공적으로 완료된 트랜잭션의 결과는 시스템이 고장나더라도 영구적으로 반영되어야 함
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">CRUD 분석</button>
            <ul>
                <li>프로세스와 테이블 간에 <button type="button">CRUD 매트릭스</button>를 만들어서 트랜잭션을 분석하는 것</li>
                <li>CRUD 분석을 통해 많은 트랜잭션이 몰리는 테이블을 파악할 수 있음
                    .'. 디스크 구성 시 유용한 자료로 활용할 수 있음
                </li>
                <li><button type="button">CRUD 매트릭스</button>
                    <ul>
                        <li>2차원 형태의 표.
                            <ul>
                                <li><b>행</b> = 프로세스, </li>
                                <li><b>열</b> = 테이블, </li>
                                <li><b>행 열 만나는 위치</b> = 프로세스가 테이블에 발생시키는 변화를 표시하여 프로세스와 데이터 간의 관계를 분석하는 분석 표</li>
                            </ul>
                        </li>
                        <li>트랜잭션이 테이블에 수행하는 작업을 검증함</li>
                        <li>각 셀에는 <b>Create, Read, Update, Delete</b>의 앞글자가 들어감.
                            <br>기본적으로 <b> C > D > U > R 의 우선순위</b>를 적용하여 한가지만 적지만, 활용 목적에 따라 모두 기록할 수 있음
                        </li>
                        <li>완성 시, C, R, U, D 중 어느것도 적히지 않은 행이나, C나 R이 없는 열을 확인하여 불필요하거나 누락된 테이블 또는 프로세스를 찾음</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">트랜잭션 분석</button>
            <ul>
                <li><button type="button" class="not-hidden">CRUD 매트릭스</button>를 기반으로 테이블에 발생하는 트랜잭션 양을 분석하여 <b>테이블에 저장되는 데이터의 양을 유추</b>하고,
                    <br>이를 근거로 <b>DB의 용량 산정 및 구조의 최적화</b>를 목적으로 함
                </li>
                <li>업무 개발 담당자가 수행함</li>
                <li>프로세스가 과도하게 접근하는 테이블을 확인할 수 있음. 
                    <br>이러한 집중 접근 테이블을 여러 디스크에 분산 배치함으로써 디스크 입·출력 향상을 통한 성능 향상을 가져올 수 있음</li>
                <li><button type="button" class="not-hidden">트랜잭션 분석서</button>
                    <ul>
                        <li>단위 프로세스와 CRUD 매트릭스를 이용하여 작성함</li>
                        <li>구성 요소 : 단위 프로세스, CRUD 연산, 테이블명, 컬럼명, 테이블 참고 횟수, 트랜잭션 수, 발생 주기 등</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title">043</h2>
    <ul>
        <li><button type="button" class="red">인덱스</button>(<button type="button">Index</button>)
            <ul>
                <li>데이터 레코드를 빠르게 접근하기 위해 &lt;키 값, 포인터&gt; 쌍으로 구성되는 데이터 구조</li>
                <li>레코드가 저장된 물리적 구조에 접근하는 방법 제공</li>
                <li>파일의 레코드에 빠르게 액세스 할 수 있음</li>
                <li>삽입과 삭제가 수시로 일어나는 경우에는 인덱스 개수를 최소로 하는 것이 효율적임</li>
                <li>종류
                    <ul>
                        <li><button type="button">트리 기반 인덱스</button> : 인덱스를 저장하는 블록들이 트리 구조를 이루고 있는 것</li>
                        <li><button type="button">비트맵 인덱스</button> : 인덱스 칼럼의 데이터를 Bit 값인 0 또는 1로 변환하여 인덱스키로 사용하는 방법</li>
                        <li><button type="button">함수 기반 인덱스</button> : 칼럼의 값 대신 칼럼에 특정 함수나 수식을 적용하여 산출된 값을 사용하는 것</li>
                        <li><button type="button">비트맵 조인 인덱스</button> : 다수의 조인된 객체로 구성된 인덱스</li>
                        <li><button type="button">도메인 인덱스</button> : 개발자가 필요한 인덱스를 직접 만들어 사용하는 것</li>
                    </ul>
                </li>
                <li><b>정렬에 따른 인덱스</b>
                    <ul>
                        <li><button type="button" class="red">클러스터드 인덱스</button>(<button type="button">Clustered Index</button>)
                            <ul>
                                <li>인덱스키의 순서에 따라 데이터가 정렬되어 저장되는 방식</li>
                                <li>실제 데이터가 순서대로 저장되어 있어 인덱스를 검색하지 않아도 원하는 데이터를 빠르게 찾을 수 있음</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">넌클러스터드 인덱스</button>(<button type="button">Non-Clustered Index</button>)
                            <ul>
                                <li>인덱스의 키 값만 정렬되어 있고 실제 데이터는 정렬되지 않는 방식</li>
                                <li>데이터 삽입, 삭제 발생 시 순서를 유지하기 위해 데이터를 재정렬해야 함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub6">
    <h2 class="sub-title"><b class="red">044</b></h2>
    <ul>
        <li><button type="button" class="red">뷰</button>(<button type="button">viewport</button>)
            <ul>
                <li>사용자에게 접근이 허용된 자료만을 제한적으로 보여주기 위해 <b>하나 이상의 기본 테이블로부터 유도된</b>, 이름을 가지는 <b>가상 테이블</b></li>
                <li>저장장치 내에 물리적으로 존재하지 않지만, 사용자에게는 있는것처럼 간주됨</li>
                <li>뷰를 통해서만 데이터에 접근하게 되면 뷰에 나타나지 않는 데이터를 안전하게 보호하는 효율적인 기법으로 사용할 수 있음</li>
                <li>뷰가 정의된 기본 테이블이나 뷰를 삭제하면, 그 테이블이나 뷰를 기초로 정의된 다른 뷰도 자동으로 삭제됨</li>
                <li>뷰를 정의할 때는 <b>CREATE문</b>, 제거할 때는 <b>DROP문</b>을 사용함</li>
                <li>장점
                    <ul>
                        <li>논리적 데이터 독립성 제공</li>
                        <li>동일 데이터에 대해 동시 여러 사용자의 상이한 응용이나 요구를 지원해줌</li>
                        <li>사용자의 데이터 관리를 간단하게 해줌</li>
                        <li>접근 제어를 통한 자동 보안이 제공됨</li>
                    </ul>
                </li>
                <li>단점
                    <ul>
                        <li>독립적인 인덱스를 가질 수 없음</li>
                        <li>뷰의 정의를 변경할 수 없음</li>
                        <li>뷰로 구성된 내용에 대한 삽입, 삭제, 갱신 연산에 제약이 따름</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">클러스터</button>(<button type="button">Cluster</button>)
            <ul>
                <li>데이터 저장 시 데이터 액세스 효율을 향상시키기 위해 <b>동일한 성격의 데이터를 동일한 데이터 블록에 저장하는 물리적 저장 방법</b></li>
                <li>클러스터링 된 테이블은 데이터 조회 속도를 향상시키지만 입력, 수정, 삭제에 대한 작업 성능을 저하시킴</li>
                <li>데이터의 분포도가 넓을수록 유리함 <span class="exam">분포도 = (조건에 맞는 레코드 수 / 전체 릴레이션 레코드 수) * 100</span></li>
                <li>데이터 분포도가 넓은 테이블을 클러스터링하면 저장 공간을 절약할 수 있음</li>
                <li>처리 범위가 넓은 경우에는 <button type="button">단일 테이블 클러스터링</button>을, 조인이 많이 발생하는 경우에는 <button type="button">다중 테이블 클러스터링</button>을 사용함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub7">
    <h2 class="sub-title"><b class="red">045</b></h2>
    <ul>
        <li><button type="button" class="red">파티션</button>(<button type="button">Partition</button>)
            <ul>
                <li>대용량의 테이블이나 인덱스를 작은 논리적 단위인 파티션으로 나누는 </li>
                <li>대용량 DB의 경우 몇 개의 중요한 테이블에만 집중되어 데이터가 증가되므로,
                    <br>이런 테이블들을 작은 단위로 나눠 분산시키면 성능 저하를 방지할 뿐만 아니라 데이터 관리도 쉬워짐
                </li>
                <li>데이터 처리는 <b>테이블 단위</b>로 이뤄지고, 데이터 저장은 <b>파티션별</b>로 수행됨</li>
                <li><b>장점</b>
                    <ul>
                        <li>데이터 접근 시 액세스 범위를 줄요 쿼리 성능이 향상됨</li>
                        <li>파티션별로 데이터가 분산되어 저장되므로 디스크의 성능이 향상됨</li>
                        <li>파티션별로 백업 및 복구를 수행하므로 속도가 빠름</li>
                        <li>시스템 장애 시 데이터 손상 정도를 최소화할 수 있음</li>
                        <li>데이터 가용성이 향상됨</li>
                        <li>파티션 단위로 입·출력을 분산시킬 수 있음</li>
                    </ul>
                </li>
                <li><b>단점</b>
                    <ul>
                        <li>하나의 테이블을 세분화하여 관리하므로 세심한 관리가 요구됨</li>
                        <li>테이블간 조인에 대한 비용이 증가함</li>
                        <li>용량이 작은 테이블에 파티셔닝을 수행하면 오히려 성능이 저하됨</li>
                    </ul>
                </li>
                <li><b>종류</b>
                    <ul>
                        <li><button type="button" class="red">범위 분할</button>(<button type="button">Range Partitioning</button>)
                            <ul>
                                <li>지정한 열의 값을 기준으로 분할함 <span class="exam">일별, 월별, 분기별</span></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">해시 분할</button>(<button type="button">Hash Partitioning</button>)
                            <ul>
                                <li>해시 함수를 적용한 결과 값에 따라 데이터를 분할함</li>
                                <li>특정 파티션에 데이터가 집중되는 범위 분할의 단점을 보완한 것. 데이터를 고르게 분산할 때 유용함</li>
                                <li>특정 데이터가 어디에 있는지 판단할 수 없음</li>
                                <li>고객번호, 주민번호 등과 같이 데이터가 고른 컬럼에 효과적임</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">조합 분할</button>(<button type="button">Composite Partitioning</button>)
                            <ul>
                                <li>범위 분할로 분할한 다음 해시 함수를 적용하여 다시 분할하는 방식</li>
                                <li>범위 분할한 파티션이 너무 커서 관리가 어려울 때 유용함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post;