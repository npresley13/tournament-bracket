let startingTeams = [];
let winners = []
let teams = document.getElementsByClassName("team");
let teamRank = document.getElementsByClassName("team-rank");
let inputName = document.getElementsByClassName("team-name");
let inputScore = document.getElementsByClassName("team-score");
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.team');


function placeTeams() {
    let teamArr2 = JSON.parse(window.localStorage.getItem('team'));
    for (let i = 0; i < 20; i++) {
        let nameTeam = document.getElementById(`team${i+1}`);
        let teamScore = document.getElementById(`score${i+1}`);
        try {
            nameTeam.innerHTML = teamArr2[i].teamName;
        } catch(error) {
            nameTeam.parentNode.style.backgroundColor = "#FF2941";
            teamScore.remove();
        }
    }
}


// Builds the bracket on page load
placeTeams();


// DRAG AND DROP
let draggable;

document.addEventListener('dragstart', function(event) {
    draggable = event.target;
    draggable.classList.add('dragging');
})

document.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
    })
    container.addEventListener('drop', () => {
        container.innerHTML = "";
        dragClone = draggable.cloneNode(true);
        dragClone.querySelector('input').value = '';
        container.appendChild(dragClone);
        
    })
})

