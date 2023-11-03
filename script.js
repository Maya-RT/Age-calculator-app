 //INPUTS
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
//OUTPUTS
const dayOut = document.querySelector('#days');
const monthOut = document.querySelector('#months');
const yearOut = document.querySelector('#years');
//Other elements
const form = document.querySelector("#form");
const small = document.querySelector("small");
const container = document.querySelector(".container");
const submit = document.querySelector('#submit');

form.addEventListener("submit", e => {
    e.preventDefault();
console.log("this is working")
    validateInput();
});

let date = new Date();
let getDay = date.getDate();
let getMonth = 1 + date.getMonth();
let getYear = date.getFullYear();
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function validateInput(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        if(input.value === ''){
            container.className ='container error';
            small.style.visibility = 'visible';
            small.innerText = "This field is required.";
        }else if(monthInput.value > 12){
            container.className ='container error';
            small.style.visibility = 'visible';
            small.innerText = "Must be a valid month.";
        }else if(dayInput.value > 31){
            container.className ='container error';
            small.style.visibility = 'visible';
            small.innerText = "Must be a valid day."; 
        }else{
            container.className ='container';
            small.style.visibility = 'hidden';
            small.innerText = "";
        }
});
}