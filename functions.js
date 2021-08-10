let startingTeams = [
    oneSeed = {
        rank: "#1",
        name: "Nate / Brian",
        score: ""
    },

    twoSeed = {
        rank: "#2",
        name: "Bill / Mark",
        score: ""
    },

    threeSeed = {
        rank: "#3",
        name: "Kasi / Alex",
        score: ""
    },

    fourSeed = {
        rank: "#4",
        name: "Austin / Lauren",
        score: ""
    },

    fiveSeed = {
        rank: "#5",
        name: "EC / Kevin",
        score: ""
    },

    sixSeed = {
        rank: "#6",
        name: "Evan / Kelsie",
        score: ""
    },

    sevenSeed = {
        rank: "#7",
        name: "Travis / TBD",
        score: ""
    },

    eightSeed = {
        rank: "#8",
        name: "Kailey / TBD",
        score: ""
    },

    nineSeed = {
        rank: "#9",
        name: "Dawson / Jacob",
        score: ""
    },

    tenSeed = {
        rank: "#10",
        name: "Matt / Megan",
        score: ""
    },

    elevnSeed = {
        rank: "#11",
        name: "Melinda / Brock",
        score: ""
    },

    twelveSeed = {
        rank: "#12",
        name: "Melissa / TBD",
        score: ""
    },

    thirteenSeed = {
        rank: "#13",
        name: "Maddie / Trent",
        score: ""
    },

    fourteenSeed = {
        rank: "#14",
        name: "Pat / Alyssa",
        score: ""
    },

    fifteenSeed = {
        rank: "#15",
        name: "Danny / TBD",
        score: ""
    },

    sixteenSeed = {
        rank: "#16",
        name: "Nick / Kaleigh",
        score: ""
    },

    seventeenSeed = {
        rank: "#17",
        name: "Ashley / Josh",
        score: ""
    },

    eighteenSeed = {
        rank: "#18",
        name: "Josh / MacKenzie",
        score: ""
    },

    nineteenSeed = {
        rank: "#19",
        name: "Tim / TBD",
        score: ""
    },

    twentySeed = {
        rank: "#20",
        name: "TBD / TBD",
        score: ""
    },
]

let teamRank = document.getElementsByClassname('team-rank');
let teamName = document.getElementsByClassName('team-name');
let teamScore = document.getElementsByClassName('team-score');

function placeTeams() {
    for (let i = 0; i < startingTeams.length; i++) {
        if (teamRank === startingTeams[i][0]) {
            teamName.value = startingTeams[i][1];
            teamScore.value = startingTeams[i][2];
        }
    }
}

placeTeams();

// Advances winning team to next bracket 
// let scoreCheck = function (teamOnescore, teamTwoscore) {
//     if (teamOnescore > teamTwoscore) {
//         return teamOne;
//     } else {
//         return teamTwo;
//     }
// }