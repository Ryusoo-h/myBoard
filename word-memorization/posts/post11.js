
export const postTemplate = `
<h1 class="title">정처기 실기 1. 요구사항 확인5</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-27</span>
    <span class="modification-date">수정일 : 2023-06-27</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>C025 소프트웨어 개발 방법론 결정</mark>
    <br><mark>B026 소프트웨어 개발 표준</mark>
    <br><mark>C027 소프트웨어 개발 방법론 테일러링</mark>
    <br><mark>B028 소프트웨어 개발 프레임워크</mark>
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
                <li><b>절차</b>
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
                <li><b>관리 유형</b>
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
                <li><b>주요 소프트웨어 개발 표준</b>
                    <ul>
                        <li><button type="button">ISO/IEC 12207</button>
                            <ul>
                                <li>ISO(국제표준화기구)에서 만든 표준 소프트웨어 생명 주기 프로세스</li>
                                <li>소프트웨어의 개발, 운영, 유지보수 등을 체계적으로 관리하기 위한 소프트웨어 생명 주기 표준 제공</li>
                                <li><b>구분</b>
                                    <ul>
                                        <li><button type="button" class="not-hidden">기본 생명 주기 프로세스</button> : 획득, 공급, 개발, 운영, 유지보수 프로세스</li>
                                        <li><button type="button" class="not-hidden">지원 생명 주기 프로세스</button> : 품질 보증, 검증, 확인, 활동 검토, 감사, 문서화 형상 관리, 문제 해결 프로세스</li>
                                        <li><button type="button" class="not-hidden">조직 생명 주기 프로세스</button> : 관리, 기반 구조, 훈련, 개선 프로세스</li>
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
                                                <th><button type="button">초기(Initial)</button></th>
                                                <td>정규화된 프로세스 없음</td>
                                                <td>작업자 능력에 따라 성공 여부 결정</td>
                                            </tr>
                                            <tr>
                                                <th><button type="button">관리(Managed)</button></th>
                                                <td>규칙화된 프로세스</td>
                                                <td>특정한 프로젝트 내의 프로세스 정의 및 수행</td>
                                            </tr>
                                            <tr>
                                                <th><button type="button">정의(Defined)</button></th>
                                                <td>표준화된 프로세스</td>
                                                <td>조직의 표준 프로세스를 활용하여 업무 수행</td>
                                            </tr>
                                            <tr>
                                                <th><button type="button">정량적 관리(Quantitatively Managed)</button></th>
                                                <td>예측 가능한 프로세스</td>
                                                <td>프로젝트를 정량적으로 관리 및 통제</td>
                                            </tr>
                                            <tr>
                                                <th><button type="button">최적화(Optimizing)</button></th>
                                                <td>지속적 개선 프로세스</td>
                                                <td>프로세스 역량 향상을 위해 지속적인 프로세스 개선</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">SPICE</button>(<button type="button">Sftware Process Improvement and Capability dEtermination</button>)
                            <ul>
                                <li>정보 시스템 분야에서 <b>소프트웨어의 품질 및 생산성 향상</b>을 위해 소프트웨어 프로세스를 평가 및 개선하는 국제 표준</li>
                                <li>공식명칭 : <b>ISO/IEC 15504</b></li>
                                <li><b>구성</b>
                                    <ul>
                                        <li><button type="button" class="red">고객-공급자 프로세스</button>(<button type="button">Customer-Supplier 프로세스</button>)
                                            <ul>
                                                <li>소프트웨어를 개발하여 고객에게 전달하는 것 지원,</li>
                                                <li>소프트웨어의 정확한 운용 및 사용을 위한 프로세스로 구성됨</li>
                                                <li>구성 요소 : 인수, 공급, 요구 도출, 운영</li>
                                                <li>프로세스 수 : 10개</li>
                                            </ul>
                                        </li>
                                        <li><button type="button" class="red">공학 프로세스</button>(<button type="button">Engineering 프로세스</button>)
                                            <ul>
                                                <li>시스템과 소프트웨어 제품의 명세화, 구현, 유지보수를 하는데 사용되는 프로세스로 구성됨</li>
                                                <li>구성 요소 : 개발, 소프트웨어 유지보수</li>
                                                <li>프로세스 수 : 9개</li>
                                            </ul>
                                        </li>
                                        <li><button type="button" class="red">지원 프로세스</button>(<button type="button">Support 프로세스</button>)
                                            <ul>
                                                <li>소프트웨어 생명 주기에서 다른 프로세스에 읳 ㅐ이용되는 프로세스로 구성됨</li>
                                                <li>구성 요소 : 문서화, 형상, 품질 보증, 검증, 확인, 리뷰, 감사, 품질 문제 해결</li>
                                                <li>프로세스 수 : 8개</li>
                                            </ul>
                                        </li>
                                        <li><button type="button" class="red">관리 프로세스</button>(<button type="button">Management 프로세스</button>)
                                            <ul>
                                                <li>소프트웨어 생명 주기에서 프로젝트 관리자에 의해 사용되는 프로세스로 구성됨</li>
                                                <li>구성 요소 : 관리, 프로젝트 관리, 품질 및 위험 관리</li>
                                                <li>프로세스 수 : 4개</li>
                                            </ul>
                                        </li>
                                        <li><button type="button" class="red">조직 프로세스</button>(<button type="button">Organization 프로세스</button>)
                                            <ul>
                                                <li>조직의 업무 목적 수립과 조직의 업무 목표 달성을 위한 프로세스로 구성됨</li>
                                                <li>구성 요소 : 조직 배치, 개선 활동 프로세스, 인력 관리, 기반 관리, 측정 도구, 재사용</li>
                                                <li>프로세스 수 : 9개</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><b>프로세스 수행 능력 단계</b>
                                    <ul>
                                        <li><button type="button" class="not-hidden">불완전(Incomplete)</button> : 프로세스가 구현되지 않았거나 목적을 달성하지 못한 단계</li>
                                        <li><button type="button" class="not-hidden">수행(Performed)</button> : 프로세스가 수행되고 목적이 달성된 단계</li>
                                        <li><button type="button" class="not-hidden">관리(Managed)</button> : 정의된 자원의 한도 내에서 그 프로세스가 작업 산출물을 인도하는 단계</li>
                                        <li><button type="button" class="not-hidden">확립(Established)</button> : 소프트웨어 공학 원칙에 기반하여 정의된 프로세스가 수행되는 단계</li>
                                        <li><button type="button" class="not-hidden">예측(Predictable)</button> : 프로세스가 목적 달성을 위해 통제되고, 양적인 측정을 통해서 일관되게 수행되는 단계</li>
                                        <li><button type="button" class="not-hidden">최적화(Optimizing)</button> : 프로세스 수행을 최적화하고, 지속적인 개선을 통해 업무 목적을 만족시키는 단계</li>
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
    <h2 class="sub-title">027</h2>
    <ul>
        <li><button type="button">소프트웨어 개발 방법론 테일러링</button>
            <ul>
                <li>프로젝트 상황 및 특성에 맞도록 <b>정의된 소프트웨어 개발 방법론의 절차, 사용기법 등을 수정 및 보완하는 작업</b></li>
                <li><b>수행 절차</b>
                    <ol>
                        <li>프로젝트 특징 정의</li>
                        <li>표준 프로세스 선정 및 검증</li>
                        <li>상위 수준의 커스터마이징</li>
                        <li>세부 커스터마이징</li>
                        <li>테일러링 문서화</li>
                    </ul>
                </li>
                <li><b>고려사항</b>
                    <ul>
                        <li><button type="button" class="not-hidden">내부적 기준</button>
                            <ul>
                                <li>목표 환경 : 시스템의 개발 환경과 유형이 서로 다른 경우 테일러링이 필요함</li>
                                <li>요구사항 : 프로젝트의 생명 주기 활동에서 개발, 운영, 유지보수 등 프로젝트에서 우선적으로 고려할 요구사항이 서로 다른 경우 테일러링이 필요함</li>
                                <li>프로젝트 규모 : 비용, 인력, 기간 등 프로젝트의 규모가 서로 다른 경우 테일러링이 필요함</li>
                                <li>보유 기술 : 프로세스, 개발 방법론, 산출물, 구성원의 능력 등이 서로 다른 경우 테일러링이 필요함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="not-hidden">외부적 기준</button>
                            <ul>
                                <li>법적 제약사항 : 프로젝트 별로 적용될 IT Compliance가 서로 다른 경우 테일러링이 필요함</li>
                                <li>표준 품질 기준 : 금융, 제도 등 분야별 표준 품질 기준이 서로 다른 경우 테일러링이 필요함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li></li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title"><b class="red">028</b></h2>
    <ul>
        <li><button type="button">소프트웨어 개발 프레임워크</button>
            <ul>
                <li>소프트웨어 개발에 <b>공통적으로 사용되는 구성 요소와 아키텍처를 일반화</b>하여 손쉽게 구현할 수 있도록
                    <br>여러가지 기능들을 제공해주는 <b>반제품 형태의 소프트웨어 시스템</b>
                </li>
                <li>선행 사업자의 기술에 의존하지 않는 표준화된 개발 기반으로 인해 사업자 종속성이 해소됨</li>
                <li><b>주요 기능</b>
                    <ul>
                        <li>예외 처리</li>
                        <li>트랜잭션 처리</li>
                        <li>메모리 공유</li>
                        <li>데이터 소스 관리</li>
                        <li>서비스 관리</li>
                        <li>쿼리 서비스</li>
                        <li>로깅 서비스</li>
                        <li>사용자 인증 서비스</li>
                    </ul>
                </li>
                <li><b>종류</b>
                    <ul>
                        <li><button type="button" class="red">스프링 프레임워크</button>(<button type="button">Spring Framework</button>)
                            <ul>
                                <li>자바 플랫폼을 위한 오픈 소스 경량형 애플리케이션 프레임워크</li>
                                <li>동적인 웹 사이트의 개발을 위해 다양한 서비스 제공</li>
                                <li>전자정부 표준 프레임워크의 기반 기술로 사용됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">전자정부 프레임워크</button>
                            <ul>
                                <li><b>대한민국의 공공부문 정보화 사업 시</b> 효율적인 정보시스템의 구축을 지원하기 위해
                                    필요한 기능 및 아키텍처를 제공하는 프레임워크
                                </li>
                                <li>개발 프레임워크의 표준 정립으로 응용 소프트웨어의 표준화, 품질 및 재사용성의 향상을 목적으로 함</li>
                                <li>오픈 소스 기반의 범용화를 이룰 수 있음</li>
                                <li>공개된 기술을 활용함으로써, 특정 업체의 종속성을 배제하고 사업별 공통 컴포넌트의 중복 개발을 방지함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">닷넷 프레임워크</button>(<button type="button">.NET Framework</button>)
                            <ul>
                                <li>Windows 프로그램의 개발 및 실행 환경을 제공하는 프레임워크</li>
                                <li>Microsoft 사에서 통합 인터넷 전략을 위해 개발함</li>
                                <li>코드 실행을 관리하는 CLR(Common Language Runtime, 공용 언어 런타임)이라는 이름의 가상 머신 상에서 작동함</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>특성</b>
                    <ul>
                        <li><button type="button">모듈화(Modularity)</button>
                            <ul>
                                <li>프레임워크는 캡슐화를 통해 <b>모듈화를 강화</b>하고 설계 및 구현의 <b>변경에 따른 영향을 최소화</b>함으로써
                                    소프트웨어의 품질을 향상시킴
                                </li>
                                <li>프레임워크는 개발 표준에 의한 모듈화로 인해 유지보수가 용이함</li>
                            </ul>
                        </li>
                        <li><button type="button">재사용성(Reusability)</button>
                            <ul>
                                <li>프레임워크는 재사용 가능한 모듈을 제공함으로써 예산 절감, 생산성 향상, 품질 보증이 가능함</li>
                            </ul>
                        </li>
                        <li><button type="button">확장성(Extensibility)</button>
                            <ul>
                                <li>프레임워크는 다형성(Polymorphism)을 통한 인터페이스 확장이 가능하여 다양한 형태와 기능을 가진 애플리케이션 개발이 가능함</li>
                            </ul>
                        </li>
                        <li><button type="button">제어의 역흐름(Inversion of Control)</button>
                            <ul>
                                <li>개발자가 관리하고 통제해야 하는 객체들의 제어를 프레임워크에 넘김으로써 생산성을 향상시킴</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default postTemplate;