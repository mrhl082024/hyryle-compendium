//Old buttons, try to not use, bad practice!
/* const creatureButton = document.querySelector("#Creatures")
const equipmentButton = document.querySelector("#Equipment")
const materialsButton = document.querySelector("#Materials")
const monstersButton = document.querySelector("#Monsters")
const treasureButton = document.querySelector("#Treasure") */

const creaturesResponse = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures")
const creaturesData = await creaturesResponse.json()

const btnBar = document.querySelector("#btn-bar");
const middleDiv = document.querySelector("#middle-div");
const infoCard = document.createElement("div");

const myButtonArray = [
  "Creatures",
  "Equipment",
  "Materials",
  "Monsters",
  "Treasure",
];


function createButtons() {
  for (let i = 0; i < myButtonArray.length; i++) {
    const button = document.createElement("button");
    button.id = "button" + i;
    button.textContent = myButtonArray[i];
    btnBar.appendChild(button);
  }
  const button0 = document.querySelector("#button0");
  const button1 = document.querySelector("#button1")
  const button2 = document.querySelector("#button2")
  const button3 = document.querySelector("#button3")
  const button4 = document.querySelector("#button4")

  button0.addEventListener("click", () => {
    console.log("creatures");
    for (let i = 0; i < creaturesData.data.length; i++) {
        const creatureName = document.createElement("h1")
        creatureName.textContent = creaturesData.data[i].name

        const creatureImg = document.createElement("img")
        creatureImg.src = creaturesData.data[i].image
        creatureImg.style.height = 280;
        creatureImg.style.widht = 280;

        const creatureDescription = document.createElement("h3")

        

        infoCard.appendChild(creatureName)
        infoCard.appendChild(creatureImg)
        middleDiv.appendChild(infoCard)
    }

    
  });


}
createButtons();
console.log(creaturesData);
