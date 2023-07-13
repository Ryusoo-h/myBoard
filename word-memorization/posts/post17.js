
const post = `
<h1 class="title">정처기 실기 3. 통합구현</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-07-11</span>
    <span class="modification-date">수정일 : 2023-07-11</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>D056 통합 구현</mark>
    <br><mark>C057 연계 메커니즘</mark>
    <br><mark>D058 연계 장애 및 오류 처리 구현</mark>
    <br><mark>D059 연계 데이터 보안 적용</mark>
    <br><mark>A060 XML(eXtensible Markup Language)</mark>
    <br><mark>D061 연계 테스트</mark>
</p>
<hr>

<article id="sub1">
    <h2 class="sub-title">056</h2>
    <ul>
        <li><button type="button">통합 구현</button>
            <ul>
                <li>사용자의 요구사항에 맞춰 <b>송·수신 모듈과 중계 모듈 간의 연계를 구현하는 것</b></li>
                <li>송·수신 방식이나 시스템 아키텍처 구성, 송·수신 모듈 구현 방법 등에 따라 다르므로<br>사용자의 요구사항과 구축 환경에 적합한 방식을 설계해야함</li>
                <li><b>구성 요소</b>
                    <ul>
                        <li><button type="button" class="red">송신 시스템과 모듈</button>
                            <ul>
                                <li><button type="button">송신 시스템</button> : 데이터를 생성 및 변환하여 전송하는 시스템. <button type="button" class="not-hidden">송신 모듈</button>과 <button type="button" class="not-hidden">모니터링(Monitoring)</button> 기능으로 구성됨</li>
                                <li><button type="button">송신 모듈</button> : 전송 데이터를 생성하고 필요에 따라 전송 데이터의 변환 등을 수행함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">수신 시스템과 모듈</button>
                            <ul>
                                <li><button type="button">수신 시스템</button> : 수신 받은 데이터를 정제 및 변환하는 시스템. <button type="button" class="not-hidden">수신 모듈</button>과 <button type="button" class="not-hidden">모니터링(Monitoring)</button> 기능으로 구성됨</li>
                                <li><button type="button">수신 모듈</button> : 수신 데이터를 정제하고 애플리케이션이나 데이터베이스(DB) 테이블에 적합한 데이터로 변환하는 작업 등을 수행함</li>
                            </ul>
                        </li>
                        <li><button type="button" class="red">중계 시스템</button> : 내·외부 시스템 간 또는 내부 시스템 간의 연계 시 사용되는 아키텍처</li>
                        <li><button type="button" class="red">연계 데이터</button> : 송·수신 시스템 간 송·수신 되는 데이터</li>
                        <li><button type="button" class="red">네트워크</button> : 송신 시스템, 수신 시스템, 중계 시스템을 연결해주는 통신망</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>연계 요구사항 분석</b>
            <ul>
                <li>통합 구현을 위해 사용자 요구사항을 분석하여 <b>연계 데이터를 식별 및 표준화하여 연계 데이터를 정의하는 것</b></li>
                <li><b>절차</b>
                    <ol>
                        <li>하드웨어 및 소프트웨어 구성, 네트워크 현황 확인</li>
                        <li>테이블 정의서, 코드 정의서 등의 문서 확인</li>
                        <li>체크리스트 작성</li>
                        <li>관련 문서 공유 및 인터뷰·설문 조사 실시</li>
                        <li>요구사항 정의서 작성<br/></li>
                    </ol>
                </li>
            </ul>
        </li>
        <li><b>연계 데이터 식별 및 표준화의 절차</b>
            <ol>
                <li>연계 범위 및 항목 정의 : 시스템간 연계할 정보를 상세화하여 정의</li>
                <li>연계 코드 변환 및 배핑 : 연계 정보 중 코드로 관리되어야 할 항목을 찾아 코드로 변환</li>
                <li>연계 데이터 식별자와 변경 구분 추가 : 연계 정보에 데이터 구분 식별자, 작업 구분 정보, 테이블/파일 관리 정보 등 추가</li>
                <li>연계 데이터 표현 방법 정의 : 연계 대상 범위, 대상 항목, 코드 변환 방식, 매핑 방식을 정의한 후 연계 데이터 구성</li>
                <li>연계 정의서 및 명세서 작성 : 이전 과정에서 정의된 다양한 항목들과 파악된 현황들을 문서화함</li>
            </ol>
        </li>
    </ul>
</article>
<hr>
<article id="sub2">
    <h2 class="sub-title">057</h2>
    <ul>
        <li><button type="button" class="red">연계 메커니즘</button>
            <ul>
                <li>구성
                    <ul>
                        <li>데이터의 생성 및 전송을 담당하는 <button type="button">송신 시스템</button></li>
                        <li>데이터 수신 및 운영 DB 반영을 담당하는 <button type="button">수신 시스템</button></li>
                    </ul>
                </li>
                <li><b>송·수신 시스템 사이</b>에는 데이터의 송·수신과 송·수신 시스템 현황을 모니터링하는 <button type="button" class="not-hidden">중계 시스템</button>을 설치할 수 있음</li>
                <li>연계 방식
                    <ul>
                        <li><button type="button">직접 연계 방식</button>
                            <ul>
                                <li>중간 매개체 없이 송수신 시스템이 직접 연계하는 방식</li>
                                <li>종류 : <button type="button" class="not-hidden">DB Link</button>, <button type="button" class="not-hidden">API/Open API</button>, <button type="button" class="not-hidden">DB Connection</button>, <button type="button" class="not-hidden">JDBC</button> 등</li>
                            </ul>
                        </li>
                        <li><button type="button">간접 연계 방식</button>
                            <ul>
                                <li>송수신 시스템 사이에 중간 매개체를 두어 연계하는 방식</li>
                                <li>종류 : <button type="button" class="not-hidden">연계 솔루션</button>, <button type="button" class="not-hidden">ESB</button>, <button type="button" class="not-hidden">소캣(Socket)</button>, <button type="button" class="not-hidden">웹 서비스(Web Service)</button> 등</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>과정</b>
                    <ol>
                        <li><button type="button" class="not-hidden">송신 시스템 및 송신 모듈</button></li>
                        <li><button type="button">연계 데이터 생성 및 추출</button> : 연계 솔루션과 관계없이 응용 시스템에서 연계 데이털르 생성하고 추출하는 과정</li>
                        <li><button type="button">코드 매핑 및 데이터 변환</button> : 송신 시스템에서 사용하는 코드를 수신 시스템에서 사용하는 코드로 매핑 및 변환하는 과정</li>
                        <li><button type="button">인터페이스 테이블 또는 파일 생성</button> : 연계 데이터를 인터페이스 테이블이나 파일 형식으로 생성하는 과정</li>
                        <li><button type="button">연계 서버 또는 송신 어댑터</button> : <br><button type="button" class="not-hidden">연계서버</button>는 데이터를 전송 형식에 맞게 변환하고 송수신을 수행하는 등 송수신과 관련된 모든 처리 수행함. <Br><button type="button" class="not-hidden">송신 어댑터</button>는 인터페이스 테이블 또는 파일의 데이터를 전송 형식에 맞도록 변환 및 송신 수행</li>
                        <li><button type="button" class="not-hidden">전송</button> : 송신 시스템에서 생성된 연계 데이터를 네트워크 환경에 맞는 데이터로 변환한 후 수신 시스템으로 보내는 것</li>
                        <li><button type="button">연계 서버 또는 수신 어댑터</button> : <br><button type="button" class="not-hidden">수신어댑터</button>는 수신 데이터를 인터페이스 테이블이나 파일로 생성</li>
                        <li><button type="button">인터페이스 테이블 또는 파일 생성</button></li>
                        <li><button type="button">코드 매핑 및 데이터 변환</button></li>
                        <li><button type="button">운영 DB에 연계 데이터 반영</button> : 수신된 인터페이스 테이블 또는 파일 구조의 데이터를 변환 프로그램을 이용하여 수신 시스템의 운영 DB에 반영하는 과정</li>
                        <li><button type="button" class="not-hidden">수신 시스템 및 수신 모듈</button></li>
                    </ol>
                    <ul>
                        <li>위 각 과정마다 <button type="button">로그(log) 기록</button> : 송수신 시스템에서 수행되는 모든 과정에 관한 결과 및 오류에 대한 정보를 로그 테이블이나 파일에 기록하는 과정</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub3">
    <h2 class="sub-title">058 연계 장애 및 오류처리 구현</h2>
    <ul>
        <li><b>연계 메커니즘 구간별 장애 및 오류 모니터링 현황</b>
            <ul>
                <li>연계 메커니즘에서 <b>오류 발생 시점, 오류 로그 기록 장소, 오류 로그 기록 주체</b>는 3가지 <b>구간</b>으로 구분됨
                    <ul>
                        <li><button type="button">송신 시스템</button> 구간
                            <ul>
                                <li>오류 발생 시점
                                    <ul>
                                        <li>데이터 생성 및 추출 시</li>
                                        <li>코드 매핑 및 데이터 변환 시</li>
                                        <li>인터페이스 테이블 또는 파일 등록 시</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">수신 시스템</button> 구간
                            <ul>
                                <li>오류 발생 시점
                                    <ul>
                                        <li>연계 데이터 로드(Load) 시</li>
                                        <li>코드 매핑 및 데이터 변환 시</li>
                                        <li>운영 DB에 반영 시</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><button type="button">연계 서버</button> 구간
                            <ul>
                                <li>오류 발생 시점
                                    <ul>
                                        <li>연계 데이터 로드(Load) 및 전송 형식으로 변환 시</li>
                                        <li>연계 데이터 송수신 시</li>
                                        <li>수신 시스템의 데이터 형식으로 변환 및 로드(Load) 시</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>장애 및 오류 유형과 처리 방항</b>
            <ul>
                <li><b>분류</b>
                    <ul>
                        <li><button type="button">송수신 시스템의 연계 프로그램 오류</button></li>
                        <li><button type="button">연계 서버의 오류</button></li>
                        <li><button type="button">연계 데이터의 오류</button></li>
                    </ul>
                </li>
                <li><b>송수신 시스템의 연계 프로그램</b>과 <b>연계 서버</b>에서 기록하는 <button type="button" class="not-hidden">로그</button>를 통해 장애 및 오류 원인을 확인하고 분석하여 적절한 처리방안을 선택함</li>
            </ul>
        </li>
        <li><b>장애 및 오류의 확인과 처리 절차</b>
            <ul>
                <li>1차적으로 <b>연계 서버에서 제공하는 장애 및 오류 현황 모니터링 화면</b>을 통해 오류 원인 및 발생 현황을 확인함</li>
                <li>1차에서 확인 불가능한 경우, <b>송수신 시스템의 연계 프로그램과 연계 서버에서 기록한 오류 로그 테이블 또는 파일</b>을 확인하여 오류 원인을 분석함</li>
                <li>발생한 오류에 대한 원인이 확인되면, 원인에 따른 적절한 조치 취함</li>
            </ul>
        </li>
        <li><b>장애 및 오류의 정의와 설계</b>
            <ul>
                <li>장애 및 오류 현황의 기록과 확인을 위해서는 다음 항목들을 정의하고 설계해야함</li>
                <li><b><button type="button" class="not-hidden">항목</button> : 내용</b></li>
                <li><button type="button" class="not-hidden">장애 및 오류 관리 대상</button> : 송수신 시스템의 연계 프로그램에서 관리하는 장애 및 오류를 <b>관리 대상으로 정의</b>함</li>
                <li><button type="button" class="not-hidden">관리 대상의 장애 및 오류 코드와 메시지</button> : 관리 대상에서 식별한 오류 내용을 주제별로 <b>분류</b>한 후, 각 오류 내용에 <b>오류 코드</b>를 부여하고 <b>오류 메시지</b>를 정의함</li>
                <li><button type="button" class="not-hidden">장애 및 오류 코드와 메시지 관리 방식</button> : 관리 대상 오류 코드와 오류 메시지가 많은 경우엔 <button type="button" class="not-hidden">테이블 관리방식</button>을. 적은 경우에는 <button type="button" class="not-hidden">파일 관리 방식</button> 선택함</li>
                <li><button type="button" class="not-hidden">장애 및 오류 기록 방식</button> : 오류 로그 테이블이나 파일은 기록 단위에 따라 <button type="button" class="not-hidden">인터페이스 테이블</button>이나 <button type="button" class="not-hidden">파일에 대한 로그</button>, <button type="button" class="not-hidden">연계 데이터에 대한 로그</button>로 설계함</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub4">
    <h2 class="sub-title">059 연계 데이터 보안 적용</h2>
    <ul>
        <li><b>연계 데이터의 보안</b> : 송신 시스템에서 수신 시스템으로 전송되는 연계 데이터는 보안에 취약할 수 있으므로 데이터의 중요성을 고려하여 보안을 적용해야함
        <li><b>방식</b>
            <ul>
                <li><button type="button">전송 구간 보안</button>
                    <ul>
                        <li>전송되는 데이터나 패킷(Packet)을 쉽게 가로챌 수 없도록 <b>암호화 기능이 포함된 프로토콜을 사용</b>함</li>
                        <li>데이터나 패킷을 가로채더라도 내용을 확인할 수 없게 <b>데이터나 패킷을 암호화</b>함</li>
                    </ul>
                </li>
                <li><button type="button">데이터 보안</button>
                    <ul>
                        <li>송신 시스템에서 연계 데이터를 추출할 때와 수신 시스템에서 데이터를 운영 DB에 반영할 때 데이터를 암·복호화 하는 것</li>
                        <li><b>데이터의 암·복호화 처리 절차</b>
                            <ul>
                                <li><button type="button" class="not-hidden">송신 시스템</button>
                                    <ul>
                                        <li>DB에서 연계 데이터 추출</li>
                                        <li>보안 적용 대상 컬럼(Column)을 암호화</li>
                                        <li>연계 데이터를 인터페이스 테이블 또는 파일에 등록 및 송신</li>
                                    </ul>
                                </li>
                                <li><button type="button" class="not-hidden">수신 시스템</button>
                                    <ul>
                                        <li>수신된 데이터 중 암호화힌 컬럼(Column)을 복호화</li>
                                        <li>운영 DB에 반영</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><b>암·복호화 적용 절차</b>
            <ul>
                <li>암호화 적용 대상, 암호화 알고리즘, 암호화 키(Key) 선정</li>
                <li>암호화 적용 대상 컬럼(Column)의 데이터 길이 변경</li>
                <li>암호화 알고리즘 라이브러리 확보 및 설치</li>
                <li>연계 응용 프로그램에서 암·복호화 처리 수행</li>
            </ul>
        </li>
        </li>
    </ul>
</article>
<hr>
<article id="sub5">
    <h2 class="sub-title"><b class="red">060</b></h2>
    <ul>
        <li><button type="button" class="red">XML</button>
            <ul>
                <li><b>특수한 목적을 갖는 마크업 언어를 만드는 데 사용되는 다목적 마크업 언어</b></li>
                <li>웹브라우저 간 HTML 문법이 호환되지 않는 문제와 <button type="button" class="not-hidden">SGML</button>의 복잡함을 해결하기 위하여 개발됨
                    <ul>
                        <li><button type="button" class="not-hidden">SGML</button>(<button type="button">Stand Generalized MarkupLanguage</button> : 텍스트, 이미지, 오디오 및 비디오 등을 포함하는 멀티미디어 전자문서들을 다른 기종의 시스템들과 정보의 손실 없이 효율적으로 전송, 저장 및 자동 처리 하기 위한 언어</li>
                    </ul>
                </li>
                <li>사용자가 직접 문서의 태그(Tag)를 정의할 수 있으며, 다른 사용자가 정의한 태그를 사용할 수 있음</li>
                <li>트리 구조로 구성되어 있어 상위 태그는 여러 개의 하위 태그를 가질 수 있음</li>
            </ul>
        </li>
        <li><button type="button" class="red">SOAP</button>(<button type="button">Simple Object Access Protocol</button>)
            <ul>
                <li><b>컴퓨터 네트워크 상에서 <button type="button" class="not-hidden">HTTP/HTTPS</button>, <button type="button" class="not-hidden">SMTP</button> 등을 이용하여 <button type="button" class="not-hidden">XML</button>을 교환하기 위한 통신 규약</b></li>
                <li>웹 서비스에서 사용되는 메시지의 형식과 처리 방법 지정</li>
                <li>기본적으로 HTTP 기반에서 동작하기 때문에 프록시와 방화벽의 영향 없이 통신할 수 있음</li>
                <li>최근에는 무거운 구조의 SOAP 대신 <button type="button" class="not-hidden">RESTful 프로토콜</button>을 이용하기도 함</li>
            </ul>
        </li>
        <li><button type="button" class="red">WSDL</button>(<button type="button">WebServices Description Language</button>)
            <ul>
                <li><b>웹 서비스와 관련된 서식이나 프로토콜 등을 표준적인 방법으로 기술하고 게시하기 위한 언어</b></li>
                <li><button type="button" class="not-hidden">XML</button>로 작성되며, <button type="button" class="not-hidden">UDDI</button>의 기초가 됨
                    <ul>
                        <li><button type="button" class="not-hidden">UDDI</button>(<button type="button">Universal Description, Discovery and Integration</button>) : 인터넷에서 전 세계의 비즈니스 업체 목록에 자신의 정보를 등록하기 위한 확장성 생성 언어(XML)기반의 규격임</li>
                    </ul>
                </li>
                <li><button type="button" class="not-hidden">SOAP, XML 스키마</button>와 결합하여 인터넷에서 웹 서비스를 제공하기 위해 사용됨</li>
                <li>클라이언트는 WSDL 파일을 읽어 서버에서 어떠한 조작이 가능한지를 파악할 수 있음</li>
            </ul>
        </li>
    </ul>
</article>
<hr>
<article id="sub6">
    <h2 class="sub-title">061 연계 테스트</h2>
    <ul>
        <li>구축된 연계 시스템과 연계 시스템의 구성 요소가 정상적으로 동작하는지 확인하는 활동</li>
        <li><b>진행 순서</b>
            <ol>
                <li><button type="button">연계 테스트 케이스 작성</button> : 연계 시스템 간의 데이터 및 프로세스의 흐름을 분석하여 필요한 테스트 항목을 도출함</li>
                <li><button type="button">연계 테스트 환경 구축</button> : 테스트의 일정, 방법, 절차, 소요 시간 등을 송수신 기관과의 협의를 통해 결정함</li>
                <li><button type="button">연계 테스트 수행</button> : 연계 응용 프로그램을 실행하여 연계 테스트 케이스의 시험 항목 및 처리 절차 등을 실제로 진행함</li>
                <li><button type="button">연계 테스트 수행 결과 검증</button> : 연계 테스트 케이스의 시험 항목 및 처리 절차를 수행한 결과가 예상 결과와 동일한지 확인함</li>
            </ol>
        </li>
    </ul>
</article>
`;

export default post;