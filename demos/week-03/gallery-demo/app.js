const thumbnails = document.querySelectorAll(".thumbnails img"); // array of images
const displayImage = document.getElementById("displayImage"); // an image tag

// loop through our thumbnails
// add an eventLister to each one
// so when it is clicked
// displayImage is changed

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    displayImage.src = thumb.src;
    displayImage.alt = thumb.alt;
  });
});
