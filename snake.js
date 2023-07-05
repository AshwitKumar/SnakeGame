import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
// Initially, the snake will be positioned at the center of the body. This is at x:11 and y:11 position, if the grid is broken into 21 x and 21 y segments.
export const snakeBody = [{ x: 10, y: 10 }];
let newSegments = 0;

export function drawSnake(gameBoard) {
  //   console.log("Draw Snake");
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function updateSnake() {
  //   console.log("Update Snake");

  addSegments();

  const inputDirection = getInputDirection();

  // for LEFT code:
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index == 0) return false;
    return segment.x === position.x && segment.y === position.y;
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push(snakeBody[snakeBody.length - 1]);
  }
  newSegments = 0;
}
