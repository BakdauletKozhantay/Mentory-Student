const CART_KEY = "meat_cart_v1";
const ACTIVE_CATEGORY_KEY = "meat_active_category";


// =====================
// CART STORAGE
// =====================
export function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCartStorage() {
  localStorage.removeItem(CART_KEY);
}


// =====================
// ACTIVE TAB STORAGE
// =====================
export function loadActiveCategory() {
  return localStorage.getItem(ACTIVE_CATEGORY_KEY);
}

export function saveActiveCategory(category) {
  localStorage.setItem(ACTIVE_CATEGORY_KEY, category);
}

export function clearActiveCategory() {
  localStorage.removeItem(ACTIVE_CATEGORY_KEY);
}