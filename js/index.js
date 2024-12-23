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
