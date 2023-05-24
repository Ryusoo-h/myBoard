import { calculateDday } from "../../util/calculateDday.js";

// Study List의 표 계산해주는 script

class CreateReadingStudyTable {
    constructor(data) {
        this.data = data;
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
        const { Dday, totalPage, currentPage } = this.data.information;
        const calculatedDday = calculateDday(Dday);
        let DdayNum = calculatedDday.split('-')[1];
        DdayNum = DdayNum !== undefined ? Number(DdayNum) : 1;

        // Dday 출력
        Card.querySelector('.Dday').innerHTML= this.printDate(Dday);
        // totalPage 출력
        Card.querySelector('.totalPage').innerHTML= totalPage + 'p';
        
        // table 출력을 위한 데이터 처리
        const tableTemplate = `
            <table>
                <thead>
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
                    <tr>
                        <th class="date">날짜</th>
                        <th width="18%" class="page">진행된 페이지 수</th>
                        <th width="18%" class="progress">총 진행률<br>(%)</th>
                        <th class="quota">목표까지 1일 최소 할당량<br>(남은 쪽수 / 남은 일수)</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        let quotaPage = 0;
        const trList = this.data.information.table.map((item, index) => {
            const progress = ((item.page / totalPage)*100).toFixed(3);
            const remainingPages = totalPage - item.page;
            const quota = Math.ceil(remainingPages / DdayNum);
            if(index === 0) { // 가장 최근 날짜일 경우 할당량을 구함
                quotaPage = item.page + quota;
            }
            return `
                    <tr>
                        <td class="date">${item.date}</td>
                        <td class="page">${item.page + 'p'}</td>
                        <td class="progress">${progress}%</td>
                        <td class="quota">${quota}p (${remainingPages}/ D${item.Dday})</td>
                    </tr>
                `
        }).join('');
        const today = new Date();
        const remainingQuota = quotaPage - currentPage;
        const trMemo = `
            <tr style="background-color: var(--bg-basic);">
                <td style="border-right: none;" class="date">${this.printDate(today)}</td>
                <td style="border-right: none;" class="page">${currentPage + 'p'}</td>
                <td style="border-right: none;" class="progress"></td>
                <td class="quota">할당량 : ${quotaPage}p까지 ${remainingQuota}p남음</td>
            </tr>
        `

        // table 출력
        Card.querySelector('details').insertAdjacentHTML('beforeend',tableTemplate);
        Card.querySelector('details table tbody').innerHTML = trList;
        Card.querySelector('details table tbody').insertAdjacentHTML('afterbegin',trMemo);
    }
    
}

const engineerInformationProcessing = new CreateReadingStudyTable({
    id : 'engineer-information-processing',
    information : {
        Dday : '2023-06-01',
        totalPage : 888,
        currentPage: 303,
        table : [
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

const reactVelopert = new CreateReadingStudyTable({
    id : 'react-velopert',
    information : {
        Dday : '2023-05-14',
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


