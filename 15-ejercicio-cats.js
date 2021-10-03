const $btnCat = document.querySelector("#btnCat");
const $divCats = document.querySelector("#divCats");

$btnCat.addEventListener("click", async() => {
  const respCats = await fetch("https://api.thecatapi.com/v1/images/search");
  const dataCats = await respCats.json();
  const imgCat = document.createElement("img");
  imgCat.src = dataCats[0].url;
  // document.body.append(imgCat);
  $divCats.appendChild(imgCat);
  
});







