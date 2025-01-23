//Old buttons, try to not use, bad practice!
/* const creatureButton = document.querySelector("#Creatures")
const equipmentButton = document.querySelector("#Equipment")
const materialsButton = document.querySelector("#Materials")
const monstersButton = document.querySelector("#Monsters")
const treasureButton = document.querySelector("#Treasure") */

const btnBar = document.querySelector("#btn-bar")
const myButtonArray = ["Creatures", "Equipment", "Materials", "Monsters", "Treasure"]
const middleDiv = document.querySelector("#middle-div")

function createButtons(){
    for (let i = 0; i < myButtonArray.length; i++) {
        const button = document.createElement("button");
        button.id = "button" + i;
        button.textContent = myButtonArray[i];
        btnBar.appendChild(button)
    }
}
createButtons()


async function fetchButtonData(){
    try {
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${button.textContent.toLowerCase()}`);
        const {data} = await response.json();
        console.log(data);
        
        for (let i = 0; i < data.length; i++) {
            const creatureName = document.createElement("h1");
            creatureName.textContent = data.name[1];

            const creatureImg = document.createElement("img");
            creatureImg.src = data.image[1];
            creatureImg.style.width = 280;

            const creatureDescription = document.createElement("h3");
            creatureDescription.textContent = data.description[1];

            const creatureDrops = document.createElement("ul");
            creatureDrops.textContent = data.drops[1];
        }
        middleDiv.appendChild(creatureName, creatureImg, creatureDescription, creatureDrops)
     
    } catch (error) {
        throw new Error(error);
    }
}

