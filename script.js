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
    try {
        jokeEl.textContent = "updating..."
        btnEl.diabled = "true"
        btnEl.textContent = "loading.."
        const response = await fetch(apiURL, options)
        const data = await response.json()
        btnEl.textContent = "tell me a joke"
        const joke = data[0].joke;
        jokeEl.textContent = joke;
    } catch (error) {
        jokeEl.textContent = "error happened, try again later"
        btnEl.textContent = "tell me a joke";
    }


}

btnEl.addEventListener("click", getJoke);