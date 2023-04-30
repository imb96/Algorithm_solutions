function solution(n, m, section) {
    let max = 0;
    let cnt = 0;
    section.forEach(x => {
        if(x > max) {
            cnt++;
            max = x + m - 1;
        }
    });
    return cnt;
}