const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "flex" : "none";
  });
});

function filterGames(type) {
  cards.forEach(card => {
    if (type === "all") {
      card.style.display = "flex";
    } else {
      card.style.display = card.classList.contains(type) ? "flex" : "none";
    }
  });
}