function solution(fees, records) {
  const result = [];
  const arc_T = new Map();
  const basic_T = fees[0];
  const basic_F = fees[1];
  const unit_T = fees[2];
  const unit_F = fees[3];
  const recordsMap = new Map();
  
  for(const record of records) {
      const hour = +record.split(' ')[0].split(':')[0];
      const min = +record.split(' ')[0].split(':')[1];
      const carNum = record.split(' ')[1];
      const io = record.split(' ')[2];
      const totalMin = hour * 60 + min;
      // 입차시 recordsMap에 차번호, 입차시간저장
      if(io === 'IN') {
          recordsMap.set(carNum, totalMin);
      // 출차시 recordsMap에 차번호를 키 값으로 입차시간을 가져와
          // arc_T에 차번호를 키 값으로 출차시간 - 입차시간 저장.
          // 출차된 차량은 recordsMap에서 기록 삭제
      }else if(io === 'OUT') {
          let prev = recordsMap.get(carNum);
          let diff = totalMin - prev;
          arc_T.set(carNum, (arc_T.get(carNum) || 0) + diff)
          recordsMap.delete(carNum);
      }
  }
  // 출차내역 없는 차량 계산 (recordsMap에 남아있는 차량)
  for(const [key, value] of recordsMap) {
          let time = 1439 - value;
          arc_T.set(key, (arc_T.get(key) || 0) + time);
  };
  // 저장된 누적 주차 시간(분)을 사용해 주차요금 계산
  for(const [key, value] of arc_T) {
      let val = value;
      let fare = 0;
      if(val < basic_T) {
          fare = basic_F
      }else {
       fare = basic_F + Math.ceil((val - basic_T) / unit_T) * unit_F   
      }
      arc_T.set(key, fare)
  }
  // 차 번호순으로 정렬
  const newRecords = [...arc_T].sort((a,b) => +a[0] - +b[0]);
  newRecords.forEach(x => result.push(x[1]));
  return result;
}