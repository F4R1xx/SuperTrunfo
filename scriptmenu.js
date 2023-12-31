var selectedTeams = {
    player: null,
    opponent: null
  };

  function selectTeam(team, type) {
    selectedTeams[type] = team;

    // Remove a classe 'selected' de todos os botões do tipo e adiciona apenas ao botão selecionado
    var buttons = document.querySelectorAll('.' + type + '-button');
    buttons.forEach(function(button) {
      if (button.textContent !== team) {
        button.classList.remove('selected');
      } else {
        button.classList.add('selected');
      }
    });

    // Habilita ou desabilita o botão "Iniciar Jogo" com base na seleção
    var startGameBtn = document.getElementById('start-game-btn');
    startGameBtn.disabled = !(selectedTeams.player && selectedTeams.opponent);
  }

  function proximaPagina() {
    // Verifica se ambos os times foram selecionados antes de prosseguir
    if (selectedTeams.player && selectedTeams.opponent) {
      // Redireciona para a página do jogo com os parâmetros escolhidos
      window.location.href = 'jogo.html?player=' + selectedTeams.player + '&opponent=' + selectedTeams.opponent;
    } else {
      alert('Por favor, selecione um time para o jogador e o oponente.');
    }
  }