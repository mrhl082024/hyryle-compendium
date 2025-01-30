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

//testing

//testing end

async function fetchData(category) {
  try {
    const req = await fetch(
      `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`
    );
    const res = await req.json();
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

function sortData(){
  

}

function createButtons() {
  for (let i = 0; i < categoriesArr.length; i++) {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.textContent = categoriesArr[i];
    btnBar.appendChild(button);

    //click on a category to load in icons
    button.addEventListener("click", async () => {
      const data = await fetchData(categoriesArr[i].toLowerCase());
      console.log(data);
      


      containerDiv.textContent = "";

      for (let i = 0; i < data.length; i++) {
        const dataName = document.createElement("p");
        dataName.className = "data-name";
        dataName.textContent = data[i].name;

        const dataImg = document.createElement("img");
        dataImg.className = "data-img";
        dataImg.src = data[i].image;

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
          cardName.textContent = data[i].name;

          const cardImgContainer = document.createElement("div");
          cardImgContainer.className = "card-img-container";
          const cardImg = document.createElement("img");
          cardImg.className = "card-img";
          cardImg.src = data[i].image;
          cardImgContainer.appendChild(cardImg);

          const cardDescription = document.createElement("p");
          cardDescription.className = "card-description";
          cardDescription.textContent = data[i].description;

          const cardLocations = document.createElement("ul");
          cardLocations.className = "card-locations";
          cardLocations.textContent = "Common Locations: ";

          const locations = document.createElement("li");
          locations.className = "li-locations";
          locations.textContent = data[i].common_locations;
          cardLocations.appendChild(locations);

          const cardDrops = document.createElement("ul");
          cardDrops.className = "card-drops";
          cardDrops.textContent = "Drops: ";

          const drops = document.createElement("li");
          drops.className = "li-drops";
          drops.textContent = data[i].drops;
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
  }
}

createButtons();
