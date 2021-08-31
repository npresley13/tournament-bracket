let startingTeams = [];
let winners = []
let teams = document.getElementsByClassName("team");
let teamRank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
let inputScore = document.getElementsByClassName("team-score");



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

function placeTeams() {
    console.log("it got this far");
    let teamArr2 = JSON.parse(window.localStorage.getItem('team'));
    for (let i = 0; i < teamArr2.length; i++) {
        let nameTeam = document.getElementById(`team${i+1}`);
        nameTeam.innerHTML = teamArr2[i].teamName;
    }
}

placeTeams();
