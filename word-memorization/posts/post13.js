
export const postTemplate = `
<h1 class="title">정처기 실기 2. 데이터 입·출력 구현2</h1>
<p class="post-date">
    <span class="creation-date">작성일 : 2023-06-28</span>
    <span class="modification-date">수정일 : 2023-06-28</span>
</p>
<p class="top-fixed-guide">
    <span class="red font-size-s">* 최종 암기 확인/복습을 위한 요약본</span>
    <br><mark>B033 E-R 모델</mark>
    <br><mark>A034 관계형 데이터베이스의 구조 / 관계형 데이터 모델</mark>
    <br><mark>A035 관계형 데이터베이스의 제약조건 - 키(Key)</mark>
    <br><mark>B036 관계형 데이터베이스의 제약조건 - 무결성(Integrity)</mark>
    <br><mark>A037 관계대수 ㅁ치 관계 해석</mark>
    <br><mark>A038 이상 / 함수적 종속</mark>
    <br><mark>B039 정규화(Normalization)</mark>
    <br><mark>A040 반정규화(Denormalization)</mark>
    <br><mark>C041 시스템 카탈로그</mark>
    <br><mark>A042 트랜잭션 분석 / CRUD 분석</mark>
    <br><mark>C043 인덱스</mark>
    <br><mark>B044 뷰 / 클러스터</mark>
    <br><mark>B045 파티션</mark>
    <br><mark>C046 분산 데이터베이스 설계</mark>
    <br><mark>B047 데이터베이스 이중화 / 서버 클러스터링</mark>
    <br><mark>B048 데이터베이스 보안</mark>
    <br><mark>B049 데이터베이스 백업</mark>
    <br><mark>B050 스토리지</mark>
    <br><mark>D051 논리 데이터 모델의 변환</mark>
    <br><mark>B052 자료 구조</mark>
    <br><mark>C053 트리(Tree)</mark>
    <br><mark>A054 이진 트리</mark>
    <br><mark>A055 정렬</mark>
</p>
<hr>

<article id="💛sub1">
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

<!-- 아티클 복사 탬플릿 -->
<article id="💛sub2">
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