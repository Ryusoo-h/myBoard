// word-memorization 작성시 편하려고 우선 만들어둠!
// 위 조건이라서 글이 모두 list로 구성됨!

window.onbeforeunload = function (e) {
  return '왜.. 메세지 안나타나지?'; // TODO 왜 안나타나는지 알아보기..!
}

const editor = document.querySelector('#editor textarea');
const posting = document.getElementById('posting');
const postingCode = document.querySelector('#posting-code > pre');

let prevEditorValue = '';
let editorValue = ''; // 입력값
let postingValue = ''; // 출력값


/* 테스트 패턴

//[버튼2](/[버튼1]) : 이것은 버튼이다
- 이제 이것을 구현해야함
    - 내부리스트1
    - 내부리스트2
        -내부리스트2-1
    - 내부리스트3
- ///[버튼3] : 구현가능?

*/



const changeAndPrintEditorValue = () => {
  // editoValue에 변화가 생기면
  // 바꾸고 출력함
  const changeTextToButton = (match, openTag, text, closeTag) => {
    return `<button type="button">${text}</button>`;// 버튼바꾸기
  }
  const changeTextToRedButton = (match, openTag, text, closeTag) => {
    return `<button type="button" class="red">${text}</button>`;// 버튼바꾸기
  }
  const changeTextToNotHiddenButton = (match, openTag, text, closeTag) => {
    return `<button type="button" class="not-hidden">${text}</button>`;// 버튼바꾸기
  }
  let isFirst = true;
  let listTabLevel = 0;
  const changeTextToList = (match, space, singleSpace, openTag, text, closeTag) => {
    let currentLevel = Math.round(space.split('&nbsp').length / 4);
    // console.log(match, ' / ', space, ' / ', singleSpace, ' / ', openTag, ' / ', text, ' / ', closeTag);
    if (listTabLevel < currentLevel) {
      listTabLevel = currentLevel;
      return `<ul><li>${text}`;
    } else if (listTabLevel > currentLevel) {
      let closeUl = '';
      while(listTabLevel - currentLevel > 0) {
        listTabLevel--;
        closeUl += '</ul>'
      }
      listTabLevel = currentLevel;
      return `</li>${closeUl}<li>${text}`;
    } else if (isFirst) {
      isFirst = false;
      return `<li>${text}`;
    } else {
      return `</li><li>${text}`;
    }
  }

  setInterval(() => {
    if (prevEditorValue !== editorValue) {
      editor.value = editorValue;
      isFirst = true;
      postingValue = editorValue
        .replace(/ /g, "&nbsp") // 띄어쓰기
        .replace(/(?:\r\n|\r|\n)/g, '<br/>') // 줄바꿈
        .replace(/(\\\\\\\[)([^\/]*)(\])/g, changeTextToNotHiddenButton) // 패턴 : \\\[검은버튼]
        .replace(/(\\\\\[)([^\/]*)(\])/g, changeTextToRedButton) // 패턴 : \\[빨간버튼]
        .replace(/(\\\[)([^\/]*)(\])/g, changeTextToButton) // 패턴 : \[파란버튼]
        .replace(/((&nbsp)*)(\\\-&nbsp)([^\\\-]*)(\<br\/\>)/g, changeTextToList) // li 패턴 : \- 텍스트 줄바꿈
        + '</li>';

      posting.innerHTML = `<ul>${postingValue}</ul>`;
      postingCode.innerText = `<ul>${postingValue}</ul>`;

      prevEditorValue = editorValue;
    }
  }, 100);

  editor.addEventListener('input', (e) => {
      editorValue = e.target.value;
  });
};

changeAndPrintEditorValue();

let isShiftDowning = false;
editor.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.code === 'ShiftLeft') {
    isShiftDowning = true;
  }
  if (e.code === 'Tab') {
    e.preventDefault();
    let value = e.target.value;
    const dragStart = e.target.selectionStart;
    const dragEnd = e.target.selectionEnd;
    if (isShiftDowning) { // 탭 삭제
      editorValue = value.substring(0, dragStart - 4) + value.substring(dragEnd);
      setTimeout(() => {
        e.target.setSelectionRange(dragStart - 4, dragStart - 4);
      }, 100); // TODO 임시방편이기에 나중에 완벽하게 고쳐야함. 수정되고나면 커서가 마지막으로 옴겨지는데, 그 뒤에 다시 커서를 원래자리로 옴겨주기 위한 100밀리초이다..
    } else { // 탭 추가
      editorValue = value.substring(0, dragStart) + '    ' + value.substring(dragEnd);
      setTimeout(() => {
        e.target.setSelectionRange(dragStart + 4, dragStart + 4);
      }, 100);
    }
    // e.target.focus();
  }
})

const shiftUp = (e) => {
  console.log('받아옴', e);
  if (e.code === 'ShiftLeft') {
    isShiftDowning = false;
  };
} 
editor.addEventListener('keyup', shiftUp);
