// =========================
// Theme toggle (dark/light)
// =========================
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = savedTheme;
  themeBtn.textContent = savedTheme === "dark" ? "🌙" : "☀️";

  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    themeBtn.textContent = next === "dark" ? "🌙" : "☀️";
  });
} else {
  console.warn("themeBtn not found");
}

// =========================
// Gumshoe (active nav link)
// =========================
if (window.Gumshoe) {
  new Gumshoe(".nav a", {
    offset: 100,
    reflow: true,
  });
} else {
  console.warn("Gumshoe not loaded");
}

// =========================
// Copy phone button
// =========================
const copyBtn = document.getElementById("copyPhoneBtn");
const phoneEl = document.getElementById("phoneNumber");

async function copyText(text) {
  // Modern clipboard (works on https/localhost)
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  // Fallback for file:// or older browsers
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-9999px";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }

  document.body.removeChild(ta);
  return ok;
}

if (copyBtn && phoneEl) {
  copyBtn.addEventListener("click", async () => {
    const text = phoneEl.textContent.trim();
    const original = copyBtn.textContent;

    try {
      const ok = await copyText(text);
      if (ok) {
        copyBtn.textContent = "Скопировано ✓";
        copyBtn.disabled = true;

        setTimeout(() => {
          copyBtn.textContent = original;
          copyBtn.disabled = false;
        }, 1500);
      } else {
        copyBtn.textContent = "Не удалось :(";
        setTimeout(() => (copyBtn.textContent = original), 1500);
      }
    } catch (e) {
      copyBtn.textContent = "Ошибка";
      setTimeout(() => (copyBtn.textContent = original), 1500);
    }
  });
} else {
  console.warn("Copy elements not found (copyPhoneBtn/phoneNumber)");
}
