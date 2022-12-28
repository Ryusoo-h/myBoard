// Study List의 표 계산해주는 script

class CreateReadingStudyTable {
    constructor(data) {
        this.data = data;
        
    }

    render() {
        const Card = document.querySelector(`#studyList #${this.data.id}`);

        // Dday 출력
        Card.querySelector('.Dday').innerHTML= this.data.information.Dday;
        // totalPage 출력
        Card.querySelector('.totalPage').innerHTML= this.data.information.totalPage + 'p';
        
        // table 출력을 위한 데이터 처리
        const tableTemplate = `
            <table>
                <thead>
                    <tr>
                        <th class="date">날짜</th>
                        <th class="page">진행된 페이지<br>(마지막 페이지)</th>
                        <th class="progress">총 진행률<br>(%)</th>
                        <th class="quota">목표까지 1일 최소 할당량<br>(남은 쪽수 / 남은 일수)</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        let quotaPage = 0;
        const trList = this.data.information.table.map((item, index) => {
            const progress = ((item.page / this.data.information.totalPage)*100).toFixed(3);
            const remainingPages = this.data.information.totalPage - item.page;
            const quota = Math.ceil(remainingPages / item.Dday);
            if(index === 0) quotaPage = item.page + quota;
            return `
                    <tr>
                        <td class="date">${item.date}</td>
                        <td class="page">${item.page + 'p'}</td>
                        <td class="progress">${progress}%</td>
                        <td class="quota">${quota}p (${remainingPages}/ D-${item.Dday})</td>
                    </tr>
                `
        }).join('');
        const remainingQuota = quotaPage - this.data.information.memo.current;
        const trMemo = `
            <tr>
                <td class="date">${this.data.information.memo.date}</td>
                <td class="page">${this.data.information.memo.current + 'p'}</td>
                <td class="progress"></td>
                <td class="quota">할당량 : ${quotaPage}p까지 ${remainingQuota}p남음</td>
            </tr>
        `

        // table 출력
        Card.querySelector('details').insertAdjacentHTML('beforeend',tableTemplate);
        Card.querySelector('details table tbody').innerHTML = trList;
        Card.querySelector('details table tbody').insertAdjacentHTML('afterbegin',trMemo);
    }
    
}

const reactVelopert = new CreateReadingStudyTable({
    id : 'react-velopert',
    information : {
        Dday : '1/7(토)',
        totalPage : 905,
        table : [
            { date : '12/27(화)', page: 317, Dday: 11},
            { date : '12/26(월)', page: 304, Dday: 12},
            { date : '12/22(목)', page: 250, Dday: 13},
            { date : '12/19(월)', page: 180, Dday: 17},
            { date : '12/18(일)', page: 162, Dday: 21},
            { date : '12/15(목)', page: 92, Dday: 23},
            { date : '2/14(수)', page: 69, Dday: 24}
        ],
        memo : { date : '12/28(수)', current: 349}
    }
});
reactVelopert.render();

const engineerInformationProcessing = new CreateReadingStudyTable({
    id : 'engineer-information-processing',
    information : {
        Dday : '1/7(토)',
        totalPage : 888,
        table : [
            { date : '12/27(화)', page: 175, Dday: 11},
            { date : '12/19(월)', page: 148, Dday: 13},
            { date : '~11/18(일)', page: 145, Dday: 20},
        ],
        memo : { date : '12/28(수)', current: 175}
    }
});
engineerInformationProcessing.render();


