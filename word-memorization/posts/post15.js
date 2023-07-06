
// class 잊을까봐 따로 적는 탬플릿..
// 💛마다 빼먹지말고 내용 적고 💛지우기

//📌 article마다 sub1, sub1-2 이렇게 아이디를 주어야합니다.
// article이 각 heading tag를 감싼 구조여야함('.' aside-menu 출력을 위해) 
// 구조 예시)
// <article id="sub1">
//     <h2 class="sub-title">제목</h2>
// </article>

// <hr>

// <article id="sub2">
//     <h2 class="sub-title">제목</h2>
//     <article id="sub2-1">
//         <h3>소제목</h3>
//     </article>
//     <article id="sub2-2">
//         <h3>소제목</h3>
//     </article>
// </article>

// ✅word-memorization은 heading태그에 따른 asideMenu를 따로 출력하지 않기 때문에
// 꼭 article에 id를 주는 규칙을 지키지 않아도 괜찮습니다.

const post = `
<h1 class="title">정처기 실기 2. 데이터 입·출력 구현4</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-06</span>
    <span class="modification-date">수정일 : 2023-07-06</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>C046 분산 데이터베이스 설계</mark>
    <br><mark>B047 데이터베이스 이중화 / 서버 클러스터링</mark>
    <br><mark>B048 데이터베이스 보안</mark>
    <br><mark>B049 데이터베이스 백업</mark>
    <br><mark>B050 스토리지</mark>
    <br><mark>D051 논리 데이터 모델의 변환</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">046</h2>
    <ul>
        <li><button type="button">데이터베이스 용량 설계</button>
            <ul>
                <li>데이터가 저장될 공간을 정의하는 것</li>
                <li>설계시 테이블에 저장될 데이터양과 인덱스, 클러스터 등이 차지하는 공간 등을 예측하여 반영해야 함</li>
                <li>목적
                    <ul>
                        <li>데이터베이스의 용량을 정확히 산정하여 디스크의 저장 공간을 효과적으로 사용하고 확장성 및 가용성을 높임</li>
                        <li>디스크의 특성을 고려하여 설계함으로써 디스크의 입·출력 부하를 분산시키고 채널의 병목 현상을 최소화함</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">분산 데이터베이스</button>
            <ul>
                <li><b>논리적</b>으로는 하나의 시스템에 속하지만 <b>물리적</b>으로는 네트워크를 통해 연결된 여러 개의 사이트에 분산된 데이터베이스</li>
                <li>데이터의 처리나 이용이 많은 지역에 데이터베이스를 위치시킴으로써 데이터의 처리가 가능한 해당 지역에서 해결될 수 있도록 함</li>
                <li><b>설계 목적</b> : 애플리케이션이나 사용자가 분산되어 저장된 데이터에 접근하게 함</li>
                <li><b>목표</b>
                    <ul>
                        <li><button type="button" class="red">위치 투명성</button>(<button type="button">Location Transparency</button>)
                            : 액세스하려는 데이터베이스의 실제 위치를 알 필요 없이 단지 데이터베이스의 논리적인 명칭만으로 액세스할 수 있음
                        </li>
                        <li><button type="button" class="red">중복 투명성</button>(<button type="button">Replication Transparency</button>)
                            : 동일 데이터가 여러 곳에 중복되어 있더라도 사용자는 마치 하나의 데이터만 존재하는 것처럼 사용하고, 시스템은 자동으로 여러 자료에 대한 작업을 수행함
                        </li>
                        <li><button type="button" class="red">병행 투명성</button>(<button type="button">Concurrency Transparency</button>)
                            : 분산 데이터베이스와 관련된 다수의 트랜잭션들이 동시에 실현되더라도 그 트랜잭션의 결과는 영향을 받지 않음
                        </li>
                        <li><button type="button" class="red">장애 투명성</button>(<button type="button">Failure Transparency</button>)
                            : 트랜잭션, DBMS, 네트워크, 컴퓨터 장애에도 불구하고 트랜잭션을 정확하게 처리함
                        </li>
                    </ul>
                </li>
                <li><b>설계 방법</b>
                    <ul>
                        <li><button type="button" class="red">테이블 위치 분산</button>
                            <ul>
                                <li>데이터베이스의 테이블을 각기 다른 서버에 분산시켜 배치하는 방법</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">분할</button>(<button type="button">Fragmentation</button>)
                            <ul>
                                <li>테이블의 데이터를 분할하여 분산시키는 것</li>
                                <li>분할 규칙 :
                                    <button type="button" class="not-hidden">완전성(Completeness)</button>
                                    <button type="button" class="not-hidden">재구성(Reconstruction)</button>
                                    <button type="button" class="not-hidden">상호 중첩 배제(Disjointness)</button>
                                </li>
                                <li><b>주요 분할 방법</b>
                                    <ul>
                                        <li>수평 분할 : 특정 속성의 값을 기준으로 행 단위로 분할</li>
                                        <li>수직 분할 : 데이터 칼럼(속성) 단위로 분할</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">할당</button>(<button type="button">Allocation</button>)
                            <ul>
                                <li>동일한 분할을 여러 개의 서버에 생성하는 분산 방법</li>
                                <li>중복이 없는 할당과 중복이 있는 할당으로 나뉨</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">047</b></h2>
    <ul>
        <li><button type="button" class="red">데이터베이스 이중화</button>(<button type="button">Database Replication</button>)
            <ul>
                <li>시스템 오류로 인한 데이터베이스 서비스 중단이나 물리적 손상 발생 시 이를 복구하기 위해 <b>동일한 데이터베이스를 복제하여 관리하는 것</b></li>
                <li>수행시, 하나 이상의 데이터베이스가 항상 같은 상태를 유지하므로 데이터 베이스에 문제가 발생하면 복제된 데이터베이스를 이용하여 즉시 문제를 해결할 수 있음</li>
                <li>여러개의 데이터베이스를 동시에 관리하므로 사용자가 수행하는 작업은 데이터베이스 이중화 시스템에 연결된 다른 데이터베이스에도 동일하게 적용됨</li>
                <li>애플리케이션을 여러 개의 데이터베이스에서 분산 처리하므로 데이터베이스의 부하를 줄일 수 있음</li>
                <li>이를 이용하면 손쉽게 백업 서버를 운영할 수 있음</li>
                <li><b>분류</b>
                    <ul>
                        <li><button type="button">Eager 기법</button> : <b>트랜잭션 수행 중 데이터 변경이 발생하면</b> 이중화된 모든 데이터베이스에 즉시 전달하여 변경 내용이 즉시 적용되도록 하는 기법</li>
                        <li><button type="button">Lazy 기법</button> : <b>트랜잭션의 수행이 종료되면</b> 변경 사실을 새로운 트랜잭션에 작성하여 각 데이터베이스에 전달되는 기법. 데이터베이스마다 새로운 트랜잭션이 수행되는 것으로 간주됨</li>
                    </ul>
                </li>
                <li><b>구성 방법</b>
                    <ul>
                        <li><button type="button" class="red">활동-대기 방법</button>(<button type="button">Active-Standby 방법</button>)
                            <ul>
                                <li>한 DB가 활성 상태로 서비스하고 있으면 다른 DB는 대기하고 있다가 <b></b>활성 DB에 장애가 발생하면</b> 대기 상태에 있던 DB가 자동으로 모든 서비스를 대신 수행함</li>
                                <li>구성 방법과 관리가 쉬워 많은 기업에서 이용됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">활동-활동 방법</button>(<button type="button">Active-Active</button>)
                            <ul>
                                <li>두 개의 DB가 서로 다른 서비스를 제공하다가 <b>둘 중 한쪽 DB에 문제가 발생하면</b> 나머지 다른 DB가 서비스를 제공함</li>
                                <li>두 DB가 모두 처리를 하기 때문에 처리율이 높지만 구성 방법 및 설정이 복잡함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">서버 클러스터링</button>(<button type="button">Clustering</button>)
            <ul>
                <li>두 대 이상의 서버를 하나의 서버처럼 운영하는 기술</li>
                <li>서버 이중화 및 공유 스토리지를 사용하여 서버의 고가용성을 제공함</li>
                <li><b>클러스터링 종류</b>
                    <ul>
                        <li><button type="button">고가용성 클러스터링</button> : 일반적으로 언급되는 클러스터링으로, 하나의 서버에 장애가 발생하면 다른 노드(서버)가 받아 처리하여 서비스 중단을 방지하는 방식</li>
                        <li><button type="button">병렬 처리 클러스터링</button> : 전체 처리율을 높이기 위해 하나의 작업을 여러 개의 서버에서 분산하여 처리하는 방식</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>복구 소요 시간 / 기준점
            <ul>
                <li><button type="button" class="red">RTO</button>(<button type="button">Recovery Time Objective, 목표 복구 시간</button>)
                    <br>: 비상사태 또는 업무 중단 시점으로부터 복구되어 가동될 때까지의 소요 시간 <span class="exam">ex) 장애 발생 후 6시간 내 복구 가능</span>
                </li>
                <li><button type="button" class="red">RPO</button>(<button type="button">Recovery Point Objective, 목표 복구 시점</button>)
                    <br>: 비상사태 또는 업무 중단 시점으로부터 데이터를 복구할 수 있는 기준점 <span class="exam">ex) 장애 발생 전인 지난 주 금요일에 백업시켜 둔 복원 시점으로 복구 가능</span>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">048</b>
    </h2>
    <ul>
        <li><button type="button" class="red">데이터베이스 보안</button>
            <ul>
                <li>데이터베이스의 일부 또는 전체에 대해서 <b>권한이 없는 사용자가 액세스하는 것을 금지</b>하기 위해 사용되는 기술</li>
                <li><b>보안을 위한 데이터 단위</b>는 테이블 전체로부터 특정 테이블의 특정 행과 열에 있는 데이터 값에 이르기까지 다양함</li>
            </ul>
        </li>
        <li><button type="button" class="red">암호화</button>(<button type="button">Encryption</button>)
            <ul>
                <li>데이터를 보낼 때 송신자가 지정한 수신자 이외에는 그 내용을 알 수 없도록 평문을 암호문으로 변환하는 것</li>
                <li><button type="button" class="red">암호화 과정</button>(<button type="button">Encryption 과정</button>) : 암호화 되지 않은 평문을 암호문으로 바꾸는 과정</li>
                <li><button type="button" class="red">복호화 과정</button>(<button type="button">Decryption 과정</button>) : 암호문을 원래의 평문으로 바꾸는 과정</li>
                <li><b>암호화 기법</b>
                    <ul>
                        <li><button type="button" class="red">개인키 암호 방식</button>(<button type="button">Private Key Encryption</button>)</li>
                        <li><button type="button" class="red">공개키 암호 방식</button>(<button type="button">Public Key Encryption</button>)</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">접근통제</button>
            <ul>
                <li>데이터가 저장된 객체와 이를 사용하려는 주체 사이의 정보 흐름을 제한하는 것</li>
                <li><b>3요소</b>
                    <ul>
                        <li><button type="button" class="red">접근통제 정책</button>
                            <ul>
                                <li>
                                    <button type="button" class="not-hidden">어떤 주체가(Who)</button>,
                                    <button type="button" class="not-hidden">언제(When)</button>,
                                    <button type="button" class="not-hidden"> 어디서(Where)</button>,
                                    <button type="button" class="not-hidden">어떤 객체에게(What)</button>,
                                    <button type="button" class="not-hidden">어떤 행위(How)</button>에 대한 <b>허용 여부를 정의</b>하는 것
                                </li>
                                <li><b>종류</b>
                                    <ul>
                                        <li><button type="button">신분 기반 정책</button>
                                            <ul>
                                                <li>주체나 그룹의 신분에 근거하여 객체의 접근을 제한하는 방법</li>
                                                <li><button type="button">IBP(Individual-Based Policy)</button> : 최소 권한 정책. 단일 주체에게 하나의 객체에 대한 허가를 부여함</li>
                                                <li><button type="button">GBP(Group-Based Policy)</button> : 복수 주체에 하나의 객체에 대한 허가를 부여함</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">규칙 기반 정책</button>
                                            <ul>
                                                <li>주체가 갖는 권한에 근거하여 객체의 접근을 제한하는 방법</li>
                                                <li><button type="button">MLP(Multi-Level Policy)</button> : 사용자나 객체별로 지정된 기밀 분류에 따른 정책</li>
                                                <li><button type="button">CBP(Compartment-Based Policy)</button> : 집단별로 지정된 기밀 허가에 따른 정책</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">역할 기반 정책</button>
                                            <ul>
                                                <li>GBP의 변형된 정책. 주체의 신분이 아니라 주체가 맡은 역할에 근거하여 객체의 접근을 제한하는 방법</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">접근통제 메커니즘</button>
                            <ul>
                                <li>정의된 접근통제 정책을 구현하는 <b>기술적인 방법</b></li>
                                <li>접근통제 목록, 능력 리스트, 보안 등급, 패스워드 , 암호화 등이 있음</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">접근통제 보안모델</button>
                            <ul>
                                <li>보안 정책을 구현하기 위한 정형화된 모델</li>
                                <li>종류
                                    <ul>
                                        <li><button type="button">기밀성 모델</button>
                                            <ul>
                                                <li>군사적인 목적으로 개발된 최초의 수학적 모델</li>
                                                <li>기밀성 보장이 최우선임</li>
                                                <li>군대 시스템 등 특수 환경에서 주로 사용됨</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">무결성 모델</button>
                                            <ul>
                                                <li>기밀성 모델에서 발생하는 불법적인 정보 변경을 방지하기 위해 무결성을 기반으로 개발된 모델</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">접근통제 모델</button>
                                            <ul>
                                                <li>접근통제 매커니즘을 보안 모델로 발전시킨 것</li>
                                                <li>대표적으로 <b>접근통제 행렬(Access Control Matrix)</b>이 있음</li>
                                                <li><b>접근통제 행렬</b> : 임의적인 접근통제를 관리하기 위한 보안모델
                                                    <br>행 = 주체, 열 = 객체, 즉 행과 열로 주체와 객체의 권한 유형을 나타냄
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>접근통제 기술</b>
                    <ul>
                        <li><button type="button" class="red">임의 접근통제</button>(<button type="button">DAC; Discretionary Access Control</button>)
                            <ul>
                                <li>데이터에 접근하는 사용자의 <b>신원(Identity)</b>에 따라 접근 권한을 부여하는 방식</li>
                                <li><b>데이터 소유자</b>가 접근통제 권한을 지정하고 제어함</li>
                                <li>객체를 생성한 사용자가 생성된 객체에 대한 모든 권한을 부여받고, 부여된 권한을 다른 사용자에게 허가할 수도 있음</li>
                                <li>정책 변경 용이</li>
                                <li>구현 용이</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">강제 접근통제</button>(<button type="button">MAC, Mandatory Access Control</button>)
                            <ul>
                                <li>주체와 객체의 등급을 비교하여 접근 권한을 부여하는 방식</li>
                                <li><b>시스템</b>이 접근통제 권한을 지정함</li>
                                <li>데이터베이스 객체별로 <b>보안 등급(Label)</b>을 부여할 수 있음</li>
                                <li>사용자별로 인가 등급을 부여할 수 있음</li>
                                <li>정책 변경 고정적(변경 어려움)</li>
                                <li>안정적 중앙 집중적인 장점을 가짐</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">역할기반 접근통제</button>(<button type="button">RBAC, Role Based Access Control</button>)
                            <ul>
                                <li>사용자의 <b>역할(Role)</b>에 따라 접근 권한을 부여하는 방식</li>
                                <li><b>중앙관리자</b>가 접근통제 권한을 지정함</li>
                                <li>임의 접근통제와 강제 접근통제의 단점을 보완함</li>
                                <li>다중 프로그래밍 환경에 최적화된 방식</li>
                                <li>정책 변경 용이</li>
                                <li>관리 용이</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>접근통제 조건
                    <ul>
                        <li>접근통제 매커니즘의 취약점을 보완하기 위해 접근통제 정책에 부가하여 적용할 수 있는 조건</li>
                        <li>값 종속 통제(Value-Dependent Control)
                            : 일반적으로는 객체에 저장된 값에 상관없이 접근통제를 동일하게 허용하지만, 
                            <br>이 조건은 객체에 저장된 값에 따라 다르게 접근통제를 허용해야하는 경우에 사용함
                        </li>
                        <li>다중 사용자 통제(Multi-User Control)
                            : 지정된 객체에 다수의 사용자가 동시에 접근을 요구하는 경우에 사용됨
                        </li>
                        <li>컨텍스트 기반 통제(Context-Based Control)
                            : 특정 시간, 네트워크 주소, 접근 경로, 인증 수준 등에 근거하여 접근을 제어하는 방법.
                            <br>다른 보안정책과 결합하여 보안 시스템의 취약점을 보완할 때 사용
                        </li>
                    </ul>
                </li>
                <li>감사 추적
                    <ul>
                        <li>사용자나 애플리케이션이 데이터베이스에 접근하여 수행한 모든 활동을 기록하는 기능</li>
                        <li>오류가 발생한 데이터베이스를 복구하거나 부적절한 데이터 조작을 파악하기 위해 사용됨</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">049</b></h2>
    <ul>
        <li><button type="button" class="red">데이터베이스 백업</button>
            <ul>
                <li><b>전산 장비의 장애에 대비하여 데이터베이스에 저장된 데이터를 보호하고 복구하기 위한 작업</b></li>
                <li>치명적인 데이터 손실을 막기 위해서는 데이터베이스를 정기적으로 백업해야 함</li>
            </ul>
        </li>
        <li><button type="button" class="red">로그 파일</button>
            <ul>
                <li>데이터베이스의 처리 내용이나 이용 상황 등 <b>상태 변화를 시간의 흐름에 따라 모두 기록한 파일</b></li>
                <li>데이터베이스의 복구를 위해 필요한 가장 기본적인 자료</li>
                <li>로그파일을 기반으로 데이터베이스를 과거 상태로 <b>복귀(UNDO)</b>시키거나 현재 상태로 <b>재생(REDO)</b>시켜 데이터베이스 상태를 일관성 있게 유지할 수 있음</li>
                <li><b>기록 시점</b> : 트랜잭션 시작 시점, Rollback 시점, 데이터 입력, 수정 삭제 시점 등</li>
            </ul>
        </li>
        <li>데이터베이스 복구 알고리즘
            <ul>
                <li><button type="button">NO-UNDO/REDO</button>
                    <ul>
                        <li>데이터베이스 버퍼의 내용을 <b>비동기적</b>으로 갱신한 경우의 복구 알고리즘
                            <br><mark>비동기적 갱신 : 트랜잭션이 완료된 내용을 일정 주기나 작업량에 따라 시간차이를 두고 저장매체에 기록하는 것</mark>
                        </li>
                        <li><button type="button" class="not-hidden">NO-UNDO</button> : 트랜잭션 완료 전에는 변경 내용이 데이터베이스에 기록됮 않으므로 취소할 필요가 없음</li>
                        <li><button type="button" class="not-hidden">REDO</button> : 트랜잭션 완료 후 데이터베이스 버퍼에는 기록되어있고, 저장매체에는 기록되지 않았으므로 트랜잭션 내용을 다시 실행해야 함</li>
                    </ul>
                </li>
                <li><button type="button">UNDO/NO-REDO</button>
                    <ul>
                        <li>데이터베이스 버퍼의 내용을 <b>동기적</b>으로 갱신한 경우의 복구 알고리즘
                            <br><mark>동기적 갱신 : 트랜잭션이 완료되기 전에 데이터베이스 버퍼 내용을 동시적으로 저장매체에 기록하는것</mark>
                        </li>
                        <li><button type="button" class="not-hidden">UNDO</button> : 트랜잭션 완료 전에 시스템이 파손되었다면 변경된 내용을 취소함</li>
                        <li><button type="button" class="not-hidden">NO-REDO</button> : 트랜잭션 완료 전에 데이터베이스 버퍼 내용을 이미 저장 매체에 기록했으므로 트랜잭션 내용을 다시 실행할 필요가 없음</li>
                    </ul>
                </li>
                <li><button type="button">UNDO/REDO</button>
                    <ul>
                        <li>데이터베이스 버퍼의 내용을 <b>동기/비동기적</b>으로 갱신한 경우의 복구 알고리즘</li>
                        <li>데이터베이스 기록 적엔 트랜잭션이 완료될 수 있으므로, 완료된 트랜잭션이 데이터베이스에 기록되지 못했다면 다시 실행해야함</li>
                    </ul>
                </li>
                <li><button type="button">NO-UNDO/NO-REDO</button>
                    <ul>
                        <li>데이터베이스 버퍼의 내용을 <b>동기적</b>으로 저장 매체에 기록하지만, <b>데이터베이스와는 다른 영역에 기록</b>한 경우의 복구 알고리즘</li>
                        <li><button type="button" class="not-hidden">NO-UNDO</button> : 변경내용은 데이터베이스와 다른 영역에 기록되어 있으므로 취소할 필요가 없음</li>
                        <li><button type="button" class="not-hidden">NO-REDO</button> : 다른 영역에 이미 기록되어 있으므로 트랜잭션을 다시 실행할 필요가 없음</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>백업 종류</b> : 복구 수준에 따라서 <b>운영체제를 이용하는 물리백업</b>과 <b>DBMS 유틸리티를 이용하는 논리 백업</b>으로 나뉨
            <ul>
                <li><button type="button">물리 백업</button>
                    <ul>
                        <li>데이터베이스 파일을 백업하는 방법</li>
                        <li>백업 속도가 빠르고 작업이 단순하지만 문제 발생 시 원인 파악 및 문제 해결이 어려움</li>
                    </ul>
                </li>
                <li><button type="button">논리 백업</button>
                    <ul>
                        <li>DB 내의 논리적 객체들을 백업하는 방법</li>
                        <li>복원 시 데이터 손상을 막고 문제 발생 시 원인 파악 및 해결이 수월하지만 백업/복원 시 시간이 많이 소요됨</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title"><b class="red">050</b></h2>
    <ul>
        <li><button type="button" class="red">스토리지</button>(<button type="button">Storage</button>)
            <ul>
                <li>단일 디스크로 처리할 수 없는 <b>대용량의 데이터를 저장하기 위해 서버와 저장장치를 연결하는 기술</b></li>
                <li><b>종류</b>
                    <ul>
                        <li><button type="button" class="red">DAS</button>(<button type="button">Direct Attached Storage</button>)
                            <ul>
                                <li><b>서버와 저장장치를 전용 케이블로 직접 연결하는 방식</b></li>
                                <li>일반 가정에서 커퓨터에 외장하드를 연결하는 것이 여기에 해당함</li>
                                <li>저장장치를 직접 연결하므로 속도가 빠르고 설치 및 운영이 쉬움</li>
                                <li>초기 구축 비용 및 유지보수 비용이 저렴함</li>
                                <li>직접 연결 방식이므로 다른 서버에서 접근할 수 없고 파일을 공유할 수 없음</li>
                                <li>확장성 및 유연성이 떨어짐</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">NAS</button>(<button type="button">Network Attached Storage</button>)
                            <ul>
                                <li><b>서버와 저장장치를 네트워크를 통해 연결하는 방식</b></li>
                                <li>별도의 파일 관리 기능이 있는 <b>NAS Storage</b>가 내장된 저장장치를 직접 관리</li>
                                <li><b>Ethernet 스위치</b>를 통해 다른 서버에서도 스토리지에 접근할 수 있어 파일 공유가 가능</li>
                                <li>장소에 구애받지 않고 저장장치에 쉽게 접근할 수 있음</li>
                                <li>DAS에 비해 확장성 및 유연성이 우수함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">SAN</button>(<button type="button">Storage Area Network</button>)
                            <ul>
                                <li>DAS의 빠른 처리와 NAS의 파일 공유 장점을 혼합한 방식. <b>서버와 저장장치를 연결하는 전용 네트워크를 별도로 구성하는 방식</b></li>
                                <li>광 채널(FC) 스위치를 이용하여 네트워크를 구성함</li>
                                <li>광 채널 스위치는 서버와 저장장치를 광케이블로 연결하므로 처리 속도가 빠름</li>
                                <li>저장장치를 공유함으로써 여러 개의 저장장치나 백업 장비를 단일화시킬 수 있음</li>
                                <li>확장성, 유연성, 가용성이 뛰어남</li>
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
    <h2 class="sub-title">051 논리 데이터 모델의 변환</h2>
    <ul>
        <li><b>엔티티(Entity)를 테이블로 변환</b>
            <ul>
                <li>논리 데이터 모델에서 정의된 엔티티를 물리 데이터 모델의 테이블로 변환하는것</li>
                <li>변환 규칙
                    <ul>
                        <li><b>논리적 설계(데이터 모델링) → 물리적 설계</b></li>
                        <li>엔티티(Entity) → <button type="button">테이블(Table)</button></li>
                        <li>속성(Attribute) → <button type="button">컬럼(Column)</button></li>
                        <li>주 식별자(Primary Identifier) → <button type="button">기본키(Primary Key)</button></li>
                        <li>외부 식별자(Foreign Identifier) → <button type="button">외래키(Foreign Key)</button></li>
                        <li>관계(Relationship) → <button type="button">관계(Relationship)</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>슈퍼타입/서브타입을 테이블로 변환</b>
            <ul>
                <li>슈퍼타입/서브타입 = 논리 데이터 모델에서 이용되는 형태.
                    물리 데이터 모델을 설계할 때는 슈퍼타입/서브타입을 테이블로 변환해야함
                </li>
                <li>방법
                    <ul>
                        <li><button type="button" class="not-hidden">슈퍼타입 기준 테이블 변환</button>
                            <ul>
                                <li><b>서브타입을 슈퍼타입에 통합하여 하나의 테이블로 만듦</b></li>
                                <li>서브타입에 속성이나 관계가 적을 경우에 적용</li>
                                <li>하나로 통합된 테이블에는 서브타입의 모든 속성이 포함되어야함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="not-hidden">서브타입 기준 테이블 변환</button>
                            <ul>
                                <li><b>슈퍼타입 속성들을 각각 서브타입에 추가하여 서브타입들을 개별적인 테이블로 만듦</b></li>
                                <li>서브타입에 속성이나 관계가 많이 포함된 경우 적용</li>
                            </ul>
                        </li>
                        <li><button type="button" class="not-hidden">개별타입 기준 테이블 변환</button>
                            <ul>
                                <li><b>슈퍼타입과 서브타입을 각각의 개별적인 테이블로 변환</b></li>
                                <li>슈퍼타입과 서브타입 테이블들 사이에는 각각 1:1관계가 형성됨</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>속성을 칼럼으로 변환</b>
            <ul>
                <li>논리 데이터 모델에서 정의한 속성을 물리 데이터 모델의 컬럼으로 변환함</li>
                <li><button type="button" class="not-hidden">일반 속성 변환</button> : 속성과 칼럼은 명칭이 반드시 일치할 필요는 없으나, 개발자와 사용자 간의 의사소통을 위하여 가능한 한 <b>표준화된 약어</b>를 사용하여 일치시키는 것이 좋음</li>
                <li><button type="button" class="not-hidden">Primary UID를 기본키로 변환</button> : <b>논리 데이터 모델에서 Primary UID</b>는 물리 데이터 모델의 <b>기본키</b>로 만듦</li>
                <li><button type="button" class="not-hidden">Primary UID(관계의 UID Bar)를 기본키로 변환</button> : <b>다른 엔터티와의 관계로 인해 생성된 Primary UID</b>는 물리 데이터 모델의 <b>기본키</b>로 만듦</li>
                <li><button type="button" class="not-hidden">Secondary(Alternate) UID를 유니크키로 변환</button> : 논리 모델링에서 정의된 <b>Secondary UID 및 Alternate Key</b>는 물리 모델에서 <b>유니크키</b>로 만듦</li>
            </ul>
        </li>
        <li><b>관계를 외래키로 변환</b> : 논리 데이터 모델에서 정의된 관계는 기본키와 이를 참조하는 외래키로 변환함</li>
    </ul>
</article>
`;

export default post;