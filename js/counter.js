const deadline = '12/1/2021';

function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor( total/(1000*60*60*24) ) + 1;
    return days;
}

let timeRemaining = getTimeRemaining(deadline);

function turnRed(time) {
    if(time <= 5) {
        document.getElementById('counter').style.color = "red";
    }
}

document.getElementById('counter').innerHTML = timeRemaining + " days";
turnRed(timeRemaining);