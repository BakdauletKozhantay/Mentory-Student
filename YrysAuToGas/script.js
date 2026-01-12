document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = e.target.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

console.log("Скрипт подключен!");
