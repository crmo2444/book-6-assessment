//responsibility: create function that renders all form HTML + saved letters

import { Authors } from "./Authors.js"
import { saveCompletedLetters, sendLetter } from "./dataAccess.js"
import { Letter } from "./Letter.js"
import { Recipients } from "./Recipients.js"
import { SavedLetters } from "./savedLetters.js"
import { Topics } from "./Topics.js"

export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>

    <article class="input">
        <section class="authorsList">
            <h4>Authors</h2>
            ${Authors()}
        </section>
        <section class="letters">
            <h4>Letter</h2>
            ${Letter()}
        </section>
        <section class="topicsList">
            <h4>Topics</h2>
            ${Topics()}
        </section>
        <section class="recipientsList">
            <h4>Recipients</h2>
            ${Recipients()}
        </section>
    </article>

    <button class="button" id="sendLetter">Send Letter</button>

    <section class="savedLetters">
        <h3>Letters</h2>
        ${SavedLetters()}
    </section>`
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const entry = document.querySelector(".letter").value
        const author = document.querySelector(".authors").value
        const topic = document.querySelector('input[name="topic"]:checked').value
        const recipient = document.querySelector(".recipients").value
        const date = getDate()
        console.log(date)
        // Make an object out of the user input
        const dataToSendToAPI = {
            entry: entry
        }
        const savedLetters = {
            author: parseInt(author),
            topic: topic,
            recipient: parseInt(recipient),
            entry: entry,
            date: date
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
        saveCompletedLetters(savedLetters)
    }
})

export const getDate = () => {
    let today = new Date();

    let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

    return date
}