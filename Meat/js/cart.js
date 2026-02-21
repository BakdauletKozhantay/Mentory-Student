import {
  loadCart,
  saveCart,
  clearCartStorage,
} from "./storage.js";

import { getPrice, formatPrice } from "./price.js";


// =====================
// CART CALCULATIONS
// =====================
function cartSummary(cart) {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  return { count, total };
}

function upsertCartItem(cart, item) {
  const existing = cart.find((x) => x.id === item.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  return cart;
}

function removeCartItem(cart, id) {
  return cart.filter((x) => x.id !== id);
}


// =====================
// HELPERS
// =====================
function getProductData(card) {
  const id = card.dataset.id;
  const title = card.querySelector("h4")?.textContent?.trim() ?? "Товар";
  const price = getPrice(id);

  return { id, title, price };
}


// =====================
// RENDER
// =====================
function renderCart(cart) {
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartTotal");
  const listEl = document.getElementById("cartList");
  const emptyEl = document.getElementById("cartEmpty");

  if (!countEl || !totalEl || !listEl || !emptyEl) return;

  const { count, total } = cartSummary(cart);

  countEl.textContent = count;
  totalEl.textContent = formatPrice(total);

  listEl.innerHTML = "";

  if (!cart.length) {
    emptyEl.style.display = "block";
    return;
  }

  emptyEl.style.display = "none";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item";

    li.innerHTML = `
      <div>
        <div class="cart-item__title">${item.title}</div>
        <div class="cart-item__meta">
          ${item.qty} × ${formatPrice(item.price)} ₸ =
          <b>${formatPrice(item.qty * item.price)} ₸</b>
        </div>
      </div>
      <button type="button" data-remove="${item.id}">Удалить</button>
    `;

    listEl.appendChild(li);
  });
}


// =====================
// EVENTS
// =====================
function bindCartEvents() {
  const listEl = document.getElementById("cartList");
  const clearBtn = document.getElementById("cartClear");

  if (!listEl || !clearBtn) return;

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-remove]");
    if (!btn) return;

    const id = btn.dataset.remove;

    let cart = loadCart();
    cart = removeCartItem(cart, id);
    saveCart(cart);
    renderCart(cart);
  });

  clearBtn.addEventListener("click", () => {
    clearCartStorage();
    renderCart([]);
  });
}

function bindAddToCart() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".product__btn");
    if (!btn || btn.disabled) return;

    const card = btn.closest(".product[data-id]");
    if (!card) return;

    const item = getProductData(card);

    let cart = loadCart();
    cart = upsertCartItem(cart, item);
    saveCart(cart);
    renderCart(cart);
  });
}


// =====================
// INIT
// =====================
export function initCart() {
  renderCart(loadCart());
  bindCartEvents();
  bindAddToCart();
}