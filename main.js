// Get Calendar Elements 
const date=document.getElementById("date")
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")
// Date Objects
const today= new Date();
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths=["January","February","March","April","May","June","July","August","September","October","November","December"];
// Calendar Element's Html 
date.innerHTML =(today.getDate()<10? "0":"")+today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML =today.getFullYear();



