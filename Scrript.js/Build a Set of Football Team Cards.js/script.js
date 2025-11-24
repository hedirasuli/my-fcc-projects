
const teamElement = document.getElementById('team');               
const yearElement = document.getElementById('year');               
const coachElement = document.getElementById('head-coach');        
const playerCardsContainer = document.getElementById('player-cards'); 
const filterDropdown = document.getElementById('players');        

const footballTeam = {
    team: "Argentina",
    year: 1986,
    headCoach: "Carlos Bilardo",
    players: [
        { name: "Diego Maradona", position: "midfielder", isCaptain: true },
        { name: "Jorge Valdano", position: "forward", isCaptain: false },
        { name: "José Luis Brown", position: "defender", isCaptain: false },
        { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
        { name: "Ricardo Giusti", position: "midfielder", isCaptain: false },
        { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    ]
};


const renderTeamStats = () => {
   
    teamElement.textContent = footballTeam.team;
    yearElement.textContent = footballTeam.year;
    coachElement.textContent = footballTeam.headCoach;
};


const renderPlayers = (playersToRender) => {
    
    const playerCardsHtml = playersToRender.map(player => {
        
        const captainStatus = player.isCaptain ? "(Captain)" : "";

    
        return `
            <div class="player-card">
                <h2>
                    ${player.name}${captainStatus}
                </h2>
                <p>
                    Position: ${player.position}
                </p>
            </div>
        `;
    }).join(''); 

    
    playerCardsContainer.innerHTML = playerCardsHtml;
};


const filterPlayers = (event) => {
    
    const selectedPosition = event.target.value;

    let playersToDisplay = footballTeam.players; 

    
    if (selectedPosition !== "all") {
      
        playersToDisplay = footballTeam.players.filter(
            player => player.position === selectedPosition
        );
    }

   
    renderPlayers(playersToDisplay);
};


const populatePositionsDropdown = () => {
    
    const positions = footballTeam.players.map(player => player.position);
   
    const uniquePositions = [...new Set(positions)];

    uniquePositions.forEach(position => {
        const option = document.createElement('option');
        option.value = position;
        option.textContent = `Position: ${position}`; 
        filterDropdown.appendChild(option);
    });

    
    filterDropdown.addEventListener('change', filterPlayers);
};


document.addEventListener('DOMContentLoaded', () => {
    renderTeamStats();             
    populatePositionsDropdown();   
    renderPlayers(footballTeam.players); 
});