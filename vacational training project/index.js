document.addEventListener("DOMContentLoaded", () => {
  const districtSelect = document.getElementById("districtSelect");
  const districtCards = document.querySelectorAll(".district-grid .district");
  const districtName = document.getElementById("districtName");
  const districtVibe = document.getElementById("districtVibe");
  const districtBudget = document.getElementById("districtBudget");
  const districtSeason = document.getElementById("districtSeason");
  const districtDays = document.getElementById("districtDays");
  const districtRegion = document.getElementById("districtRegion");
  const placesList = document.getElementById("placesList");
  const itineraryList = document.getElementById("itineraryList");
  const heroMainImg = document.querySelector(".hero-art .art-main img");
  const heroDistrict = document.getElementById("heroDistrict");

  const tripInterest = document.getElementById("tripInterest");
  const tripBudget = document.getElementById("tripBudget");
  const tripRoute = document.getElementById("tripRoute");

  function normalizeKey(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z]/g, "");
  }

  function getSelectedKey() {
    if (!districtSelect) return "nainital";
    const raw =
      districtSelect.value ||
      districtSelect.options[districtSelect.selectedIndex]?.text ||
      "";
    const key = normalizeKey(raw);
    return districts[key] ? key : "nainital";
  }

  function renderDistrict(key) {
    const district = districts[key];
    if (!district) return;

    if (districtName) districtName.textContent = district.name;
    if (heroDistrict) heroDistrict.textContent = district.name;
    if (districtVibe) districtVibe.textContent = district.vibe;
    if (districtBudget) districtBudget.textContent = district.budget;
    if (districtSeason) districtSeason.textContent = district.season;
    if (districtDays) districtDays.textContent = district.days;
    if (districtRegion) districtRegion.textContent = district.region;

    if (districtSelect) districtSelect.value = district.name;

    districtCards.forEach((card) => {
      card.classList.toggle("active", card.dataset.key === key);
    });

    if (heroMainImg && district.mainImage) {
      heroMainImg.src = district.mainImage;
      heroMainImg.alt = district.name;
    }

    if (heroDistrict) {
      heroDistrict.textContent = district.name;
    }

    const placeCards = placesList ? placesList.querySelectorAll(".place") : [];
    placeCards.forEach((card, idx) => {
      const title =
        district.places[idx] ||
        district.places[district.places.length - 1] ||
        "";
      const caption = card.querySelector("b");
      const span = card.querySelector(".img span");
      const img = card.querySelector(".img img");

      if (caption) caption.textContent = title;
      if (span) span.textContent = title;

      if (img && district.images[idx]) {
        img.src = district.images[idx];
        img.alt = `${district.name} - ${title}`;
      }
    });

    const dayCards = itineraryList
      ? itineraryList.querySelectorAll(".day")
      : [];
    dayCards.forEach((card, idx) => {
      const heading = card.querySelector(".day-head strong");
      const sub = card.querySelector(".day-head span");
      const list = card.querySelector("ul.clean");
      const plan = district.itinerary[idx];

      if (heading) heading.textContent = `Day ${idx + 1}`;

      if (sub) {
        sub.textContent =
          idx === 0
            ? "Arrival + first stop"
            : idx === district.itinerary.length - 1
              ? "Nearby + return"
              : "Sightseeing";
      }

      if (list && plan) {
        list.innerHTML = plan.map((item) => `<li>${item}</li>`).join("");
      } else if (list) {
        list.innerHTML = "";
      }

      card.style.display = idx < district.itinerary.length ? "" : "none";
    });
  }

  if (districtSelect) {
    districtSelect.addEventListener("change", () => {
      renderDistrict(getSelectedKey());
    });
  }

  districtCards.forEach((card) => {
    card.addEventListener("click", () => {
      renderDistrict(card.dataset.key);
    });
  });

  const primaryButtons = document.querySelectorAll(".btn-primary");
  primaryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const planner = document.getElementById("planner");
      if (planner)
        planner.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const searchInput = document.querySelector(
    '.search-row input[type="text"], .nav input[type="text"]',
  );
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) return;

      const foundKey = Object.keys(districts).find(
        (key) =>
          districts[key].name.toLowerCase().includes(q) ||
          districts[key].places.some((place) =>
            place.toLowerCase().includes(q),
          ),
      );

      if (foundKey) renderDistrict(foundKey);
    });
  }
  const generateBtn = document.getElementById("generatePlan");
  const interestSelect = document.getElementById("interest");

  const daysSelect = document.getElementById("days");
  const budgetSelect = document.getElementById("budget"); //yaha pe hai

  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const district = districts[getSelectedKey()];

      const interest = interestSelect.value.toLowerCase();
      const days = Number(daysSelect.value);
      const budget = budgetSelect.value.toLowerCase();

      const plan = district.planner[interest];

      tripInterest.textContent = interestSelect.value;
      tripBudget.textContent = budgetSelect.value;
      tripRoute.textContent = district.places.slice(0, days).join(" → ");

      itineraryList.innerHTML = "";
      district.itinerary.slice(0, days).forEach((dayPlan, index) => {
        let places = [...dayPlan];

        if (plan && plan.extraPlaces[index]) {
          places.push(plan.extraPlaces[index]);
        }
        itineraryList.innerHTML += `
    <div class="day">
      <div class="day-head">
        <strong>Day ${index + 1}</strong>
        <span>${interestSelect.value}</span>
      </div>

      <ul class="clean">
       ${places.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
      });

      // Budget update
      const budgetMap = {
        low: "₹4,000 - ₹7,000",
        medium: district.budget,
        high: "₹12,000+",
      };

      if (districtBudget) {
        districtBudget.textContent = budgetMap[budget];
      }
    });
  }

  renderDistrict("nainital");

  const copyBtn = document.getElementById("copySummary");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const district = districts[getSelectedKey()];
      if (!district) return;

      const summary = `
District: ${district.name}
Region: ${district.region}

Interest: ${interestSelect.options[interestSelect.selectedIndex].text}
Days: ${daysSelect.options[daysSelect.selectedIndex].text}
Budget: ${budgetSelect.options[budgetSelect.selectedIndex].text}

Season: ${district.season}

Suggested Route:
${tripRoute.textContent}

Top Places:
${district.places
  .slice(0, Number(daysSelect.value))
  .map((place) => `• ${place}`)
  .join("\n")}
`;

      navigator.clipboard.writeText(summary);

      alert("Summary copied!");
    });
  }
});

window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progressBar");

  if (!progressBar) return;

  const scroll =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  progressBar.style.width = scroll + "%";
});
