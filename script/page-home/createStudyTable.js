import { calculateDday } from "../util/calculateDday.js";

// Study List의 표 계산해주는 script
export default class CreateStudyTable {
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

    // 메인(타이틀, 프로그래스바, 상세 정보 영역) 출력
    getMainTemplate = (calculatedDday, unit, DdayNum) => {
        const initialData = {
            title: '타이틀',
            pass: false,
            memo: '상세 정보입니다',
            information: {
                startDay: '0000-00-00',
                Dday: 'D-00',
                type: '페이지',
                totalAmount: 0
            }
        };

        const { title, memo, information: {startDay, Dday, type, totalAmount, currentAmount} } = this.data ?? initialData;
        const isComingSoon = Date.parse(startDay) === NaN ? true :
            Date.now() - (Date.parse(startDay) + new Date().getTimezoneOffset()*60*1000) < 0 ? true : false;
        
        const progressPercent = currentAmount === 0 ? 0 : Math.round((currentAmount / totalAmount * 100));

        let dateTemplate;
        if (DdayNum > 0) {// TODO : Dday 대신 종료일 출력하기. 근데 이걸하려면 // TODO : 표에 날짜 입력 방식을 바꿔야함
            dateTemplate=`${startDay} ~ ${Dday}`;
        } else if (isComingSoon) {
            dateTemplate=`<span class="coming-soon">준비중</span>시작일 ${startDay}`;
        } else {
            dateTemplate=`시작일 ${startDay}`;
        };

        const mainTemplate = `
            <div class="main">
                <div class="title-and-d-day flex">
                    <h2>${title}</h2>
                    ${this.getDdayAndProgressTemplate(progressPercent, calculatedDday)}
                </div>
                <div class="detail flex">
                    <p class="memo">
                        ${memo} ${type + ': ' + totalAmount + unit}
                    </p>
                    <p class="date">${dateTemplate}</p>
                </div>
            </div>
        `;
        return mainTemplate;
    };
    // 메인 영역 중 D-day와 프로그래스바 출력
    getDdayAndProgressTemplate = (progressPercent=0, calculatedDday='D-00') => {
        const { pass, information: {totalAmount, currentAmount, table} } = this.data ?? initialData;
        let template = `
            <span class="d-day">${'D-00'}</span>
            <progress value="${0}" min="0" max="100"></progress>
            <span class="percent">${0}%</span>
        `;
        // 목표달성과 pass 여부에 따라 main UI가 다름
        if (totalAmount === currentAmount) { // 목표 달성
            template = `
                <span class="d-day">목표달성🎉 (완료일 : D${table[0].Dday})</span>
                <progress value="${progressPercent}" min="0" max="100"></progress>
                <span class="percent">${progressPercent}%</span>
            `
        } else if (pass === true) { // 목표일이 지났고, 더 이상 학습하지 않음
            template = `<span class="percent">종료(미달성) ${progressPercent}%</span>`
        } else { // 학습중
            template = `
                <span class="d-day">${calculatedDday}</span>
                <progress value="${progressPercent}" min="0" max="100"></progress>
                <span class="percent">${progressPercent}%</span>
            `
        };
        return `<div class="d-day-and-progress flex">${template}</div>`;
    }

