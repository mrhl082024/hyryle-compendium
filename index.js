const btnBar = document.querySelector("#btn-bar");
const containerDiv = document.querySelector("#container");
const categoriesArr = [
  "Creatures",
  "Equipment",
  "Materials",
  "Monsters",
  "Treasure",
];

function createButtons() {
  for (let i = 0; i < categoriesArr.length; i++) {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.textContent = categoriesArr[i];

    button.addEventListener("click", async () => {
      containerDiv.textContent = "";
      const request = await fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${button.textContent.toLowerCase()}`
      );
      const response = await request.json();
      for (let i = 0; i < response.data.length; i++) {
        const dataName = document.createElement("p");
        dataName.className = "data-name";
        dataName.textContent = response.data[i].name;

        const dataImg = document.createElement("img");
        dataImg.className = "data-img";
        dataImg.src = response.data[i].image;

        const infoCard = document.createElement("div");
        infoCard.className = "info-card";
        infoCard.appendChild(dataName);
        infoCard.appendChild(dataImg);

        containerDiv.appendChild(infoCard);

        infoCard.addEventListener("click", () => {});
      }
    });
    btnBar.appendChild(button);
  }
}

createButtons();
