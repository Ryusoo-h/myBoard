
const post = `
<h1 class="title">정처기 실기 6.화면 설계</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-14</span>
    <span class="modification-date">수정일 : 2023-07-14</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>A086 사용자 인터페이스</mark>
    <br><mark>C087 UI 설계 도구</mark>
    <br><mark>B088 품질 요구사항</mark>
    <br><mark>D089 UI 설계</mark>
    <br><mark>B090 HCI/UX/감성공학</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title"><b class="red">086</b></h2>
    <ul><li><button type="button" class="not-hidden">사용자 인터페이스(UI, User Interface)</button><ul><li>사용자와 시스템 간의 상호작용이 원활하게 이뤄지도록 도와주는 장치나 소프트웨어</li><li><b>3가지 분야</b><ul><li>정보 제공과 전달을 위한 물리적 제어에 관한 분야</li><li>콘텐츠의 상세적인 표현과 전체적인 구성에 관한 분야</li><li>모든 사용자가 편리하고 간편하게 사용하도록 하는 기능에 관한 분야</li></ul></li><li><b>사용자 인터페이스의 구분</b><ul><li><button type="button" class="red">CLI</button>(<button type="button">Commend Line Interface</button>) : 명령과 출력이 텍스트 형태로 이뤄지는 인터페이스</li><li><button type="button" class="red">GUI</button>(<button type="button">Graphical User Interface</button>) : 아이콘이나 메뉴를 마우스로 선택하여 작업을 수행하는 그래픽 환경의 인터페이스</li><li><button type="button" class="red">NUI</button>(<button type="button">Natural User Interface</button>) : 사용자의 말이나 행동 등 자연스러운 움직임을 통해 기기를 조작하는 인터페이스</li></ul></li><li><b>사용자 인터페이스 기본 원칙</b><ul><li><button type="button">직관성</button> : 누구나 쉽게 이해하고 사용할 수 있어야함</li><li><button type="button">유효성</button> : 사용자의 목적을 정확하고 완벽하게 달성해야 함</li><li><button type="button">학습성</button> : 누구나 쉽게 배우고 익힐 수 있어야함</li><li><button type="button">유연성</button> : 사용자의 요구사항을 최대한 수용하고 실수룰 최소화해야 함</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">087</h2>
    <ul><li><b>UI 설계 도구</b><ul><li><button type="button" class="red">와이어프레임(Wireframe)</button><ul><li><b>페이지에 대한 개략적인 레이아웃이나 UI 요소등에 대한 뼈대를 설계하는 도구</b></li><li>기획 단계의 초기에 제작</li><li>개발자나 디자이너 등이 레이아웃을 협의하거나 현재 진행 상태 등을 공유하기 위해 사용</li><li>페이지의 영역 구분, 콘텐츠, 텍스트 배치 등을 화면 단위로 설계함</li><li>와이어프레임 툴 : 손그림, 파워포인트, 키노트, 스케치, 일러스트, 포토샵 등</li></ul></li><li><button type="button" class="red">목업(Mockup)</button><ul><li>와이어프레임보다 좀 더 <b>실제 화면과 유사하게 만든 정적인 형태의 모형</b></li><li>디자인, 사용방법 설명, 평가 등을 위해 만듬</li><li>시각적으로만 구성 요소를 배치하는 것으로 실제로 구현되지 않음</li><li>목업 툴 : 파워 목업, 발사믹 목업 등</li></ul></li><li><button type="button" class="red">스토리보드(Story Board)</button><ul><li><b>와이어프레임에 콘텐츠에 대한 설명, 페이지 간 이동 흐름 등을 추가한 문서</b></li><li>디자이너와 개발자가 최종적으로 참고하는 작업 지침서</li><li>서비스 구축을 위한 모든 정보가 들어있음</li><li>스토리보드 툴 : 파워포인트, 키노트, 스케치, Axure 등</li></ul></li><li><button type="button" class="red">프로토타입(Prototype)</button><ul><li>와이어프레임이나 스토리보드 등에 인터랙션을 적용함으로써 <b>실제 구현된 것처럼 테스트가 가능한 동적인 형태의 모형</b></li><li>사용자의 요구사항을 개발자가 맞게 해석했는지 검증하기 위한 것</li><li>일부 핵심적인 기능만 제공</li><li><b>종류</b><ul><li><button type="button">페이퍼 프로토타입</button><ul><li>스케치, 그림, 글 등을 이용하여 손으로 직접 작성하는 아날로그적인 방법</li><li>제작 기간이 짧은 경우, 제작 비용이 적을 경우, 업무 협의가 빠를 경우 사용</li></ul></li><li><button type="button">디지털 프로토타입</button><ul><li>파워포인트, 아크로뱃, 비지오, 옴니그래플 등과 같은 프로그램을 사용하여 작성하는 방법</li><li>재사용이 필요한 경우, 산출물과 비슷한 효과가 필요한 경우, 숙련된 전문가가 있을 경우 사용함</li></ul></li></ul></li></ul></li><li><button type="button" class="red">유스케이스(Use Case)</button><ul><li><b>사용자의 요구사항을 기능 단위로 표현하는 것</b></li><li>사용자가 원하는 목표를 달성하기 위해 수행할 내용 기술</li><li>사용자의 요구사항을 빠르게 파악함으로써 프로젝트의 초기에 시스템의 기능적인 요구를 결정하고 그 결과를 문서화할 수 있음</li><li>일반적으로 다이어그램 형식으로 묘사됨</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title"><b class="red">088</b></h2>
    <ul><li><b>품질 요구사항</b><ul><li>소프트웨어에 대한 요구사항이 사용자의 입장에서 얼마나 충족하는 가를 나타내는 소프트웨어 특성의 총체</li><li>소프트웨어 품질은 사용자의 요구사항을 충족시킴으로써 확립됨</li><li><b>소프트웨어 품질 관련 표준</b><ul><li><button type="button" class="not-hidden">ISO/IEC 9126</button> : 소프트웨어 품질 특성과 평가를 위한 국제 표준<ul><li><b>소프트웨어 품질 특성</b><ul><li><button type="button">기능성(Functionality)</button><ul><li>소프트웨어가 사용자의 요구사항을 정확하게 만족하는 기능을 제공하는지 여부를 나타냄</li><li>하위 특성 : 적절성/적합성, 정밀성/정확성, 상호 운용성, 보안성, 준수성</li></ul></li><li><button type="button">신뢰성(Reliability)</button><ul><li>주어진 시간동안 주어진 기능을 오류 없이 수행할 수 있는 정도를 나타냄</li><li>하위 특성 : 성숙성, 고장 허용성, 회복성</li></ul></li><li><button type="button">사용성(Usability)</button><ul><li>사용자와 컴퓨터 사이에 발생하는 어떠한 행위에 대하여 사용자가 정확하게 이해하고 사용하며, 향후 다시 사용하고 싶은 정도를 나타냄</li><li>하위 특성 : 이해성, 학습성, 운용성, 친밀성</li></ul></li><li><button type="button">효율성(Efficiency)</button><ul><li>사용자가 요구하는 기능을 얼마나 빠르게 처리할 수 있는지 정도를 나타냄</li><li>하위 특성 : 시간 효율성, 자원 효율성</li></ul></li><li><button type="button">유지 보수성(Maintainability)</button><ul><li>환경의 변화 또는 새로운 요구사항이 발생했을 때 소프트웨어를 개선하거나 확장할 수 있는 정도를 나타냄</li><li>하위 특성 : 분석성, 변경성, 안정성, 시험성</li></ul></li><li><button type="button">이식성(Portability)</button><ul><li>소프트웨어가 다른 환경에서도 얼마나 쉽게 적용할 수 있는지 정도를 나타냄</li><li>하위 특성 : 적용성, 설치성, 대체성, 공존성</li></ul></li></ul></li></ul></li><li><button type="button" class="not-hidden">ISO/IEC 25010</button> : ISO/IEC 9126에 호환성과 보안성을 강화하여 개정한 소프트웨어 제품에 대한 국제 표준</li><li><button type="button" class="not-hidden">ISO/IEC 12119</button> : 패키지 소프트웨어의 일반적인 제품 품질 요구사항 및 테스트를 위한 국제 표준</li><li><button type="button" class="not-hidden">ISO/IEC 14598</button> : 소프트웨어 품질의 측정과 평가에 필요 절차를 규정한 표준</li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">089</h2>
    <ul><li><b>UI 설계</b><ul><li><button type="button" class="red">UI 설계서</button><ul><li>사용자의 요구사항을 바탕으로 UI 설계를 구체화하여 작성하는 문서</li><li>UI 설계서는 기획자, 개발자, 디자이너 등과의 원활한 의사소통을 위해 작성함</li><li><b>작성 순서</b><ol><li><button type="button">UI 설계서 표지 작성</button> : 다른 문서와 혼동되지 않도록 프로젝트 명 또는 시스템명을 포함하여 작성함</li><li><button type="button">UI 설계써 개정 이력 작성</button> : UI 설계서가 수정될 때마다 어떤 부분이 어떻게 수정되었는지를 정리함</li><li><button type="button">UI 요구사항 정의서 작성</button> : 사용자의 요구사항을 확인하고 정리함</li><li><button type="button">시스템 구조 작성</button> : UI 요구사항과 UI 프로토타입에 기초하여 전체 시스템의 구조를 설계함</li><li><button type="button">사이트 맵 작성</button> : 사이트에 표시할 콘텐츠를 메뉴별로 구분하여 설계함</li><li><button type="button">프로세스 정의서 작성</button> : 사용자가 요구하는 프로세스들을 작업 진행 순서에 맞춰 정리함</li><li><button type="button">화면 설계</button> : 필요한 화면을 페이지별로 설계함</li></ol></li></ul></li><li><button type="button" class="red">UI 흐름 설계</button><ul><li>업무의 진행 과정이나 수행 절차에 따른 흐름을 파악하여 화면과 폼을 설계하는 단계</li><li><b>순서</b><ol><li><button type="button">기능 작성</button> : 화면에 표현할 기능 작성</li><li><button type="button">입력 요소 확인</button> : 화면에 표현되어야 할 기능을 확인한 후 화면에 입력할 요소 확인</li><li><button type="button">유스케이스 설계</button> : UI 요구사항을 기반으로 UI 유스케이스 설계함</li><li><button type="button">기능 및 양식 확인</button> : 텍스트 박스, 콤보 박스, 라디오 박스, 체크 박스 등을 확인하고 규칙을 정의함</li></ol></li></ul></li><li><button type="button" class="red">UI 상세 설계</button><ul><li><button type="button" class="not-hidden">UI 설계서</button>를 바탕으로 실제 설계 및 구현을 위해 모든 화면에 대해 자세하게 설계를 진행하는 단계</li><li>반드시 시나리오를 작성해야 함</li><li><b>순서</b><ol><li><button type="button">요구사항 확인</button> : UI 상세 설계를 위한 요구사항을 최종적으로 확인함</li><li><button type="button">UI 설계서 표지 및 개정 이력 작성</button><ul><li>표지 : 다른 문서와 혼동되지 않도록 프로젝트명이나 시스템명을 포함함</li><li>개정 이력 : UI 설계서의 수정사항을 정리함</li></ul></li><li><button type="button">UI 구조 설계</button> : UI 요구사항과 UI 프로토타입에 기초하여 UI 구조를 설계하는 단계</li><li><button type="button">메뉴 구조 설계</button> : 사이트 맵 구조를 설계한 후 이를 바탕으로 사용자 기반 메뉴 구조를 설계함</li><li><button type="button">화면 설계</button> : UI 프로토타입과 UI 프로세스를 참고하여 필요한 화면을 페이지별로 설계함</li></ol></li></ul></li><li><button type="button" class="red">UI 시나리오 문서</button><ul><li>사용자 인터페이스의 기능 구조, 대표 화면, 화면 간 인터랙션의 흐름, 다양한 상황에서의 예외 처리 등을 정리한 문서</li><li>사용자가 최종 목표를 달성하기 위한 방법이 순차적으로 묘사되어 있음</li><li><b>UI 시나리오 문서의 요건</b><ul><li><button type="button">완전성(Complete)</button> : 누락되지 않도록 최대한 상세하게 기술해야 함</li><li><button type="button">일관성(Consistent)</button> : 서비스 목표, 시스템 및 사용자의 요구사항, UI 스타일 등이 모두 일관성을 유지해야 함</li><li><button type="button">이해성(Understandable)</button> : 누구나 쉽게 이해할 수 있도록 설명함</li><li><button type="button">가독성(Readable)</button> : 표준화된 템플릿 등을 활용하여 문서를 쉽게 읽을 수 있도록 해야 함</li><li><button type="button">수정 용이성(Modifiable)</button> : 시나리오의 수정이나 개선이 쉬워야 함</li><li><button type="button">추적 용이성(Traceable)</button> : 변경 사항은 언제, 어떤 부분이, 왜 발생했는지 쉽게 추적할 수 있어야 함</li></ul></li></ul></li></ul></li></ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title"><b class="red">090</b></h2>
    <ul><li><button type="button" class="red">HCI</button>(<button type="button">Human Computer Interaction or Interface</button>)<ul><li><b>사람이 시스템을 보다 편리하고 안전하게 사용할 수 있도록 연구하고 개발하는 학문</b></li><li><b>최종 목표</b> : 시스템을 사용하는데 있어 최적의 사용자 경험(UX)을 만드는 것</li><li>어떤 제품이 좋은 제품인지, 어떻게 하면 좋은 제품을 만들 수 있는지 등을 연구함</li></ul></li><li><button type="button" class="red">UX</button>(<button type="button">User Experience, 사용자 경험</button>)<ul><li><b>사용자가 시스템이나 서비스를 이용하면서 느끼고 생각하게 되는 총체적인 경험</b></li><li>UI가 사용성, 접근성, 편의성을 중시한다면 UX는 이러한 UI를 통해 사용자가 느끼는 만족이나 감정을 중시함</li><li>UX는 기술을 효용성 측면에서만 보는 것이 아니라 사용자의 삶의 질을 향상시키는 하나의 방향으로 보는 새로운 개념</li><li><b>UX의 특징</b><ul><li><button type="button">주관성(Subjectivity)</button> : 사람들의 개인적, 신체적, 인지적 특성에 따라 다르므로 주관적임</li><li><button type="button">정황성(Contextuality)</button> : 경험이 일어나는 상황 또는 주변 환경에 영향을 받음</li><li><button type="button">총체성(Holistic)</button> : 개인이 느끼는 총체적인 심리적, 감성적인 결과임</li></ul></li></ul></li><li><button type="button" class="red">감성 공학</button><ul><li><b>제품이나 작업환경을 사용자의 감성에 알맞도록 설계 및 제작하는 기술</b></li><li>인문사회과학, 공학, 의학 등 여러 분야의 학문이 공존하는 종합과학</li><li><b>목적</b> : 인간의 삶을 편리하고 안전하며 쾌적하게 만드는 것</li><li>인간의 감성을 구체적으로 제품 설계에 적용하기 위해 공학적인 접근 방법을 사용함<br/></li></ul></li></ul>
</article>
`;

export default post;