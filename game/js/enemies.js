export const enemies=[]
const SIZE=26;
 
function spawnEnemy(canvas) {
    const W = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const v = -h;
    const vy = 5

    enemies.push({ x, y, width: W, height: h, vy });
}