    // 테이블 영역 출력
    getTableTemplate = (DdayNum, calculatedDday, unit) => {
        const { totalAmount, currentAmount, type } = this.data.information;
        const DdayInfo = DdayNum > 0 ? 
            { text: `목표일이 지났어요😥 ${calculatedDday}`, bgColor: '--red' } :
            { text: `목표일까지🔥 ${calculatedDday}`, bgColor: '--point' };

        // 목표를 달성하거나, 학습 종료했을 경우 calculateDdayTemplate 출력 안함
        const calculateDdayTemplate = `
            ${totalAmount === (currentAmount || 0) || this.data.pass ? '' : `
                <tr>
                    <th colspan="4" style="border-right: none; background-color: var(${DdayInfo.bgColor}); color: var(--bg-content)" class="date">
                        ${DdayInfo.text}
                    </th>
                </tr>
            `}
        `;

        const tableTemplate = `
            <div class="amount-table ${this.isOpen ? '' : 'hidden'}">
                <table>
                    <thead>
                        ${calculateDdayTemplate}
                        ${this.getTrMemo(DdayNum, unit)}
                        <tr>
                            <th width="20%" class="date">날짜</th>
                            <th width="35%" class="amount">총 ${type} 수</th>
                            <th width="20%" class="d-day">D-day</th>
                            <th width="25%" class="quota">총 진행률(%)</th>
                        </tr>
                    </thead>
                    <tbody>${this.getTableBodyList(unit)}</tbody>
                </table>
            </div>
        `;
        return tableTemplate;
    };
    // 테이블 tbody 영역 출력
    getTableBodyList = (unit) => {
        const { table, totalAmount } = this.data.information;
        const trList = table?.map((item) => {
            const progress = ((item.amount / totalAmount)*100).toFixed(2);
            return `
                <tr>
                    <td class="date">${item.date}</td>
                    <td class="amount">${item.amount + unit}</td>
                    <td class="quota">D${item.Dday}</td>
                    <td class="progress">${progress}%</td>
                </tr>
            `}).join('') || `
            <tr>
                <td colspan=4>아직 기록이 없어요😙 </td>
            </tr>
        `;
        return trList;
    };
    // 테이블 상단에 할당량 출력
    getTrMemo = (DdayNum, unit) => {
        const { totalAmount, currentAmount, table } = this.data.information;
        if (table.length === 0) {
            if (totalAmount !== 0 && totalAmount !== currentAmount) {
                return  `
                    <tr style="background-color: var(--bg-basic);">
                        <td colspan="4" class="quota">오늘부터 시작하면 매일 ${Math.round(totalAmount/Math.abs(DdayNum)) + unit}씩 하면 성공!</td>
                    </tr>
                `;
            }
        } else {
            const recentAmount = table[0]?.amount || 0;
            if (totalAmount > recentAmount && !this.data.pass) {
                const today = new Date();
                const quota = (totalAmount - recentAmount) / Math.abs(DdayNum < 0 ? DdayNum : 1);
                let quotaAmount, remainingQuota, quotaText;
                if (unit === '시간') {
                    quotaAmount = Math.round((recentAmount + quota)*100)/100;
                    remainingQuota = Math.round((quotaAmount - (currentAmount || 0))*100)/100;
                } else {
                    quotaAmount = Math.round(recentAmount + quota);
                    remainingQuota = Math.round(quotaAmount - (currentAmount || 0));
                }

                if (remainingQuota === 0) {
                    quotaText = `오늘 할당량 완료!`
                } else if (remainingQuota < 0) {
                    quotaText = `할당량 완료! ${Math.abs(remainingQuota) + unit}초과`
                } else {
                    quotaText = `할당량 : ${quotaAmount + unit}까지 ${remainingQuota + unit}남음`
                }
                return  `
                    <tr style="background-color: var(--bg-basic);">
                        <td style="border-right: none;" class="date">${this.printDate(today)}</td>
                        <td style="border-right: none;" class="amount">${currentAmount + unit}</td>
                        <td colspan="2" class="quota">${quotaText}</td>
                    </tr>
                `;
            }
        }
        return '';
    }

    render() {
        const Card = document.querySelector(`#studyList #${this.data.id}`);

        const { Dday, type, totalAmount, currentAmount } = this.data.information;
        const unit = this.getTypeUnit(type);
        const calculatedDday = calculateDday(Dday);
        let DdayNum = Number(calculatedDday.split('D')[1]); // 음의 정수, 0, 양의 정수
        DdayNum = calculatedDday === 'D-day' ? 0 :
            DdayNum !== undefined ? DdayNum : 1;
        
        // Card에 스타일 적용을 위함
        if (totalAmount === currentAmount) { // 목표 달성
            Card.classList.add('complete');
        } else if (this.data.pass) { // 목표 미달성이지만, 학습 종료
            Card.classList.add('pass');
        } else if (DdayNum > 0) { // 목표 기간 초과지만, 학습중
            Card.classList.add('incomplete');
        };

        // main과 table 출력
        Card.insertAdjacentHTML('afterbegin', 
            this.getMainTemplate(calculatedDday, unit, DdayNum) + this.getTableTemplate(DdayNum, calculatedDday, unit)
        );

        Card.querySelector('.main').addEventListener('click', function() {
            this.parentNode.querySelector('.amount-table').classList.toggle('hidden');
        })
    }
}