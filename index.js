const buttonBar = document.querySelector("#btn-bar")
const middleDiv = document.querySelector("#middle-div")
const categories = ["Creatures", "Equipment", "Materials","Monsters", "Treasure"]

function createButtons() {
    for (let i = 0; i < categories.length; i++) {
        const btn = document.createElement("button")
        btn.id = "button" + i;
        btn.textContent = categories[i]
        buttonBar.appendChild(btn)
    }
    return
};

createButtons() = dataButtons;

async function fetchCategories(){
    try {
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${data.category[i]}`)
        const data = response.json();
    } catch (error) {
        throw new Error(error);
    }
}





createButtons();