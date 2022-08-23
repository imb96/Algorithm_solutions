function solution(board, moves) {
  var answer = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        if (stack[stack.length - 1] === board[j][move]) {
          stack.pop();
          answer += 2;
        } else stack.push(board[j][move]);
        board[j][move] = 0;
        break;
      }
    }
  }
  return answer;
}
