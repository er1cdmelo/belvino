export const message = (message, type) => { 
    return {
        type: type ? "positive" : "negative",
        payload: message
    }
}