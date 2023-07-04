
const title = 'XSS와 CSRF 비교 정리';

export const postMeta = {
    title : title,
    description: '여러 블로그 정보들을 보고, XSS와 CSRF를 비교한 표',
    keywords : ['XSS', 'CSRF', '특징', '차이', '목적', '기법', '토큰 사용 이유']
};

const post2 = `
    <h1 class="title">${title}</h1>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-05-07</span>
        <span class="modification-date">수정일 : 2023-05-07</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <blockquote>
        읽은 글1 : <a href="https://lucete1230-cyberpolice.tistory.com/23">
        XSS와 CSRF 특징 및 차이
        </a>
        <br>읽은 글2 : <a href="https://velog.io/@minjae-mj/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B3%B4%EC%95%88-%EA%B3%B5%EA%B2%A9-XSS-CSRF">
        웹 사이트 보안 공격 (XSS, CSRF)
        </a>
        <br>읽은 글3 : <a href="https://dar0m.tistory.com/246">
        [Web] XSS와 CSRF의 차이점
        </a>
    </blockquote>
    <p>
        동기: "리액트를 다루는 기술" 책의 23장을 학습하던 중 로컬스토리지/세션스토리지와 브라우저의 쿠키 중 쿠키에 토큰을 저장하는 이유로 XSS와 CSRF를 언급했는데, 각 개념을 확실히 알기위해 찾아보고, 또 잊었을때 간략하게 보기 위해 정리함.
    </p>

    <hr>

    <article id="sub1">
        <h2 class="sub-title">표 정리</h2>
        <table width="100%">
            <thead>
                <tr>
                    <th width="12%" scope="col">종류</th>
                    <th width="44%" scope="col">XSS</th>
                    <th width="44%" scope="col">CSRF</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">약어</th>
                    <td>
                        <b>Cross-Site Scripting</b>
                        <br>사이트 간 스크립팅
                    </td>
                    <td>
                        <b>Cross-Site Request Fogery</b>
                        <br>사이트 간 요청 위조
                    </td>
                </tr>
                <tr>
                    <th scope="row">개요</th>
                    <td>
                        <span class="red">악성 스크립트</span>가 클라이언트에서 실행됨
                    </td>
                    <td>
                        권한을 도용당한 클라이언트가 <span class="red">가짜 요청</span>을 서버에 전송함
                    </td>
                </tr>
                <tr>
                    <th scope="row">공격 대상</th>
                    <td>
                        <b>클라이언트</b>
                    </td>
                    <td>
                        <b>서버</b>
                    </td>
                </tr>
                <tr>
                    <th scope="row">목적</th>
                    <td>
                        <ul>
                            <li><b>쿠키/세션/토큰</b> 등 민감한 정보를 탈취함</li>
                            <li><b>웹사이트 변조</b> 등
                                <br>⇒ 자신들이 의도한 페이지로 리다이렉트, 악성코드 다운로드, 개인정보 입력 유도
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>
                                <b>권한 도용</b>
                                <br>⇒ 특정 행동 실행
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th scope="row">기법</th>
                    <td>
                        <b>악의적인 사용자가 공격하려는 사이트에 <span class="red">악성 스크립트</span>를 넣는 기법 ⇒ 사용자가 공격에 당함</b>
                        <ul>
                            <li>JS 사용 공격 多</li>
                            <li>여러 사용자가 접근 가능한 게시판 또는 메일, 닉네임 등에 코드 삽입</li>
                        </ul>
                        <br>
                        <b>종류1. Store XSS : </b>게시판, 댓글, 닉네임 등 스크립트가 <u>서버에 저장되어 실행</u>되는 방식 
                        <br>⇒ <b>시스템 자체</b>를 공격 할 수 있으며, <b>웹앱 사용자</b> 상당수 또는 전체에 악성 코드 전송
                        (일반적인 공격 유형이자 가장 위험한 XSS 공격)
                        <br><br>
                        <b>종류2. Reflected XSS : </b><br>URL 파라미터에 스크립트를 넣어 <u>서버에 저장하지 않고 그 즉시 스크립트를 만드는 방식</u> 
                        <br>⇒ 공격자가 HTTP 요청에 악성 콘텐츠를 주입하면 그 결과가 사용자에게 ‘반사되는’ 형태
                        <br>⇒ 링크를 클릭하도록 <b>사용자</b>를 속이고, 유인해 세션을 하이재킹 할 수 있는 공격(피싱공격)
                        (브라우저 자체에서 차단하는 경우가 많아 상대적으로 공격 성공이 어려움)
                    </td>
                    <td>
                        <b>사용자가 자신의 의지와는 무관하게 <span class="red">공격자가 의도한 행위(수정, 삭제, 등록 등)</span>를 특정 웹사이트에 <span class="red">요청하게 하는</span> 공격</b>
                        <br><br>공격자가 컴퓨터를 감염 또는 사이트를 해킹 해서 이뤄지는 공격이 아님
                        <br><br>
                        <b>공격 성공 조건</b>
                        <ol>
                            <li>사용자가 웹사이트에 로그인한 상태로</li>
                            <li>공격자가 만든 피싱 사이트(CSRF 코드가 삽입된 페이지)에 접속해야함</li>
                        </ol>
                        ⇒ 웹사이트는 위조된 공격 명령이 믿을 수 있는 사용자로부터 발송된것으로 판단하게되어 공격에 노출됨
                    </td>
                </tr>
                <tr>
                    <th scope="row">취약점</th>
                    <td>
                        <b>사용자가 특정 웹사이트를 신용하는 점을 노림</b>
                        <br><br>웹 애플리케이션이 <u>사용자로부터 입력받은 값</u>을 제대로 검사하지 않고 사용할 경우
                        <br>(유효성 검사, 인코딩)
                    </td>
                    <td>
                        <b>특정 웹사이트가 사용자의 웹 브라우저를 신용하는 점을 노림</b>
                    </td>
                </tr>
                <tr>
                    <th scope="row">방지대책</th>
                    <td>
                        <ul>
                            <li><b>쿠키에 중요한 정보 담지 않기</b></li>
                            <li><b>정보 암호화</b></li>
                            <li><b><code>httponly</code> 속성 on</b><br> (JS의 document.cookie를 이용해서 쿠키에 접속하는것을 막는 옵션)</li>
                            <li><b>secure coding : </b>보안과 관련된 함수 사용</li>
                            <li><b>BBCode 사용 : </b>Bulletin Board Code. 만들기 편하고 안정성 높은편</li>
                            <li><b>쿠키 보안 옵션 사용 : </b>쿠키 생성시 ‘보안쿠키’ 파라미터를 지정하면 <a href="https://www.cloudflare.com/ko-kr/learning/ssl/transport-layer-security-tls/">TLS</a> 상에서만 사용하게 할 수 있다</li>
                            <li><b>콘텐츠 보안 정책(CSP) 사용 : </b>스크립트 실행 정책을 설정해 예방함. 출처가 자기 서버인 스크립트만 실행될 수 있도록 함</li>
                        </ul>
                    </td>
                    <td>
                        <span class="red">* 아래 두방법은 같은 도메인 내에 XSS 취약점이 있다면 CSRF 공격에 취약해진다</span>
                        <ul>
                            <li><b>Referrer 검증 : </b>Back-end 단에서 request 의 referrer을 확인 ⇒ domain 일치 검증</li>
                            <li><b>Security Token 사용 : </b>Referrer 검증이 불가한 환경일 때 활용. 사용자의 요청마다 해당 난수 값 포함 전송 → 요청 받을때마다 세션에 저장된 토큰 값과 요청 파라미터에 전달되는 토큰 값이 일치하는지 검증</li>
                            <li><b>Double Submit Cookie 검증 : </b>세션을 사용할 수 없는 환경일 때 활용. 서버에 토큰값을 저장할 필요 없어 개발 공수가 적은 편. <br>스크립트 단에서 요청 시 난수 값을 생성하여 쿠키에 저장하고 동일한 난수 값을 요청 파라미터(혹은 헤더)에도 저장하여 서버로 전송 ⇒ 쿠키 토큰값과 파라미터 토큰값 일치 검사. 
                                (웹 브라우저의 Same Origin 정책으로 인해 자바스크립트에서 타 도메인의 쿠키 값을 확인/수정하지 못한다는 것을 이용한 방어 기법.)</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </article>
    
    <hr>
    <blockquote>
    👇 원본 글 보러가기
        <br><a href="https://lucete1230-cyberpolice.tistory.com/23">
            XSS와 CSRF 특징 및 차이
        </a>
        <br><a href="https://velog.io/@minjae-mj/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B3%B4%EC%95%88-%EA%B3%B5%EA%B2%A9-XSS-CSRF">
            웹 사이트 보안 공격 (XSS, CSRF)
        </a>
        <br><a href="https://dar0m.tistory.com/246">
            [Web] XSS와 CSRF의 차이점
        </a>
    </blockquote>
`;

export default post2;