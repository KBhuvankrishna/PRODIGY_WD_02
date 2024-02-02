let hours=0;
let minutes=0;
let seconds=0;
let milliseconds=0;
let displayHours=hours;
let displaySec=hours;
let displayMins=hours;
let displayMillisec=hours;

let Status="stopped";
let interval=null;
let lapNow=null;

function start(){
    milliseconds++;
    if(milliseconds/100==1){
        seconds++;
        milliseconds=0
        if(seconds/60==1){
            minutes++;
            seconds=0;
            if(minutes/60==1){
                hours++;
                minutes=0;
            }
        }
    }
    if(milliseconds<10){
        displayMillisec="0"+milliseconds;
    }
    else{
        displayMillisec=milliseconds;
    }
    if(seconds<10){
        displaySec="0"+seconds;
    }
    else{
        displaySec=seconds;
    }
    if(minutes<10){
        displayMins="0"+minutes;
    }
    else{
        displayMins=minutes;
    }
    if(hours<10){
        displayHours="0"+hours;
    }
    else{
        displayHours=hours;
    }
    document.getElementById("timerHrs").innerHTML=displayHours;
    document.getElementById("timerSec").innerHTML=displaySec;
    document.getElementById("timerMin").innerHTML=displayMins;
    document.getElementById("timerMilli").innerHTML=displayMillisec;
}
function startStop(){
    if(Status=="stopped"){
        interval=window.setInterval(start,10);
        Status="started";
        document.getElementById("startBtn").innerHTML="Stop"
    }
    else{
        window.clearInterval(interval);
        Status="stopped";
        document.getElementById("startBtn").innerHTML="Start";    
    }
}
function reset(){
    window.clearInterval(interval);
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    displayHours=0;
    displayMillisec=0;
    displayMins=0;
    displaySec=0;
    Status="stopped";
    document.getElementById("timerHrs").innerHTML="00";
    document.getElementById("timerSec").innerHTML="00";
    document.getElementById("timerMin").innerHTML="00";
    document.getElementById("timerMilli").innerHTML="00";
    document.getElementById("laprecord").innerHTML="";
}
function lap(){
    lapNow=displayHours+":"+displayMins+":"+displaySec+":"+displayMillisec
    document.getElementById("laprecord").innerHTML=document.getElementById("laprecord").innerHTML+"<p>"+lapNow+"</p>";

}