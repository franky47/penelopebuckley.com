var img = document.querySelector(".hero .profile-picture");
console.dir(img);
if (img.complete) {
  // Handle back button navigation animations
  document.body.classList.remove("js-loading");
} else {
  img.addEventListener("load", function () {
    document.body.classList.remove("js-loading");
  });
}
window.onload = () => {
  const contactEmail = document.getElementById("email-contact");
  const o = "bW9jL3llbGtjdWJlcG9sZW5lcCRoY3JhZXNlcjpvdGxpYW0=";
  contactEmail.setAttribute(
    "href",
    atob(o).split("").reverse().join("").replace(/\//g, ".").replace(/\$/g, "@")
  );
  contactEmail.classList.remove("hidden");
};
