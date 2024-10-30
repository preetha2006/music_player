let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);


let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");

let today=new Date();

let weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthname=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weekdays[today.getDay()];
month.innerHTML=monthname[today.getMonth()];
year.innerHTML=today.getFullYear();