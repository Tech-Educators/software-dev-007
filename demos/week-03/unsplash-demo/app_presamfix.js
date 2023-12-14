// make our API call to unsplash and get images
async function getImages(query) {
  // make a fetch call to unsplash
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=ml6bRDnz2_FsW11E0KfUf9fJ6_Kw0vR2s9laeDaTvIc`
  );

  // turn my response into JSON
  const json = await response.json();

  // return the image
  return json.results;
}

// use the response from unsplash to change the image on the page
async function renderImages(query) {
  const data = await getImages(query);

  // loop through my results and render an image for each item
  data.forEach(function (imageObj) {
    // create a new img tag
    const img = document.createElement("img");

    // set the src and all of my new img tag
    img.src = imageObj.urls.full;
    img.alt = imageObj.alt_description;

    // append my image to the page
    document.getElementById("images").appendChild(img);
  });
}

// take user input to affect the unsplash query
const form = document.getElementById("searchForm");

form.addEventListener("submit", function (event) {
  // the form is automatically passed the event as a param, which gives us access to:
  event.preventDefault();

  const myQuery = event.target.myQuery.value;

  // make an API call with our new query
  renderImages(myQuery);
});
