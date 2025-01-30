const btnBar = document.querySelector("#btn-bar");
const containerDiv = document.querySelector("#container");
const logoImg = document.getElementById("logo-img");
const categoriesArr = [
  "Creatures",
  "Equipment",
  "Materials",
  "Monsters",
  "Treasure",
];

logoImg.addEventListener("click", () => {
  containerDiv.textContent = "";
});

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

        const infoIcon = document.createElement("div");
        infoIcon.className = "info-card";
        infoIcon.appendChild(dataName);
        infoIcon.appendChild(dataImg);

        containerDiv.appendChild(infoIcon);

        infoIcon.addEventListener("click", () => {
          const closeDialog = document.createElement("button");
          closeDialog.className = "close-dialog-btn";
          closeDialog.textContent = "Close";

          const infoCard = document.createElement("dialog");
          infoCard.className = "infoCard";

          const cardName = document.createElement("p");
          cardName.className = "card-name";
          cardName.textContent = response.data[i].name;

          const cardImgContainer = document.createElement("div")
          cardImgContainer.className = "card-img-container";
          const cardImg = document.createElement("img");
          cardImg.className = "card-img";
          cardImg.src = response.data[i].image;
          cardImgContainer.appendChild(cardImg)

          const cardDescription = document.createElement("p");
          cardDescription.className = "card-description";
          cardDescription.textContent = response.data[i].description;

          const cardLocations = document.createElement("ul");
          cardLocations.className = "card-locations";
          cardLocations.textContent = "Common Locations: ";

          const locations = document.createElement("li");
          locations.className = "li-locations"
          locations.textContent = response.data[i].common_locations;
          cardLocations.appendChild(locations);


          const cardDrops = document.createElement("ul");
          cardDrops.className = "card-drops";
          cardDrops.textContent = "Drops: ";

          const drops = document.createElement("li");
          drops.className = "li-drops"
          drops.textContent = response.data[i].drops;
          cardDrops.appendChild(drops);



          infoCard.appendChild(cardName);
          infoCard.appendChild(cardImgContainer);
          infoCard.appendChild(cardDescription);
          infoCard.appendChild(cardLocations);
          infoCard.appendChild(cardDrops);

          infoCard.appendChild(closeDialog);

          containerDiv.appendChild(infoCard);

          infoCard.showModal();

          closeDialog.addEventListener("click", () => {
            infoCard.textContent = "";
            infoCard.style.display = "none";
            infoCard.close();
          });
        });
      }
    });
    btnBar.appendChild(button);
  }
}

createButtons();
