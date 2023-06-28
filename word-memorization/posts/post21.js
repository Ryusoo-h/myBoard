
export const postTemplate = `
<h1 class="title">정처기 실기2. 데이터 입·출력 구현1</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-28</span>
    <span class="modification-date">수정일 : 2023-06-28</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B029 데이터베이스 개요</mark>
    <br><mark>A030 데이터베이스 설계</mark>
    <br><mark>B031 데이터 모델의 개념</mark>
    <br><mark>D032 데이터 모델의 구성 요소</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">029</b></h2>
    <ul>
        <li><button type="button">데이터저장소</button>
            <ul>
                <li>데이터들을 논리적인 구조로 조직화하거나, 물리적인 공간에 구축한것</li>
                <li><button type="button" class="not-hidden">논리 데이터저장소</button> : 데이터 및 데이터 간의 연관성, 제약조건을 식별하여 논리적인 구조로 조직화한것</li>
                <li><button type="button" class="not-hidden">물리 데이터저장소</button> : 논리 데이터저장소를 소프트웨어가 운용될 환경을 물리적 특성을 고려하여 실제 저장장치에 저장한것</li>
            </ul>
        </li>
        <li><button type="button">데이터베이스(Database)</button>
            <ul>
                <li>여러 사람에 의해 공동으로 사용될 데이터를 중복을 배제하여 통합하고,
                    쉽게 접근하여 처리할 수 있도록 저장장치에 저장하여 항상 사용할 수 있도록 운영하는 운영 데이터임
                </li>
                <li>구분 정의
                    <ul>
                        <li><button type="button" class="red">통합된 데이터</button>(<button type="button">Integrated Data</button>)
                            : 자료의 중복을 배제한 데이터의 모임
                        </li>
                        <li><button type="button" class="red">저장된 데이터</button>(<button type="button">Stored Data</button>)
                            : 컴퓨터가 접근할 수 있는 저장 매체에 저장된 자료
                        </li>
                        <li><button type="button" class="red">운영 데이터</button>(<button type="button">Operational Data</button>)
                            : 조직의 고유한 업무를 수행하는 데 반드시 필요한 자료
                        </li>
                        <li><button type="button" class="red">공용 데이터</button>(<button type="button">Shared Data</button>)
                            여러 응용 시스템들이 공동으로 소유하고 유지하는 자료
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">DBMS</button>(<button type="button">Database Management System, 데이터베이스 관리 시스템</button>)
            <ul>
                <li>사용자의 요구에 따라 정보를 생성해주고, 데이터베이스를 관리해주는 소프트웨어</li>
                <li>기존의 파일 시스템이 갖는 데이터의 중복성과 중복성의 문제를 해결하기 위해 제안된 시스템</li>
                <li>필수 기능 3가지
                    <ul>
                        <li><button type="button">정의(Definition) 기능</button> : 데이터의 형(Type)과 구조에 대한 정의, 이용 방식, 제약 조건 등을 명시</li>
                        <li><button type="button">조작(Manipulation) 기능</button> : 데이터 검색, 갱신, 삽입, 삭제 등을 위해 인터페이스 수단을 제공</li>
                        <li><button type="button">제어(Control) 기능</button> : 데이터의 무결성, 보안, 권한 검사, 병행 제어를 제공</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">데이터의 독립성</button>
            <ul>
                <li>종속성에 대비되는 말
                    <ul>
                        <li><button type="button">논리적 독립성</button> : 응용 프로그램과 데이터베이스를 독립시킴으로써, 데이터의 논리적 구조를 변경시키더라도 응용 프로그램은 영향받지 않음</li>
                        <li><button type="button">물리적 독립성</button> : 응용 프로그램과 보조기억장치 같은 물리적 장치를 독립시킴으로써, 디스크를 추가/변경 하더라도 응용 프로그램은 영향받지 않음</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">스키마(Schema)</button>
            <ul>
                <li>데이터베이스의 구조와 제약조건에 관한 전반적인 병세를 기술한것
                    <ul>
                        <li><button type="button">외부 스키마</button>
                            <ul>
                                <li>사용자나 응용 프로그래머가 각 개인의 입장에서 필요로 하는 데이터베이스의 논리적 구조를 정의한것</li>
                            </ul>
                        </li>
                        <li><button type="button">개념 스키마</button>
                            <ul>
                                <li>데이터베이스의 전체적인 논리적 구조</li>
                                <li>모든 응용 프로그램이나 사용자들이 필요로 하는 데이터를 종합한 조직 전체의 데이터베이스로, 하나만 존재함</li>
                            </ul>
                        </li>
                        <li><button type="button">내부 스키마</button>
                            <ul>
                                <li>물리적 저장장치의 입장에서 본 데이터베이스 구조</li>
                                <li>실제로 저장될 레코드의 형식, 저장 데이터 항목의 표현 방법, 내부 레코드의 물리적인 순서 등을 나타냄</li>
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
    <h2 class="sub-title"><b class="red">030</b></h2>
    <ul>
        <li><button type="button">데이터베이스 설계</button>
            <ul>
                <li>사용자의 요구를 분석하여 그것들을 컴퓨터에 저장할 수 있는 데이터베이스의 구조에 맞게 변형한 후
                    <br>DBMS로 데이터베이스를 구현하여 일반 사용자들이 사용하게 하는것
                </li>
                <li>고려사항
                    <ul>
                        <li><b>무결성</b> : 삽입, 삭제, 갱신 등의 연산 후에도 데이터베이스에 저장된 데이터가 정해진 제약 조건을 항상 만족해야 함</li>
                        <li><b>일관성</b> : 데이터베이스에 젖아된 데이터들 사이나, 특정 질의에 대한 응답이 처음부터 끝까지 변함없이 일정해야 함</li>
                        <li><b>회복</b> : 시스템에 장애가 발생했을 때 장애 발생 직전의 상태로 복구할 수 있어야 함</li>
                        <li><b>보안</b> : 불법적인 데이터의 노출 또는 변경이나 손실로부터 보호할 수 있어야 함</li>
                        <li><b>효율성</b> : 응답시간의 단축, 시스템의 생산성, 저장 공간의 최적화 등이 가능해야 함</li>
                        <li><b>데이터베이스 확장</b> : 데이터베이스 운영에 영향을 주지 않으면서 지속적으로 데이터를 추가할 수 있어야 함</li>
                    </ul>
                </li>
                <li>설계 순서
                    <ol>
                        <li><button type="button" class="red">요구 조건 분석</button>
                            <ul>
                                <li>데이터베이스를 사용할 사람들로부터 필요한 용도를 파악하는 것</li>
                                <li>데이터베이스 사용자에 따른 수행 업무와 필요한 데이터의 종류, 용도, 처리형태, 흐름, 제약 조건 등을 수집함</li>
                                <li>수집된 정보를 바탕으로 <b>요구 조건 명세를 작성함</b></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">개념적 설계</button>(= <button type="button">정보 모델링, 개념화</button>)
                            <ul>
                                <li>정보의 구조를 얻기 위하여 현실 세계의 무한성과 계쏙성을 이해하고,</li>
                                <li>다른 사람과 통신하기 위하여 <b>현실 세계에 대한 인식을 추상적 개념으로 표현하는 과정</b></li>
                                <li><b>개념 스키마 모델링과 트랜잭션 모델링을 병행 수행함</b></li>
                                <li>요구 분석에서 나온 결과인 요구 조건 명세를 DBMS에 독립적인 <b>E-R 다이어그램</b>으로 작성함</li>
                                <li>DBMS에 독립적인 개념 스키마 설계</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">논리적 설계</button>(= <button type="button">데이터 모델링</button>)
                            <ul>
                                <li>현실 세계에서 발생하는 자료를 컴퓨터가 이해하고 처리할 수 있는 물리적 저장장치에 저장할 수 있도록 변환하기위해</li>
                                <li><b>특정 DBMS가 지원하는 논리적 자료 구조로 변환(mapping)시키는 과정이다</b></li>
                                <li>개념 세계의 데이터를 필드로 기술된 데이터 타입과 이 데이터 타입들 간의 관계로 표현되는 논리적 구조의 데이터로 모델화함</li>
                                <li>개념 스키마를 평가 및 정제하고 <b>DBMS에 따라 서로 다른 논리적 스키마를 설계</b>하는 단계</li>
                                <li><b>트랜젝션 인터페이스 설계</b></li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">물리적 설계</button>(= <button type="button">데이터 구조화</button>)
                            <ul>
                                <li>논리적 설계에서 논리적 구조로 표현된 데이터를 디스크 등의 물리적 저장장치에 저장할 수 있는 <b>물리적 구조의 데이터로 변환하는 과정</b></li>
                                <li>다양한 데이터베이스 응용에 대해 처리 성능을 얻기 위해 데이터베이스 파일의 저장 구조 및 액세스 경로를 결정함</li>
                                <li>저장 레코드의 형식, 순서, 접근 경로, 조회 집중 레코드 등의 정보를 사용하여 데이터가 컴퓨터에 저장되는 방법을 묘사함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">구현</button>
                            <ul>
                                <li>논리적 설계와 물리적 설계에서 도출된 데이터베이스 스키마를 파일로 생성하는 과정</li>
                                <li>사용하려는 특정 DBMS의 DDL을 이용하여 <b>데이터베이스 스키마를 기술</b>한 후 컴파일하여 빈 <b>데이터베이스 파일을 생성함</b></li>
                                <li>응용 프로그램을 위한 <b>트랜잭션을 작성함</b></li>
                                <li>데이터베이스 접근을 위한 응용 프로그램을 작성함</li>
                            </ul>
                        </li>
                    </ol>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">031</b></h2>
    <ul>
        <li><button type="button">데이터 모델</button>
            <ul>
                <li><b>현실 세계의 정보들을</b> 컴퓨터에 표현하기 위해서 단순화, 추상화하여 <b>체계적으로 표현한 개념적 모델</b></li>
                <li>데이터, 데이터의 관계, 데이터의 의미 및 일관성, 제약 조건 등을 기술하기 위한 개념적 도구들로 구성됨</li>
                <li>데이터베이스 설계 과정에서 데이터의 구조(Schema)를 논리적으로 표현하기 위해 지능적 도구로 사용됨</li>
                <li>구성 요소 : 개체, 속성, 관계</li>
                <li>종류 : 개념적 데이터 모델, 논리적 데이터 모델, 물리적 데이터 모델</li>
                <li>표시할 요소
                    <ul>
                        <li><button type="button">구조(Structure)</button> : 논리적으로 표현된 개체 타입들 간의 관계로서 데이터 구조 및 정적 성질 표현</li>
                        <li><button type="button">연산(Operation)</button> : 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세. 데이터베이스를 조작하는 기본 도구</li>
                        <li><button type="button">제약조건(Constaint)</button> : 데이터베이스에 저장될 수 있는 실제 데이터의 논리적인 제약 조건</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button">개념적 데이터 모델</button>
            <ul>
                <li>현실 세계에 대한 인간의 이해를 돕기 위해 현실 세계에 대한 인식을 추상적 개념으로 표현하는 과정</li>
                <li>속성들로 기술된 개체 타입과, 이 개체 타입들 간의 관계를 이용하여 현실 세계를 표현함</li>
                <li>현실 세계에 존재하는 개체를 인간이 이해할 수 있는 정보구조로 표현하기 때문에 <b>정보모델</b>이라고도 함</li>
                <li>대표적인 개념적 데이터 모델 : E-R 모델</li>
            </ul>
        </li>
        <li><button type="button">논리적 데이터 모델</button>
            <ul>
                <li>개념적 모델링 과정에서 얻은 개념적 구조를 컴퓨터가 이해하고 처리할 수 있는 컴퓨터 세계의 환경에 맞도록 변환하는 과정</li>
                <li>필드로 기술된 데이터 타입과 이 데이터 타입들 간의 관계를 이용하여 현실 세계를 표현함</li>
                <li>단순히 데이터 모델이라고 하면 논리적 데이터 모델을 의미함</li>
                <li>특정 DBMS는 특정 논리적 데이터 모델 하나만 선정하여 사용함</li>
                <li>데이터 간의 관계를 어떻게 표현하느냐에 따라 관계 모델, 계층 모델, 네트워크 모델로 구분함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">032 데이터 모델의 구성 요소</h2>
    <ul>
        <li><button type="button" class="red">개체</button>(<button type="button">Entity</button>)
            <ul>
                <li><b>데이터베이스에 표현하려는 것</b></li>
                <li>사람이 생각하는 개념이나 정보 단위 같은 <b>현실 세계의 대상체</b></li>
                <li>실세계에 독립적으로 존재하는 유형, 무형의 정보</li>
                <li>서로 연관된 몇개의 속성으로 구성됨</li>
                <li>독립적으로 존재하거나 그 자체로서도 구별 가능, <b>유일한 식별자(Unique Idertifier)</b>에 의해 식별됨</li>
                <li>다른 개체와 하나 이상의 관계(Relationship)가 있음
                    <ul>
                        <li><button type="button" class="not-hidden">속성</button></li>
                        <li><button type="button" class="not-hidden">개체 타입</button> : 속성으로만 기술된 개체의 정의</li>
                        <li><button type="button" class="not-hidden">개체 인스턴스</button> = 개체 어커런스(Occurrence) : 개체를 구성하고 있는 각 속성들이 값을 가져 하나의 개체를 나타내는것</li>
                        <li><button type="button" class="not-hidden">개체 세트</button> : 개체 인스턴스의 집합</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">속성</button>(<button type="button">Attribute</button>)
            <ul>
                <li>데이터베이스를 구성하는 가장 작은 논리적 단위</li>
                <li>파일 구조상의 데이터 항목 또는 데이터 필드에 해당함</li>
                <li>개체를 구성하는 항목으로 개체의 특성을 기술함</li>
                <li><button type="button">디그리(Degree)</button> : 속성의 수  = <button type="button">차수</button></li>
                <li>속성의 특성과 개체 구성 방식에 따라 분류함
                    <ul>
                        <li><button type="button" class="red">기본 속성</button>(<button type="button">Basic Attribute</button>)
                            <ul>
                                <li>업무 분석을 통해 정의한 속성</li>
                                <li>속성 중 가장 많고 일반적임</li>
                                <li>업무로부터 분석한 속성이라도 업무상 코드로 정의한 속성은 기본 속성에서 재외됨</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">설계 속성</button>(<button type="button">Designed Attribute</button>)
                            <ul>
                                <li>원래 업무상 존재하지 않고 설계 과정에서 도출해내는 속성</li>
                                <li>업무에 필요한 데이터 외에 데이터 모델링을 위해 업무를 규칙화하려고 속성을 새로 만들거나 변형하여 정의하는 속성</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">파생 속성</button>(<button type="button">Derived Attribute</button>)
                            <ul>
                                <li>다른 속성으로 부터 계싼이나 변형 등의 영향을 받아 발생하는 속성</li>
                                <li>파생 속성은 되도록 적은 수를 정의하는 것이 좋음</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>개체 구성 방식에 따른 분류
                    <ul>
                        <li><button type="button" class="red">기본키 속성</button>(<button type="button">Primary Key Attribute</button>)
                            : 개체를 유일하게 식별할 수 있는 속성
                        </li>
                        <li><button type="button" class="red">외래키 속성</button>(<button type="button">Foreign Key Attribute</button>)
                            : 다른 개체와의 관계에서 포함된 속성
                        </li>
                        <li><button type="button" class="red">일반 속성</button>
                            : 개체에 포함되어 있고 기본키, 외래키에 포함되지 않은 속성
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><button type="button" class="red">관계</button>(<button type="button">Relationship</button>)
            <ul>
                <li>개체와 개체 사이의 논리적 연결</li>
                <li>개체 간의 관계와 속성 간의 관계가 있음</li>
                <li>형태
                    <ul>
                        <li><button type="button" class="not-hidden">일 대 일(1:1)</button> : 개체 집합 A의 각 원소가 개체 집합 B의 원소 한 개와 대응하는 관계</li>
                        <li><button type="button" class="not-hidden">일 대 다(1:N)</button> : 개체 집합 A의 각 원소는 개체 집합 B의 원소 여러개와 대응하지만, 개체 집합 B의 각 원소는 개체 집합 A의 원소 한 개와 대응하는 관계</li>
                        <li><button type="button" class="not-hidden">다 대 다(N:M)</button> : 개체 집합 A의 각 원소는 개체 집합 B의 원소 여러개와 대응하고, 개체 집합 B의 각 원소도 개체 집합 A의 원소 여러개와 대응하는 관계</li>
                    </ul>
                </li>
                <li>종류
                    <ul>
                        <li>
                            <button type="button" class="red">종속 관계</button>(<button type="button">Dependent Relationship</button>)
                            : 두 개체 사이의 주종 관계를 표현한것. 식별 관계와 비식별 관계가 있음
                        </li>
                        <li>
                            <button type="button" class="red">중복 관계</button>(<button type="button">Redundant Relationship</button>)
                            : 두 개체 사이에 2번 이상의 종속 관계가 발생하는 관계
                        </li>
                        <li>
                            <button type="button" class="red">재귀 관계</button>(<button type="button">Recursive Relationship</button>)
                            = 순환 관계
                            : 개체가 자기 자신과 관계를 갖는 것.
                        </li>
                        <li>
                            <button type="button" class="red">배타 관계</button>(<button type="button">Exclusive Relationship</button>)
                            : 개체의 속성이나 구분자를 기준으로 개체의 특성을 분할하는 관계. 배타 AND 관계와 배타 OR 관계로 구분함
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
`;

export default postTemplate;