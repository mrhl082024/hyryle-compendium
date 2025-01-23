//api fetch for creature data
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
const treasuretData = await treasureResponse.json();

const btnBar = document.querySelector("#btn-bar");
const middleDiv = document.querySelector("#middle-div");

const myButtonArray = [
  "Creatures",
  "Equipment",
  "Materials",
  "Monsters",
  "Treasure",
];

async function createButtons() {
  for (let i = 0; i < myButtonArray.length; i++) {
    const button = document.createElement("button");
    button.id = "button" + i;
    button.textContent = myButtonArray[i];
    btnBar.appendChild(button);
  }
  const button0 = document.querySelector("#button0");
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");
  const button3 = document.querySelector("#button3");
  const button4 = document.querySelector("#button4");

  //what happends when i press creature button
  button0.addEventListener("click", () => {
    console.log("creatures");
    middleDiv.textContent = "";
    for (let i = 0; i < creaturesData.data.length; i++) {
      const creaturesName = document.createElement("h1");
      creaturesName.textContent = creaturesData.data[i].name;

      const creaturesImg = document.createElement("img");
      creaturesImg.src = creaturesData.data[i].image;

      const creaturesDescription = document.createElement("h3");
      creaturesDescription.textContent = creaturesData.data[i].description;

      const creaturesCard = document.createElement("div");
      creaturesCard.id = "creaturecard" + i;
      creaturesCard.appendChild(creaturesName);
      creaturesCard.appendChild(creaturesImg);
      creaturesCard.appendChild(creaturesDescription);

      middleDiv.appendChild(creaturesCard);
    }
    //what happends when i press equipment button
    button1.addEventListener("click", () => {
      console.log("equipment");
      middleDiv.textContent = "";

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

        middleDiv.appendChild(equipmentCard);
      }
    });
    //what happends when i press materials
    button2.addEventListener("click", () => {
      console.log("materials");
      middleDiv.textContent = "";

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

        middleDiv.appendChild(materialsCard);
      }
    });
    //what happends when i press monsters button
    button3.addEventListener("click", () => {
      console.log("monsters");
      middleDiv.textContent = "";
    });
    //what happends when i press treasure button
    button4.addEventListener("click", () => {
      console.log("treasure");
      middleDiv.textContent = "";
    });
  });
}
createButtons();
