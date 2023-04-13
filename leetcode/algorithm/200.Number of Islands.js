/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
          if(grid[i][j] === "1") {
              dfs(i, j);
              count++;
          }
      }
  }

  function dfs(i, j) {
      if(i < 0 || j < 0 || grid.length <= i || grid[0].length <= j || grid[i][j] !== '1') {
          return;
      }

      grid[i][j] = '0';

      dfs(i, j + 1);
      dfs(i, j - 1);
      dfs(i + 1, j);
      dfs(i - 1, j);
  }

  return count;
}