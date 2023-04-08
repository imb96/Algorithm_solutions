let input = `4 6
101111
101010
101011
111011`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
input.shift();
const maze = input.map(x => x.split(''));