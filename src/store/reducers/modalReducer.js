export default (state=false, action) => {
    switch(action.type) {
        case "showmodal":
            return action.payload
        default:
            return state
    }
}