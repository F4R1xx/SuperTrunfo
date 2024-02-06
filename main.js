const fluminenseBought = isTeamBought('Fluminense');
const flamengoBought = isTeamBought('Flamengo');
const BotafogoBought = isTeamBought('Botafogo');
const VascoBought = isTeamBought('Vasco');

var FluminenseButtons = document.getElementsByClassName("FluminenseButton");
var FlamengoButtons = document.getElementsByClassName("FlamengoButton");
var BotafogoButtons = document.getElementsByClassName("BotafogoButton");
var VascoButtons = document.getElementsByClassName("VascoButton");

var FluminenseBanner = document.getElementsByClassName("FluminenseBanner");
var FlamengoBanner = document.getElementsByClassName("FlamengoBanner");
var BotafogoBanner = document.getElementsByClassName("BotafogoBanner");
var VascoBanner = document.getElementsByClassName("VascoBanner");


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
  
  
  // Função para atualizar o saldo na interface do usuário
  function updateBalanceUI() {
    const balanceElement = document.getElementById('balance');
    const balanceValue = getBalance();

    // Formata o valor como dinheiro em Reais
    const formattedBalance = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(balanceValue);

    balanceElement.textContent = formattedBalance;
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
      alert("Você não tem dinheiro para gastar!");
    }
  }

  // Função para comprar um time
function buyTeam(teamName, cost) {
    const currentBalance = getBalance();
  
    if (currentBalance >= cost && !getTeamState(teamName)) {
      const newBalance = currentBalance - cost;
      setBalance(newBalance);
      setTeamState(teamName, true);
      alert(`Você comprou o ${teamName} por $${cost}.`);
    } else if (getTeamState(teamName)) {
      alert(`Você já tem o ${teamName}.`);
    } else {
      alert(`Você não tem dinheiro suficiente para comprar o ${teamName}.`);
    }
  
    updateBalanceUI();
    verifica_times();
    objeto.reload(forcedReload);
  }

  function sellTeam(teamName, sellPrice) {
    const currentBalance = getBalance();
  
    if (getTeamState(teamName)) {
      const newBalance = currentBalance + sellPrice;
      setBalance(newBalance);
      setTeamState(teamName, false);
      alert(`Você vendeu o ${teamName} por $${sellPrice}.`);
    } else {
      alert(`Você não tem o ${teamName} para vender.`);
    }
  
    updateBalanceUI();
    verifica_times();
    objeto.reload(forcedReload);
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
    setButtonStateBanner(FluminenseBanner, 'Fluminense');
    setButtonStateBanner(FlamengoBanner, 'Flamengo');
    setButtonStateBanner(VascoBanner, 'Vasco');
    setButtonStateBanner(BotafogoBanner, 'Botafogo');
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

}

function setButtonStateBanner(buttons, teamName) {
  const teamBought = isTeamBought(teamName);
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (teamBought) {
      button.classList.add('disabled');
    } else {
      button.classList.remove('disabled');
    }
  }
}

// Restante do seu código...
// Exemplo de como usar a função

  
  
  // Inicialização da interface do usuário
  verifica_times();
  updateBalanceUI();
  
  
  