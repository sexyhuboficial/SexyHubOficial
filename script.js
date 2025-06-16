// Menu Mobile Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('menu-list').classList.toggle('active');
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-question');
faqItems.forEach(function(item) {
  item.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const icon = this.querySelector('.icon');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    icon.textContent = answer.style.display === 'block' ? '−' : '+';
  });
});
