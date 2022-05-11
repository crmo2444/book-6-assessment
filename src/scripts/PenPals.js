//responsibility: create function that renders all form HTML + saved letters

import { Authors } from "./Authors.js"
import { Letter } from "./Letter.js"
import { Recipients } from "./Recipients.js"
import { Topics } from "./Topics.js"

export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>

    <article class="input">
        <section class="authors">
            <h4>Authors</h2>
            ${Authors()}
        </section>
        <section class="letter">
            <h4>Letter</h2>
            ${Letter()}
        </section>
        <section class="topics">
            <h4>Topics</h2>
            ${Topics()}
        </section>
        <section class="recipients">
            <h4>Recipients</h2>
            ${Recipients()}
        </section>
    </article>

    <button class="button" id="sendLetter">Send Letter</button>

    <section class="savedLetters">
        <h2>Letters</h2>
 
    </section>`
}