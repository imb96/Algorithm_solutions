// S(lux, luy) -> E(rdx, rdy) = |rdx - lux| + |rdy - luy|
// return [lux, luy, rdx, rdy]
function solution(wallpaper) {
  const wallpaper2 = wallpaper.map((x) => x.split(''));
  const shop = [];
  for(let i = 0; i < wallpaper2.length; i++) {
      for(let j = 0; j < wallpaper2[i].length; j++) {
          if(wallpaper2[i][j] === '#') {
              shop.push([i, j])
          }
      }
  }
  const minx = shop.sort((a,b) => a[0] - b[0])[0][0];
  const miny = shop.sort((x,y) => x[1] - y[1])[0][1];
  const maxx = shop.sort((a,b) => b[0] - a[0])[0][0] + 1;
  const maxy = shop.sort((x,y) => y[1] - x[1])[0][1] + 1;
  return [minx, miny, maxx, maxy]
}