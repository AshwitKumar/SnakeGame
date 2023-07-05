console.log("Hello");

// imports:
import {
  snakeIntersection,
  getSnakeHead,
  SNAKE_SPEED,
  drawSnake,
  updateSnake,
  snakeBody,
} from "./snake.js";
import { updateFood, drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

// variables:
let lastRenderedTime;
let gameOver = false;

// DOMs:
const gameBoard = document.getElementById("game-board");
const currentScoreEl = document.getElementById("current-score");
const highScoreEl = document.getElementById("high-score");

function main(currentTime) {
  if (gameOver) {
    if (snakeBody.length - 1 > localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", snakeBody.length - 1);
    }
    if (confirm(`You lost. Score = ${snakeBody.length - 1}. Restart? `)) {
      window.location = "/";
    }
    return;
  }
  // currentTime is the timestamp the exact time when the function runs.
  //   console.log("render");
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderedTime = currentTime;

  currentScoreEl.innerHTML = snakeBody.length - 1;
  highScoreEl.innerHTML = localStorage.getItem("highScore");
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
