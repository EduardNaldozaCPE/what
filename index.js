import Ball from "./classes/Ball.js";

var canvas = document.getElementById('c');

canvas.height = innerHeight;
canvas.width = innerWidth;

var c = canvas.getContext("2d");


let keyMap = new Map();
keyMap.set('KeyA', [-2, -5]);
keyMap.set('KeyD', [2, -5]);

const NRGLOSS = 0.1;
const mainBall = new Ball(c, 95, 50, 10, 5, 5);

var animate = () => { 
    clearScreen();
    mainBall.render();
    mainBall.physUpdate();
    // Set edges as boundary
    if (mainBall.position.x + mainBall.width + mainBall.velocity.x >= canvas.width) {
        mainBall.velocity.x = 0;
        mainBall.accel.x    = 0;
    }
    if (mainBall.position.y + mainBall.height + mainBall.velocity.y >= canvas.height) {
        mainBall.velocity.y = (-mainBall.velocity.y*2)/3;
        mainBall.accel.y    = 0;
    } else {mainBall.addGravity()}
    if (mainBall.position.y <= 0) {
        mainBall.velocity.y = (-mainBall.velocity.y*2)/3;
        mainBall.accel.y    = 0;
    }
    if (mainBall.position.x <= 0) {
        mainBall.velocity.x = -mainBall.velocity.x;
        mainBall.accel.x    = 0;
    }
}

setInterval(animate,10);

document.addEventListener('keydown', (e)=>{
    mainBall.setVel(...keyMap.get(e.code));
    e.preventDefault();
});


document.addEventListener('mousedown', (e)=>{
    if (e.x <= canvas.width/2) mainBall.setVel(-2, -5);
    else mainBall.setVel(2,-5);
    e.preventDefault();
});

// --------------- FUNCTIONS --------------- //
function clearScreen() { // Clear the Screen Every Render
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.fillStyle= 'rgb(0,0,0,1)';
    c.fillRect(0,0,canvas.width,canvas.height);
};