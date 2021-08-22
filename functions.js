let startingTeams = [];
let winners = []
let teams = document.getElementsByClassName("team");
let teamRank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
let inputScore = document.getElementsByClassName("team-score");

//     //Save to Local Storage
//     localStorage.setItem('MyTeams', JSON.stringify(startingTeams));
// }




Array.from(inputScore).forEach(function(inputScore) {
    inputScore.addEventListener('focusout', function(){buildTeams(20)});
});


// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }


//***issue*** when you click off a score element it adds to the array
//rather than rewriting it.
//builds an array from input values 
function buildTeams(numTeams) {
    startingTeams = [];
    for(let i = 0; i < numTeams; i++) {
        if(document.getElementById("score"+(i+1)).value !== "") {
            let team = {
                rank: document.getElementById("rank"+(i+1)).textContent,
                teamName: document.getElementById("team"+(i+1)).value,
                score: document.getElementById("score"+(i+1)).value
            }
            startingTeams.push(team);
        }
    }
    console.log(startingTeams);
}

