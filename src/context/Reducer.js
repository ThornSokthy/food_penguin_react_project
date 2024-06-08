export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existItemIndex !== -1) {
        const newCart = state.cart.map((item, index) =>
          index === existItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        return { ...state, cart: newCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: newCart,
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};
