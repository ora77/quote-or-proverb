const favorites = JSON.parse(localStorage.getItem("favorites"));

favoritesInsert = document.querySelector(".favoritesInsert");
const backBtn = document.querySelector(".backBtn");

for (const elmt of favorites) {
  favoritesInsert.innerText += elmt.message + "\n";
}

backBtn.addEventListener("click", () => {
  window.location = "./index.html";
});

