let startingTeams = [];
let teams = document.getElementsByClassName("team");
let teamRank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
const inputScore = document.getElementsByClassName("team-score");

const addTeams = () => {
    let team = {
        rank: "",
        teamName: "",
        score: "",
    }
    console.log(startingTeams);
}

Array.from(inputScore).forEach(function(inputScore) {
    inputScore.addEventListener('focusout', function(){addTeams()});
});




// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }

