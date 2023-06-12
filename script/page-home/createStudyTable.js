import { calculateDday } from "../util/calculateDday.js";

// Study List의 표 계산해주는 script

class CreateStudyTable {
    constructor(data, isOpen) {
        this.data = data;
        this.isOpen = isOpen; // true | false
    }

    // 해당 타입에 맞는 단위 출력
    // type : '페이지' | '문제' | '강의'
    // 없으면 ''빈 문자열 출력
    getTypeUnit(type) {
        const TYPEUNIT = new Map([
            ['페이지', 'p'],
            ['문제', '문'],
            ['강의', '시간'],
        ]);
        return TYPEUNIT.get(type) || '';
    }

    // 해당 요일 출력
    // day : 1 ~ 7
    // 반환값 : '월' | '화' | '수' | '목' | '금' | '토' | '일'
    getDay(day) { 
        switch(day) {
            case 0:
                return '일';
            case 1:
                return '월';
            case 2:
                return '화';
            case 3:
                return '수';
            case 4:
                return '목';
            case 5:
                return '금';
            case 6:
                return '토';
            default:
                console.log('✅getDay 오류 : 잘못된 날짜입니다');
                return '';
                break;
        };
    };

    // 날짜를 받아 m/d(요일) 로 출력함
    // Dday : yyyy-mm-dd
    // 반환값 : m/d(요일)
    printDate(day) { 
        const date = new Date(day);
        const DdayMonth = date.getMonth() + 1;
        const DdayDate = date.getDate();
        const DdayDay = this.getDay(date.getDay());
        return `${DdayMonth}/${DdayDate}(${DdayDay})`
    };

