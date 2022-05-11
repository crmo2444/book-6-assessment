import { PenPals } from "./PenPals.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {

    mainContainer.innerHTML = PenPals()

}

render()