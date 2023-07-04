
const title = '좋은 코드 작성하기';

export const postMeta = {
    title : title,
    description: '선언적인 코드 작성하기 선언적인 코드 = 추상화 레벨이 높아진 코드 좋은 코드 = 수정하기 쉬운 코드 만약 바뀔 수 있는 부분이 많다면 인자를 많이 주게되어 오히려 더 복잡해질 수 있기에 코드의 어느부분이 수정될지 잘 예측하여 작성할것',
    keywords : ['좋은 코드', '추상화', '수정하기 쉬운 코드']
};

const post3 = `
    <h1 class="title">${title}</h1>
    <p class="post-date">
        <span class="creation-date">작성일 : 2023-05-09</span>
        <span class="modification-date">수정일 : 2023-05-09</span>
    </p>
    <p class="top-fixed-guide">
        <span class="red font-size-s">* 이 글은 개인적인 학습을 위해 정리한 내용입니다. 보다 자세한 설명과 예시, 코드 등은 원본 글을 보시길 바랍니다!</span>
    </p>
    <p>
        동기: 좋은 코드를 작성하는 팁들을 스쳐지나가면서 꽤 보게 되는것 같다. 어떤 코드가 좋을까 고민할때 이 글을 다시 찾아보면 되도록 좋은 코드 작성 팁들을 이 포스트에 모으자!
    </p>

    <hr>

    <article id="sub1">
        <h2 class="sub-title">선언적인 코드 작성하기</h2>
        <ul>
            <li><mark>선언적인 코드 = 추상화 레벨이 높아진 코드</mark></li>
            <li><mark>좋은 코드 = 수정하기 쉬운 코드</mark>
                <ul>
                    <li>만약 바뀔 수 있는 부분이 많다면 인자를 많이 주게되어 오히려 더 복잡해질 수 있기에 코드의 어느부분이 수정될지 잘 예측하여 작성할것</li>
                </ul>
            </li>
        </ul>
        <blockquote>
            원본 글 : <a href="https://toss.tech/article/frontend-declarative-code">
            [toss tech] 선언적인 코드 작성하기
            </a>
        </blockquote>
    </article>
    
    <hr>
`;

export default post3;