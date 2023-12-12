const reject = document.querySelector(".reject");
const approve = document.querySelector(".approve");
const cookieNotice = document.querySelector(".cookie-notice");

reject.addEventListener("click", function () {
  // add a cookie to say i can't use cookie
  document.cookie = "cookiesAccepted=false";
  cookieNotice.classList.add("hidden");
});

approve.addEventListener("click", function () {
  // add a cookie to say i CAN use cookie
  document.cookie = "cookiesAccepted=true";
  cookieNotice.classList.add("hidden");
});

function checkCookiesAccepted() {
  // get true or false of whether the cookie is set or not
  const cookiesAccepted = document.cookie.includes("cookiesAccepted");
  // run if cookiesAccepted is false
  if (cookiesAccepted === false) {
    cookieNotice.classList.remove("hidden");
  }
}

// here we run the function to run the code
checkCookiesAccepted();
