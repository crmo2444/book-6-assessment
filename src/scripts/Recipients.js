import { getRecipients } from "./dataAccess.js";


//create a function that creates HTML for recipient dropdown list

export const Recipients = () => {

    let recipients = getRecipients()
    let html = `<select class="recipients" id="recipients">
    <option value="0">Choose one...</option>`

    let recipientList = recipients.map(recipient => { 
        return `<option class="recipient" value="${recipient.id}">${recipient.name}</option>`
    })

    html += recipientList.join("")
    html += `</select>`

    return html
}
