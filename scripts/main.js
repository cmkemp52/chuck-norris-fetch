"use strict";
const chuckQuotesForm = document.querySelector("#chuckQuotesForm");

chuckQuotesForm.addEventListener("submit",function(event){
    event.preventDefault();
    const categoryValue = chuckQuotesForm.querySelector("select").value;
    updateChuckSays(categoryValue);
})

// Create a function to update the quote text in the DOM
function updateChuckSays(category) {
    get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((quote) => {chuckSays.innerHTML = quote.value;});
    chuckSays.innerHTML = "..."
}
function getCategories(){
    const selectWrapper = document.querySelector("#selectWrapper");
    const categoryList = document.createElement("select");
    get("https://api.chucknorris.io/jokes/categories")
        .then(response => response.forEach(function(category){
            const categoryOption = document.createElement("option")
            categoryOption.text = category;
            categoryOption.value = category;
            categoryList.append(categoryOption);
        }))
    selectWrapper.append(categoryList);
}
//IIFE
{const defaultCategory = "dev";
getCategories();
updateChuckSays(defaultCategory);};
