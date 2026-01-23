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


const certModal = document.getElementById("certModal");
const certModalImg = document.getElementById("certModalImg");
const certModalTitle = document.getElementById("certModalTitle");

document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", ()=> {
    const img = card.dataset.img;
    const title = card.dataset.title || "Сертификат";
    
    certModalImg.src = img;
    certModalImg.alt = title;
    certModalTitle.textContent = title;

    certModal.classList.add("is-open");
    certModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  })
});

certModal.addEventListener("click", (e) =>{
  if (e.target.dataset.close === "true") {
    certModal.classList.remove("is-open");
    certModal.setAttribute("aria-hidden", "true");
    certModalImg.src = "";
    document.body.style.overflow = "";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal.classList.contains("is-open")){
    certModal.classList.remove("is-open");
    certModal.setAttribute("aria-hiddden", "true");
    certModalImg.src = "";
    document.body.style.overflow = "";
  }
});