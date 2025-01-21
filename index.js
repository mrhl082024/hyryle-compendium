const buttonBar = document.querySelector("#btn-bar")
const categories = ["Creatures", "Equipment", "Materials","Monsters", "Treasure"]

function createButtons() {
    for (let i = 0; i < categories.length; i++) {
        const btn = document.createElement("button")
        btn.id = "button" + i;
        btn.textContent = categories[i]
        buttonBar.appendChild(btn)

        btn.addEventListener("click", () => {
           try {
            const response = fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${btn.textContent}`);
            const data = response.json();
           } catch (error) {
            throw new Error(error);
           }
           const dataName = document.createElement("h1")
           const dataImg = document.createElement("img")
           const dataDescription = document.createElement("h3");
           const dataDrops = document.createElement("h3")

        })
    }
}

async function fetchURL(){
    try {
        const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all")
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        throw new Error(error)
    }
};



createButtons();
fetchURL();

