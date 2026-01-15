// Плавный скролл по всем якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

console.log("Скрипт подключен!");

// Хедер при скролле
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('header--scrolled', window.scrollY > 50);
});
