//responsibility: create function that renders all form HTML + saved letters

import { Authors } from "./Authors.js"
import { Letter } from "./Letter.js"
import { Topics } from "./Topics.js"

export const PenPals = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="form">
            <div class="input">
            ${Authors()}
            </div>
            <div class="input">
            ${Letter()}
            </div>
            <div class="input">
            ${Topics()}
            </div>
            <div class="input">
            </div>
        </section>
            <button class="button" id="sendLetter">Send Letter</button>

    <section class="savedLetters">
        <h2>Letters</h2>
 
    </section>`
}