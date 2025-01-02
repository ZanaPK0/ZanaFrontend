// Global Variables

//Header creation ---------------------------------------------------

let headerContainer = document.createElement("header");
headerContainer.setAttribute("class", "headerContainer");
document.body.appendChild(headerContainer);

let headingHeader = document.createElement("h1");
headingHeader.setAttribute("class", "headingheader");
headingHeader.innerText = "welcome!";
headerContainer.appendChild(headingHeader);

let batmanButton = document.createElement("button");
batmanButton.setAttribute("class", "batmanButton");
batmanButton.innerText = "Batman";
headerContainer.appendChild(batmanButton);

let theflashButton = document.createElement("button");
theflashButton.setAttribute("class", "theflashButton");
theflashButton.innerText = "The Flash";
headerContainer.appendChild(theflashButton);

let thepunisherButton = document.createElement("button");
thepunisherButton.setAttribute("class", "thepunisherButton");
thepunisherButton.innerText = "The Punisher";
headerContainer.appendChild(thepunisherButton);

let supermanButton = document.createElement("button");
supermanButton.setAttribute("class", "supermanButton");
supermanButton.innerText = "Superman";
headerContainer.appendChild(supermanButton);

let avengersButton = document.createElement("button");
avengersButton.setAttribute("class", "avengersButton");
avengersButton.innerText = "Avengers";
headerContainer.appendChild(avengersButton);

let spidermanButton = document.createElement("button");
spidermanButton.setAttribute("class", "spidermanButton");
spidermanButton.innerText = "Spiderman";
headerContainer.appendChild(spidermanButton);

// Main creation ----------------------------------------------------

let movieContainer = document.createElement("main");
movieContainer.setAttribute("class", "movieContainer");
document.body.appendChild(movieContainer);

const posterMoviesContainer = document.getElementById("posterMovies-container");
movieContainer.appendChild(posterMoviesContainer);

const modal = document.getElementById("modal");
movieContainer.appendChild(modal);

const modalData = document.getElementById("modalData");
movieContainer.appendChild(modalData);

const closeModal = document.getElementById("closeModal");
movieContainer.appendChild(closeModal);
closeModal.classList.add("hidden");

// Fetch API --------------------------------------------------------

// Skapa filmkort
function createMovieCards(movies) {
  console.log(movies);

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    const poster =
      movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/600x400";
    movieCard.innerHTML = `
    <img src="${poster}" alt="${movie.Title}">
    <h3>${movie.Title}</h3>
  `;
    movieCard.addEventListener("click", () => showModal(movie));
    posterMoviesContainer.appendChild(movieCard);
  });
}

// Visa modal med filmdata
function showModal(movie) {
  const poster =
    movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/600x400";
  modalData.innerHTML = `
    <img src="${poster}" alt="${movie.Title}">
    <h2>${movie.Title}</h2>
    <p>Utgivningsdatum: ${movie.Year}</p>
    <p>${movie.imdbID}</p>
  `;
  modalData.classList.remove("hidden");
  closeModal.classList.remove("hidden");
}

// Dölj modal
function hideModal() {
  modalData.classList.add("hidden");
  closeModal.classList.add("hidden");
}

// Event Listeners for closing modal
closeModal.addEventListener("click", hideModal);

// Initiera filmer
async function init(type = "batmanPageOne") {
  try {
    const movies = await fetchApiResults(type);
    if (movies && Array.isArray(movies)) {
      createMovieCards(movies);
    } else {
      console.error("no movies found");
    }
  } catch (error) {
    console.error("Error initializing movies:", error);
  }
}

const fetchApiResults = async (type = "batmanPageOne") => {
  try {
    console.log(type, "is responsive");
    posterMoviesContainer.replaceChildren();
    let url;
    switch (type) {
      case "batmanPageOne":
        url = "http://www.omdbapi.com/?apikey=51a96b3d&s=Batman&page=1";
        break;
      case "theflashPageOne":
        url = "http://www.omdbapi.com/?apikey=51a96b3d&s=The-Flash&page=1";
        break;
      case "thepunisherPageOne":
        url = "http://www.omdbapi.com/?apikey=51a96b3d&s=The-Punisher&page=1";
        break;
      case "supermanPageOne":
        url = "http://www.omdbapi.com/?apikey=51a96b3d&s=Superman&page=1";
        break;
      case "avengersPageOne":
        url = "http://www.omdbapi.com/?apikey=51a96b3d&s=Avengers&page=1";
        break;
      case "spidermanPageOne":
        url = "http://www.omdbapi.com/?apikey=51a96b3d&s=Spiderman&page=1";
        break;

      default:
        url = "http://www.omdbapi.com/?i=tt3896198&apikey=51a96b3d";
        break;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    // console.log(Array.isArray(data.Search));

    let movies = data.Search;
    movies.forEach(displayMovies);
    console.log(movies);

    return movies;
  } catch (error) {
    console.error(`Error fetching data for type "${type}:`, error.message);
    throw error;
  }
};

window.addEventListener("DOMContentLoaded", async function () {
  await init("batmanPageOne");
});

// Categories -------------------------------------------------------

batmanButton.addEventListener("click", async function () {
  await init("batmanPageOne");
});

theflashButton.addEventListener("click", async function () {
  await init("theflashPageOne");
});

thepunisherButton.addEventListener("click", async function () {
  await init("thepunisherPageOne");
});

supermanButton.addEventListener("click", async function () {
  await init("supermanPageOne");
});

avengersButton.addEventListener("click", async function () {
  await init("avengersPageOne");
});

spidermanButton.addEventListener("click", async function () {
  await init("spidermanPageOne");
});

// Tryouts
// Display Movies ---------------------------------------------------
function displayMovies(movie) {
  let articleContainer = document.createElement("article");
  // console.log(movie);

  // articleContainer.setAttribute("class", "articleContainer");
  // movieSection.appendChild(articleContainer);

  let articleTitle = document.createElement("h3");
  articleTitle.textContent = movie.Title;
  articleTitle.setAttribute("class", "articleTitle");
  articleContainer.appendChild(articleTitle);
}
