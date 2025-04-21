// Game Variables
const player = document.getElementById('player');
const enemy = document.getElementById('1x1x1x1');
const scoreElement = document.getElementById('score');
let score = 0;
let playerX = 100;
let playerY = 350; // Starting position of Builderman
let enemyX = 750; // Starting position of 1x1x1x1
let enemyY = 0;

// Player Movement
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = true;
    if (e.key === 'ArrowRight') moveRight = true;
    if (e.key === 'ArrowUp') moveUp = true;
    if (e.key === 'ArrowDown') moveDown = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = false;
    if (e.key === 'ArrowRight') moveRight = false;
    if (e.key === 'ArrowUp') moveUp = false;
    if (e.key === 'ArrowDown') moveDown = false;
});

// Game Loop
function gameLoop() {
    // Player Movement
    if (moveLeft && playerX > 0) playerX -= 5;
    if (moveRight && playerX < 750) playerX += 5;
    if (moveUp && playerY > 0) playerY -= 5;
    if (moveDown && playerY < 350) playerY += 5;

    // Update Player Position
    player.style.left = playerX + 'px';
    player.style.bottom = playerY + 'px';

    // Enemy Movement
    enemyX -= 2;
    if (enemyX < -50) {
        enemyX = 750; // Reset enemy position
        score += 10;
        scoreElement.textContent = score;
    }
    enemy.style.left = enemyX + 'px';
    enemy.style.top = enemyY + 'px';

    // Collision Detection (Player vs Enemy)
    if (playerX < enemyX + 50 && playerX + 50 > enemyX && playerY < enemyY + 50 && playerY + 50 > enemyY) {
        alert("Game Over! You were destroyed by 1x1x1x1!");
        score = 0;
        scoreElement.textContent = score;
        playerX = 100;
        playerY = 350;
        enemyX = 750;
    }

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
