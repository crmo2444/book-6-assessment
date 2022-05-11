import { fetchAuthors, fetchLetters, fetchTopics } from "./dataAccess.js"
import { PenPals } from "./PenPals.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchAuthors().then(() => fetchLetters()).then(() => fetchTopics()).then(() =>{
    mainContainer.innerHTML = PenPals()
    })
}

render()