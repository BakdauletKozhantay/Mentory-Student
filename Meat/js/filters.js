export function initFilters() {
  const searchInput = document.getElementById("searchInput");
  const inStockOnly = document.getElementById("inStockOnly");
  const clearBtn = document.getElementById("clearFilters");

  if (!searchInput || !inStockOnly || !clearBtn) return;

  function apply() {
    const query = searchInput.value.trim().toLowerCase();
    const onlyStock = inStockOnly.checked;

    const activeCategory =
      document.querySelector(".tab.is-active")?.dataset.category;

    const activeGroup = document.querySelector(
      `.catalog-group[data-category="${activeCategory}"]`
    );

    if (!activeGroup) return;

    activeGroup.querySelectorAll("li").forEach((li) => {
      const card = li.querySelector(".product");
      const title =
        card.querySelector("h4")?.textContent?.toLowerCase() ?? "";

      const desc =
        card.querySelector(".product__desc")?.textContent?.toLowerCase() ?? "";

      const isUnavailable =
        card.classList.contains("product--unavailable") ||
        card.querySelector(".product__btn")?.disabled;

      const matchesText =
        !query || title.includes(query) || desc.includes(query);

      const matchesStock = !onlyStock || !isUnavailable;

      li.style.display = matchesText && matchesStock ? "" : "none";
    });
  }

  searchInput.addEventListener("input", apply);
  inStockOnly.addEventListener("change", apply);

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    inStockOnly.checked = false;
    apply();
  });
}