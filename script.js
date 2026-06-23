const search = document.getElementById("search");
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");
const surpriseBtn = document.getElementById("surprise");

let activeCategory = "all";

function applyFilters() {
  const term = search.value.trim().toLowerCase();

  cards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchesTerm = name.includes(term);
    // a card can belong to multiple categories, e.g. "strategy multiplayer"
    const cardCategories = (category || "").split(/\s+/);
    const matchesCategory = activeCategory === "all" || cardCategories.includes(activeCategory);

    card.style.display = matchesTerm && matchesCategory ? "" : "none";
  });
}

search.addEventListener("input", applyFilters);

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeCategory = chip.dataset.category;
    applyFilters();
  });
});

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    const links = Array.from(cards).map((c) => c.getAttribute("href"));
    const pick = links[Math.floor(Math.random() * links.length)];
    window.location.href = pick;
  });
}
