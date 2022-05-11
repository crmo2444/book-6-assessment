const API = "http://localhost:8088"

const mainContainer = document.querySelector(".container")

const applicationState = {
    authors: [],
    topics: [],
    letters: [],
    recipients: [],
    completedLetters: []
}

export const getAuthors = () => {
    return applicationState.authors.map(authors => ({...authors}))
}

export const getTopics = () => {
    return applicationState.topics.map(topics => ({...topics}))
}

export const getLetters = () => {
    return applicationState.letters.map(letters => ({...letters}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipients => ({...recipients}))
}

export const getCompletedLetters = () => {
    return applicationState.completedLetters.map(completedLetters => ({...completedLetters}))
}