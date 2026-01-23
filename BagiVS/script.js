 // Theme toggle (dark/light)
    const btn = document.getElementById("themeBtn");
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.dataset.theme = saved;
    btn.textContent = saved === "dark" ? "🌙" : "☀️";

    btn.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
      btn.textContent = next === "dark" ? "🌙" : "☀️";
    });

    new Gumshoe('.nav a', {
    offset: 100,   // высота хедера
    reflow: true
  });