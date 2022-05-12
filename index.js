var canvas = document.getElementById('c');

canvas.height = innerHeight;
canvas.width = innerWidth;

console.log(canvas.width);
console.log(canvas.height);

var c = canvas.getContext("2d");

let x = 95;
let y = 50;
let dx = 1;
let dy = 0.5;
var animate = () => {
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.fillStyle= 'rgb(0,0,0,1)';
    c.fillRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.strokeStyle= 'rgb(220,155,155,1)';
    c.arc(x, y, 10, 0, 2 * Math.PI);
    c.stroke();
    if ((x+10)>=canvas.width || (x-10)<=0){
        dx = -dx;
    }
    if ((y+10)>=canvas.height || (y-10)<=0){
        dy = -dy;
    }
    x += dx;
    y += dy;
}

setInterval(animate,10);