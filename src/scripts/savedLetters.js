//print HTML for saved letters with all data & add email addresses

import { getCompletedLetters, getAuthors, getRecipients } from "./dataAccess.js"

export const SavedLetters = () => {

    let completedLetters = getCompletedLetters()
    let authors = getAuthors()
    let recipients = getRecipients()
    let html = `<section class="letterContainer">`

    let letters = completedLetters.map(letter => { 
        const foundAuthor = authors.find((author) => {
            return letter.author === author.id
        })
        const foundRecipient = recipients.find((recipient) => {
            return letter.recipient === recipient.id
        })

        html += `<div class="savedLetter"><div class="letterRec">Dear ${foundRecipient.name} (${foundRecipient.email}),</div><br>
            
        <div class="letterEntry">${letter.entry}</div><br>
        
        <div class="letterAuthor">Sincerely, ${foundAuthor.name} (${foundAuthor.email})</div><br>
        
        <div class="letterDate">Sent on ${letter.date}</div><br>
        
        <div class="letterTopic">${letter.topic}</div></div><br>`
    })
    html += letters.join("")
    html += `</section>`
    console.log(html)
    return html
}