const carouselContent = document.getElementById('carousel-content');
const items = document.querySelectorAll('.carousel-item');
const buttons = document.querySelectorAll('.ButtonComprar');
let currentIndex = 0;

    // Adicione a classe 'active' ao primeiro item
    items[currentIndex].classList.add('active');
    updateImage();

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && currentIndex > 0) {
        currentIndex--;
      } else if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
        currentIndex++;
      }

      updateCarousel();
    });

    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        updateImage();
      });
    });

    // Agora adiciona a funcionalidade de rolar o mouse ao 'window'
    window.addEventListener('wheel', (e) => {
      if (e.deltaY > 0 && currentIndex < items.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }

      updateCarousel();
      updateImage();
    });

    function updateCarousel() {
      items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
          item.classList.add('active');
          updateImage();
        }
      });

      const itemHeight = items[currentIndex].offsetHeight;
      const containerHeight = carouselContent.offsetHeight;

      const translateY = containerHeight / 7 - itemHeight / 7 - currentIndex * itemHeight;
      carouselContent.style.transform = 'translateY(' + translateY + 'px)';
    }

    function updateImage() {
      dynamicImage = 'Logos_Ligas/LogoBrasileiraoA.png';
      // Lógica para atualizar a imagem com base no item selecionado
      // Substitua a lógica abaixo com o seu próprio código para carregar imagens dinâmicas
      switch (currentIndex) {
        case 0:
          dynamicImage = 'Logos_Ligas/LogoBrasileiraoA.png';
          break;
        case 1:
          dynamicImage = 'Logos_Ligas/LogoBrasileiraoB.png';
          break;
        case 2:
          dynamicImage = 'Logos_Ligas/LogoPremierLeague.png';
          break;
        case 3:
          dynamicImage = 'Logos_Ligas/LogoSerieATIM.png';
          break;
        case 4:
          dynamicImage = 'Logos_Ligas/LogoLaLiga.png';
          break;
        case 5:
          dynamicImage = 'Logos_Ligas/LogoSAF.png';
          break;
        case 6:
          dynamicImage = 'Logos_Ligas/LogoCriados.png';
          break;
        // Adicione mais casos conforme necessário
        default:
          dynamicImage = 'Logos_Ligas/LogoCriados.png'; // Caso padrão, sem imagem
      }
      document.body.style.backgroundImage = `url('${dynamicImage}')`;
    }

    function GoTo(Endereco){
      console.log(Endereco);
      window.location.href = Endereco;
    }