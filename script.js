const apiKey = config.API_KEY;

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const welcomeMessage = document.getElementById("welcome-message");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;

  if (welcomeMessage) {
    welcomeMessage.classList.add("hidden");
  }

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      searchResult.innerHTML = "";
    }

    const results = data.results;

    results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description || keyword;

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = "block";
  } catch (error) {
    console.error("Error fetching images:", error);
    searchResult.innerHTML =
      '<p style="text-align: center; color: #ec4899; padding: 40px;">Failed to load images. Please try again.</p>';
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
