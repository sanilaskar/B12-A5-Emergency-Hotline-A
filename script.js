let heartCount = 0;
let coinCount = 100;
let copyCount = 0;


const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");


// Heart button logic
document.querySelectorAll(".heartBtn").forEach(btn => {
btn.addEventListener("click", () => {
heartCount++;
heartDisplay.textContent = `❤️ ${heartCount}`;
});
});


// Copy button logic
document.querySelectorAll(".copyBtn").forEach(btn => {
btn.addEventListener("click", () => {
const number = btn.getAttribute("data-number");
navigator.clipboard.writeText(number);
alert(`Copied number: ${number}`);
copyCount++;
copyDisplay.textContent = `📋 ${copyCount}`;
});
});


// Call button logic
document.querySelectorAll(".callBtn").forEach(btn => {
btn.addEventListener("click", () => {
const service = btn.getAttribute("data-service");
const number = btn.getAttribute("data-number");


if (coinCount < 20) {
alert("Not enough coins to make a call!");
return;
}


alert(`Calling ${service} at ${number}`);
coinCount -= 20;
coinDisplay.textContent = `💰 ${coinCount}`;


const time = new Date().toLocaleTimeString();
const li = document.createElement("li");
li.textContent = `${service} (${number}) — ${time}`;
historyList.prepend(li);
});
});


// Clear history
document.getElementById("clearHistory").addEventListener("click", () => {
historyList.innerHTML = "";
});