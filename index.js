/* //api fetch for creature data
const creaturesResponse = await fetch(
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures"
);
const creaturesData = await creaturesResponse.json();

//api fetch for equipment data
const equipmentResponse = await fetch(
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"
);
const equipmentData = await equipmentResponse.json();

//api fetch for materials data
const materialsResponse = await fetch(
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials"
);
const materialsData = await materialsResponse.json();

//api fetch for monsters data
const monstersResponse = await fetch(
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
);
const monstersData = await monstersResponse.json();

//api fetch for treasure data
const treasureResponse = await fetch(
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure"
);
const treasureData = await treasureResponse.json(); */

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
    button.id = "button" + i;
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

        // const dataDescription = document.createElement("p");
        // dataDescription.textContent = response.data[i].description;

        const infoCard = document.createElement("div");
        infoCard.className = "info-card"
        infoCard.appendChild(dataName);
        infoCard.appendChild(dataImg);
        // infoCard.appendChild(dataDescription);

        containerDiv.appendChild(infoCard);
      }
    });
    btnBar.appendChild(button);
  }
  /*   const button0 = document.querySelector("#button0");
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");
  const button3 = document.querySelector("#button3");
  const button4 = document.querySelector("#button4");
 */
  //what happends when i press creature button
  /*   button0.addEventListener("click", () => {
    console.log("creatures");
    containerDiv.textContent = "";
    for (let i = 0; i < creaturesData.data.length; i++) {
      const creaturesName = document.createElement("h1");
      creaturesName.textContent = creaturesData.data[i].name;

      const creaturesImg = document.createElement("img");
      creaturesImg.src = creaturesData.data[i].image;

      const creaturesDescription = document.createElement("h3");
      creaturesDescription.textContent = creaturesData.data[i].description;

      const creaturesCard = document.createElement("div");
      creaturesCard.id = "creaturescard" + i;
      creaturesCard.appendChild(creaturesName);
      creaturesCard.appendChild(creaturesImg);
      creaturesCard.appendChild(creaturesDescription);

      containerDiv.appendChild(creaturesCard);
    }
    //what happends when i press equipment button
    button1.addEventListener("click", () => {
      console.log("equipment");
      containerDiv.textContent = "";

      for (let i = 0; i < equipmentData.data.length; i++) {
        const equipmentName = document.createElement("h1");
        equipmentName.textContent = equipmentData.data[i].name;

        const equipmentImg = document.createElement("img");
        equipmentImg.src = equipmentData.data[i].image;

        const equipmentDescription = document.createElement("h3");
        equipmentDescription.textContent = equipmentData.data[i].description;

        const equipmentCard = document.createElement("div");
        equipmentCard.id = "equipmentcard" + i;
        equipmentCard.appendChild(equipmentName);
        equipmentCard.appendChild(equipmentImg);
        equipmentCard.appendChild(equipmentDescription);

        containerDiv.appendChild(equipmentCard);
      }
    });
    //what happends when i press materials
    button2.addEventListener("click", () => {
      console.log("materials");
      containerDiv.textContent = "";

      for (let i = 0; i < materialsData.data.length; i++) {
        const materialsName = document.createElement("h1");
        materialsName.textContent = materialsData.data[i].name;

        const materialsImg = document.createElement("img");
        materialsImg.src = materialsData.data[i].image;

        const materialsDescription = document.createElement("h3");
        materialsDescription.textContent = materialsData.data[i].description;

        const materialsCard = document.createElement("div");
        materialsCard.id = "materialscard" + i;
        materialsCard.appendChild(materialsName);
        materialsCard.appendChild(materialsImg);
        materialsCard.appendChild(materialsDescription);

        containerDiv.appendChild(materialsCard);
      }
    });
    //what happends when i press monsters button
    button3.addEventListener("click", () => {
      console.log("monsters");
      containerDiv.textContent = "";

      for (let i = 0; i < monstersData.data.length; i++) {
        const monstersName = document.createElement("h1");
        monstersName.textContent = monstersData.data[i].name;

        const monstersImg = document.createElement("img");
        monstersImg.src = monstersData.data[i].image;

        const monstersDescription = document.createElement("h3");
        monstersDescription.textContent = monstersData.data[i].description;

        const monstersCard = document.createElement("div");
        monstersCard.id = "monsterscard" + i;
        monstersCard.appendChild(monstersName);
        monstersCard.appendChild(monstersImg);
        monstersCard.appendChild(monstersDescription);

        containerDiv.appendChild(monstersCard);
      }
    });
    //what happends when i press treasure button
    button4.addEventListener("click", () => {
      console.log("treasure");
      containerDiv.textContent = "";
      for (let i = 0; i < treasureData.data.length; i++) {
        const treasureName = document.createElement("h1");
        treasureName.textContent = treasureData.data[i].name;

        const treasureImg = document.createElement("img");
        treasureImg.src = treasureData.data[i].image;

        const treasureDescription = document.createElement("h3");
        treasureDescription.textContent = treasureData.data[i].description;

        const treasureCard = document.createElement("div");
        treasureCard.id = "treasurecard" + i;
        treasureCard.appendChild(treasureName);
        treasureCard.appendChild(treasureImg);
        treasureCard.appendChild(treasureDescription);

        containerDiv.appendChild(treasureCard);
      }
    }); */
}

createButtons();
