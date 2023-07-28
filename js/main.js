const elevator = document.querySelector('.elevator');
const upButton = document.getElementById('up-btn');
const downButton = document.getElementById('down-btn');
const goButton = document.getElementById('go-btn');
const buildingHeight = 500;
const floorHeight = buildingHeight / 4; // Assuming a 4-floor building

let currentFloor = 1;

function moveTo(floor) {
  if (floor >= 1 && floor <= 4) {
    animateElevator(floor);
  } else {
    alert("Invalid floor!");
  }
}

function animateElevator(floor) {
  const elevatorElement = document.querySelector(".elevator");
  const floorElement = elevatorElement.querySelector(".floor");

  let floorDifference = Math.abs(floor - currentFloor);
  let direction = currentFloor < floor ? 1 : -1;

  let i = 0;
  let interval = setInterval(() => {
    currentFloor += direction;
    floorElement.textContent = currentFloor;

    if (++i === floorDifference) {
      clearInterval(interval);
    }
  }, 1000);

  // Calculate the position for the elevator to move it to the target floor
  const floorHeight = 100; // Height of each floor in pixels
  const targetPosition = (4 - floor) * floorHeight;
  elevatorElement.style.bottom = targetPosition + "px";
}
// 
function moveElevator(targetFloor) {
  const targetPosition = (targetFloor - 1) * floorHeight;
  elevator.style.transition = 'bottom 2s';
  elevator.style.bottom = targetPosition + 'px';
  currentFloor = targetFloor;
}

upButton.addEventListener('click', () => {
  if (currentFloor < 4) {
    moveElevator(currentFloor + 1);
  }
});

downButton.addEventListener('click', () => {
  if (currentFloor > 1) {
    moveElevator(currentFloor - 1);
  }
});

goButton.addEventListener('click', () => {
  const inputFloor = prompt('Enter the desired floor (1 to 4):');
  const desiredFloor = parseInt(inputFloor);

  if (desiredFloor >= 1 && desiredFloor <= 4 && desiredFloor !== currentFloor) {
    moveElevator(desiredFloor);
  } else {
    alert('Invalid floor input. Please enter a valid floor number.');
  }
});
