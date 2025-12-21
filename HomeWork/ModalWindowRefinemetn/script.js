// Закрытие кликом вне модального окна
const windowClose = document.querySelector(".container");

function closeModalOverview(event) {
  modalWindows.forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
}
windowClose.addEventListener("click", closeModalOverview);