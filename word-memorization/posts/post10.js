
export const post10 = `
<h1 class="title">정처기 실기 1. 요구사항 확인4</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-26</span>
    <span class="modification-date">수정일 : 2023-06-27</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>C019 소프트웨어 개발 방법론</mark>
    <br><mark>B020 S/W 공학의 발전적 추세</mark>
    <br><mark>D021 비용 산정 기법 - 하향식</mark>
    <br><mark>A022 비용 산정 기법 - 상향식</mark>
    <br><mark>B023 수학적 산정 기법</mark>
    <br><mark>B024 프로젝트 일정 계획</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">019</h2>
    <ul>
        <li><button type="button">소프트웨어 개발 방법론</button>
            <ul>
                <li>
                    소프트웨어 개발, 유지보수 등에 필요한 여러가지 일들의 <b>수행 방법</b>과
                    <br>이러한 일들을 효율적으로 수행하려는 과정에서 필요한 <b>각종 기법 및 도구</b>를 체계적으로 정리하여 표준화한 것
                </li>
                <li>목적 : 소프트웨어의 생산성과 품질 향상</li>
                <li>주요 방법론
                    <ul>
                        <li><button type="button" class="red">구조적 방법론</button>
                            <ul>
                                <li>정형화된 분석 절차에 따라 <b>사용자 요구사항을 파악하여 문서화하는 처리 중심의 방법론</b></li>
                                <li>1960년대까지 가장 많이 적용되었던 소프트웨어 개발 방법론</li>
                                <li>목적 : 쉬운 이해 및 검증이 가능한 프로그램 코드를 생성</li>
                                <li>복잡한 문제를 다루기 위해 <b>분할과 정복(Divide and Conquer</b> 원리를 적용함</li>
                                <li>개발 절차
                                    <br><mark class="block">
                                        <button type="button">타당성 검토</button> 단계
                                        -> <button type="button">계획</button> 단계
                                        -> <button type="button">요구사항</button> 단계
                                        -> <button type="button">설계</button> 단계
                                        -> <button type="button">구현</button> 단계
                                        -> <button type="button">시험</button> 단계
                                        -><button type="button">운용/유지보수</button> 단계
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">정보공학 방법론</button>
                            <ul>
                                <li>정보 시스템의 개발을 위해 <b>계획, 분석, 설계, 구축에 정형화된 기법들을</b> </li>
                                <li>상호 연관성 있게 <b>통합 및 적용하는 자료(Data) 중심의 방법론</b></li>
                                <li><b>정보 시스템 개발 주기</b>를 이용하여 <b>대규모 정보 시스템을 구축</b>하는데 적합함</li>
                                <li>개발 절차
                                    <br><mark class="block">
                                        <button type="button">정보 전략 계획 수립</button> 단계
                                        -> <button type="button">업무 영역 분석</button> 단계
                                        -> <button type="button">업무 시스템 설계</button> 단계
                                        -> <button type="button">업무 시스템 구축</button> 단계
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">객체지향 방법론</button>
                            <ul>
                                <li>
                                    현실 세계의 개체(Entity)를 기계의 부품처럼 하나의 객체(Object)로 만들어,
                                    <br>소프트웨어를 개발할 때 기계의 부품을 조립하듯이 <b>객체들을 조립해서 필요한 소프트웨어를 구현하는 방법론</b>
                                </li>
                                <li>구조적 기법의 문제점으로 인한 소프트웨어 위기의 해결책으로 채택됨</li>
                                <li>구성 요소 : 객체, 클래스, 메시지</li>
                                <li>기본 원칙 : 캡슐화, 정보은닉, 추상화, 상속성, 다형성 등</li>
                                <li>개발 절차
                                    <br><mark class="block">
                                        <button type="button">요구 분석</button> 단계
                                        -> <button type="button">설계</button> 단계
                                        -> <button type="button">구현</button> 단계
                                        -> <button type="button">테스트 및 검증</button> 단계
                                        -> <button type="button">인도</button> 단계
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">컴포넌트 기반(CBD) 방법론</button>
                            <ul>
                                <li>기존의 시스템이나 소프트웨어를 구성하는 컴포넌트를 조합하여 하나의 새로운 애플리케이션을 만드는 방법론</li>
                                <li>컴포넌트의 재사용이 가능하여 <b>시간과 노력을 절감</b>할 수 있음</li>
                                <li>새로운 기능을 추가하는 것이 간단하여 <b>확장성 보장</b>됨</li>
                                <li><b>유지 보수 비용을 최소화</b>하고 <b>생산성 및 품질을 향상</b>시킬 수 있음</li>
                                <li>개발 절차
                                    <br><mark class="block">
                                        <button type="button">개발 준비</button> 단계
                                        -> <button type="button">분석</button> 단계
                                        -> <button type="button">설계</button> 단계
                                        -> <button type="button">구현</button> 단계
                                        -> <button type="button">테스트</button> 단계
                                        -> <button type="button">전개</button> 단계
                                        -> <button type="button">인도</button> 단계
                                    </mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">제품 계열 방법론</button>
                            <ul>
                                <li>특정 제품에 적용하고 싶은 <b>공통된 기능을 정의하여 개발</b>하는 방법론</li>
                                <li>임베디드 소프트웨어(제품 자체에 포함된 소프트웨어)를 만드는데 적합</li>
                                <li>영역공학과 응용공학으로 구분됨
                                    <ul>
                                        <li><button type="button" class="not-hidden">영역공학</button> : 영역 분석, 영역 설계, 핵심 자산을 구현하는 영역</li>
                                        <li><button type="button" class="not-hidden">응용공학</button> : 제품 요구 분석, 제품 설계, 제품을 구현하는 영역</li>
                                    </ul>
                                </li>
                                <li>영역공학과 응용공학의 연계를 위해 제품의 요구사항, 아키텍처, 조립 생산이 필요함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">애자일 방법론</button></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title"><b class="red">020</b></h2>
    <ul>
        <li><button type="button" class="red">소프트웨어 재사용</button>(<button type="button">Software Reuse</button>)
            <ul>
                <li><b>이미 개발되어 인정받은 소프트웨어를</b> 다른 소프트웨어 개발이나 유지에 사용하는것</li>
                <li>소프트웨어 개발의 품질과 생산성을 높이기 위한 방법</li>
                <li>기존에 개발된 소프트웨어와 경험, 지식 등을 새로운 소프트웨어에 적용함</li>
                <li>방법
                    <ul>
                        <li><button type="button" class="red">합성 중심</button>(<button type="button">Composition-Based</button>)
                            <br>= <button type="button">블록 구성 방법</button>
                            <ul>
                                <li>블록(전자 칩과 같은 소프트웨어 부품)을 만들어서 끼워 맞춰 소프트웨어를 완성시키는 방법</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">생성 중심</button>(<button type="button">Generation-Based</button>)
                            <br>= <button type="button">패턴 구성 방법</button>
                            <ul>
                                <li>추상화 형태로 써진 명세를 구체화하여 프로그램을 만드는 방법</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">소프트웨어 재공학</button>(<button type="button">Software Reengineering</button>)
            <ul>
                <li>새로운 요구에 맞도록 <b>기존 시스템을 이용</b>하여 보다 나은 시스템을 구축하고,</li>
                <li><b>새로운 기능을 추가</b>하여 소프트웨어 성능을 향상시키는 것</li>
                <li>
                    유지보수비용이 소프트웨어 개발 비용의 대부분을 차지함
                    <br>.'. 유지보수의 생산성 향상을 통해 소프트웨어 위기를 해결하는 방법
                </li>
                <li>기존 소프트웨어의 데이터와 기능들의 개조 및 개선을 통해 유지보수성과 품질을 향상시킴</li>
                <li>이점
                    <ul>
                        <li>소프트웨어의 품질 향상</li>
                        <li>소프트웨어의 생산성 증가</li>
                        <li>소프트웨어의 수명 연장</li>
                        <li>소프트웨어의 오류 감소</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">CASE</button>(<button type="button">Computer Aided Software Engineering</button>)
            <ul>
                <li>
                    소프트웨어 개발 과정에서 사용되는 요구 분석, 설계, 구현, 검사 및 디버깅 <b>과정 전체 또는 일부를
                    <br>컴퓨터와 전용 소프트웨어 도구를 사용하여 자동화하는 것</b>
                </li>
                <li>객체지향 시스템, 구조적 시스템 등 다양한 시스템에서 활용되는 자동화 도구</li>
                <li>소프트웨어 생명 주기의 전체 단계를 연결하고 자동화하는 통합된 도구를 제공함</li>
                <li>소프트웨어 개발 도구와 방법론이 결합되었으며, 정형화된 구조 및 방법을 소프트웨어 개발에 적용하여 생산성 향상을 구현함</li>
                <li>주요 기능
                    <ul>
                        <li>소프트웨어 생명 주기 전 단계의 연결</li>
                        <li>다양한 소프트웨어 개발 모형 지원</li>
                        <li>그래픽 지원</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">021</h2>
    <ul>
        <li><button type="button">하향식 비용 산정 기법</button>
            <ul>
                <li>과거의 유사한 경험을 바탕으로 전문 지식이 많은 개발자들이 참여한 회의를 통해 비용을 산정하는 <b>비과학적인 방법</b></li>
                <li><b>프로젝트의 전체 비용</b>을 산정한 후 각 <b>작업별로 비용</b>을 세분화함</li>
                <li>기법
                    <ul>
                        <li><button type="button">전문가 감정 기법</button>
                            <ul>
                                <li>조직내 경험이 많은 두 명 이상의 전문가에게 비용 산정을 의뢰하는 기법</li>
                                <li> 가장 편리, 신속하게 비용 산정 가능</li>
                                <li>의뢰자로부터 믿음을 얻을 수 있음</li>
                                <li>개인적, 주관적일 수 있음</li>
                            </ul>
                        </li>
                        <li><button type="button">델파이 기법</button>
                            <ul>
                                <li>전문가 감정 기법의 주관적인 편견을 보완하기 위해 많은 전문가의 의견을 종합하여 산정하는 기법</li>
                                <li>한명의 조정자와 여러 전문가로 구성됨</li>
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
    <h2 class="sub-title"><b class="red">022, 023</b></h2>
    <ul>
        <li><button type="button">상향식 비용 산정 기법</button>
            <ul>
                <li>프로젝트의 세부적인 작업 단위별로 비용을 산정한 후 집계하여 전체 비용을 산정하는 방법</li>
                <li>주요 기법
                    <ul>
                        <li><button type="button" class="red">LOC</button>(<button type="button">원시 코드 라인 수, source Line Of Code</button>)
                            <ul>
                                <li>소프트웨어 각 기능의 원시 코드 라인 수의 <b>비관치, 낙관치, 기대치</b>를 측정하여
                                    <br><b>예측치</b>를 구하고, 이를 이용하여 비용을 산정하는 기법
                                    <ul>
                                        <li><b>비관치</b> : 가장 많이 측정된 코드 라인 수</li>
                                        <li><b>낙관치</b> : 가장 적게 측정된 코드 라인 수</li>
                                        <li><b>기대치</b> : 측정된 모든 코드 라인 수의 평균</li>
                                    </ul>
                                </li>
                                <li>측정이 용이, 이해하기 쉬움 => 가장 많이 사용됨</li>
                                <li><b>예측치</b>를 이용해 생산성, 노력, 개발 기간 등의 비용 산정함
                                    <mark>예측치 = (낙관치 + (4*비관치) + 기대치) / 6</mark>
                                </li>
                                <li>산정 공식
                                    <br><mark class="block">
                                        <b>노력(인월)</b> = 개발기간 * 투입 인원
                                        <br>= LOC / 1인당 월평균 생산 코드 라인 수
                                    </mark>
                                    <br><mark><b>개발 비용</b> = 노력(인월) * 단위 비용(1인당 월평균 인건비)</mark>
                                    <br><mark><b>개발 기간</b> = 노력(인월) / 투입 인원</mark>
                                    <br><mark><b>생산성</b> = LOC / 노력(인월)</mark>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">개발 단계별 인월수 기법</button>(<button type="button">Effort Per Task 기법</button>)
                            <ul>
                                <li>LOC 기법을 보완하기 위한 기법, 각 기능을 구현시키는데 필요한 노력을 <b>생명 주기의 각 단계별</b>로 산정함</li>
                                <li>LOC 기법 보다 더 정확함</li>
                            </ul>
                        </li>
                        <li><button type="button">수학적 산정 기법</button>
                            = <button type="button">경험적 추정 모형</button> = <button type="button">실험적 추정 모형</button>
                            <li>목표 : 개발 비용 산정의 자동화</li>
                            <li>공식 : 과거의 유사한 프로젝트를 기반으로 유도된 것</li>
                            <li>주요 기법
                                <ul>
                                    <li><button type="button" class="red">COCOMO</button>(<button type="button">COnstructive COst MOdel</button>)
                                        <ul>
                                            <li>원시 프로그램 규모인 LOC에 의한 비용 산정 기법</li>
                                            <li><b>개발할 소프트웨어의 규모(LOC)를 예측</b>한 후 이를 <b>소프트웨어 종류에 따라 다르게 책정되는 비용 산정 방정식</b>에 대입하여 비용을 산정함</li>
                                            <li>비용 산정 결과는 프로젝트르 ㄹ완성하는데 필요한 노력(Man-Month)으로 나타남</li>
                                            <li>Boehm이 제안함</li>
                                            <li>소프트웨어 개발 유형
                                                <ul>
                                                    <li><button type="button" class="red">조직형</button>(<button type="button">Organic Mode</button>)
                                                        <ul>
                                                            <li>기관 내부에서 개발된 <b>중·소 규모의 소프트웨어</b></li>
                                                            <li>일괄 자료 처리나 과학기술 계산용, 비즈니스 자료 처리용 등의 <b>5만(50KDSI)라인 이하의 소프트웨어</b>를 개발하는 유형
                                                                <br><mark><b>KDSI; Kilo Delivered Source Instruction</b> : 1000라인 단위로 묶은것 <b>KLOC(Kilo LOC)</b>과 같은의미</mark>
                                                            </li>
                                                            <li>사무 처리용, 업무용, 과학용 응용 소프트웨어 개발에 적합</li>
                                                        </ul>
                                                    </li>
                                                    <li><button type="button" class="red">반분리형</button>(<button type="button">Semi-Detached Mode</button>)
                                                        <ul>
                                                            <li>조직형과 내장형의 <b>중간형 소프트웨어</b></li>
                                                            <li>트랜잭션 처리 시스템이나 운영체제, 데이터베이스 관리 시스템 등의 <b>30만(300KDSI)라인 이하</b>의 소프트웨어 개발 유형</li>
                                                            <li>컴파일러, 인터프리터와 같은 유틸리티 개발에 적합</li>
                                                        </ul>
                                                    </li>
                                                    <li><button type="button" class="red">내장형</button>(<button type="button">Embedded Mode</button>)
                                                        <ul>
                                                            <li>초대형 규모의 소프트웨어</li>
                                                            <li>트랜잭션 처리 시스템이나 운영체제 등의 <b>30만(300KDSI) 라인 이상</b>의 소프트웨어 개발 유형</li>
                                                            <li>신호기 제어 시스템, 미사일 유도 시스템, 실시간 처리 시스템 등 시스템 프로그램 개발에 적합</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>모형의 종류
                                                <ul>
                                                    <li><button type="button" class="red">기본형 COCOMO</button>(<button type="button">Basic</button>)
                                                        <ul>
                                                            <li>소프트웨어의 <b>크기</b>와 <b>개발 유형</b>만을 이용하여 비용 산정</li>
                                                        </ul>
                                                    </li>
                                                    <li><button type="button" class="red">중간형 COCOMO</button>(<button type="button">Intermediate</button>)
                                                        <ul>
                                                            <li>기본형 COCOMO의 공식을 토대로 사용하나, 다음 4가지 특성에 의해 비용을 산정함
                                                                <ul>
                                                                    <li>제품의 특성</li>
                                                                    <li>컴퓨터의 특성</li>
                                                                    <li>개발 요원의 특성</li>
                                                                    <li>프로젝트 특성</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><button type="button" class="red">발전형 COCOMO</button>(<button type="button">Detailed</button>)
                                                        <ul>
                                                            <li>중간형 COCOMO를 보완하여 만들어진 모형</li>
                                                            <li><b>개발 공정별로</b> 보다 자세하고 정확하게 노력을 산출하여 비용 산정</li>
                                                            <li><b>소프트웨어 환경과 구성 요소가 사전에 정의되어 있어야 하며, 개발 과정의 후반부에 주로 적용함</b></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><button type="button" class="red">Putnam 모형</button>
                                        = <button type="button">생명주기 예측 모형</button>
                                        <ul>
                                            <li>소프트웨어 생명 주기의 전 과정 동안에 사용될 <b>노력의 분포를 예상</b>하는 모형</li>
                                            <li><b>푸트남(Putnam)</b>이 제안</li>
                                            <li>시간에 따른 함수로 표현되는 <b>Rayleigh-Norden 곡선의 노력 분포도</b>를 기초로함</li>
                                            <li><b>대형 프로젝트의 노력 분포 산정에 이용됨</b></li>
                                            <li>개발 기간이 늘어날수록 프로젝트 적용 인원의 노력이 감소함</li>
                                        </ul>
                                    </li>
                                    <li><button type="button" class="red">기능 점수 모형</button>(<button type="button">FP; Function Point 모형</button>)
                                        <ul>
                                            <li>소프트웨어의 기능을 증대시키는 요인별로 가중치를 부여하고,
                                                요인별 가중치를 합산하여 총 기능 점수를 산출함
                                                총 기능 점수와 영향도를 이용하여 기능 점수(FP)를 구한 후 이를 이용해서 비용을 산정함
                                            </li>
                                            <li><b>알브레히트(Albrecht)</b>가 제안함</li>
                                            <li>소프트웨어 기능 증대 요인
                                                <ul>
                                                    <li>자료 입력(입력 양식)</li>
                                                    <li>정보 출력(출력 보고서)</li>
                                                    <li>명령어(사용자 질의수)</li>
                                                    <li>데이터 파일</li>
                                                    <li>필요한 외부 루틴과의 인터페이스</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>비용 산정 자동화 추정 도구를
                                        <ul>
                                            <li><button type="button">SLIM</button> : Rayleigh-Norden 곡선과 Putnam 예측 모델을 기초로 하여 개발된 자동화 추정 도구</li>
                                            <li><button type="button">ESTIMACS</button> : 다양한 프로젝트와 개인별 요소를 수용하도록 FP 모형을 기초로 하여 개발된 자동화 추정 도구</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">024</h2>
    <ul>
        <li>프로젝트 일정(Scheduling) 계획
            <ul>
                <li>프로젝트의 프로세스를 이루는 <b>소작업을 파악</b>하고 예측된 노력을 각 소작업에 <b>분배</b>하여 <b>소작업의 순서와 일정을 정하는 것</b></li>
                <li>사용되는 기능
                    <ul>
                        <li><button type="button" class="red">WBS</button>(<button type="button">Work Breakdown Structure, 업무 분류 구조</button>)
                            <ul>
                                <li>개발 프로젝트를 여러 개의 작은 관리 단위로 분할하여 계층적으로 기술한 업무 구조</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">PERT/CPM</button>
                            <ul>
                                <li>프로젝트의 지연 방지, 계획대로 진행되도록 일정 계획하는것. </li>
                                <li>대단위 계획의 조직적인 추진을 위해 비용을 적게 사용하면서 최단시간 내 계획 완성을 위한 프로젝트 일정 방법</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">PERT</button>(<button type="button">Program Evaluation and Review Technique, 프로그램 평가 및 검토 기술</button>)
                            <ul>
                                <li>프로젝트에 필요한 <b>전체 작업의 상호 관계를 표시하는 네트워크</b></li>
                                <li>각 작업별로 다음과 같이 단계를 나누어 종료시기를 결정함
                                    <ul>
                                        <li>낙관적인 경우</li>
                                        <li>가능성이 있는 경우</li>
                                        <li>비관적인 경우</li>
                                    </ul>
                                </li>
                                <li>개발 경험이 없어 소요 기간 예측이 어려운 프로젝트 일정 계획에 사용</li>
                                <li><b>노드</b>와 <b>간선</b>으로 구성. 
                                    <br><b>원노드</b> : 작업, 
                                    <br><b>간선</b> : 낙관치, 기대치, 비관치 표시</li>
                                <li>결정 경로, 작업에 대한 경계 시간, 작업 간의 상호 관련성 등을 알 수 있음</li>
                                <li>작업 예측치 계산 공식
                                    작업 예측시 = (비관치 + (4*기대치) + 낙관치) / 6
                                    평방 편차 = ((비관치 - 낙관치) / 6)^2
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">CPM</button>(<button type="button">Critical Path Method, 임계 경로 기법</button>)
                            <ul>
                                <li>프로젝트 완성에 필요한 작업을 나열하고 작업에 필요한 소요 기간을 예측하는데 사용하는 기법</li>
                                <li>노드와 간선으로 구성된 네트워크
                                    노드 : 작업
                                    간선 : 작업 사이의 전후 의존 관계
                                </li>
                                <li>원형노드 : 각각 작업. 작업이름과 소요 기간 표시</li>
                                <li>박스 노드 : 이정표. 이정표 이름과 예상 완료 시간 표시</li>
                                <li>간선을 나타내는 화살표의 흐름에 따라 각 작업 진행.
                                    <br>전 작업 완료되어야 다음 작업 진행 가능
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">간트 차트</button>
                            <ul>
                                <li>프로젝트의 각 작업들이 언제 시작/종료 되는지에 대한 작업 일정을 막대 도표를 이용하여 표시하는 프로젝트 일정표</li>
                                <li>시간선(Time-Line) 차트라고도 한다</li>
                                <li>중간 목표 미달성 시 그 이유와 기간을 예측할 수 있게함</li>
                                <li>사용자와의 문제점이나 예산 초과 지출 등도 관리할 수 있게함</li>
                                <li>자원 배치와 인원 계획에 유용하게 사용됨</li>
                                <li>구성 : 이정표, 작업 일정, 작업 기간, 산출물</li>
                                <li>수평 막대의 길이 = 각 작업(Task)의 기간</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default post10;