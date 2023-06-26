
export const post7 = `
<h1 class="title">정처기 실기 1. 요구사항 확인1</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-22</span>
    <span class="modification-date">수정일 : 2023-06-22</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B001 소프트웨어 생명 주기</mark>
    <br><mark>C002 스크럼 기법</mark>
    <br><mark>B003 XP 기법</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">001</b></h2>
    <ul>
        <li><button type="button" class="red">소프트웨어 생명주기</button>(<button type="button">Software Life Cycle</button>)
            <ul>
                <li>소프트웨어를 개발하기 위한 설계, 운용, 유지보수 등의 과정을 각 단계별로 나눈것</li>
                <li>표현 : <button type="button" class="not-hidden">소프트웨어 개발단계</button> + <button type="button" class="not-hidden">각 단계별 주요 활동</button> + <button type="button" class="not-hidden">활동의 결과에 대한 산출물</button></li>
                <li>
                    <mark class="block">
                        <b>대표적 모형 4개</b>
                        <ul>
                            <li><button type="button">폭포수 모형</button></li>
                            <li><button type="button">프로토타입 모형</button></li>
                            <li><button type="button">나선형 모형</button></li>
                            <li><button type="button">애자일 모형</button></li>
                        </ul>
                    </mark>
                </li>
            </ul>
        </li>
        <br>
        <li><button type="button" class="red">폭포수 모형</button>(<button type="button">Waterfall Model</button>)
            <ul>
                <li><b class="red">이전 단계로 돌아갈 수 없다</b></li>
                <li>각 단계를 확실히 매듭지음 -> 결과 철저 검토, 승인 -> 다음단계 진행</li>
                <li><b>가장 오래되고 폭넓게 사용</b>된 <b>전통적</b>인 소프트웨어 생명주기 모형</li>
                <li>= <button type="button" class="not-hidden">고전적 생명 주기 모형</button></li>
                <li>모형을 적용한 경험 & 성공사례 多</li>
                <li>단계 끝난후 => 다음단계를 수행하기 위한 <b>결과물</b>이 명확히 산출되어야함</li>
            </ul>
        </li>
        <br>
        <li><button type="button" class="red">프로토타입 모형</button>(<button type="button">Prototype Model</button>)
            <br>= <button type="button">원형 모형</button>
            <ul>
                <li>
                    실제 개발될 소프트웨어에 대한 <button type="button" class="not-hidden">견본품(Prototype)</button>을 만듬(사용자의 요구사항을 파악하기 위함)
                    <br>-> 최종 결과물 예측
                </li>
                <li><b>견본품</b> = 사용자와 시스템사이의 인터페이스에 중점을 둠</li>
            </ul>
        </li>
        <br>
        <li><button type="button" class="red">나선형 모형</button>(<button type="button">Spiral Model</button>)
            <br>= <button type="button">점진적 모형</button>
            <ul>
                <li>나선을 따라 돌듯, 여러번의 소프트웨어 개발 과정을 거쳐
                    => 점진적으로 완벽한 최종 소프트웨어를 개발하는 모형
                </li>
                <li><b>보헴(Boehm)</b> 제안</li>
                <li><button type="button" class="not-hidden">폭포수 모형 장점</button> + 
                    <button type="button" class="not-hidden">프로토타입 모형 장점</button> + 
                    <b><mark>위험 분석 기능</mark></b>
                </li>
                <li>누락/추가된 요구사항 첨가 가능</li>
                <li><b class="red">유지보수 과정 필요x</b></li>
                <li>
                    <mark class="block">
                        <b>주요활동 순서</b>
                        <button type="button" class="red">계획 수립</button> ->
                        <button type="button" class="red">위험 분석</button> ->
                        <button type="button" class="red">개발 및 검증</button> ->
                        <button type="button" class="red">고객 평가</button>
                    </mark>
                </li>
            </ul>
        </li>
        <br>
        <li><button type="button" class="red">애자일 모형</button>(<button type="button">Agile Model</button>)
            <ul>
                <ul>
                    <li>민첩한, 기민한</li>
                    <li><b>일정한 주기 반복</b>하면서 개발<span class="exam">for 고객의 요구사항 변화에 유연하게 대응</span></li>
                    <li>고객과의 소통에 초점을 맞춘 방법론<span class="exam">for 빠르고 낭비없게 만들기 위해</span></li>
                    <li><button type="button" class="not-hidden">폭포수 모형</button>과 대조적</li>
                    <li>기업 활동 전반에 걸쳐 사용</li>
                    <li>
                        <mark class="block">
                            대표적 개발 모형
                            <ul>
                                <li><button type="button" class="not-hidden">스크럼</button></li>
                                <li><button type="button" class="not-hidden">XP </button></li>
                                <li><button type="button" class="not-hidden">칸반</button></li>
                                <li><button type="button" class="not-hidden">Lean</button></li>
                                <li><button type="button" class="not-hidden">기능 중심 개발</button></li>
                            </ul>
                        </mark>
                    </li>
                    <li>
                        <mark class="block">
                            <b>4가지 핵심 가치</b>
                            <ul>
                                <li>프로세스와 도구 &lt; 개인과 상호작용</li>
                                <li>방대한 문서 &lt; 실행되는 SW</li>
                                <li>계약 협상 &lt; 고객과 협업</li>
                                <li>계획 따르기 &lt; 변화에 반응하기</li>
                            </ul>
                        </mark>
                    </li>
                </ul>
            </ul>
        </li>
        <br>
        <li><button type="button" class="red">소프트웨어 공학</button>(<button type="button">SE; Software Engineering</button>)
            <ul>
                <li>소프트웨어의 위기를 극복하기 위한 방안으로 연구된 학문</li>
                <li>목적 : 여러가지 방법론, 도구, 관리기법 => 소프트웨어 품질, 생산성 향상</li>
                <li>
                    <mark class="block">
                        <b>기본 원칙</b>
                            <ul>
                                <li><b>현대적인 프로그래밍 기술</b> 계속적 적용</li>
                                <li>지속적 검증 <span class="exam">for 개발된 소프트웨어 품질 유지</span></li>
                                <li>개발 관련 사항 및 결과에 대한 <b>명확한 기록 유지</b></li>
                            </ul>
                    </mark>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">002</h2>
    <ul>
        <li>
            <button type="button" class="red">스크럼</button>(<button type="button">Scrum</button>)
            <ul>
                <li>개념
                    <ul>
                        <li>팀이 중심이 되어 개발의 효율성 높임</li>
                        <li>팀원 스스로 스크럼 팀 구성</li>
                        <li>개발 작어베 관한 모든것 스스로 해결</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">스크럼 팀</button>
                    <ul>
                        <li><button type="button" class="red">제품 책임자</button>(<button type="button">PO; Product Owner</button>)
                            <ul>
                                <li>요구사항이 담긴 <button type="button" class="not-hidden">백로그(Backlog)</button> 작성 주체</li>
                                <li>
                                    이해관계자들 중 개발된 제품에 대한 <b>이해도▲</b>, 
                                    <br>요구사항 책임지고 <b>의사 결정</b>할 사람
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">스크럼 마스터</button>(<button type="button">SM; Scrum Master</button>)
                            <ul>
                                <li>가이드 역할 수행</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">개발팀</button>(<button type="button">DT; Development Team</button>)
                            <ul>
                                <li>제품 책임자와 스크럼 마스터를 제외한 모든 팀원</li>
                                <li>제품 개발 수행함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b class="red">스크럼 개발 프로세스</b>
                    <ul>
                        <li><button type="button" class="red">스프린트 계획 회의</button>(<button type="button">Sprint Planning Meeting</button>)
                            <ul>
                                <li>단기 일정 수립 회의</li>
                                <li>대상 : 제품 백로그중 이번 스프린트에서 수행할 작업 수행</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">스프린트</button>(<button type="button">Sprint</button>)
                            <ul>
                                <li>실제 개발 작업 진행</li>
                                <li>보통 2~4주 기간내 진행</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">일일 스크럼회의</button>(<button type="button">Daily Scrum Meeting</button>)
                            <ul>
                                <li>진행 상황 점검 회의</li>
                                <li>매일, 약속된 시간, 약 15분</li>
                                <li>남은 시간 표시 => <button type="button">소멸 차트(Buarn-down Chart)</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">스프린트 검토 회의</button>(<button type="button">Sprint Review</button>)
                            <ul>
                                <li>부분 또는 전체 완성 제품이 요구사항에 잘 부합하는지 <b>테스팅하는 회의</b></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">스프린트 회고</button>(<button type="button">Sprint Retrospective</button>)
                            <ul>
                                <li>정해놓은 규칙 준수 여부 및 개선점 확인, 기록</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <br>
        
    </ul>  
</article>
<hr>

<article id="sub3">
    <h2 class="sub-title"><b class="red">003</b></h2>
    <ul>
        <li><button type="button" class="red">XP 기법</button>(<button type="button">eXtreme Programming</button>)
            <ul>
                <li>개념
                    <ul>
                        <li>
                            <b>고객의 참여</b>와 <b>개발 과정의 반복 극대화</b>하여 개발 생산성 향상
                            <br><span class="exam">for 수시로 발생하는 고객의 요구사항에 유연하게 대응하기 위해</span>
                        </li>
                        <li>목적 : 짧고 반복적인 개발주기, 단순한 설계, 고객의 적극적인 참여를 통해 <b class="red">소프트웨어를 빠르게 개발</b></li>
                    </ul>
                </li>
                <li><button type="button" class="red">릴리즈</button>
                    <ul>
                        <li>몇개의 요구사항이 적용되어 부분적으로 기능이 완료된 제품 제공</li>
                        <li>이 기간을 짧게 반복 -> 요구사항 반영 가시성 높임</li>
                    </ul>
                </li>
                <li><b>5가지 핵심 가치</b>
                    <ul>
                        <li><button type="button" class="red">의사소통 Communication</button></li>
                        <li><button type="button" class="red">단순성 Simplicity</button></li>
                        <li><button type="button" class="red">용기 Courage</button></li>
                        <li><button type="button" class="red">존중 Respect</button></li>
                        <li><button type="button" class="red">피드백 Feadback</button></li>
                    </ul>
                </li>
                <li><b>개발 프로세스</b>
                    <ul>
                        <li><button type="button" class="red">사용자 스토리</button>(<button type="button">User Story</button>)
                            <ul>
                                <li>고객의 요구사항을 간단한 시나리오로 표현한 것</li>
                                <li>요구사항 -> <button type="button" class="not-hidden">릴리즈 계획 수립</button></li>
                                <li>테스트 시나리오 -> <button type="button" class="not-hidden">승인 검사</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">스파이크</button>(<button type="button">Spike</button>)
                            <ul>
                                <li>요구사항의 신뢰성을 높이고 기술 문제에 대한 위험을 감소시키기 위해 별도로 만드는 간단한 프로그램</li>
                                <li>확신하는 추정 -> <button type="button" class="not-hidden">릴리즈 계획 수립</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">릴리즈 계획 수립</button>(<button type="button">Release Planning</button>)
                            <ul>
                                <li>부분 혹은 전체 개발 완료 시점에 대한 일정 수립</li>
                                <li>불확실한 추정 -> <button type="button" class="not-hidden">스파이크</button></li>
                                <li>릴리즈 계획 수립 -> <button type="button" class="not-hidden">이터레이션</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">이터레이션</button>(<button type="button">Iteration</button>)
                            =<button type="button">주기</button>
                            <ul>
                                <li>실제 개발 작업 진행</li>
                                <li>보통 1~3주 기간 진행</li>
                                <li>최신 버전 -> <button type="button" class="not-hidden">승인 검사</button></li>
                                <li>새로운 사용자 스토리 -> <button type="button" class="not-hidden">릴리즈 계획 수립</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">승인 검사</button>(<button type="button">Acceptance Test</button>)
                            =<button type="button">인수 테스트</button>
                            <ul>
                                <li>하나의 이터레이션 안에서 부분 완료 제품이 구현되면 수행하는 테스트</li>
                                <li>버그/다음 주기 -> <button type="button" class="not-hidden">이터레이션</button></li>
                                <li>고객 승인 -> <button type="button" class="not-hidden">소규모 릴리즈</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">소규모 릴리즈</button>(<button type="button">Small Release</button>)
                            <ul>
                                <li>요구사항에 유연하게 대응할 수 있도록 릴리즈 규모를 축소한것</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>주요 실천방법</b>
                    <ul>
                        <li><button type="button" class="red">Pari Programming</button>(<button type="button">짝 프로그래밍</button>)
                            <ul>
                                <li>
                                    다른 사람과 함께 프로그래밍 수행
                                    <br>-> 개발에 대한 책임 공동으로 나눠갖는 환경 조성
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">Collective ownership</button>(<button type="button">코드 공동 소유</button>)
                            <ul>
                                <li>개발 코드에 대한 권한과 책임 공동 소유</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">Test-Driven Development</button>(<button type="button">테스트 주도 개발</button>)
                            <ul>
                                <li>코드 작성전 테스트 케이스 먼저 작성 .'. 자신이 무엇을 해야할지를 정확히 파악함</li>
                                <li>테스트가 지속적으로 진행될 수 있도록 테스팅 도구를 사용함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">Whole Team</button>(<button type="button">전체 팀원</button>)
                            <ul>
                                <li>개발에 참여하는 모든 구성원들은 각자 역할이 있고 그 역할에 대한 책임을 가짐</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">Continuouse Intergration</button>(<button type="button">계속적인 통합</button>)
                            <ul>
                                <li>모듈 단위로 나눠서 개발된 코드들은 하나의 작업이 마무리 될 때마다 지속적으로 통합됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">Refactoring</button>(<button type="button">리팩토링</button>)
                            <ul>
                                <li>프로그램 기능의 변경 없이 시스템을 재구성함</li>
                                <li>목적 : <button type="button">프로그램을 쉽게 이해하고 쉽게 수정하여 빠르게 개발할 수 있도록 하기 위함</button></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">SmallReleases</button>(<button type="button">소규모 릴리즈</button>)
                            <ul>
                                <li>릴리즈 기간을 짧게 반복함으로써 고객의 요구 변화에 신속히 대응할 수 있음</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post7;