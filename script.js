 //INPUTS
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
//OUTPUTS
const dayOut = document.querySelector('#days');
const monthOut = document.querySelector('#months');
const yearOut = document.querySelector('#years');
//Other elements
const form = document.getElementById("form");
const small = document.querySelector("small");
const container = document.querySelector(".container");
const submit = document.querySelector('#submit');

submit.addEventListener('click', validateInput);
    

let date = new Date();
let getDay = date.getDate();
let getMonth = 1 + date.getMonth();
let getYear = date.getFullYear();
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function validateInput(){
        if(dayInput.value > getDay){
            getDay = getDay + months[getMonth - 1];
            getMonth = getMonth - 1;  
        }
        if (monthInput.value > getMonth){
            getMonth = getMonth + 12;
            getYear = getYear - 1;
        }
    let dayCalc = getDay - dayInput.value;
    let monthCalc = getMonth - monthInput.value;
    let yearCalc = getYear - yearInput.value;

        if(dayInput.value === ''){
            errorFor(dayInput, 'This field is required');
        }else if(dayInput.value > 31){
            errorFor(dayInput, 'Must be a valid day')   
        }else{
            succesFor(dayInput);
           dayOut.innerHTML = dayCalc; 
        }
        
        if(monthInput.value === ''){
            errorFor(monthInput, 'This field is required');
        }else if(monthInput.value > 12){
            errorFor(monthInput, 'Must be a valid month')   
        }else{
        succesFor(monthInput);
        monthOut.innerHTML = monthCalc;
       }

        if(yearInput.value === ''){
            errorFor(yearInput, 'This field is required');
        }else if(yearInput.value < 1900 || yearInput.value > 2023){
            errorFor(yearInput, 'Must be a valid month');
        }else{
            succesFor(yearInput);
            yearOut.innerHTML = yearCalc;
        } 
    
console.log(dayCalc + "and" + monthCalc + "and" + yearCalc)
}

function errorFor(input, message){
    const formElement = input.parentElement;
    formElement.className ='box error';
    small.innerHTML = message;
}

function succesFor(input){
    const formElement =input.parentElement;
    formElement.className= 'box';
}