
export const postTemplate = `
<h1 class="title">정처기 실기1. 요구사항 확인5</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-27</span>
    <span class="modification-date">수정일 : 2023-06-27</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>C025 소프트웨어 개발 방법론 결정</mark>
    <br><mark>💛</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">025</h2>
    <ul>
        <li><button type="button">소프트웨어 개발 방법론 결정</button>
            <ul>
                <li>프로젝트 관리와 재사용 현황을 소프트웨어 개발 방법론에 반영하고,
                    확정된 소프트웨어 생명 주기와 개발 방법론에 맞춰 소프트웨어 개발 단계, 활동, 작업, 절차 등을 정의하는 것이다
                </li>
                <li>절차
                    <ol>
                        <li>프로젝트 관리와 재사용 현황을 소프트웨어 개발 방법론에 반영함</li>
                        <li>개발 단계별 작업 및 절차를 소프트웨어 생명 주기에 맞춰 수립함</li>
                        <li>결정된 소프트웨어 개발 방법론의 개발 단계별 활동 목적, 작업내용, 산출물에 대한 매뉴얼 작성</li>
                    </ol>
                </li>
            </ul>
        </li>
        <li><button type="button">프로젝트 관리(Project Management</button>
            <ul>
                <li class="red">주어진 기간내에 <b>최소의 비용으로</b> 사용자를 만족시키는 <b>시스템을 개발하기 위한 전반적인 활동</b></li>
                <li>관리 유형
                    <ul>
                        <li><button type="button">일정 관리</button> : 작업 순서, 작업 기간 산정, 일정 개발, 일정 통제</li>
                        <li><button type="button">비용 관리</button> : 비용 산정, 비용 예산 편성, 비용 통제</li>
                        <li><button type="button">인력 관리</button> : 프로젝트 팀 편성, 자원 산정, 프로젝트 조직 정의, 프로젝트 팀 개발, 자원 통제, 프로젝트 팀 관리</li>
                        <li><button type="button">위험 관리</button> : 위험 식별, 위험 평가, 위험 대처, 위험 통제</li>
                        <li><button type="button">품질 관리</button> : 품질 계획, 품질 보증 수행, 품질 통제 수행</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">026</b></h2>
    <ul>
        <li><button type="button">소프트웨어 개발 표준</button>
            <ul>
                <li>소프트웨어 개발 단계에서 수행하는 품질 관리에 사용되는 국제 표준</li>
                <li>주요 소프트웨어 개발 표준
                    <ul>
                        <li><button type="button">ISO/IEC 12207</button>
                            <ul>
                                <li>ISO(국제표준화기구)에서 만든 표준 소프트웨어 생명 주기 프로세스</li>
                                <li>소프트웨어의 개발, 운영, 유지보수 등을 체계적으로 관리하기 위한 소프트웨어 생명 주기 표준 제공</li>
                                <li>구분
                                    <ul>
                                        <li>기본 생명 주기 프로세스 : 획득, 공급, 개발, 운영, 유지보수 프로세스</li>
                                        <li>지원 생명 주기 프로세스 : 품질 보증, 검증, 확인, 활동 검토, 감사, 문서화 형상 관리, 문제 해결 프로세스</li>
                                        <li>조직 생명 주기 프로세스 : 관리, 기반 구조, 훈련, 개선 프로세스</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">CMMI</button>(<button type="button">Capability Maturity Model Integration</button>)
                            <ul>
                                <li>소프트웨어 개발 조직의 업무 능력 및 조직의 성숙도를 평가하는 모델</li>
                                <li>미국 카네기멜론 대학교의 소프트웨어 공학연구소(SEI)에서 개발함</li>
                                <li>소프트웨어 프로세스 성숙도
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>단계</th>
                                                <th>프로세스</th>
                                                <th>특징</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>초기(Initial)</th>
                                                <td>정규화된 프로세스 없음</td>
                                                <td>작업자 능력에 따라 성공 여부 결정</td>
                                            </tr>
                                            <tr>
                                                <th>관리(Managed)</th>
                                                <td>규칙화된 프로세스</td>
                                                <td>특정한 프로젝트 내의 프로세스 정의 및 수행</td>
                                            </tr>
                                            <tr>
                                                <th>정의(Defined)</th>
                                                <td>표준화된 프로세스</td>
                                                <td>조직의 표준 프로세스를 활용하여 업무 수행</td>
                                            </tr>
                                            <tr>
                                                <th>정량적 관리(Quantitatively Managed)</th>
                                                <td>예측 가능한 프로세스</td>
                                                <td>프로젝트를 정량적으로 관리 및 통제</td>
                                            </tr>
                                            <tr>
                                                <th>최적화(Optimizing)</th>
                                                <td>지속적 개선 프로세스</td>
                                                <td>프로세스 역량 향상을 위해 지속적인 프로세스 개선</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">SPICE</button>(<button type="button">Software Process Improvement and Capability dEtermination</button>)
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>

<!-- 아티클 복사 탬플릿 -->
<article id="💛sub3">
    <h2 class="sub-title">003</h2>
    <ul>
        <li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
            <ul>

            </ul>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</article>
<hr>

<!-- 내부 복사 탬플릿 -->
<li><button type="button" class="red">💛단어</button>(<button type="button">💛단어</button>)
    <ul>

    </ul>
</li>

<!-- 복사 요소 -->
<button type="button">💛단어</button>
<button type="button" class="red">💛단어</button>
<button type="button" class="not-hidden">💛단어</button>

<button class="code">
    <span class="comment">/* 주석 */</span>
    <br>code <span class="text">텍스트</span> <span class="point">강조</span>
</button>
<hr>

<article id="sub2💛">
    <h2 class="sub-title">💛구현된 UI 복사해서 써!</h2>
    <article id="sub2-1💛">
        <h3>💛</h3>
        <ul>
            <li>
                <span class="red">🧡붉은 색 글자</span>
            </li>
            <li>
                <mark>💛단어만 마크할 수 도 있고</mark>
            </li>
            <li>
                <mark class="block">
                💛블록 단위로 마크할 수도 있습니다.
                </mark>
            </li>
            <li>
                <span class="exam">💚ex)문장</span>
            </li>
                <span class="exam block exam-tag">
                💚블록 단위 예시, '.exam-tag'클래스 유무로 'ex)'를 추가/제거 할 수 있습니다
                </span>
            </li>
        </ul>
    </article>
</article>
`;

export default postTemplate;