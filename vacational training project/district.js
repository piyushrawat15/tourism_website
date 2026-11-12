const districts = {
  nainital: {
    name: "Nainital",
    region: "Kumaon",
    budget: "₹8000-12000",
    season: "Best: Mar–Jun",
    days: "2–3 days",
    vibe: "Lake town, family trips, and easy sightseeing.",
    mainImage: "nainital hero image.png",
    images: ["naini lake.png", "snow view.png", "bhimtal.png", "mall road.png"],
    places: ["Naini Lake", "Snow View", "Bhimtal", "Mall Road"],
    itinerary: [
      ["Check-in", "Naini Lake", "Evening market walk"],
      ["Snow View", "Nearby attractions", "Sunset point"],
      ["Bhimtal", "Lunch stop", "Departure"],
    ],
    planner: {
      family: {
        extraPlaces: ["Nainital Zoo", "Eco Cave Garden"],
      },

      adventure: {
        extraPlaces: ["Pangot Trek", "Kilbury Forest"],
      },

      pilgrimage: {
        extraPlaces: ["Naina Devi Temple", "Kainchi Dham"],
      },

      wildlife: {
        extraPlaces: ["Kilbury Bird Sanctuary", "Pangot Bird Watching"],
      },
    },
  },

  dehradun: {
    name: "Dehradun",
    region: "Garhwal",
    budget: "₹8000-13000",
    season: "Best: Oct–Mar",
    days: "1–2 days",
    vibe: "City, hills, cafés, and easy access.",
    mainImage: "FRI Building Gallery.jpg",
    images: [
      "data:image/jpeg;base64,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",
      "robber cave.jpeg",
      "data:image/jpeg;base64,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",
      "dehradun 4th.jpg",
    ],
    places: ["Sahastradhara", "Robber's Cave", "FRI", "Maldevta"],
    itinerary: [
      ["Arrive", "Sahastradhara", "Local café"],
      ["FRI", "Robber's Cave", "Sunset drive"],
    ],
  },

  haridwar: {
    name: "Haridwar",
    region: "Garhwal",
    budget: "₹6000-9000",
    season: "Best: All year",
    days: "1 day",
    vibe: "Spiritual city and short trips.",
    mainImage:
      "hero haridwar.avif",
    images: [
      "har ki pauri.webp",
      "mansa devi.jpg",
      "ganga arti.jpeg",
      "shantikunj ashram.jpg",
    ],
    places: ["Har Ki Pauri", "Mansa Devi", "Ganga Aarti", "Shantikunj Ashram"],
    itinerary: [
      ["Temple visit", "Har Ki Pauri", "Ganga Aarti"],
      ["Local snack stop", "Shopping", "Departure"],
    ],
  },

  pauri: {
    name: "Pauri",
    region: "Garhwal",
    budget: "₹6000-9000",
    season: "Best: Sep–May",
    days: "2–3 days",
    vibe: "Adventure, yoga, river life, and cafés.",
    mainImage: "Khirsu hills.jpg",
    images: [
      "laxman jhula.webp",
      "river rafting.webp",
      "cafes in pauri.jpg",
      "maa dhari devi.webp",
    ],
    places: ["Laxman Jhula", "River rafting", "Cafes", "Dhari Devi Temple"],
    itinerary: [
      ["Arrival", "Riverside walk", "Cafe evening"],
      ["Adventure activity", "Yoga or calm morning", "Sunset point"],
      ["Market", "Checkout", "Departure"],
    ],
  },

  chamoli: {
    name: "Chamoli",
    region: "Garhwal",
    budget: "₹8000-15000",
    season: "Best: Apr–Jun",
    days: "3–5 days",
    vibe: "High altitude, pilgrimage, and trekking.",
    mainImage: "Narsingh mandir.jpeg",
    images: [
      "auli chamoli.avif",
      "badrinath.jpeg",
      "valley of flower.jpg",
      "gopeshwar.jpeg",
    ],
    places: ["Auli", "Badrinath", "Valley of Flowers", "Gopeshwar"],
    itinerary: [
      ["Reach base", "Rest", "Short walk"],
      ["Main attraction", "Local food", "Early sleep"],
      ["Secondary spot", "Photo stop", "Departure"],
    ],
  },

  almora: {
    name: "Almora",
    region: "Kumaon",
    budget: "₹7000-11000",
    season: "Best: Throughout year",
    days: "2–3 days",
    vibe: "Culture, ridge views, and a slow pace.",
    mainImage:
      "hero image almora.jpg",
    images: [
      "kasar devi.jpg",
      "brightend corner almora.jpg",
      "thana-bazar.webp",
      "jageshwar-dham-temple-almora-uttarakhand.webp",
    ],
    places: ["Kasar Devi", "Bright End Corner", "Local bazaars", "Temples"],
    itinerary: [
      ["Arrive", "Viewpoint", "Dinner"],
      ["Temple stop", "Market walk", "Sunset"],
      ["Nearby excursion", "Return", "Departure"],
    ],
  },

  pithoragarh: {
    name: "Pithoragarh",
    region: "Kumaon",
    budget: "₹8000-12000",
    season: "Best: Apr–Jun",
    days: "3–4 days",
    vibe: "Remote mountain routes and scenic views.",
    mainImage: "panchachuli hero image.jpg",
    images: [
      "munsyari-uttarakhand.webp",
      "askot 2.jpg",
      "Dharchula.jpg",
      "panchachuli.webp",
    ],
    places: ["Munsiyari", "Askot", "Dharchula", "Panchachuli peaks"],
    itinerary: [
      ["Long scenic drive", "Check-in", "Rest"],
      ["Main viewpoint", "Market", "Dinner"],
      ["Photo stops", "Secondary route", "Return"],
    ],
  },

  uttarkashi: {
    name: "Uttarkashi",
    region: "Garhwal",
    budget: "₹8000-12000",
    season: "Best: Mar–Jun",
    days: "2 days",
    vibe: "Classic hill station and weekend plan.",
    mainImage:
      "hero image uttarkashi.jpg",
    images: [
      "gangotri temple 1.jpg",
      "harshil valley.jpg",
      "dayara bugyal.webp",
      "yamunotri.avif",
    ],
    places: [
      "Gangotri Temple",
      "Harshil Valley",
      "Dayara Bugyal",
      "Yamnotri Temple",
    ],
    itinerary: [
      ["Check-in", "Mall Road", "Sunset walk"],
      ["Kempty Falls", "Viewpoint", "Departure"],
    ],
  },

  tehri: {
    name: "Tehri",
    region: "Garhwal",
    budget: "₹9000-15000",
    season: "Best: Oct–Jun",
    days: "2–3 days",
    vibe: "Lake views, water sports, and mountain scenery.",
    mainImage: "surkanda devi.jpg",
    images: [
      "tehri lake.jpg",
      "new tehri.avif",
      "water sports.jpg",
      "chamba.jpg",
    ],
    places: ["Tehri Lake", "New Tehri", "Water sports", "Chamba"],
    itinerary: [
      ["Arrive", "Tehri Lake", "Boating"],
      ["Viewpoints", "Market", "Sunset"],
    ],
  },

  rudraprayag: {
    name: "Rudraprayag",
    region: "Garhwal",
    budget: "₹7000-11000",
    season: "Best: Apr–Jun",
    days: "2–4 days",
    vibe: "Pilgrimage routes and river confluence.",
    mainImage: "kedarnath temple.png",
    images: [
      "Confluence rudraprayag.jpg",
      "chandrashila.webp",
      "chopta.webp",
      "kartik swami temple.webp",
    ],
    places: ["Confluence", "Chandrashila", "Bugyal", "kartik Swami Temple"],
    itinerary: [
      ["Arrival", "Confluence point", "Local stay"],
      ["Route visit", "Temple stop", "Rest"],
    ],
  },

  bageshwar: {
    name: "Bageshwar",
    region: "Kumaon",
    budget: "₹6000-9000",
    season: "Best: Oct–Apr",
    days: "1–2 days",
    vibe: "Quiet, devotional, and local-experience heavy.",
    mainImage:
      "hero image bageshwar.jpg",
    images: [
      "baijnath.jpg",
      "bagnath.jpg",
      "confluence bageshwar.jpg",
      "kausani tea estate.jpg",
    ],
    places: [
      "Baijnath",
      "Bagnath Temple",
      "Confluence Area",
      "kausani Tea Estate",
    ],
    itinerary: [
      ["Temple visit", "Local food", "Evening walk"],
      ["Nearby heritage stop", "Departure", "Return"],
    ],
  },

  champawat: {
    name: "Champawat",
    region: "Kumaon",
    budget: "₹7000-9000",
    season: "Best: Throughout year",
    days: "1–2 days",
    vibe: "Heritage, temples, and peaceful hill stops.",
    mainImage:
      "hero image champawat.jpg",
    images: [
      "abbott mount.jpg",
      "baleshwar-temple.webp",
      "mayawati ashram.jpg",
      "champawat viewpoint.jpg",
    ],
    places: ["Abbott Mount", "Baleshwar Temple", "Mayawati Ashram", "Views"],
    itinerary: [
      ["Arrival", "Temple visit", "Local food"],
      ["Hill stop", "Sunset", "Departure"],
    ],
  },

  udhamsinghnagar: {
    name: "Udham Singh Nagar",
    region: "Kumaon",
    budget: "₹8000-11000",
    season: "Best: Oct–Mar",
    days: "1–2 days",
    vibe: "Flatland access, wildlife routes, and easy travel.",
    mainImage:
      "hero image udham singh nagar.jpg",
    images: [
      "corbett park.jpg",
      "ataria temple.jpg",
      "IIM kashipur.jpg",
      "nanak sagar dam.webp",
    ],
    places: [
      "Corbett region",
      "Local temples",
      "IIM Kashipur",
      "Nanak sagar dam",
    ],
    itinerary: [
      ["Arrival", "Short sightseeing", "Food stop"],
      ["Wildlife route", "Return", "Departure"],
    ],
  },
};

