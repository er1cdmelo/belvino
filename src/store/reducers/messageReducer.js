export default (state=[], action) => {
    switch(action.type) {
        case "positive":
            return {
                message: action.payload,
                color: "#57E059"
            }
        case "negative":
            return {
                message: action.payload,
                color: "#EC2427"
            }
        default:
            return state
    }
}