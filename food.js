import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function drawFood(gameBoard) {
  //   console.log("Draw Food");
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

export function updateFood() {
  //   console.log("Update Food");

  // if food is positioned on our snake:
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

function getRandomFoodPosition() {
  let newFoodPosition;
  if (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  console.log(newFoodPosition);
  return newFoodPosition;
}
