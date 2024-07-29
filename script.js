const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let cont = document.querySelector(".container");

canvas.width = "20";
canvas.height = "400";

cont.style.rotate = "90deg";

const ball = {
    x: 10,
    y: 10,
    radius: 10,
    color: 'blue',
    dy: 3,
    dx: 3,
    gravity: 0.2,
};

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
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