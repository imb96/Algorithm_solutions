function solution(today, terms, privacies) {
  var answer = [];
  const termsMap = new Map();
  const tyear = +today.split('.')[0];
  const tmonth = +today.split('.')[1];
  const tday = +today.split('.')[2];
  terms.forEach(x => termsMap.set(x.split(' ')[0], x.split(' ')[1]));
  let i = 0;
  for(const privacy of privacies) {
      i += 1;
      const term = +termsMap.get(privacy.split(' ')[1]);
      let year = +privacy.split(' ')[0].split('.')[0];
      let month = +privacy.split(' ')[0].split('.')[1];
      let day = +privacy.split(' ')[0].split('.')[2];
      
      day += 27;
      while(day > 28){
          day -= 28;
          month += 1;
      }
      
      month += (term-1);
      while(month > 12){
          month -= 12;
          year += 1;
      }
      
      if(year < tyear) {
          answer.push(i);
      }else if(year === tyear && month < tmonth) {
          answer.push(i);
      }else if(year === tyear && month === tmonth && day < tday) {
          answer.push(i);
      }
  }
  return answer;
}