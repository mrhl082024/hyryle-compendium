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

      const creatureName = document.createElement("h1");
      creatureName.textContent = creaturesData.data[i].name;

      const creatureImg = document.createElement("img");
      creatureImg.src = creaturesData.data[i].image;

      const creatureDescription = document.createElement("h3");
      creatureDescription.textContent = creaturesData.data[i].description;

      const infoCard = document.createElement("div");
      infoCard.id = "infocard" + i;
      infoCard.appendChild(creatureName);
      infoCard.appendChild(creatureImg);
      infoCard.appendChild(creatureDescription);

      middleDiv.appendChild(infoCard);
    }
    //what happends when i press equipment button
    button1.addEventListener("click", () => {
      console.log("equipment");
      middleDiv.textContent = "";
      
    });
    //what happends when i press materials
    button2.addEventListener("click", () => {
      console.log("materials");
      middleDiv.textContent = "";
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
