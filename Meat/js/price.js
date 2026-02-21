export const PRICE_BY_ID = {
  beef_back: 4900,
  beef_front: 4500,
  beef_bone: 4100,
  beef_brisket: 3850,
  beef_ribs: 3650,
  beef_mince: 3850,

  horse_zhaya: 4600,
  horse_bone: 3550,
  horse_kazy: 4600,

  lamb_front: 3650,
  lamb_back: 3850,
  lamb_ribs: 3750,
  lamb_kurdyuk: 3500,
};

export function getPrice(id) {
  return PRICE_BY_ID[id] ?? 0;
}

export function formatPrice(value) {
  return (Number(value) || 0).toLocaleString("ru-RU");
}

export function renderPrices() {
  document.querySelectorAll(".product[data-id]").forEach((product) => {
    const id = product.dataset.id;
    const priceEl = product.querySelector(".price");

    if (priceEl) {
      priceEl.textContent = formatPrice(getPrice(id));
    }
  });
}