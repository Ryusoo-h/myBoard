
// D-day 날짜 계산기
// props로 date를 받아 Dday를 반환합니다.

// - 인자 date : 기준 날짜. 형식 'yyyy-mm-dd'

// - 반환값 Dday : D-day. 형식 'D-n'
// ex) date와 오늘 날짜와 동일한 경우 : D-day, 
// ex) date가 오늘 날짜보다 작은 경우 : D+1
// ex) date가 오늘 날짜보다 큰 경우 : D-1
export const calculateDday = (date) => {
    const regex = new RegExp(/^(\d{4})\-(\d{2})\-(\d{2})$/);
    if (!regex.test(date)) {
        console.log('Error - calculateDday의 인자가 yyyy-mm-dd 형식이 아닙니다');
        return 'D-day Error'
    }

    const timezoneOffset = new Date().getTimezoneOffset()*60*1000;
    const today = Date.now();
    const Dday = (Date.parse(date) + timezoneOffset);
    const result = Math.floor((today - Dday) / (24*60*60*1000));
    if (isNaN(result)) {
        console.log('Error - calculateDday의 인자로 잘못된 날짜를 입력했습니다');
        return 'D-day Error';
    }
    if (result === 0) {
        return 'D-day';
    } else if (result > 0) {
        return 'D+' + result;
    }
    return 'D' + result;
};

// id를 가진 Element에 Dday를 출력해줌
const renderDday = (id, date) => {
    const Dday = calculateDday(date);
    document.querySelector(`#${id}`).innerText = Dday;
}

renderDday("engineer-info-test2", "2023-07-22"); // 정처기 실기
renderDday("sqld-test-result", "2023-07-07"); // sqld 결과
renderDday("engineer-info-test2-receipt", "2023-06-27"); // 정처기 실기 접수
renderDday("engineer-info-test-result", "2023-06-14"); // 정처기 필기 결과
renderDday("sqld-test", "2023-06-10"); // sqld
renderDday("engineer-info-test", "2023-06-01"); // 정처기 필기
renderDday("healing-time", "2023-05-03"); // 회복중
