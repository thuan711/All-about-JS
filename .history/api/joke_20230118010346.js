const jokeHeading = document.querySelector(".joke-heading");
const jokeBotton = document.querySelector(".joke-botton");
const endpoint = "http://icanhazdadjoke.com/";
async function getJoke(){
    const response = await fetch(endpoint, {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
}
async function handleClick(){
    const data = await getJoke();
    jokeHeading.textContent = data.joke
}
jokeButton.addEventListener("click", handleClick);