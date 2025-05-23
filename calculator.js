function userText(param) {
  document.getElementById("userInput").innerText += param;
}

function evaluateResult() {
  let userInput = document.getElementById("userInput").innerText;
  let result = eval(userInput);
  document.getElementById("result").innerText = result;
}

function clearScreen() {
  document.getElementById("userInput").innerText = "";
  document.getElementById("result").innerText = "";
}
