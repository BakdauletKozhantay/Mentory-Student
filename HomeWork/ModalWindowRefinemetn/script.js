// Открытие модалки (все кнопки с классом .open-modal)
const modalOpenBtns = document.querySelectorAll('.open-modal');

// Закрытие модалки по кнопке
const closeBtn = document.getElementById('closeBtn');

// Элементы модалки
const modalOverlay = document.getElementById('modalOverlay');
const modalWindow = document.querySelector('.modal-window');

// Функции открытия/закрытия модалки
function openModal() {
  modalOverlay.style.display = 'block';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

// Вешаем событие на все кнопки открытия
modalOpenBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// Закрытие по кнопке
closeBtn.addEventListener('click', closeModal);

// Закрытие по клику по оверлею
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
