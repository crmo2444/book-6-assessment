//responsibility: create function that renders all form HTML + saved letters

export const PenPals = () => {
    return `
    <section class="form">
        <h1>Pen Pal Society</h1>
            <div class="authors">
            </div>
            <div class="letter">
            </div>
            <div class="topics">
            </div>
            <div class="recipients">
            </div>
            <button class="button" id="sendLetter">Send Letter</button>
    </section>

    <section class="savedLetters">
        <h2>Letters</h2>
 
    </section>`
}