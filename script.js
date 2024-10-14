
const birthDay = parseInt(prompt("Enter your birth day (1-31):"), 10);
const birthMonthInput = prompt("Enter your birth month (e.g., January, Jan, 01):");
const birthYear = parseInt(prompt("Enter your birth year:"), 10);


let birthMonth;
if (birthMonthInput.toLowerCase() === "january" || birthMonthInput.toLowerCase() === "jan" || birthMonthInput === "01") {
    birthMonth = 0; 
} else if (birthMonthInput.toLowerCase() === "february" || birthMonthInput.toLowerCase() === "feb" || birthMonthInput === "02") {
    birthMonth = 1; 
} else if (birthMonthInput.toLowerCase() === "march" || birthMonthInput.toLowerCase() === "mar" || birthMonthInput === "03") {
    birthMonth = 2; 
} else if (birthMonthInput.toLowerCase() === "april" || birthMonthInput.toLowerCase() === "apr" || birthMonthInput === "04") {
    birthMonth = 3; 
} else if (birthMonthInput.toLowerCase() === "may") {
    birthMonth = 4; 
} else if (birthMonthInput.toLowerCase() === "june" || birthMonthInput.toLowerCase() === "jun" || birthMonthInput === "06") {
    birthMonth = 5; 
} else if (birthMonthInput.toLowerCase() === "july" || birthMonthInput.toLowerCase() === "jul" || birthMonthInput === "07") {
    birthMonth = 6; 
} else if (birthMonthInput.toLowerCase() === "august" || birthMonthInput.toLowerCase() === "aug" || birthMonthInput === "08") {
    birthMonth = 7; 
} else if (birthMonthInput.toLowerCase() === "september" || birthMonthInput.toLowerCase() === "sep" || birthMonthInput === "09") {
    birthMonth = 8; 
} else if (birthMonthInput.toLowerCase() === "october" || birthMonthInput.toLowerCase() === "oct" || birthMonthInput === "10") {
    birthMonth = 9; 
} else if (birthMonthInput.toLowerCase() === "november" || birthMonthInput.toLowerCase() === "nov" || birthMonthInput === "11") {
    birthMonth = 10; 
} else if (birthMonthInput.toLowerCase() === "december" || birthMonthInput.toLowerCase() === "dec" || birthMonthInput === "12") {
    birthMonth = 11; 
} else {
    alert("Invalid month input. Please enter a valid month.");
}


const today = new Date();
const birthDate = new Date(birthYear, birthMonth, birthDay);

let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
}

if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}


alert(`Your Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`);
