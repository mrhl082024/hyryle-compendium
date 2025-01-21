async function fetchURL(){
    try {
        const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all")
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        throw new Error(error)
    }
};

fetchURL()