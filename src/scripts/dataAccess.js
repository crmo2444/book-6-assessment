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

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            }
        )
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.letters = data
            }
        )
}


export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data
            }
        )
}

export const fetchCompletions = () => {
    return fetch(`${API}/completedLetters`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completedLetters = data
            }
        )
}

export const sendLetter = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })

}

export const saveCompletedLetters = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }


    return fetch(`${API}/completedLetters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}