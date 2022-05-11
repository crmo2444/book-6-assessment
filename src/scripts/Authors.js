//create HTML for authors dropdown
//import getter function for authors

import { getAuthors } from "./dataAccess.js";


export const Authors = () => {

    let authors = getAuthors()
    let html = `<select class="authors" id="authors">
    <option value="0">Choose one...</option>`

    let authorList = authors.map(author => { 
        return `<option value="${author.id}">${author.name}</option>`
    })

    html += authorList.join("")
    html += `</select>`

    return html
}