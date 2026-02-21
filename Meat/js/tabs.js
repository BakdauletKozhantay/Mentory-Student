import { loadActiveCategory, saveActiveCategory } from "./storage.js";

export function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const groups = document.querySelectorAll(".catalog-group");

  if (!tabs.length || !groups.length) return;

  function show(category) {
    groups.forEach((g) => {
      g.classList.toggle("is-hidden", g.dataset.category !== category);
    });

    tabs.forEach((t) => {
      const active = t.dataset.category === category;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active);
    });

    saveActiveCategory(category);
  }

  const categories = [...tabs].map(t => t.dataset.category);
  const saved = loadActiveCategory();
  const initial = categories.includes(saved) ? saved : categories[0];

  show(initial);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => show(tab.dataset.category));
  });
}