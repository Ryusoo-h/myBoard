
// D-day 날짜 계산기
// props로 date를 받아 Dday를 반환합니다.

// - 인자 date : 기준 날짜. 형식 'yyyy-mm-dd'

// - 반환값 Dday : 형식
// ex) date와 오늘 날짜와 동일한 경우 : D-0, 
// ex) date가 오늘 날짜보다 작은 경우 : D+1
// ex) date가 오늘 날짜보다 큰 경우 : D-1
export const calculateDday = (date) => {
    const regex = new RegExp(/^(\d{4})\-(\d{2})\-(\d{2})$/);
    if (!regex.test(date)) {
        console.log('Error - calculateDday의 인자가 yyyy-mm-dd 형식이 아닙니다');
        return 'D-day Error'
    }

    const today = new Date();
    const Dday = new Date(date);
    const todayCount = Math.floor(today.getTime() / (24*60*60*1000));
    const DdayCount = Math.floor(Dday.getTime() / (24*60*60*1000));
    let result = (todayCount - DdayCount);
    if (isNaN(result)) {
        console.log('Error - calculateDday의 인자로 잘못된 날짜를 입력했습니다');
        return 'D-day Error'
    }
    if (result === 0) {
        return 'D-0';
    } else if (result > 0) {
        return 'D+' + result;
    }
    return 'D' + result;
};
// const Dday = calculateDday('2023-05-10');


const renderDday = (id, date) => {
    const Dday = calculateDday(date);
    document.querySelector(`#${id}`).innerText = Dday;
}
renderDday("healing-time", "2023-05-03"); // 회복중
renderDday("engineer-info-test", "2023-06-01"); // 정처기
renderDday("sqld-test", "2023-06-10"); // sqld


