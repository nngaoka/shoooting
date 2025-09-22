const canvas=document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2-15,
    y: canvas.height -60, 
    width: 30,
    height: 30,
    color: "blue",
}
const bullets=[]
const BULLETS_SPEED=-10;

function tryShoot(now){
    bullets.push({
    x:player.x,
    y:player.y,
    width:5,
    height:5,
    vy: BULLETS_SPEED,
})
}
let x=225;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
       player.x-= 10;
    }else if (e.key === "ArrowRight") {
       player.x+= 10
    }else if (e.code === "Space") {
     tryShoot();
    }
    });
let y1 = 0;
let y2 = -150;

        function draw(){
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width,canvas.height);

ctx.fillStyle = player.color;
ctx.fillRect(player.x, player.y,player.width,player.height);

ctx.fillStyle ="white" ;

for (let i= 0; i< bullets.length; i++){
    const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
}
}
        function gameLoop() {
    update();
    draw();
 requestAnimationFrame(gameLoop);
    
        }

gameLoop();