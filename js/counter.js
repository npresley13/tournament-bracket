const deadline = '12/1/2021';

function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor( total/(1000*60*60*24) );
    return days;
}

let timeRemaining = getTimeRemaining(deadline);

document.getElementById('counter').innerHTML = timeRemaining + " days";