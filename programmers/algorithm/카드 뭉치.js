class Queue {
  constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
  }
  enque(value) {
      this.queue[this.rear++] = value;
  }
  deque() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
  }
  peek() {
      return this.queue[this.front];
  }
}
function solution(cards1, cards2, goal) {
  let result = "No"
  const queue1 = new Queue();
  const queue2 = new Queue();
  
  cards1.forEach(x => queue1.enque(x));
  cards2.forEach(x => queue2.enque(x));
  let cnt = 0;
  for(let i = 0; i < goal.length; i++) {
      if(goal[i] === queue1.peek()){
          queue1.deque();
          cnt++;
      }
      if(goal[i] === queue2.peek()){
          queue2.deque();
          cnt++;
      }
  }
  
  return cnt === goal.length ? "Yes" : "No"
}