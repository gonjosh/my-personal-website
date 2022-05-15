function addMessageToPage(message){
const newElement = document.createElement("h2");
newElement.textContent = message;
document.querySelector("body").appendChild(newElement);
}
const birthYear = 1996;
//const currentYear = 2022;
const currentYear = new Date().getFullYear()
const currentAge = currentYear - birthYear;


addMessageToPage(`my current age is ${currentAge}`)