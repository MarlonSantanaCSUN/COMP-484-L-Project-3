// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";

mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.

toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

function highlightListItems() {
  // Select all <li> elements
  const listItems = document.querySelectorAll("li");

  // Loop through each item
  listItems.forEach(function(item) {
    item.style.color = "blue";
  });
}

highlightListItems();


/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

function createTimestamp() {
  // Create a new <span> element
  const timeSpan = document.createElement("span");

  // Set its content to the current time
  timeSpan.innerHTML = " " + new Date().toLocaleTimeString();

  // Append it to the statusOutput div
  statusOutput.appendChild(timeSpan);
}

function toggleStatus(e) {
  e.preventDefault(); // prevents the anchor from jumping to top of page

  // Toggle the 'hidden' class
  statusOutput.classList.toggle("hidden");
  
  // Check if statusOutput is visible
  if (!statusOutput.classList.contains("hidden")) {
    // Visible → highlight title
    mainTitle.style.backgroundColor = "yellow";
    
    // Add timestamp
    createTimestamp();
    } else {
        // Hidden → remove highlight
        mainTitle.style.backgroundColor = "";
    }
}

toggleButton.addEventListener("click", toggleStatus);


/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

function startFlashing() {
  // Prevent multiple intervals from stacking
  if (intervalId !== null) return;

  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null; // reset so it can be started again
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
