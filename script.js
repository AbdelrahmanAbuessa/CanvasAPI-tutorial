const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let cont = document.querySelector(".container");

canvas.width = "40";
canvas.height = "1000";

let g = 9.81;

let us = 0.5;

let theta = 9 * Math.PI / 180;

cont.style.rotate = `${90 - theta * 180 / Math.PI}deg`;

console.log(us);
console.log(Math.tan(theta));

const ball = {
    x: 20,
    y: 20,
    radius: 20,
    color: 'blue',
    gravity: (g * (Math.sin(theta) + (us * Math.cos(theta)))) / 100 * Math.PI,
    dy: 3,
};

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
}

function update() {
    ball.y += ball.dy;
    ball.dy += ball.gravity;
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
    }
}

function animate() {
    drawBall();
    update();
    requestAnimationFrame(animate);
}

animate();