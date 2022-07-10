const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const gameplay = document.getElementById("gameplay");

const winningNumber = 3;

// handleClick function
const handleClick = (e) => {

  let clicked = e.target.id;
  document.getElementById(clicked).classList.add("disabled")
  if (clicked > winningNumber) {
    gameplay.innerHTML = "Too high!";
  } else if (clicked < winningNumber) {
    gameplay.innerHTML = "Too low!";
  } else {
    gameplay.innerHTML = `You have guessed correctly! the correct number was: ${winningNumber}!`;
  }
};

// Create buttons
for (let index = 0; index < numbers.length; index++) {
  const button = document.createElement("button");
  button.id = numbers[index];
  button.innerHTML = numbers[index];
  button.classList.add("btn", "btn-primary");
  button.addEventListener("click", handleClick);
  document.getElementById("buttons").append(button);
}
