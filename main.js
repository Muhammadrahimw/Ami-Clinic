let menu = document.getElementById("menu");
let links = document.getElementById("links");

menu.addEventListener("click", () => {
  console.log("hju");

  if (links.style.left === 0) {
    links.style.left = -200 + "%";
  } else {
    links.style.left = 0;
  }
});
