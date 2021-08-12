let startingTeams = [];
let teams = document.getElementsByClassName("team");
let rank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
const inputScore = document.getElementsByClassName("team-score");

const placeTeams = () => {
    console.log(startingTeams);
}

Array.from(inputScore).forEach(function(inputScore) {
    inputScore.addEventListener('focusout', function(){placeTeams()});
});




// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }

