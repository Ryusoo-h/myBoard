import { calculateDday } from "../util/calculateDday.js";

// Study List의 표 계산해주는 script

class CreateStudyTable {
    constructor(data) {
        this.data = data;
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

        const { Dday, type, totalPage, currentPage } = this.data.information;
        const unit = this.getTypeUnit(type);
        const calculatedDday = calculateDday(Dday);
        let DdayNum = calculatedDday.split('-')[1];
        DdayNum = DdayNum !== undefined ? Number(DdayNum) : 1;

        // Dday 출력
        Card.querySelector('.Dday').innerHTML= this.printDate(Dday);
        // totalPage 출력
        Card.querySelector('.totalPage').innerHTML= totalPage + unit;
        
        // table 출력을 위한 데이터 처리
        const tableTemplate = `
            <table>
                <thead>
                    ${totalPage === (currentPage || 0) ? `
                            <tr>
                                <th colspan="4" style="border-right: none; background-color: var(--point); color: var(--bg-content)" class="date">
                                    목표달성🎉 (완료일 : D${this.data.information.table[0].Dday})
                                </th>
                            </tr>
                        ` : `
                            ${DdayNum === 1 ? `
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
                        `
                    }
                    
                    <tr>
                        <th class="date">날짜</th>
                        <th width="18%" class="page">진행된<br> ${type} 수</th>
                        <th width="18%" class="progress">총 진행률<br>(%)</th>
                        <th class="quota">목표까지 1일 최소 할당량<br>(남은 ${type} 수 / 남은 일수)</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        let quotaPage = 0;
        const trList = this.data.information.table?.map((item, index) => {
                const progress = ((item.page / totalPage)*100).toFixed(2);
                const remainingPages = totalPage - item.page;
                let quota = Math.ceil(remainingPages / Math.abs(item.Dday < 0 ? item.Dday : 1));
                if(index === 0) { // 가장 최근 날짜일 경우 할당량을 구함
                    quotaPage = item.page + quota;
                }
                return `
                        <tr>
                            <td class="date">${item.date}</td>
                            <td class="page">${item.page + unit}</td>
                            <td class="progress">${progress}%</td>
                            <td class="quota">${quota + unit} (${remainingPages}/ D${item.Dday})</td>
                        </tr>
                    `
            }).join('')
            || '';
        const today = new Date();
        const recentPage = this.data.information.table[0]?.page || 0;
        let trMemo = `
                <tr style="background-color: var(--bg-basic);">
                    <td colspan=4 style="text-align:center; ">목표 달성!</td>
                </tr>
            `;
        if (totalPage !== recentPage) {
            let quota = Math.ceil((totalPage - recentPage) / Math.abs(DdayNum));
            quotaPage = recentPage + quota;
            const remainingQuota = quotaPage - (currentPage || 0);
            trMemo = `
                <tr style="background-color: var(--bg-basic);">
                    <td style="border-right: none;" class="date">${this.printDate(today)}</td>
                    <td style="border-right: none;" class="page">${currentPage + unit}</td>
                    <td style="border-right: none;" class="progress"></td>
                    <td class="quota">할당량 : ${quotaPage + unit}까지 ${remainingQuota + unit}남음</td>
                </tr>
            `;
        }

        // table 출력
        Card.querySelector('details').insertAdjacentHTML('beforeend',tableTemplate);
        Card.querySelector('details table tbody').innerHTML = trList;
        Card.querySelector('details table tbody').insertAdjacentHTML('afterbegin',trMemo);
    }
    
}

//
const sqld = new CreateStudyTable({
    id : 'sqld',
    information : {
        Dday : '2023-06-10',
        type : '문제',
        totalPage : 146,
        currentPage: 0,
        table : [
            // { date : '6/4(일)', page: 0, Dday: '-6'},
            { date : '6/3(토)', page: 0, Dday: '-7'},
        ],
    }
});
sqld.render();

// 정보처리기사 필기
const engineerInformationProcessing = new CreateStudyTable({
    id : 'engineer-information-processing',
    information : {
        Dday : '2023-06-01',
        type : '페이지',
        totalPage : 888,
        currentPage: 888,
        table : [
            { date : '5/28(수)', page: 888, Dday: '-1'},
            { date : '5/28(화)', page: 704, Dday: '-2'},
            { date : '5/28(월)', page: 606, Dday: '-3'},
            { date : '5/28(일)', page: 531, Dday: '-4'},
            { date : '5/27(토)', page: 466, Dday: '-5'},
            { date : '5/25(목)', page: 414, Dday: '-7'},
            { date : '5/24(수)', page: 346, Dday: '-8'},
            { date : '5/23(화)', page: 303, Dday: '-9'},
            { date : '5/22(월)', page: 264, Dday: '-10'},
            { date : '5/21(일)', page: 256, Dday: '-11'},
            { date : '5/20(토)', page: 236, Dday: '-12'},
            { date : '5/19(금)', page: 145, Dday: '-13'},
            // { date : '1/3(화)', page: 303, Dday: 5},
            // { date : '1/2(월)', page: 270, Dday: 6},
            // { date : '12/29(목)', page: 233, Dday: 6},
            // { date : '12/28(수)', page: 184, Dday: 10},
            // { date : '12/27(화)', page: 175, Dday: 11},
            // { date : '12/19(월)', page: 148, Dday: 13},
            // { date : '~11/18(일)', page: 145, Dday: 20},
        ],
    }
});
engineerInformationProcessing.render();

// 리액트를 다루는 기술
const reactVelopert = new CreateStudyTable({
    id : 'react-velopert',
    information : {
        Dday : '2023-05-14',
        type : '페이지',
        totalPage : 905,
        currentPage: 760,
        table : [
            { date : '5/19(금)', page: 776, Dday: '+5'},
            { date : '5/12(금)', page: 770, Dday: '-2'},
            { date : '5/11(목)', page: 763, Dday: '-3'},
            { date : '5/8(월)', page: 752, Dday: '-6'},
            { date : '5/7(일)', page: 714, Dday: '-7'},
            { date : '1/3(화)', page: 468, Dday: '-5'},
            { date : '1/2(월)', page: 442, Dday: '-6'},
            { date : '12/30(금)', page: 412, Dday: '-6'},
            { date : '12/29(목)', page: 381, Dday: '-9'},
            { date : '12/28(수)', page: 355, Dday: '-10'},
            { date : '12/27(화)', page: 317, Dday: '-11'},
            { date : '12/26(월)', page: 304, Dday: '-12'},
            { date : '12/22(목)', page: 250, Dday: '-13'},
            { date : '12/19(월)', page: 180, Dday: '-17'},
            { date : '12/18(일)', page: 162, Dday: '-21'},
            { date : '12/15(목)', page: 92, Dday: '-23'},
            { date : '12/14(수)', page: 69, Dday: '-24'}
        ],
    }
});
reactVelopert.render();


