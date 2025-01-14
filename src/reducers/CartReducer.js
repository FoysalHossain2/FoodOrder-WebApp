
const initialState = {
    EachCartData: [],
} 

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {

                EachCartData: [...state.EachCartData, action.payload]
                
            }

        case "REMOVE_TO_CARD":

        return {
            ...state,
            EachCartData: state.EachCartData.filter((cart) => cart.id !== action.payload.id)
        }
        
        default: state;
            break;
    }
}

export {cartReducer, initialState};