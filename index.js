const buttonBar = document.querySelector("#btn-bar")
const middleDiv = document.querySelector("#middle-div")
const categories = ["Creatures", "Equipment", "Materials","Monsters", "Treasure"]

function createButtons() {
    for (let i = 0; i < categories.length; i++) {
        const btn = document.createElement("button")
        btn.id = "button" + i;
        btn.textContent = categories[i]
        buttonBar.appendChild(btn)
        btn.addEventListener("click", fetchData(categories[i].toLowerCase()))
    }
}
    
async function fetchData(category){
    try {
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`);
        const data = response.json();
        const dataName = document.createElement("h1")
        dataName.textContent = data.name;
        const dataImg = document.createElement("img")
        dataImg.image = data.image;
        const dataDescription = document.createElement("h3");
        dataDescription.textContent = data.description;
        const dataDrops = document.createElement("h3")
        dataDrops.textContent = data.drops;
        middleDiv.appendChild(dataName, dataImg,dataDescription,dataDrops)
       } catch (error) {
        throw new Error(error);
       }
}

createButtons();


