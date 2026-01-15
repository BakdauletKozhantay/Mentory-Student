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

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // если прокрутили больше 50px
    header.classList.add('header--scrolled'); // добавляем класс
  } else {
    header.classList.remove('header--scrolled'); // убираем класс
  }
});
