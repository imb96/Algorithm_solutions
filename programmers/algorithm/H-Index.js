function solution(citations) {
  citations.sort((a,b) => a-b);
  let left = 0;
  let right = citations.length-1;
  
  while(left <= right) {
      let mid = parseInt(citations.length / 2);
      if(citations.filter(x => x >= citations[mid]).length >= citations[mid]
         && citations.filter(x => x <= citations[mid]).length <= citations[mid]){
          return citations[mid];
      }else if(citations.filter(x => x >= citations[mid]).length < citations[mid]) {
          left = mid + 1;
      }else {
          right = mid - 1;
      }
  }
}