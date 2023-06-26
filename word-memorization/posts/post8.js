
export const post8 = `
<h1 class="title">정처기 실기 1. 요구사항 확인2</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-23</span>
    <span class="modification-date">수정일 : 2023-06-23</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>C004 개발 기술 환경 파악</mark>
    <br><mark>A005 요구사항 정의</mark>
    <br><mark>B006 요구사항 개발 프로세스</mark>
    <br><mark>B007 요구사항 분석</mark>
    <br><mark>C008 요구사항 분석 CASE 와 HIPO</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">004 개발 기술 환경 파악</h2>
    <ul>
        <li>개요
            <ul>
                <li>개발하고자 하는 소프트웨어와 관련된 운영체제(OS), DBMS, 미들웨어 등을 선정할 때 고려해야할 사항 기술, 오픈소스 사용 시 주의해야할 내용 제시</li>
            </ul>
        </li>
        <li><button type="button" class="red">운영체제</button>(<button type="button">OS; Operating System</button>)
            <ul>
                <li><b>컴퓨터 시스템의 자원을 효율적으로 관리함</b></li>
                <li>사용자가 컴퓨터를 편리하고 효율적으로 사용할 수 있도록, 다른 응용 프로그램이 유용한 작업을 할 수 있도록 <b>환경 제공</b></li>
                <li>사용자와 컴퓨터 하드웨어 간의 인터페이스로서 동작하는 <b>시스템 소프트웨어</b></li>
                <li>관련 요구사항 식별 시 고려사항
                    <ul>
                        <li><button type="button">가용성</button></li>
                        <li><button type="button">성능</button></li>
                        <li><button type="button">기술 지원</button></li>
                        <li><button type="button" class="red">주변 기기</button></li>
                        <li><button type="button">구축 비용</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">데이터베이스 관리 시스템</button>(<button type="button">DBMS; DataBase Manegement System</button>)
            <ul>
                <li><b>사용자와 데이터베이스 사이</b>에서 사용자의 요구에 따라 정보 생성, 데이터베이스 관리를 해주는 소프트웨어</li>
                <li><b>기존 파일 시스템</b>이 갖는 데이터의 종속성과 중복성의 문제를 해결하기 위해 제안된 시스템</li>
                <li>모든 응용 프로그램들이 데이터베이스를 공용할 수 있도록 관리</li>
                <li>관련 요구사항 식별 시 고려사항
                    <ul>
                        <li><button type="button">가용성</button></li>
                        <li><button type="button">성능</button></li>
                        <li><button type="button">기술 지원</button></li>
                        <li><button type="button" class="red">상호 호환성</button></li>
                        <li><button type="button">구축 비용</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">웹 애플리케이션 서버</button>(<button type="button">WAS; Web Application Server</button>)
            <ul>
                <li>사용자의 요구에 따라 변하는 <b>동적인 콘텐츠를 처리하기 위해 사용되는 미들웨어</b></li>
                <li>데이터 접근, 세션 관리, 트랜잭션 관리 등을 위한 라이브러리 제공</li>
                <li>주로 데이터베이스 서버와 연동해서 사용함</li>
                <li>관련 요구사항 식별 시 고려사항
                    <ul>
                        <li><button type="button">가용성</button></li>
                        <li><button type="button">성능</button></li>
                        <li><button type="button">기술 지원</button></li>
                        <li><button type="button">구축 비용</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">오픈 소스</button>(<button type="button">Open Source</button>)
            <ul>
                <li>누구나 별다른 제한 없이 사용할 수 있도록 소스 코드를 공개한 소프트웨어</li>
                <li>오픈 소스 라이선스를 만족함</li>
                <li>관련 요구사항 식별 시 고려사항
                    <ul>
                        <li><button type="button" class="red">라이선스의 종류</button></li>
                        <li><button type="button" class="red">사용자 수</button></li>
                        <li><button type="button" class="red">기술의 지속 가능성</button></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">005</b></h2>
    <ul>
        <li><button type="button" class="red">요구사항</button>
            <ul>
                <li>소프트웨어가 <b>어떤 문제를 해결하기 위해 제공하는 서비스에 대한 설명</b>과 정상적으로 <b>운영되는데 필요한 제약조건</b></li>
                <li>소프트웨어 개발, 유지 보수 과정에서 필요한 <b>기준과 근거 제공</b></li>
                <li>개발에 참여하는 이해관계자들 간의 의사소통을 원활하게 하는데 도움을 줌</li>
                <li>유형
                    <ul>
                        <li><button type="button" class="red">기능 요구사항</button></li>
                        <li><button type="button" class="red">비기능 요구사항</button></li>
                        <li><button type="button" class="red">사용자 요구사항</button></li>
                        <li><button type="button" class="red">시스템 요구사항</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">기능 요구사항</button>(<button type="button">Functional requirements</button>)
            <ul>
                <li><b>기능이나 수행과 관련된 요구사항</b> : 시스템이 무엇을 하는지, 어떤 기능을 하는지</li>
                <li>시스템의 <b>입/출력</b>으로 무엇이 포함되어야 하는지</li>
                <li>어떤 데이터를 <b>저장/연산</b> 수행 해야하는지</li>
                <li>반드시 수행해야 하는 기능</li>
                <li>사용자가 시스템을 통해 제공받기를 원하는 기능</li>
            </ul>
        </li>
        <li><button type="button" class="red">비기능 요구사항</button>(<button type="button">Non-functional requirements</button>)
            <ul>
                <li><b>품질, 제약사항과 관련된 요구사항</b></li>
                <li>시스템 장비 구성 요구사항</li>
                <li>성능 요구사항</li>
                <li>인터페이스 요구사항</li>
                <li>데이터를 구축하기 위해 필요한 요구사항</li>
                <li>테스트 요구사항</li>
                <li>보안 요구사항</li>
                <li>품질 요구사항 : 가용성, 정합성, 상호 호환성, 대응성, 이식성, 확장성, 보안성 등</li>
                <li>제약사항</li>
                <li>프로젝트 관리 요구사항</li>
                <li>프로젝트 자원 요구사항</li>
            </ul>
        </li>
        <li><button type="button" class="red">사용자 요구사항</button>(<button type="button">User requirements</button>)
            <ul>
                <li><b>사용자 관점에서 본 시스템이 제공해야 할 요구사항</b></li>
                <li>사용자를 위한것이므로, <b>친숙한 표현</b>으로 이해하기 쉽게 작성됨</li>
            </ul>
        </li>
        <li><button type="button" class="red">시스템 요구사항</button>(<button type="button">System requirements</button>)
            <br>= <button type="button">소프트웨어 요구사항</button>
            <ul>
                <li><b>개발자 관점에서 본 시스템 전체가</b> 사용자와 다른 시스템에게 <b>제공해야 할 요구사항</b></li>
                <li>사용자 요구사항에 비해 <b>전문적, 기술적인 용어</b>로 표현됨</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">006</b></h2>
    <ul>
        <li><button type="button" class="not-hidden">요구사항 개발 프로세스</button>
            <ul>
                <li>
                    개발 대상에 대한 <b>요구사항</b>을 체계적으로
                    <button type="button">도출</button> -> <button type="button">분석</button> 
                    -> <button type="button">명세</button>서에 정리 -> <button type="button">확인</button> 및 검증하는 일련의 구조화된 활동
                </li>
                <li>진행되기 전에 <button type="button" class="not-hidden">타당성 조사</button>가 선행되어야 함</li>
                <li><button type="button" class="not-hidden">요구공학(Requirement Engineering)</button>의 한 요소임
                    <ul>
                        <li><b>무엇을 개발해야하는지 요구사항 정의, 분석 및 관리하는 프로세스를 연구하는 학문</b></li>
                        <li>요구사항 변경 원인/처리 방법 이해 => 요구사항 관리 프로세스의 품질 개선</li>
                        <li>목표 : 소프트웨어 프로젝트 실패 최소화</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">요구사항 도출</button>(<button type="button">Requirement Elicitation</button>)
            = <button type="button">요구사항 수집</button>
            <ul>
                <li><b>시스템 개발에 관련된 사람들</b>(시스템, 사용자, 개발자 등)이 서로 <b>의견을 교환</b>하여
                    <br><b>요구사항을 어떻게 수집할것인지를 식별, 이해하는 과정</b></li>
                <li>개발자와 고객 사이의 관계가 만들어짐. <button type="button" class="not-hidden">이해관계자(Stakeholder)</button>가 식별됨</li>
                <li><button type="button" class="not-hidden">소프트웨어 개발 생명주기(SDLC)</button> 동안 지속적으로 반복됨</li>
                <li>도출 주요 기법
                    <ul>
                        <li>청취와 인터뷰</li>
                        <li>설문</li>
                        <li>브레인스토밍 : 3인이상 자유롭게 의견 교환 -> 독창적인 아이디어 도출</li>
                        <li>워크샵</li>
                        <li>프로토타이핑 : 견본품을 통해 요구분석 수행</li>
                        <li>유스케이스 : 사용자의 요구사항을 기능단위로 표현</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">요구사항 분석</button>(<button type="button">Requirement Analysis</button>)
            <ul>
                <li>사용자의 요구사항 중 명확하지 않거나 <b>모호하여 이해되지 않는 부분</b>을 발견하고 걸러내기 위한 과정</li>
                <li>요구사항의 타당성 조사 -> <b>비용, 일정에 대한 제약 설정</b></li>
                <li>서로 상충되는 요구사항이 있으면 <b>중재하는 과정</b></li>
                <li>대표적인 도구
                    <ul>
                        <li><button type="button" class="not-hidden">자료 흐름도 DFD</button></li>
                        <li><button type="button" class="not-hidden">자료 사전 DD</button></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">요구사항 명세</button>(<button type="button">Requirement Specification</button>)
            <ul>
                <li><span class="red">분석된 요구사항을 바탕으로 <b>모델을 작성하고 문서화</b>하는 것</span></li>
                <li>기능 요구사항 => 빠짐없이 기술</li>
                <li>비기능 요구사항 => 필요한것만 기술</li>
                <li>구체적인 명세를 위해 <button type="button" class="not-hidden">소단위 명세서(Mini-Spec)</button>가 사용될 수 있다</li>
                <li>기법
                    <table>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th><button type="button">정형 명세 기법</button></th>
                                <th><button type="button">비정형 명세 기법</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>기법</th>
                                <td>수학적 원리 기반, 모델 기발</td>
                                <td>상태/기능/객체 중심</td>
                            </tr>
                            <tr>
                                <th>작성법</th>
                                <td>수학적 기호, 정형화된 표기법</td>
                                <td>일반 명사, 동사 등의 <b>자연어를 기반으로 서술</b> 또는 <b>다이어그램</b>으로 작성</td>
                            </tr>
                            <tr>
                                <th>특징</th>
                                <td>
                                    <ul>
                                        <li>요구사항 정확, 관결한 표현 가능</li>
                                        <li>결과 = 작성자에 관계없이 일관성 있음 => 완전성 검증 가능</li>
                                        <li>표기법 어려움 => 사용자가 이해하기 어려움</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>결과 = 작성자에 따라 다를 수 있음 => 일관성이 떨어짐, 해석이 달라질 수 있음</li>
                                        <li>내용의 이해가 쉬워 의사소통이 용이함</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>종류</th>
                                <td>VDM, Z, Petri-net, CSP 등</td>
                                <td>FSM, Decision Table, ER모델링, State Chart(SADT) 등</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">요구사항 확인</button>(<button type="button">Requirement Validation</button>)
            = <button type="button">요구사항 검증</button>
            <ul>
                <li>개발자원을 요구사항에 할당하기 전에 <b>요구사항 명세서가 정확하고 완전하게 작성되었는지 검토</b>하는 활동</li>
                <li>이해관계자들이 검토함</li>
                <li>요구사항 관리 도구를 이용하여 요구사항 정의 문서들에 대해 <button type="button" class="not-hidden">형상관리(SCM; Software Configuration Management)</button> 수행</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">007</b></h2>
    <ul>
        <li><button type="button" class="red">요구사항 분석</button>(<button type="button">Requirement Analysis</button>)
            <ul>
                <li>요구사항 개발 프로세스중 2번째 단계 인거같은데.. 근데 설명은 명세까지 포함되는거같지..?(도출 -> <b>분석 -> 명세</b> -> 확인)</li>
                <li><b>소프트웨어 개발의 실제적인 첫단계</b></li>
                <li>개발 대상에 대한 사용자의 <b>요구사항을 이해하고 문서화</b> 하는 활동</li>
                <li>사용자 요구의 타당성 조사, 비용과 일정에 대한 제약 설정</li>
                <li>사용자의 요구를 정확하게 추출 => 목표를 정함</li>
            </ul>
        </li>
        <li><button type="button" class="not-hidden">구조적 분석 기법</button>
            <ul>
                <li><b>자료의 흐름과 처리를 중심</b>으로 하는 요구사항 분석 방법</li>
                <li><b>도형 중심의 분석용 도구</b>와 <b>분석 절차</b>를 이용하여 사용자의 요구사항을 파악하고 문서화함</li>
                <li><b>하향식 방법</b>을 사용하여 시스템 세분화할 수 있음</li>
                <li>분석의 <b>중복을 배제</b>할 수 있음</li>
                <li><b class="red">주요 도구</b>
                    <ul>
                        <li><button type="button" class="red">자료 흐름도</button>(<button type="button">DFD</button>)
                            = 자료 흐름 그래프, 버블 차트
                            <ul>
                                <li>자료의 흐름 및 변환 과정과 기능을 도형중심으로 기술하는 방법</li>
                                <li><b>자료 흐름과 처리를 중심</b>으로 하는 구조적 분석 기법에 이용</li>
                                <li>기본 기호
                                    <ul>
                                        <li><button type="button">프로세스</button>(<button type="button">Process</button>)
                                            = 처리, 기능, 변환, 버블
                                            <ul>
                                                <li>자료 변환 시키는 시스템의 한 부분을 나타냄.</li>
                                                <li>Yourdon/Demacro : 원형 표기</li>
                                                <li>Gane/Sarson : 둥근 네모 표기</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">자료 흐름</button>(<button type="button">Data Flow</button>)
                                            <ul>
                                                <li>자료의 이동(흐름)이나 연관관계를 나타냄</li>
                                                <li>채운 화살표 위에 자료 적음</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">자료 저장소</button>(<button type="button">Data Store</button>)
                                            <ul>
                                                <li>시스템에서의 자료 저장소(파일, 데이터베이스)fmf skxksoa</li>
                                                <li>Yourdon/Demacro : ex) 물품대장 위아래에 선</li>
                                                <li>Gane/Sarson : ex) 물품대장 위아래에 선, 그 앞에 ID가 적힌 네모</li>
                                            </ul>
                                        </li>
                                        <li><button type="button">단말</button>(<button type="button">Terminator</button>)
                                            <ul>
                                                <li>시스템과 교신하는 외부 개체로 입력 데이터가 만들어지고 출력 데이터를 받음</li>
                                                <li>Yourdon/Demacro : 선이 있는 네모</li>
                                                <li>Gane/Sarson : 선이 있는 네모를 겹친 모양</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">자료 사전</button>(<button type="button">DD; Data Dictionary</button>)
                            <ul>
                                <li>자료 흐름도에 있는 자료를 <b>더 자세히 정의하고 기록한 것</b></li>
                                <li>데이터를 설명하는 데이터 = 데이터의 데이터 = 메타 데이터(Meta Data)</li>
                                <li>표기 기호
                                    <ul>
                                        <li><button type="button">=</button>자료의 정의 : ~로 구성되어있다(is composed of)</li>
                                        <li><button type="button">+</button>자료의 연결 : 그리고(and)</li>
                                        <li><button type="button">( )</button>자료의 생략 : 생략 가능 자료(Optional)</li>
                                        <li><button type="button">[ ]</button>자료의 선택 : 또는(or)</li>
                                        <li><button type="button">{ }</button>자료의 반복 Iteration of { }아래첨자n = n번이상 반복, { }^n = 최대 n번 반복, { }아래첨자m^n = m이상 n이하 반복</li>
                                        <li><button type="button">* *</button>자료의 설명 : 주석(Comment)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="not-hidden">소단위 명세서</button>(<button type="button">Mini-Spec.</button>)</li>
                        <li><button type="button" class="not-hidden">개체 관계도</button>(<button type="button">ERD</button>)</li>
                        <li><button type="button" class="not-hidden">상태 전이도</button>(<button type="button">STD</button>)</li>
                        <li><button type="button" class="not-hidden">제어 명세서</button></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">008</h2>
    <ul>
        <li><button type="button" class="red">요구사항 분석용 CASE</button>(<button type="button">자동화 도구</button>)
            <ul>
                <li><b>요구사항을 자동으로 분석하고, 요구사항 분석 명세서를 기술하도록 개발된 도구</b></li>
                <li>대표적 도구
                    <ul>
                        <li><button type="button" class="red">SADT</button>
                            <ul>
                                <li>시스템 정의, 소프트웨어 요구사항 분석, 시스템/소프트웨어 설계를 위한 도구</li>
                                <li>SoftTech 사에서 개발</li>
                                <li>구조적 요구 분석을 하기 위해 블록 다이어그램을 채택한 자동화 도구</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">SREM = RSL/REVS</button>
                            <ul>
                                <li>TRW 사가 <b>실시간 처리 소프트웨어 시스템에서</b> 요구사항을 명확히 기술하도록 할 목적으로 개발한 도구</li>
                                <li><button type="button" class="not-hidden">RSL</button>과 <button type="button" class="not-hidden">REVS</button>를 사용하는 자동화 도구
                                    <ul>
                                        <li><button type="button" class="not-hidden">RSL</button> : 요구사항 기술 언어. 요소, 속성, 관계, 구조를 기술</li>
                                        <li><button type="button" class="not-hidden">REVS</button> : 요구사항 분석기. RSL로 기술된 요구사항들을 자동으로 분석 -> 요구사항 분석 명세서 출력</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">PSL/PSA</button>
                            <ul>
                                <li>미시간 대학에서 개발한 자동화 도구</li>
                                <li><button type="button">PSL</button> : 문제(요구사항) 기술 언어</li>
                                <li><button type="button">PSA</button> : 문제 분석기. 위 언어로 기술한 요구사항 분석 -> 보고서 출력</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">TAGS</button>
                            <ul>
                                <li>시스템 공학 방법 응용에 대한 자동 접근 방법</li>
                                <li>개발 주기의 전 과정에 이용할 수 있는 통합 자동화 도구</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">HIPO</button>(<button type="button">Hierarchy Input Process Output</button>)
            <ul>
                <li>시스템의 분석 및 설계, 또는 문서화에 사용되는 기법</li>
                <li><b>시스템 실행 과정인 입력, 처리, 출력의 기능을 표현한 것</b>
                </li>
                <li><b>하향식 소프트웨어 개발</b>을 위한 문서화 도구</li>
                <li><b>기능</b>과 <b>자료의 의존 관계</b>를 동시에 표현할 수 있음</li>
                <li>기호, 도표 사용 => 보기 쉽고 이해하기 쉬움</li>
                <li>HIPO Chart : 시스템 기능을 여러개의 고유 모듈로 분할 -> 인터페이스를 계층구조로 표현한것</li>
                <li>HIPO Chart 종류
                    <ul>
                        <li><button type="button" class="red">가시적 도표</button>(<button type="button">Visual Table of Contents</button>)
                            <br> = <button type="button">도식 목차</button>
                        </li>
                        <li><button type="button" class="red">총체적 도표</button>(<button type="button">Overview Diagram</button>)
                            <br> = <button type="button">총괄 도표</button>, <button type="button">개요 도표</button>
                        </li>
                        <li><button type="button" class="red">세부적 도표</button>(<button type="button">Detail Diagram</button>)
                            <br> = <button type="button">상세 도표</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post8;