
export const initialState = {

    basket: [],
};
// data in basket we call it state and everything we do like add to cart it call it action 💇 

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'Add_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from the basket 
            return state;
            break;
        default:
            return state;
    }
} 

export default reducer;