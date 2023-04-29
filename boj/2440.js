let input = parseInt(`5`);
let result = [];
for(let i = input; i > 0; i--) {
  result.push('*'.repeat(i));
}

console.log(result.join('\n'));