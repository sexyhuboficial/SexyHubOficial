// Seleciona todos os botões das perguntas FAQ
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling; // próxima div com a resposta

    // Alterna classe para mostrar ou esconder a resposta
    answer.classList.toggle('active');

    // Alterna o ícone + / -
    const icon = button.querySelector('.faq-icon');
    if (answer.classList.contains('active')) {
      icon.textContent = '−'; // menos
      answer.style.maxHeight = answer.scrollHeight + 'px'; // anima expandindo
    } else {
      icon.textContent = '+';
      answer.style.maxHeight = null; // anima recolhendo
    }
  });
});
