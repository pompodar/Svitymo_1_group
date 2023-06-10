//task2 change color
const btNcolor = document.querySelector("#btNcolor");
function parColor() {
  document.querySelector("#parColor").style.color = "red";
}

btNcolor.addEventListener("click", parColor);
// ----AGE -----
const btn3 = document.querySelector("#btn3");
const input1 = document.querySelector("#input1");

function inputValue() {
  const value = input1.value;
  if (!value) {
    alert("You didn't enter anything!");
  } else if (!isNaN(value)) {
    alert(`LOL, your age: ${value}`);
  } else {
    alert(`NOT: ${value} We don't play enter a number!`);
  }
  input1.value = "";
}
// чат GPT HELP
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    inputValue();
  }
}
input1.addEventListener("keydown", handleKeyPress);
//
btn3.addEventListener("click", inputValue);
//task3
const btn4 = document.querySelector("#btn4");
const input2 = document.querySelector("#input2");

function yourAge() {
  let userAge = 2023 - input2.value;
  if (!input2.value) {
    alert("2023 not your birth year");
  } else {
    alert(userAge);
  }
  input2.value = "";
}
btn4.addEventListener("click", yourAge);
