
import CreateStudyTable from "./createStudyTable.js";

// TEST
// const test = new CreateStudyTable({
//     id : 'test',
//     title : 'TEST',
//     memo : '테스트 입니다!,',
//     complete: false,
//     information : {
//         startDay : '2023-06-12',
//         Dday : '2023-06-14',
//         type : '문제',
//         totalAmount : 10,
//         currentAmount: 2,
//         table : [
//             { date : '6/12(월)', amount: 2, Dday: '-2'}
//         ],
//     }
// }, true); // true이면 카드 열림
// test.render();

// 정보처리기사 실기
const engineerInformationProcessing2 = new CreateStudyTable({
    id : 'engineer-information-processing2',
    title : '정보처리기사 실기',
    memo : '<span class="red">7/22 시험</span> 복습 : <a href="/word-memorization/?post=post7">단어 암기장</a><br>문제-178p 기본서 총',
    complete: false,
    information : {
        startDay : '2023-06-22',
        Dday : '2023-07-22',
        type : '페이지',
        totalAmount : 980,
        currentAmount: 964,
        table : [
            { date : '7/19(수)', amount: 964, Dday: '-3'},
            { date : '7/18(화)', amount: 833, Dday: '-4'},
            { date : '7/17(월)', amount: 623, Dday: '-5'},
            { date : '7/15(토)', amount: 581, Dday: '-7'},
            { date : '7/14(금)', amount: 480, Dday: '-8'},
            { date : '7/13(목)', amount: 375, Dday: '-9'},
            { date : '7/10(월)', amount: 285, Dday: '-12'},
            { date : '7/6(목)', amount: 227, Dday: '-16'},
            { date : '7/5(수)', amount: 191, Dday: '-17'},
            { date : '6/28(수)', amount: 160, Dday: '-24'},
            { date : '6/26(월)', amount: 93, Dday: '-26'},
            { date : '6/23(금)', amount: 53, Dday: '-29'},
            { date : '6/22(목)', amount: 36, Dday: '-30'}
        ],
    }
}, true);
engineerInformationProcessing2.render();

// 리액트 강의
const reactQuery = new CreateStudyTable({
    id : 'react-query',
    title : 'Slack 클론 코딩 with React',
    memo : '<a href="https://www.inflearn.com/course/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%B1%84%ED%8C%85#curriculum">인프런 조현영 강의</a>',
    information : {
        startDay : '2023-06-30',
        Dday : '2023-07-09',
        type : '강의',
        totalAmount : 11,
        currentAmount: 6.25,
        table : [
            { date : '7/10(월)', amount: 6.25, Dday: '+1'},
            { date : '7/3(월)', amount: 4.33, Dday: '-6'},
            { date : '7/2(일)', amount: 2.03, Dday: '-7'},
            { date : '7/1(토)', amount: 1.56, Dday: '-8'},
            { date : '6/30(금)', amount: 0.73, Dday: '-9'}
        ],
    }
}, true);
reactQuery.render();

// 리액트를 다루는 기술
const reactVelopert = new CreateStudyTable({
    id : 'react-velopert',
    title : '리액트를 다루는 기술',
    memo : '드디어 프로젝트!',
    information : {
        startDay : '2022-12-14',
        Dday : '2023-06-18',
        type : '페이지',
        totalAmount : 905,
        currentAmount: 905,
        table : [
            { date : '6/29(목)', amount: 905, Dday: '+11'},
            { date : '6/23(금)', amount: 880, Dday: '+5'},
            { date : '6/16(금)', amount: 872, Dday: '-2'},
            { date : '6/15(목)', amount: 836, Dday: '-3'},
            { date : '6/13(화)', amount: 794, Dday: '-5'},
            { date : '5/19(금)', amount: 776, Dday: '+5'},
            { date : '5/12(금)', amount: 770, Dday: '-2'},
            { date : '5/11(목)', amount: 763, Dday: '-3'},
            { date : '5/8(월)', amount: 752, Dday: '-6'},
            { date : '5/7(일)', amount: 714, Dday: '-7'},
            { date : '1/3(화)', amount: 468, Dday: '-5'},
            { date : '1/2(월)', amount: 442, Dday: '-6'},
            { date : '12/30(금)', amount: 412, Dday: '-6'},
            { date : '12/29(목)', amount: 381, Dday: '-9'},
            { date : '12/28(수)', amount: 355, Dday: '-10'},
            { date : '12/27(화)', amount: 317, Dday: '-11'},
            { date : '12/26(월)', amount: 304, Dday: '-12'},
            { date : '12/22(목)', amount: 250, Dday: '-13'},
            { date : '12/19(월)', amount: 180, Dday: '-17'},
            { date : '12/18(일)', amount: 162, Dday: '-21'},
            { date : '12/15(목)', amount: 92, Dday: '-23'},
            { date : '12/14(수)', amount: 69, Dday: '-24'}
        ],
    }
});
reactVelopert.render();

// SQLD
const sqld = new CreateStudyTable({
    id : 'sqld',
    title : 'SQLD',
    memo : '6/10(토) 시험응시! <br>복습 : <a href="/word-memorization/?post=post1">단어 암기장</a>,',
    pass: true,
    information : {
        startDay : '2023-06-04',
        Dday : '2023-06-10',
        type : '문제',
        totalAmount : 146,
        currentAmount: 90,
        table : [
            { date : '6/9(금)', amount: 90, Dday: '-day'},
            { date : '6/7(수)', amount: 70, Dday: '-3'},
            { date : '6/5(월)', amount: 50, Dday: '-5'},
            { date : '6/4(일)', amount: 30, Dday: '-6'}
        ],
    }
});
sqld.render();

// 정보처리기사 필기
const engineerInformationProcessing = new CreateStudyTable({
    id : 'engineer-information-processing',
    title : '정보처리기사 필기',
    memo : '6/1(목) 시험 합격',
    information : {
        startDay : '2023-05-19',
        Dday : '2023-06-01',
        type : '페이지',
        totalAmount : 888,
        currentAmount: 888,
        table : [
            { date : '5/28(수)', amount: 888, Dday: '-1'},
            { date : '5/28(화)', amount: 704, Dday: '-2'},
            { date : '5/28(월)', amount: 606, Dday: '-3'},
            { date : '5/28(일)', amount: 531, Dday: '-4'},
            { date : '5/27(토)', amount: 466, Dday: '-5'},
            { date : '5/25(목)', amount: 414, Dday: '-7'},
            { date : '5/24(수)', amount: 346, Dday: '-8'},
            { date : '5/23(화)', amount: 303, Dday: '-9'},
            { date : '5/22(월)', amount: 264, Dday: '-10'},
            { date : '5/21(일)', amount: 256, Dday: '-11'},
            { date : '5/20(토)', amount: 236, Dday: '-12'},
            { date : '5/19(금)', amount: 145, Dday: '-13'}
        ],
    }
});
engineerInformationProcessing.render();



