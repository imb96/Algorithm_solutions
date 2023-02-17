class Queue {
  constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
  }
  enqueue(value) {
      this.queue[this.rear++] = value;
  }
  dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return value;
  }
  peek() {
      return this.queue[this.front];
  }
}

function solution(priorities, location) {
  let count = 1;
  const queue = new Queue();
  priorities.forEach((el, idx) => {
     queue.enqueue([el, idx]);
  });
  priorities.sort((a,b) => a-b);
  while(1) {
      console.log(queue, count);
      let max = priorities[priorities.length - 1];
      
      if(queue.peek()[0] < max) {
          queue.enqueue(queue.dequeue());
      }else {
          const deq = queue.dequeue();
          priorities.pop();
          if(deq[1] === location) {
              break;
          }
          count++;
      }
  }
  return count;
}