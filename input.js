let inputDirection = { x: 0, y: 0 };
let lastInputDirextion = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirextion.y != 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirextion.y != 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowRight":
      if (lastInputDirextion.x != 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
    case "ArrowLeft":
      if (lastInputDirextion.x != 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    default:
      console.log("Bhak lauda");
  }
});

export function getInputDirection() {
  lastInputDirextion = inputDirection;
  return inputDirection;
}
