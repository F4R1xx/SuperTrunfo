var selectedTeams = {
    player: null,
    opponent: null
  };

  function selectTeam(team, type) {
    selectedTeams[type] = team;

    // Remove a classe 'selected' de todas as imagens do tipo e adiciona apenas à imagem selecionada
    var images = document.querySelectorAll('.' + type + '-button');
    images.forEach(function(image) {
      if (image.alt !== team) {
        image.classList.remove('selected');
      } else {
        image.classList.add('selected');
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

  