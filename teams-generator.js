
let teamSubmit = document.getElementById("num-teams-submit");
let teamList = document.getElementById("team-input-list");

teamSubmit.addEventListener("click",function(e) {
    buildTeams(e)
});

function buildTeams(e) {
    e.preventDefault();
    let numTeams = document.getElementById("num-teams").value;
    teamList.innerHTML = "";
    for(let i = 0; i < numTeams; i++) {
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = `Team #${i+1}`;
        newInput.className = "teamName";
        teamList.appendChild(newInput);
    }
    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.id = "teamSubmitButton";
    teamList.appendChild(submitButton);
}