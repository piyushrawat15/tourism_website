const grid = document.getElementById("destinationGrid");

Object.entries(districts).forEach(([key, district]) => {
  grid.innerHTML += `
    <div class="destination-card">

      <img src="${district.mainImage || "images/default.jpg"}"
      alt="${district.name}">

      <div class="destination-content">
        <h3>${district.name}</h3>
        <p>${district.vibe}</p>

        <a href="district.html?id=${key}">
          Explore →
        </a>
      </div>

    </div>
  `;
});

const cards = document.querySelectorAll(".destination-card");

if (cards.length % 5 === 3) {
  cards[cards.length - 3].style.gridColumn = "2";
}
