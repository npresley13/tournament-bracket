
const teamSubmit = document.getElementById("num-teams-submit");
const teamList = document.getElementById("team-input-list");


//Event Listners

teamSubmit.addEventListener("click",function(e) {
    buildTeams(e)
});



//Creates input fields for the number of teams you input

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

//Creates an array of objects for each team input.

document.addEventListener("click", function(e){
    if(e.target && e.target.id == 'teamSubmitButton') {
        addTeamsToObject();
    }
});

function addTeamsToObject() {
    console.log("this worked");
}