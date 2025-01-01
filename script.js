const bdateElement = document.getElementById("b-date");
const btnElement = document.querySelector('button');
const yearElement = document.getElementById("years");
const monthElement = document.getElementById("months");
const dayElement = document.getElementById("days");

btnElement.addEventListener("click", ()=> {
  const bdateValue = bdateElement.value;

  // if(bdateValue === ""){

  // }

  const userDate = new Date(bdateValue);
  const currDate = new Date();

  let years = currDate.getFullYear() - userDate.getFullYear();
  let months = currDate.getMonth() - userDate.getMonth();
  let days = currDate.getDate() - userDate.getDate();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
    days += previousMonth.getDate();
  }

  yearElement.innerText = `${years}`
  monthElement.innerText = `${months}`
  dayElement.innerText = `${days}`
});