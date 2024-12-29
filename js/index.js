// Global Variables

let moviesArray = [];

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

let movieSection = document.createElement("section");
movieSection.setAttribute("class", "movieSection");
movieContainer.appendChild(movieSection);

// Fetch API --------------------------------------------------------
const fetchApiResults = async (type = "batmanPageOne") => {
  try {
    console.log(type, "is responsive");
    movieSection.replaceChildren();
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

    // if (Array.isArray(data.Search)) {
    //   data.Search.forEach((item, index) => {
    //     if (item.Title) {
    //       // console.log(`Item ${index}: ${item.Title}`);
    //     }
    //   });
    // }
    let moviesArray = data.Search;
    moviesArray.forEach(displayMovies);
    // console.log(moviesArray);
  } catch (error) {
    console.error(`Error fetching data for type "${type}:`, error.message);
    throw error;
  }
};

window.addEventListener("DOMContentLoaded", async function () {
  await fetchApiResults("batmanPageOne");
});

// Categories -------------------------------------------------------

batmanButton.addEventListener("click", async function () {
  await fetchApiResults("batmanPageOne");
});

theflashButton.addEventListener("click", async function () {
  await fetchApiResults("theflashPageOne");
});

thepunisherButton.addEventListener("click", async function () {
  await fetchApiResults("thepunisherPageOne");
});

supermanButton.addEventListener("click", async function () {
  await fetchApiResults("supermanPageOne");
});

avengersButton.addEventListener("click", async function () {
  await fetchApiResults("avengersPageOne");
});

spidermanButton.addEventListener("click", async function () {
  await fetchApiResults("spidermanPageOne");
});

// Tryouts
// Display Movies ---------------------------------------------------
function displayMovies(movie) {
  let articleContainer = document.createElement("article");
  // console.log(movie);

  articleContainer.setAttribute("class", "articleContainer");
  movieSection.appendChild(articleContainer);

  let articleTitle = document.createElement("h3");
  articleTitle.textContent = movie.Title;
  articleTitle.setAttribute("class", "articleTitle");
  articleContainer.appendChild(articleTitle);

  let articleType = document.createElement("p");
  articleType.textContent = movie.Type;
  articleType.setAttribute("class", "articleType");
  articleContainer.appendChild(articleType);

  let articleYear = document.createElement("p");
  articleYear.textContent = movie.Year;
  articleYear.setAttribute("class", "articleYear");
  articleContainer.appendChild(articleYear);

  // let articleImdbID = document.createElement("p");
  // articleImdbID.textContent = movie.imdbID;
  // articleImdbID.setAttribute("class", "articleImdbID");
  // articleContainer.appendChild(articleImdbID);

  let articlePoster = document.createElement("img");
  articlePoster.setAttribute("class", "articlePoster");

  movie.Poster =
    movie.Poster === null ? "https://placehold.co/600x400" : movie.Poster;
  articlePoster.src = movie.Poster;
  articleContainer.append(articlePoster);
  //
}

// console.log("zana");
