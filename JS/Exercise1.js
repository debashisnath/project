let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
// let time = today.getTime();

console.log ("Today is : " +  month + "/" + date + "/" + year + "<br>");

let myTimeout = setInterval(myTimer,1000);
function myTimer(){
    let today = new Date();
    console.log(today.toLocaleTimeString());
    

 }

// let hour = today.getHours();
// let minute = today.getMinutes();
// let seconds = today.getSeconds();

// let prepand = (hour>=12)?"PM" : "AM";

