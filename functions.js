let startingTeams = [
    oneSeed = {
        rank: "#1",
        name: "",
        score: ""
    },

    twoSeed = {
        rank: "#2",
        name: "",
        score: ""
    },

    threeSeed = {
        rank: "#3",
        name: "",
        score: ""
    },

    fourSeed = {
        rank: "#4",
        name: "",
        score: ""
    },

    fiveSeed = {
        rank: "#5",
        name: "",
        score: ""
    },

    sixSeed = {
        rank: "#6",
        name: "",
        score: ""
    },

    sevenSeed = {
        rank: "#7",
        name: "",
        score: ""
    },

    eightSeed = {
        rank: "#8",
        name: "",
        score: ""
    },

    nineSeed = {
        rank: "#9",
        name: "",
        score: ""
    },

    tenSeed = {
        rank: "#10",
        name: "",
        score: ""
    },

    elevnSeed = {
        rank: "#11",
        name: "",
        score: ""
    },

    twelveSeed = {
        rank: "#12",
        name: "",
        score: ""
    },

    thirteenSeed = {
        rank: "#13",
        name: "",
        score: ""
    },

    fourteenSeed = {
        rank: "#14",
        name: "",
        score: ""
    },

    fifteenSeed = {
        rank: "#15",
        name: "",
        score: ""
    },

    sixteenSeed = {
        rank: "#16",
        name: "",
        score: ""
    },

    seventeenSeed = {
        rank: "#17",
        name: "",
        score: ""
    },

    eighteenSeed = {
        rank: "#18",
        name: "",
        score: ""
    },

    nineteenSeed = {
        rank: "#19",
        name: "",
        score: ""
    },

    twentySeed = {
        rank: "#20",
        name: "",
        score: ""
    },
]

// let teamRank = document.getElementsByClassname('team-rank');
// let teamName = document.getElementsByClassName('team-name');
// let teamScore = document.getElementsByClassName('team-score');

function placeTeams() {
    for (let i = 0; i < startingTeams.length; i++) {
        startingTeams[i][1] = document.getElementById(`team${i+1}`).value;
    }
}
placeTeams();
console.log(startingTeams);

// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }

