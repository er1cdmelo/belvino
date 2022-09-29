
export default function products (state=[], action)  {

    switch(action.type) {
        case "add":
            const thisProd = action.payload;
            if(state.find(p => p.id === thisProd.id)) {
                state.find(p => p.id === thisProd.id).quantity += 1
                return [...state]
            } else {
                thisProd.quantity = 1
                return [...state, thisProd]
            }

        case "remove":
            const removeID = action.payload;
            if(state.find(p => p.id === removeID).quantity === 1) {
                return [...state.filter(p => p.id !== removeID)]
            } else {
                state.find(p => p.id === removeID).quantity -= 1
                return [...state]
            }
            
        default:
            return state
    }
}