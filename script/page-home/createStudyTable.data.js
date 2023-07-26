
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
    memo : '복습 : <a href="/word-memorization/?post=post7">단어 암기장</a><br>문제-178p 기본서 총',
    complete: true,
    information : {
        startDay : '2023-06-22',
        Dday : '2023-07-22',
        type : '페이지',
        totalAmount : 980,
        currentAmount: 980,
        table : [
            { date : '2023-07-20', amount: 980},
            { date : '2023-07-19', amount: 964},
            { date : '2023-07-18', amount: 833},
            { date : '2023-07-17', amount: 623},
            { date : '2023-07-15', amount: 581},
            { date : '2023-07-14', amount: 480},
            { date : '2023-07-13', amount: 375},
            { date : '2023-07-10', amount: 285},
            { date : '2023-07-06', amount: 227},
            { date : '2023-07-05', amount: 191},
            { date : '2023-06-28', amount: 160},
            { date : '2023-06-26', amount: 93},
            { date : '2023-06-23', amount: 53},
            { date : '2023-06-22', amount: 36}
        ],
    }
});
engineerInformationProcessing2.render();

// 리액트 강의
const reactQuery = new CreateStudyTable({
    id : 'react-slack',
    title : 'Slack 클론 코딩 with React',
    memo : '<a href="https://www.inflearn.com/course/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%B1%84%ED%8C%85#curriculum">인프런 조현영 강의</a>',
    information : {
        startDay : '2023-06-30',
        Dday : '2023-07-28',
        type : '강의',
        totalAmount : 11,
        currentAmount: 7.22,
        table : [
            { date : '2023-07-25', amount: 7.22},
            { date : '2023-07-24', amount: 6.6},
            { date : '2023-07-10', amount: 6.25},
            { date : '2023-07-03', amount: 4.33},
            { date : '2023-07-02', amount: 2.03},
            { date : '2023-07-01', amount: 1.56},
            { date : '2023-06-30', amount: 0.73}
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
            { date : '2023-06-29', amount: 905},
            { date : '2023-06-23', amount: 880},
            { date : '2023-06-16', amount: 872},
            { date : '2023-06-15', amount: 836},
            { date : '2023-06-13', amount: 794},
            { date : '2023-05-19', amount: 776},
            { date : '2023-05-12', amount: 770},
            { date : '2023-05-11', amount: 763},
            { date : '2023-05-08', amount: 752},
            { date : '2023-05-07', amount: 714},
            { date : '2023-01-03', amount: 468},
            { date : '2023-01-02', amount: 442},
            { date : '2022-12-30', amount: 412},
            { date : '2022-12-29', amount: 381},
            { date : '2022-12-28', amount: 355},
            { date : '2022-12-27', amount: 317},
            { date : '2022-12-26', amount: 304},
            { date : '2022-12-22', amount: 250},
            { date : '2022-12-19', amount: 180},
            { date : '2022-12-18', amount: 162},
            { date : '2022-12-15', amount: 92},
            { date : '2022-12-14', amount: 69}
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
            { date : '2023-06-09', amount: 90},
            { date : '2023-06-07', amount: 70},
            { date : '2023-06-05', amount: 50},
            { date : '2023-06-04', amount: 30}
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
            { date : '2023-05-31', amount: 888},
            { date : '2023-05-30', amount: 704},
            { date : '2023-05-29', amount: 606},
            { date : '2023-05-28', amount: 531},
            { date : '2023-05-27', amount: 466},
            { date : '2023-05-25', amount: 414},
            { date : '2023-05-24', amount: 346},
            { date : '2023-05-23', amount: 303},
            { date : '2023-05-22', amount: 264},
            { date : '2023-05-21', amount: 256},
            { date : '2023-05-20', amount: 236},
            { date : '2023-05-19', amount: 145}
        ],
    }
});
engineerInformationProcessing.render();



