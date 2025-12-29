// Модалки простые
// const modalOpenBtns = document.querySelectorAll('.open-modal');
// const modalCloseBtn = document.querySelector('.close-modal')

// const modals = document.querySelectorAll('.modal');

// modalCloseBtn.addEventListener('click', () => {
//   modal.classList.remove('open');
// });

// modalOpenBtns.forEach((item) => {
//   item.addEventListener('click', () => {
//     modals[0].classList.add('open');
//   });
// })

// Модалки продвинутые
const openModalButtons = document.querySelectorAll(
  '[data-modal-action="open-modal"]'
);
const closeModalButtons = document.querySelectorAll(
  '[data-modal-action="close-modal"]'
);
const modalWindows = document.querySelectorAll('[data-modal-action="modal"]');

openModalButtons.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

function openModal(event) {
  modalWindows.forEach((modal) => {
    if (
      modal.getAttribute("data-modal") ===
      event.target.getAttribute("data-modal")
    ) {
      modal.classList.add("open");
    }
  });
}

function closeModal(event) {
  modalWindows.forEach((modal) => {
    if (
      modal.getAttribute("data-modal") ===
      event.target.getAttribute("data-modal")
    ) {
      modal.classList.remove("open");
    }
  });
}

modalWindows.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

  const content = modal.querySelector(".modal__content");
  if (content) {
    content.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});

// Аккордионы

const accordions = document.querySelectorAll(".accordion__container");

function toggleAccordion(event) {
  const accordionContainer =
    event.target.closest("[accordion-type]") ??
    event.target.closest(".accordion__container");
  const accordionType =
    event.target.closest("[accordion-type]")?.getAttribute("accordion-type") ??
    "multi";
  const isAccordionHeader =
    event.target.classList.contains("accordion__header");

  if (isAccordionHeader) {
    const parentElement = event.target.closest("[accordion-id]");
    const accordionState = parentElement.getAttribute("accordion-state");

    if (accordionType === "single") {
      const accordions = accordionContainer.querySelectorAll("[accordion-id]");
      accordions.forEach((item) => {
        item.setAttribute("accordion-state", "closed");
      });
    }

    if (accordionState === "closed") {
      parentElement.setAttribute("accordion-state", "open");
    } else {
      parentElement.setAttribute("accordion-state", "closed");
    }
  }
}

accordions.forEach((accordion) => {
  accordion.addEventListener("click", toggleAccordion);
});

function toggleAccordion(event) {
  const header = event.target.closest(".accordion__header");
  if (!header) return;

  const parentElement = header.closest("[accordion-id]");
  const accordionContainer =
    header.closest("[accordion-type]") ??
    header.closest(".accordion__container");
  const accordionType =
    accordionContainer?.getAttribute("accordion-type") ?? "multi";
  const accordionState = parentElement.getAttribute("accordion-state");

  if (accordionType === "single") {
    const accordions = accordionContainer.querySelectorAll("[accordion-id]");
    accordions.forEach((item) =>
      item.setAttribute("accordion-state", "closed")
    );
  }

  parentElement.setAttribute(
    "accordion-state",
    accordionState === "closed" ? "open" : "closed"
  );
}