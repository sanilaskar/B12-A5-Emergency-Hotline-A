let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

//reusable function to attach events
function setupButtons(className, handlerFunction) {
  const buttons = document.querySelectorAll(className);
  for (const button of buttons) {
    button.addEventListener("click", function () {
      return handlerFunction(button); 
    });
  }
}

//Heart button logic
function heartHandler() {
  heartCount++;
  heartDisplay.innerHTML = heartCount + ' <i class="fa-solid fa-heart text-red-500 ml-1"></i>';

}
setupButtons(".heartBtn", heartHandler);

//Copy button logic
function copyHandler(button) {
  const number = button.getAttribute("data-number");
  navigator.clipboard.writeText(number);
  alert("Copied number: " + number);

  copyCount++;
  copyDisplay.textContent = copyCount + " Copy" ;
}
setupButtons(".copyBtn", copyHandler);

//Call button logic
function callHandler(button) {
  const service = button.getAttribute("data-service");
  const number = button.getAttribute("data-number");

  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return; 
  }

  alert("Calling " + service + " at " + number);
  coinCount -= 20;
  coinDisplay.innerHTML = coinCount + ' <i class="fa-solid fa-coins text-yellow-500 ml-1"></i>';

  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.className = "bg-white rounded-md shadow-sm p-2 fnt";
  li.textContent = service + " (" + number + ") — " + time;
  historyList.appendChild(li);
}
setupButtons(".callBtn", callHandler);



//Clear history
document.getElementById("clearHistory").addEventListener("click", function () {
  historyList.innerHTML = "";
});