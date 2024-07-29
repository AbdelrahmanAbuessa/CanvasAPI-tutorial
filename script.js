const canvas = document.getElementById('bouncingBallCanvas');
const ctx = canvas.getContext('2d');

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    color: 'black',
    dy: 2,
    gravity: 0.2,
    bounce: 1
};

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function updateBall() {
    ball.dy += ball.gravity;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.dy *= -ball.bounce;
    }

    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.dy *= -ball.bounce;
    }
}

function animate() {
    drawBall();
    updateBall();
    requestAnimationFrame(animate);
}

animate();