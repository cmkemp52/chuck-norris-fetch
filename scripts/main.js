"use strict";

const getMoreQuotesButton = document.getElementById("getMoreQuotes");
const chuckSays = document.getElementById("chuckSays")

// Add an event listener to the button, DON'T FORGET TO PREVENT THE DEFAULT BEHAVIOR!
// Call a function to return a new quote, and update the DOM
getMoreQuotesButton.addEventListener("click", function(e) {
    console.log("Buttpress");
    updateChuckSays();
});

// Create a function to update the quote text in the DOM
function updateChuckSays() {
    fetch("https://api.chucknorris.io/jokes/random?category=food")
        .then(response => response.json())
        .then(data => chuckSays.innerHTML = data.value);
    chuckSays.innerHTML = "...";
}
updateChuckSays();
