export const addToCart = (product) => { 
    return {
        type: "add",
        payload: product
    }
}