const urlParams = new URLSearchParams(window.location.search);
const districtId = urlParams.get("id");

const districtData = districts[districtId];

if (!districtData) {
  document.getElementById("districtName").textContent = "District Not Found";
} else {
  document.getElementById("districtName").textContent = districtData.name;
  document.getElementById("districtVibe").textContent = districtData.vibe;
  document.getElementById("districtRegion").textContent = districtData.region;
  document.getElementById("districtBudget").textContent = districtData.budget;
  document.getElementById("districtSeason").textContent = districtData.season;
  document.getElementById("heroImage").src = districtData.mainImage;

  // Places
  const placesGrid = document.getElementById("placesGrid");
  placesGrid.innerHTML = "";

  districtData.places.forEach((place) => {
    const div = document.createElement("div");
    div.className = "place-card";
    div.textContent = place;
    placesGrid.appendChild(div);
  });

  // Itinerary
  const itineraryList = document.getElementById("itineraryList");
  itineraryList.innerHTML = "";

  districtData.itinerary.forEach((day, index) => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day-card";

    dayDiv.innerHTML = `
      <h3>Day ${index + 1}</h3>
      <p>${day.join(" → ")}</p>
    `;

    itineraryList.appendChild(dayDiv);
  });

  // Gallery
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  if (districtData.images) {
    districtData.images.forEach((imgSrc, index) => {
      const img = document.createElement("img");

      img.src = imgSrc;
      img.alt = districtData.name;
      img.className = "gallery-img";

      if (index === 0) {
        img.classList.add("active");
      }

      img.onclick = () => {
        document.getElementById("heroImage").src = imgSrc;

        document
          .querySelectorAll(".gallery-img")
          .forEach((i) => i.classList.remove("active"));

        img.classList.add("active");
      };

      gallery.appendChild(img);
    });
  }
}
