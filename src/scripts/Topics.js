import { getTopics } from "./dataAccess.js";


export const Topics = () => {
    let topics = getTopics()

    let html = `<ul class="topicList">`

    const topicList = topics.map(topic => {
        return `<li>
            <input type="radio" name="topic" value="${topic.topic}"/>${topic.topic}
        </li>`
    })

    html += topicList.join("")
    html += `</ul>`

    return html
}
