// Interação para abrir/fechar as respostas do FAQ
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("open");

    // Alterna o símbolo + e -
    const symbol = btn.querySelector("span");
    symbol.textContent = answer.classList.contains("open") ? "−" : "+";
  });
});
