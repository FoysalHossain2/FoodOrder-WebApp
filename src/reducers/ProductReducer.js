


const initialState = {
    EachCartData: [],
    SortDate: "",
    searchQuery: ""
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

        case "INCREMENT": 

        return {
            
        }

        case "SEARCH":

        return {
            ...state, searchQuery: action.payload
        }

        case "SORT":

        return {
            ...state, SortDate: action.payload
        }

        
        default: state;
            break;
    }
}

export {cartReducer, initialState};