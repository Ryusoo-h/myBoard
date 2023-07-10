
// [
//     {
//         icon: "", // icon : '' | 'tired' | 'fun' | 'busy'
//         title: "",
//         content: "",
//         date: "" // yyyy-mm-dd 월 0PM
//     },
// ]

const timeLine = [
    {
        icon: "fun",
        title: "토스 과제테스트 응시함!",
        content: "과제 테스트란 이렇구나..! 많은 걸 배워감. 구현이 어렵진 않은데 엉뚱한데서 자꾸 시간을 많이 소비해서.. 문제 파악을 처음부터 꼼꼼히 해야하는것을 꺠달음. 그리고 <code>dangerouslySetInnerHTML</code> 태그를 첨알게 됨!",
        date: "2023-07-08 토 7PM"
    },
    {
        icon: "tired",
        title: "타임라인 오류 수정! 새로운걸 알게 됨!",
        content: "3줄 안넘쳐도 '+더보기'버튼 생기는 오류 수정. 100자 넘으면 3줄이하로 줄이라고 해놔서 2줄이어도 더보기가 생기는 문제가 있었다. 내가 아는 방법중엔 없어서 찾다가 발견했다. text-overflow: ellipsis;를 했을때 offsetHeight와 scrollHeight의 차이를 이용하면 된다고 한다! 아니 scrollHeight가 줄이지 않은 크기 그대로 일줄 몰랐어! 덕분에 쉽게 고쳤다. 👉 <a href='https://velog.io/@rkio/Javascript-text-overflow-ellipsis-%ED%99%9C%EC%84%B1-%EC%97%AC%EB%B6%80%EB%A5%BC-JS%EB%A1%9C-%ED%8C%90%EB%8B%A8%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95'>참고 블로그</a>",
        date: "2023-06-16 화 2AM"
    },
    {
        icon: "fun",
        title: "아니 경로가 맞는데 없다고 해서",
        content: "원인을 찾고있었는데 react-router-dom 6.5에서 @가 들어가는 형태의 파마리터 지원이 없어졌다고 한다.. <a href='https://github.com/velopert/learning-react/issues/382'>이슈 설명</a> 못 봤으면 한참 찾았을듯..!",
        date: "2023-06-16 금 1AM"
    },
    {
        icon: "fun",
        title: "정보처리기사 실기 책 삼!",
        content: "두근두근. 빨리 와랏",
        date: "2023-06-15 목 10PM"
    },
    {
        icon: "tired",
        title: "아이고 복습",
        content: "자격증 시험친다고 멈췄던 공부를 다시하려니 복습부터 다시 해야하네.. 진도 언제 빼냥!",
        date: "2023-06-15 목 5PM"
    },
    {
        icon: "fun",
        title: "스타일 리팩토링 가자~",
        content: "CSS 설계법 적용해보자!<br>아무래도 SMACSS가 적절한거같은데?",
        date: "2023-06-12 월 1PM"
    },
    {
        icon: "fun",
        title: "SQLD 시험 끝!!",
        content: "ㅎㅎ문제가 쉬운데.. 전에도 이러고 떨어져서 불안하구만ㅜ 이번엔 테이블이 좀 길어서 푸는데 시간이 좀 걸렸지만 답을 다 찾은거같은데 제발 점수 괜찮았으면 좋겠다!",
        date: "2023-06-10 토 1PM"
    },
    {
        icon: "fun",
        title: "추가 할꼬!",
        content: "블로그, 코드서랍 페이지에 위로가기 버튼 만들자! 왼쪽 메뉴 보려면 스크롤해서 올라가야하는데 귀찮다!",
        date: "2023-06-06 화 5AM"
    },
    {
        icon: "tired",
        title: "오류 고쳣!",
        content: "오.. 오류 발견! <a href='/myBoard/code-drawer/?post=post2#sub1'>테스트 a태그임돠</a> a 태그를 추가하면 2줄이어도 +더보기가 생김. a태그 글자수도 포함해서 인듯. 낼 고쳐",
        date: "2023-06-06 화 5AM"
    },
    {
        icon: "tired",
        title: "앗.. 5시..이러면 또 밤낮 바뀌는데ㅠ",
        content: "오류고치고 찾고 잠이 안와서 SQLD 공부하다가.. <a href='/myBoard/code-drawer/?post=post2#sub1'>D-day 계산 (지역 시간 오차 해결하기)</a> 글 썻는데 시간 훌쩍이네..! 11시엔 일어나야지..",
        date: "2023-06-06 화 5AM"
    },
    {
        icon: "",
        title: "정처기 실기 접수 잊지말자",
        content: "6월 27일임! (시험은 7/22~8/6)<br>확실히.. 실기가 어려운지 필기는 합격률 50%였는데 실기는 20%네.. 잘 준비하자!",
        date: "2023-06-04 토 1AM"
    },
    {
        icon: "fun",
        title: "와악 정처기 필기 합격",
        content: "진쫘.. 밤샌보람있다. 아니 시험이 컴퓨터로 치는것도 모르고 가서 와.. 떨어지면 공개쳐형인거야?? 하고 진짜 떨어지지말자고 열심히 풀었는데 85, 75, 85, 75, 60으로 합격! 2주 벼락치기로 이게 되네..",
        date: "2023-06-01 목 1PM"
    },
    {
        icon: "fun",
        title: "시나공 기억상자",
        content: "앱 맘에든다..! 내가 좋아하던 복습방법이야",
        date: "2023-05-23 화 3PM"
    },
    {
        icon: "tired",
        title: "정처기 9일남았다! 1회독가능할까..ㅜ",
        content: "누워서 공부하면 30분만에 팔아프고 목아파서 집중이 자주 끊기니까 넘 화난다..앉고싶다.. 앉아서 4~6시간 방해없이 쭉 공부든 코딩이든 하고싶다..",
        date: "2023-05-23 화 3PM"
    },
    {
        icon: "",
        title: "잠안오넹.. 밤새 정처기 보면 되겠다",
        content: "그러다 잠오면 조금만 자고 '리액트를 다루는 기술 : 24장.시작 및 회원가입 인증 구현' 마저하자<br>- 현재 정처기: 40p복습, 40p학습..(220p)<br>앉아서 공부하고싶다..",
        date: "2023-05-19 금 4PM"
    },
    {
        icon: "fun",
        title: "ORM 단어 두번째로 마주쳤다!",
        content: "<a href='/myBoard/blog/?post=post4'>[프론트엔드 아키택처] API 요청 관리</a> 블로그 글 정리하면서 ORM이란게 있구나~ 하고 넘어갔는데 정보처리기사 필기 하면서 또 등장했다..! 반갑당",
        date: "2023-05-21 일 5AM"
    },
    {
        icon: "tired",
        title: "TIMELINE 만들기 성공적!",
        content: "- 스크롤이 끝나기 전에 내용 추가 되도록 구현!<br>- 글자가 많으면 줄여보여주고 '+더보기' 버튼으로 볼 수 있도록 구현!<br><br><br>쨘!🤗",
        date: "2023-05-20 토 11PM"
    },
    {
        icon: "busy",
        title: "정처기 10장읽는데 1시간 걸리네",
        content: "다 읽을 순 있겠지..?<br>벼락치기를 해본적이없어서 벼락공부 방법을 모르겠다..ㅠㅠ 벼락치기도 해본 친구들이 잘하겠구나",
        date: "2023-05-19 금 7PM"
    },
    {
        icon: "",
        title: "오류 못찾겠을 때 : import도 확인하자",
        content: "리덕스 사가로 미들웨어를 적용하고 동작확인하는데 아무 동작도, 아무 오류도 안떠서 해결하는데 한참 걸렸다.. 미들웨어 만드는게 처음이라 실수한줄 알고 책 다시 살펴보고, 콘솔 찍어가며 동작 안하는 부분을 찾아도 내가 만든 미들웨어만 적용이 안되서 코드상에 실수가 있는거같은데 못 찾겠어서 챗지피티까지 써가면서 확인했는데 (틀린게 없다는것만 확인됨ㅋㅋ.. 다행인가?) <br>그러다 한참뒤에 찾은 실수는 import 실수였다😑 자동 import 너를 믿었는데.. 다음엔 import도 제대로 되었는지 확인을 해봐야겠다. 이런적이 없어서... 진짜 당황했네",
        date: "2023-05-19 금 4PM"
    },
    {
        icon: "fun",
        title: "수야 업무 퍼블리싱 도와줌",
        content: "이 정도 퍼블리싱 해줄 수 있찌! 나 디자인도 프엔도 잘 할 수 있는데!! 빨리 건강해져서 일하고 싶다.. <br>일해라 세포!!",
        date: "2023-05-19 금 2AM"
    },
];

export default timeLine;