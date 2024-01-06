let Times = [];

function createTeamContainer(teamId) {
    const teamContainer = document.createElement('div');
    teamContainer.classList.add('team-container');
    teamContainer.id = `${teamId}-hand`;

    const teamTitle = document.createElement('h2');
    teamTitle.textContent = `Clube ${teamId.charAt(0).toUpperCase() + teamId.slice(1)}`; // Torna a primeira letra maiúscula
    teamContainer.appendChild(teamTitle);

    return teamContainer;
}

function startGame() {
    const fluminenseSelected = localStorage.getItem('Fluminense') === 'true';
    const flamengoSelected = localStorage.getItem('Flamengo') === 'true';
    const vascoSelected = localStorage.getItem('Vasco') === 'true';
    const botafogoSelected = localStorage.getItem('Botafogo') === 'true';

    if (fluminenseSelected) {
        const fluminenseContainer = createTeamContainer('fluminense');
        document.getElementById('game-container').appendChild(fluminenseContainer);
        Times = Times.concat(Fluminense.map(card => ({ ...card, team: 'fluminense' })));
    }

    if (flamengoSelected) {
        const flamengoContainer = createTeamContainer('flamengo');
        document.getElementById('game-container').appendChild(flamengoContainer);
        Times = Times.concat(Flamengo.map(card => ({ ...card, team: 'flamengo' })));
    }

    if (vascoSelected) {
        const vascoContainer = createTeamContainer('vasco');
        document.getElementById('game-container').appendChild(vascoContainer);
        Times = Times.concat(Vasco.map(card => ({ ...card, team: 'vasco' })));
    }

    if (botafogoSelected) {
        const botafogoContainer = createTeamContainer('botafogo');
        document.getElementById('game-container').appendChild(botafogoContainer);
        Times = Times.concat(Botafogo.map(card => ({ ...card, team: 'botafogo' })));
    }

    if (!Times || Times.length === 0) {
        const resultElement = document.getElementById('game-container');
        resultElement.textContent = 'Você não possui nenhum time';
    }
    updateHandUI();
}

function updateHandUI() {
    Times.forEach((card, index) => {
        const teamId = card.team;
        const teamContainer = document.getElementById(`${teamId}-hand`);

        if (teamContainer) {
            const cardElement = createCardElement(card, index);
            teamContainer.appendChild(cardElement);
        } else {
            console.error(`Contêiner do time ${teamId} não encontrado.`);
        }
    });
}


function createCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const frontElement = document.createElement('img');
    frontElement.src = card.front;
    cardElement.appendChild(frontElement);

    cardElement.dataset.index = index;
    cardElement.onclick = () => selectCard(index);

    return cardElement;
}

function selectCard(index) {
    showCardDetails(index);
}

// Resto do código permanece o mesmo

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});