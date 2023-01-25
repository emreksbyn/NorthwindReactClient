import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

// Redux da degisikliklerden haberdar olabilmek icin yeni referans olusturmak gerekir.
export default function cartReducer(state = initialState, { type, payload }) {

    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(ci => ci.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    // push() yeni referans olusturmaz.
                    // spread oparator u yeni bir referans olusturur.
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }
        case REMOVE_FROM_CART:
            return {
                // filter da yeni bir referans olusturur. yeni bir array olusturur.
                ...state,
                cartItems: state.cartItems.filter(ci => ci.product.id !== payload.id)
            }

        default:
            return state;
    }
}
