function enviarInput() {
    var valorInput = document.getElementById('meuInput').value;
    console.log('Valor do input:', valorInput);
    if (valorInput == "DevMoney100"){
        earnMoney(10000000000)
        mensagem_macete()
    }
    if (valorInput == "DevMoney-100"){
        spendMoney(100000000)
        mensagem_macete()
    }
    if (valorInput == "BotafofoCamisa10"){
        buyTeamMacete("Botafogo",0)
        mensagem_macete()
    }
    if (valorInput == "UnlockAllTeamsFree"){
        if (getTeamState("Fluminense") == false){
            buyTeamMacete("Fluminense",0)
        }
        if (getTeamState("Flamengo") == false){
            buyTeamMacete("Flamengo",0)
        }
        if (getTeamState("Botafogo") == false){
            buyTeamMacete("Botafogo",0)
        }
        if (getTeamState("Vasco") == false){
            buyTeamMacete("Vasco",0)
        }
        else{alert('Você já tem todos os times !');}
        mensagem_macete()
    }
    if (valorInput == "Dev01"){
        if (getTeamState("Fluminense") == true){
            sellTeamMacete("Fluminense",0)
        }
        if (getTeamState("Flamengo") == true){
            sellTeamMacete("Flamengo",0)
        }
        if (getTeamState("Botafogo") == true){
            sellTeamMacete("Botafogo",0)
        }
        if (getTeamState("Vasco") == true){
            sellTeamMacete("Vasco",0)
        }
        mensagem_macete()
    }
    
}

function verificarEnter(event) {
    if (event.key === 'Enter') {
        enviarInput();
    }
}

function buyTeamMacete(teamName, cost) {
    const currentBalance = getBalance();
  
    if (currentBalance >= cost && !getTeamState(teamName)) {
      const newBalance = currentBalance - cost;
      setBalance(newBalance);
      setTeamState(teamName, true);
    } else if (getTeamState(teamName)) {
    } 
  

}

function sellTeamMacete(teamName, sellPrice) {
    const currentBalance = getBalance();
  
    if (getTeamState(teamName)) {
      const newBalance = currentBalance + sellPrice;
      setBalance(newBalance);
      setTeamState(teamName, false);
    } 
  
}

function mensagem_macete(){
    const resultElement = document.getElementById('result');
        resultElement.textContent = 'Código usado com sucesso';
        setTimeout(function() {
            resultElement.textContent = ''; // ou outro texto desejado
        }, 3000);
}
