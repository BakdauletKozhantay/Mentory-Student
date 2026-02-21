// js/checkout.js
import { loadCart, cartSummary } from "./cart.js";
import { formatPrice } from "./price.js";

function sanitizePhone(phone) {
  return String(phone || "").replace(/[^\d+]/g, "").trim();
}

function buildOrderText(cart, formData, totalText) {
  const lines = [];
  lines.push("MEAT — Заказ");
  lines.push("");
  lines.push(`Имя: ${formData.name}`);
  lines.push(`Телефон: ${formData.phone}`);
  lines.push(`Адрес: ${formData.address}`);
  lines.push(`Оплата: ${formData.payMethod === "cash" ? "Наличные" : "Карта"}`);
  lines.push(
    `Доставка: ${
      formData.deliveryTime === "asap"
        ? "Как можно скорее"
        : formData.deliveryTime === "today"
          ? "Сегодня"
          : "Завтра"
    }`
  );
  if (formData.comment) lines.push(`Комментарий: ${formData.comment}`);

  lines.push("");
  lines.push("Товары:");
  cart.forEach((item, i) => {
    lines.push(
      `${i + 1}) ${item.title} — ${item.qty} × ${formatPrice(item.price)} ₸ = ${formatPrice(item.qty * item.price)} ₸`
    );
  });

  lines.push("");
  lines.push(`Итого: ${totalText} ₸`);
  return lines.join("\n");
}

export function bindCheckout() {
  const form = document.getElementById("checkoutForm");
  const copyBtn = document.getElementById("copyOrder");
  const waLink = document.getElementById("waOrder");
  const hint = document.getElementById("checkoutHint");
  const result = document.getElementById("orderResult");

  // Если формы на странице ещё нет — просто ничего не делаем
  if (!form || !copyBtn || !waLink || !hint || !result) return;

  function getFormData() {
    return {
      name: document.getElementById("custName")?.value.trim() || "",
      phone: sanitizePhone(document.getElementById("custPhone")?.value),
      address: document.getElementById("custAddress")?.value.trim() || "",
      payMethod: document.getElementById("payMethod")?.value || "card",
      deliveryTime: document.getElementById("deliveryTime")?.value || "asap",
      comment: document.getElementById("custComment")?.value.trim() || "",
    };
  }

  function updateLinksAndHint() {
  const cart = loadCart();
  const { total } = cartSummary(cart);
  const totalText = formatPrice(total);

  const empty = cart.length === 0;
  copyBtn.disabled = empty;
  waLink.style.pointerEvents = empty ? "none" : "auto";
  waLink.style.opacity = empty ? "0.5" : "1";

  const SHOP_WA_NUMBER = "77477443425"; // ✅ твой WhatsApp

  const data = getFormData();
  const text = buildOrderText(cart, data, totalText);

  waLink.href = `https://wa.me/${SHOP_WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

  form.addEventListener("input", updateLinksAndHint);
  form.addEventListener("change", updateLinksAndHint);

  copyBtn.addEventListener("click", async () => {
    const cart = loadCart();
    if (!cart.length) return;

    const { total } = cartSummary(cart);
    const totalText = formatPrice(total);
    const text = buildOrderText(cart, getFormData(), totalText);

    try {
      await navigator.clipboard.writeText(text);
      result.classList.remove("is-hidden");
      result.textContent = "✅ Заказ скопирован. Вставь его в WhatsApp/Telegram.\n\n" + text;
    } catch {
      result.classList.remove("is-hidden");
      result.textContent =
        "⚠️ Не удалось скопировать автоматически. Выдели и скопируй вручную:\n\n" + text;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cart = loadCart();
    if (!cart.length) {
      hint.textContent = "Корзина пустая — нечего оформлять 🙂";
      return;
    }

    const data = getFormData();
    if (!data.name || !data.phone || !data.address) {
      hint.textContent = "Заполни имя, телефон и адрес.";
      return;
    }

    updateLinksAndHint();
    result.classList.remove("is-hidden");
    result.textContent = "✅ Готово! Нажми «Отправить в WhatsApp» или «Скопировать заказ».";
  });

  updateLinksAndHint();
}