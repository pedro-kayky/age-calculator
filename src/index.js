const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOut = document.getElementById("DD");
const monthOut = document.getElementById("MM");
const yearOut = document.getElementById("YY");

const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");

const submit = document.getElementById("submit-btn");

const date = new Date();

let isValid = false;

submit.addEventListener("click", (event) => {
  event.preventDefault(); 
  calculateDate();
});

dayInp.addEventListener("input", (e) => {
  if (+dayInp.value > 31) {
    errorDay.textContent = "must be a valid date";
    isValid = false;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  if (+dayInp.value <= 0) {
    isValid = false;
    errorDay.textContent = "this field is required";
    isValid = false;
  }
});

monthInp.addEventListener("input", (e) => {
  if (+monthInp.value > 12) {
    errorMonth.textContent = "must be a valid month";
    isValid = false;
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }
  if (+monthInp.value <= 0) {
    isValid = false;
    errorMonth.textContent = "this field is required";
    isValid = false;
  }
});

yearInp.addEventListener("input", () => {
  if (+yearInp.value > 2023) {
    errorYear.textContent = "must be in the past";
    isValid = false;
  } else {
    isValid = true;
    errorYear.textContent = "";
  }
  if (+yearInp.value <= 0) {
    isValid = false;
    errorYear.textContent = "this field is required";
    isValid = false;
  }
});

function calculateDate() {
  if (isValid) {
    let birthday = `${monthInp.value}/${dayInp.value}/${yearInp.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj.getTime();
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;
    dayOut.textContent = ageDay;
    monthOut.textContent = ageMonth;
    yearOut.textContent = ageYears;
  } else {
    alert("error");
  }
}
