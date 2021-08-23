const numTeams = document.getElementById("num-teams").value;
const teamSubmit = document.getElementById("num-teams-submit");
let teamList = document.getElementById("team-input-list");

teamSubmit.addEventListener("submit",buildTeams);

function buildTeams() {
    for(let i = 0; i < numTeams; i++) {
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = `Team #${i+1}`;
        newInput.className = "teamName";
        teamList.appendChild(newInput);
    }
}