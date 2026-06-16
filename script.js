const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(value) ? "flex" : "none";
  });
});