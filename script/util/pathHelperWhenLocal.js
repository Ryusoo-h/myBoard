
const hasParmas = (href) => { // 파라미터를 가지면 파라미터가 시작되는 index반환. 아니면 false 반환
    const paramStartNum = href.indexOf('?');
    return paramStartNum === -1 ? false : paramStartNum;
}

document.querySelectorAll('a').forEach(link => {
    if (!link.href.includes('localhost')) {
        return;
    }
    let currentHref = link.href;
    if (currentHref.includes('/myBoard')) {
        currentHref = currentHref.split('/myBoard').join('');
    };
    if (!hasParmas(currentHref)) {
        link.href =  currentHref + (currentHref.slice(-1) === '/' ? '' : '/') + 'index.html';
    } else {
        const splittedHref = currentHref.split('?');
        link.href = splittedHref[0] + 'index.html?' + splittedHref[1];
    };
});