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
    recievedDataArticles = data.Search;
    console.log(recievedDataArticles);
  } catch (error) {
    console.error(`Error fetching data for type "${type}:`, error.message);
    throw error;
  }
};

// fetchApiResults((type = "theflashPageOne"));
// fetchApiResults((type = "thepunisherPageOne"));
// fetchApiResults((type = "supermanPageOne"));
// fetchApiResults((type = "avengersPageOne"));
// fetchApiResults((type = "spidermanPageOne"));

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
