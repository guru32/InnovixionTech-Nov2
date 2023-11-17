var enddate = "01 January 2024 00:00 AM";
document.getElementById('enddate').innerText = enddate;
var inputbox = document.querySelectorAll('input');


function myclock(){
var startdate = new Date();
var end = new Date(enddate);
var diff = end-startdate;
var second = diff/1000;
var minute = second/60;
var hour = minute/60;
var day = Math.floor(hour/24);
if(diff<=0) return;
inputbox[0].value = Math.floor(second/3600/24);
inputbox[1].value = Math.floor(second/3600%24);
inputbox[2].value = Math.floor(second/60%60);
inputbox[3].value = Math.floor(second%60);
}

myclock();

setInterval(
    () => {
    myclock()
},1000
)





// console.log(day)
// console.log(second/3600/24)

// console.log(inputbox[0].value)
