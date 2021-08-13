let startingTeams = [];
let teams = document.getElementsByClassName("team");
let teamRank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
let inputScore = document.getElementsByClassName("team-score");

const addTeams = () => {
    let team = {
        rank: teamRank,
        teamName: inputName.value,
        score: inputScore.value
    }
    startingTeams.push(team);
    console.log(startingTeams);
}

//***issue*** when you click off the input element, it is no longer the active element.
function removeInputField() {
    let currentInputField = document.activeElement;
    currentInputField.remove();
}

Array.from(inputScore).forEach(function(inputScore) {
    inputScore.addEventListener('focusout', function(){addTeams()});
});

Array.from(inputName).forEach(function(inputName) {
    inputName.addEventListener('onblur', function(){removeInputField()});
});


// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }

