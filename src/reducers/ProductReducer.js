

const initialState = {
    EachCartData: localStorage.getItem("EachCartData") 
    ? JSON.parse(localStorage.getItem("EachCartData"))
    :
    [],
    SortDate: "",
    searchQuery: "",
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
            ...state,
            EachCartData: state.EachCartData.map(item =>
                item.id === action.payload.id
                    ? { ...item, CartQuantity: item.CartQuantity + 1 }
                    : item
            )
        };

        case "DECREMENT": 
        return {
            ...state,
            EachCartData: state.EachCartData.map(item =>
                item.id === action.payload.id && item.CartQuantity > 1
                    ? { ...item, CartQuantity: item.CartQuantity - 1 }
                    : item
            )
        };

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