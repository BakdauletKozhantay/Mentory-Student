const openBtn = document.querySelector(".open-modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});


// --- АККОРДИОН ---
// Находим все заголовки аккордионов
const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const block = header.parentElement;     // .accordion__block
    const state = block.getAttribute("accordion-state");

    // Если открыт → закрываем
    if (state === "open") {
      block.setAttribute("accordion-state", "closed");
    }
    // Если закрыт → открываем
    else {
      block.setAttribute("accordion-state", "open");
    }
  });
});










console.log("JS работает!");

console.log("openBtn:", document.querySelector(".open-modal"));
console.log("modalOverlay:", document.getElementById("modalOverlay"));
console.log("closeBtn:", document.getElementById("closeBtn"));
