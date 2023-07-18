const btnEl = document.getElementById("btn");
const apiKey = "T567QOjUYwtyBCvPJOFiHg==sFoo42jg6qFxi6j3";
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=";
const jokeEl = document.getElementById("joke");


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

async function getJoke() {
    jokeEl.textContent = "updating..."
    const response = await fetch(apiURL, options)
    const data = await response.json()
    const joke = data[0].joke;
    jokeEl.textContent = joke;
}

btnEl.addEventListener("click", getJoke);