

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // e.g., "14:35:08"
  document.getElementById("time").textContent = timeString;
}

updateTime(); // initial call
setInterval(updateTime, 1000); // update every second

function updateDate() {
  const today = new Date();
  const date = today.toLocaleDateString(); // formatted date like "6/14/2025"
  document.getElementById("date").textContent = date; // show it
}

updateDate(); // Call the function to display the date
console.log("Date updated.");
