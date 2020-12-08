
export const initialState = {

    basket: []
};
// data in basket we call it state and everything we do like add to cart it call it action 💇 

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'Add_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from the basket 
            //we cloned the basket .⚾ 

            let newBasket = [...state.basket];

            //we check to see if product exists, or not
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.id);

            if (index >= 0) {
                //item exist in basket , remove .🙂 
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket,
            };

            return { ...state };
        default:
            return state;
    }
} 

export default reducer;