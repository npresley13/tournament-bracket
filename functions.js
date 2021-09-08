let startingTeams = [];
let winners = []
let teams = document.getElementsByClassName("team");
let teamRank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
let inputScore = document.getElementsByClassName("team-score");
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.team');

// Adds event listener to when someone clicks out of the score box
// this event listner will be used to advance teams to the next round.
// Array.from(inputScore).forEach(function(inputScore) {
//     inputScore.addEventListener('focusout', function(){buildTeams(20)});
// });


// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }


// Match teams saved to the Array with the proper bracket.
// Creates an array from local storage then places teams based on the Bracket slot ID
// function placeTeams() {
//     let teamArr2 = JSON.parse(window.localStorage.getItem('team'));
//     for (let i = 0; i < teamArr2.length; i++) {
//         let nameTeam = document.getElementById(`team${i+1}`);
//         nameTeam.innerHTML = teamArr2[i].teamName;
//     }
// }


function placeTeams() {
    let teamArr2 = JSON.parse(window.localStorage.getItem('team'));
    for (let i = 0; i < 20; i++) {
        let nameTeam = document.getElementById(`team${i+1}`);
        let teamScore = document.getElementById(`score${i+1}`);
        try {
            nameTeam.innerHTML = teamArr2[i].teamName;
        } catch(error) {
            nameTeam.parentNode.style.backgroundColor = "#FF2941";
            teamScore.remove();
        }
    }
}

// Builds the bracket on page load
placeTeams();

// DRAG AND DROP

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })
})


containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
    })

    container.addEventListener('drop', () => {
        const draggable = document.querySelector('.dragging').cloneNode(true);
        container.innerHTML = "";
        draggable.querySelector('input').value = '';
        container.appendChild(draggable);
        draggable.classList.remove('dragging');
    })
})


// I want to be able to create copy of the dragging node and leave it
// in it's original position.