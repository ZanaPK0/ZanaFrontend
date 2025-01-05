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

let errorContainer = document.createElement("div");
errorContainer.setAttribute("id", "errorContainer");
movieContainer.appendChild(errorContainer);

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
    <p>Release year: ${movie.Year}</p>
    <p> imdb ID = ${movie.imdbID}</p>
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
async function init(type) {
  try {
    const movies = await fetchApiResults(type);
    if (movies.length > 0) {
      createMovieCards(movies);
    } else {
      console.error("no movies found");
    }
  } catch (error) {
    console.error("Error initializing movies:", error);
  }
}

const fetchApiResults = async (type) => {
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
        url = "http://www.omdbapi.com/?apikey=51a96b3&s=Spiderman&page=1";
        break;

      default:
        url = "http://www.omdbapi.com/?i=tt3896198&apikey=51a96b3d";
        break;
    }
    const response = await fetch(url);
    if (!response.ok) {
      responseMessage(response);
    }
    const data = await response.json();
    console.log(data);

    // console.log(Array.isArray(data.Search));

    let movies = data.Search;
    movies.forEach(displayMovies);
    console.log(movies);

    return movies;
  } catch (error) {
    showError("An error occured: ", error.message);
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

  let articleTitle = document.createElement("h3");
  articleTitle.textContent = movie.Title;
  articleTitle.setAttribute("class", "articleTitle");
  articleContainer.appendChild(articleTitle);
}

// console.log("zana");

// Error Handling ---------------------------------------------------
function responseMessage(response) {
  switch (response.status) {
    case 400:
      throw new Error(
        "400: Bad Request: Your request could not be processed. Please check that all information is correct and try again."
      );
    case 401:
      throw new Error(
        "401: Unauthorized: You do not have the proper authorization to access this content."
      );
    case 403:
      throw new Error(
        "403: Forbidden access: You are not authorized to view this page. Contact the administrator if you believe this is a mistake."
      );
    case 404:
      throw new Error(
        "404: Resource not found: The page you were looking for could not be found. Check the address or use the search function."
      );
    case 429:
      throw new Error(
        "429: Too Many Requests: You have made too many requests in a short period. Please wait a moment and try again."
      );
    case 500:
      throw new Error(
        "500: Internal Server Error: Oops! An error occurred on the server. We're working to resolve the issue. Please try again later."
      );
    default:
      throw new Error(`"HTTP error! Status: ${response.status}`);
  }
}
// Error visibility ------------------------------------------------
// spread operator which makes it possible to accept any number of arguments and collects them into an array.
function showError(...messages) {
  // Get the error container
  const errorContainer = document.getElementById("errorContainer");

  // concatenates all elements of the array into a single string.
  const fullMessage = messages.join("");
  // Set the error message
  errorContainer.textContent = fullMessage;

  // Show the container
  errorContainer.style.display = "block";

  // hides the error after a few seconds
  setTimeout(() => {
    errorContainer.style.display = "none";
    errorContainer.textContent = ""; // Clears the error message
  }, 5000); // 5 seconds
}