    render() {
        const Card = document.querySelector(`#studyList #${this.data.id}`);

        const { startDay, Dday, type, totalAmount, currentAmount } = this.data.information;
        const unit = this.getTypeUnit(type);
        const calculatedDday = calculateDday(Dday);
        let DdayNum = Number(calculatedDday.split('D')[1]);
        DdayNum = calculatedDday === 'D-day' ? 0 
        : DdayNum !== undefined ? DdayNum : 1;

        const progressPercent = Math.round((currentAmount / totalAmount * 100));
        // main 출력
        const mainTemplate = `
            <div class="main">
                <div class="title-and-d-day flex">
                    <h2>${this.data.title}</h2>
                    <div class="d-day-and-progress flex">
                        <span class="d-day">${this.data.complete ? `목표달성🎉 (완료일 : D${this.data.information.table[0].Dday})` : calculatedDday}</span>
                        <progress value="${progressPercent}" min="0" max="100"></progress>
                        <span class="percent">${progressPercent}%</span>
                    </div>
                </div>
                <div class="detail flex">
                    <p class="memo">
                        ${this.data.memo} ${type + ': ' + totalAmount + unit}
                    </p>
                    <p class="date"> ${DdayNum > 0 ? `${startDay} ~ ${Dday}` : `시작일 ${startDay}`}</p>
                </div>
            </div>
        `;
        Card.insertAdjacentHTML('afterbegin', mainTemplate);
        if (this.data.complete) {
            Card.classList.add('complete');
        } else if (DdayNum > 0) {
            Card.classList.add('incomplete');
        }

        // table 출력을 위한 데이터 처리
        const tableTemplate = `
            <div class="amount-table ${this.isOpen ? '' : 'hidden'}">
                <table>
                    <thead>
                        ${totalAmount === (currentAmount || 0) ? '' : `
                            ${DdayNum > 0 ? `
                                <tr>
                                    <th colspan="4" style="border-right: none; background-color: var(--red); color: var(--bg-content)" class="date">
                                        목표일이 지났어요😥 ${calculatedDday}
                                    </th>
                                </tr>
                            ` : `
                                <tr>
                                    <th colspan="4" style="border-right: none; background-color: var(--point); color: var(--bg-content)" class="date">
                                        목표일까지🔥 ${calculatedDday}
                                    </th>
                                </tr>
                            `}
                        `}
                        <tr>
                            <th width="20%" class="date">날짜</th>
                            <th width="35%" class="amount">총 ${type} 수</th>
                            <th width="20%" class="d-day">D-day</th>
                            <th width="25%" class="quota">총 진행률(%)</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        `;
        let quotaAmount = 0;
        const trList = this.data.information.table?.map((item, index) => {
                const progress = ((item.amount / totalAmount)*100).toFixed(2);
                const remainingAmount = totalAmount - item.amount;
                let quota = Math.ceil(remainingAmount / Math.abs(item.Dday < 0 ? item.Dday : 1));
                if(index === 0) { // 가장 최근 날짜일 경우 할당량을 구함
                    quotaAmount = item.amount + quota;
                }
                return `
                        <tr>
                            <td class="date">${item.date}</td>
                            <td class="amount">${item.amount + unit}</td>
                            <td class="quota">D${item.Dday}</td>
                            <td class="progress">${progress}%</td>
                        </tr>
                    `
            }).join('')
            || '';
            
            // <th class="date">날짜</th>
            // <th width="18%" class="amount">총 ${type} 수</th>
            // <th width="25%" class="day-amount">하루 ${type} 수</th>
            // <th class="d-day">D-day</th>
            // <th width="18%" class="progress">총 진행률(%)</th>
        const today = new Date();
        const recentAmount = this.data.information.table[0]?.amount || 0;

        // table 출력
        Card.insertAdjacentHTML('beforeend',tableTemplate);
        Card.querySelector('table tbody').innerHTML = trList;

        // table 상단에 할당량 출력
        if (totalAmount !== recentAmount) {
            let quota = Math.ceil((totalAmount - recentAmount) / Math.abs(DdayNum));
            quotaAmount = recentAmount + quota;
            const remainingQuota = quotaAmount - (currentAmount || 0);
            let trMemo = `
                <tr style="background-color: var(--bg-basic);">
                    <td style="border-right: none;" class="date">${this.printDate(today)}</td>
                    <td style="border-right: none;" class="amount">${currentAmount + unit}</td>
                    <td colspan="2" class="quota">할당량 : ${quotaAmount + unit}까지 ${remainingQuota + unit}남음</td>
                </tr>
            `;
            Card.querySelector('table thead tr:first-child').insertAdjacentHTML('afterend',trMemo);
        }
        Card.querySelector('.main').addEventListener('click', function() {
            this.parentNode.querySelector('.amount-table').classList.toggle('hidden');
        })
    }
}

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
// });
// test.render();

// 리액트를 다루는 기술
const reactVelopert = new CreateStudyTable({
    id : 'react-velopert',
    title : '리액트를 다루는 기술',
    memo : '드디어 프로젝트!',
    complete: false,
    information : {
        startDay : '2022-12-14',
        Dday : '2023-06-18',
        type : '페이지',
        totalAmount : 905,
        currentAmount: 776,
        table : [
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
}, true);
reactVelopert.render();

// SQLD
const sqld = new CreateStudyTable({
    id : 'sqld',
    title : 'SQLD',
    memo : '6/10(토) 시험응시! <br>복습 : <a href="/word-memorization/?post=post1">단어 암기장</a>,',
    complete: false,
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
    complete: true,
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
            { date : '5/19(금)', amount: 145, Dday: '-13'},
            // { date : '1/3(화)', amount: 303, Dday: 5},
            // { date : '1/2(월)', amount: 270, Dday: 6},
            // { date : '12/29(목)', amount: 233, Dday: 6},
            // { date : '12/28(수)', amount: 184, Dday: 10},
            // { date : '12/27(화)', amount: 175, Dday: 11},
            // { date : '12/19(월)', amount: 148, Dday: 13},
            // { date : '~11/18(일)', amount: 145, Dday: 20},
        ],
    }
});
engineerInformationProcessing.render();



