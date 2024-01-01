const fluminenseBought = isTeamBought('Fluminense');
const flamengoBought = isTeamBought('Flamengo');
const BotafogoBought = isTeamBought('Botafogo');
const VascoBought = isTeamBought('Vasco');

var FluminenseButtons = document.getElementsByClassName("FluminenseButton");
var FlamengoButtons = document.getElementsByClassName("FlamengoButton");
var BotafogoButtons = document.getElementsByClassName("BotafogoButton");
var VascoButtons = document.getElementsByClassName("VascoButton");


// Função para obter o saldo do localStorage
function getBalance() {
    return parseInt(localStorage.getItem('balance')) || 0;
  }
  
  // Função para definir o saldo no localStorage
  function setBalance(balance) {
    localStorage.setItem('balance', balance);
    updateBalanceUI();
  }
  
  // Função para obter o estado de um time no localStorage
  function getTeamState(teamName) {
    return localStorage.getItem(teamName) === 'true';
  }
  
  // Função para definir o estado de um time no localStorage
  function setTeamState(teamName, state) {
    localStorage.setItem(teamName, state);
  }
  
  // Função para alternar o estado de um time no localStorage
  function toggleTeam(teamName) {
    const currentState = getTeamState(teamName);
    setTeamState(teamName, !currentState);
  }
  
  // Função para atualizar a interface do usuário com o estado dos times
  function updateTeamsUI() {
    const fluminenseCheckbox = document.getElementById('fluminenseCheckbox');
    const flamengoCheckbox = document.getElementById('flamengoCheckbox');
    const BotafogoCheckbox = document.getElementById('BotafogoCheckbox');
    const VascoCheckbox = document.getElementById('VascoCheckbox');
  
    fluminenseCheckbox.checked = getTeamState('Fluminense');
    flamengoCheckbox.checked = getTeamState('Flamengo');
    BotafogoCheckbox.checked = getTeamState('Botafogo');
    VascoCheckbox.checked = getTeamState('Vasco');
  }
  
  // Função para atualizar o saldo na interface do usuário
  function updateBalanceUI() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = getBalance();
  }
  
  // Função para ganhar dinheiro
  function earnMoney(quantia) {
    const currentBalance = getBalance();
    const earnedAmount = quantia; // Valor aleatório entre 1 e 10
    const newBalance = currentBalance + earnedAmount;
    setBalance(newBalance);
  }
  
  // Função para gastar dinheiro
  function spendMoney(quantia) {
    const currentBalance = getBalance();
    if (currentBalance > 0) {
      const spentAmount = quantia; // Valor aleatório entre 1 e 5
      const newBalance = currentBalance - spentAmount;
      setBalance(newBalance);
    } else {
      alert("You don't have enough money to spend!");
    }
  }

  // Função para comprar um time
function buyTeam(teamName, cost) {
    const currentBalance = getBalance();
  
    if (currentBalance >= cost && !getTeamState(teamName)) {
      const newBalance = currentBalance - cost;
      setBalance(newBalance);
      setTeamState(teamName, true);
      alert(`You bought ${teamName} for $${cost}.`);
    } else if (getTeamState(teamName)) {
      alert(`You already own ${teamName}.`);
    } else {
      alert(`Not enough money to buy ${teamName}.`);
    }
  
    updateBalanceUI();
    updateTeamsUI();
  }

  function sellTeam(teamName, sellPrice) {
    const currentBalance = getBalance();
  
    if (getTeamState(teamName)) {
      const newBalance = currentBalance + sellPrice;
      setBalance(newBalance);
      setTeamState(teamName, false);
      alert(`You sold ${teamName} for $${sellPrice}.`);
    } else {
      alert(`You don't own ${teamName} to sell.`);
    }
  
    updateBalanceUI();
    updateTeamsUI();
  }
  
  // Função para verificar se um time foi comprado
function isTeamBought(teamName) {
    return getTeamState(teamName);
  }
  

function verifica_times() {
    setButtonState(FluminenseButtons, 'Fluminense');
    setButtonState(FlamengoButtons, 'Flamengo');
    setButtonState(BotafogoButtons, 'Botafogo');
    setButtonState(VascoButtons, 'Vasco');
}

function setButtonState(images, teamName) {
  const teamBought = isTeamBought(teamName);

  for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (teamBought) {
          image.classList.remove('disabled');
      } else {
          image.classList.add('disabled');
      }
  }

  console.log(`O ${teamName} foi ${teamBought ? '' : 'não '}comprado.`);
}

// Restante do seu código...

// Exemplo de como usar a função
verifica_times();
  
  
  
  // Inicialização da interface do usuário
  updateBalanceUI();
  updateTeamsUI();
  