// Função para destacar o menu ao rolar a página
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  });
  // Muda a cor do fundo do header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 193, 7, 0.9)'; // Cor levemente transparente
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Adiciona sombra
    } else {
      header.style.background = 'linear-gradient(to right, #ffc107, #ffdd59)'; // Volta ao gradiente original
      header.style.boxShadow = 'none';
    }
  });
  
  // Anima o texto do header com um efeito de "digitação"
  document.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('header h1');
    const text = 'Comidas Típicas Francesas';
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        headerTitle.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100); // Velocidade de digitação
      }
    }
  
    headerTitle.textContent = ''; // Limpa o texto inicial
    typeEffect();
  });
  
  // Transição suave ao passar o mouse no menu
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#333'; // Cor ao passar o mouse
      link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#fff'; // Volta à cor original
      link.style.textDecoration = 'none';
    });
  });
  // Animação das cores da bandeira da França no header
let colorIndex = 0;
const colors = [
  'linear-gradient(to right, #0055A4, #FFFFFF, #EF4135)', // Azul, branco e vermelho
  'linear-gradient(to right, #EF4135, #FFFFFF, #0055A4)', // Vermelho, branco e azul
];

function updateHeaderGradient() {
  const header = document.querySelector('header');
  header.style.background = colors[colorIndex];
  header.style.transition = 'background 2s ease';
  colorIndex = (colorIndex + 1) % colors.length;
}

// Mantém o gradiente mesmo ao rolar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = colors[colorIndex]; // Sempre mantém a cor atual
});

// Inicia a animação
setInterval(updateHeaderGradient, 5000); // Alterna as cores a cada 5 segundos
