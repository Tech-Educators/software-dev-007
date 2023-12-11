const likesView = document.getElementById("likes-view");
const dislikesView = document.getElementById("dislikes-view");

let data = {
  likes: 0,
  dislikes: 0,
};

function addOne(type) {
  if (type === "likes") {
    // increase that type in my data
    data.likes++;
    // change the number on the screen
    likesView.textContent = data.likes;
  } else if (type === "dislikes") {
    // increase that type in my data
    data.dislikes++;
    // change the number on the screen
    dislikesView.textContent = data.dislikes;
  }

  // alternative way
  // data[type]++
  // likesView.textContent = data.likes;
  // dislikesView.textContent = data.dislikes;

  // add to localStorage
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem("data", stringifiedData);
}

function getLocalStorage() {
  // get the data value from localStorage
  const localData = localStorage.getItem("data");
  // update our data variable
  data = JSON.parse(localData);

  // update the p tags on the page
  likesView.textContent = data.likes;
  dislikesView.textContent = data.dislikes;
}

getLocalStorage();

// button time
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

likeBtn.addEventListener("click", function () {
  addOne("likes");
});

dislikeBtn.addEventListener("click", function () {
  addOne("dislikes");
});
