export const shopping_reduser = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "REMOVE_ALL_FROM_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "QTY_DECREAMENT") {
    let updateCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });

    return { ...state, cart: updateCart };
  }

  if (action.type === "QTY_INCREAMENT") {
    let updateCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (action.type === "GET_TOTAL") {
    let {totalAmount , totalItem} = state.cart.reduce(
      (accum, curVal) => {
        let { price, qty } = curVal;
        let updatedTotalAmount = price * qty;
        accum.totalAmount +=updatedTotalAmount
        accum.totalItem +=qty
        return accum;

      },

      { totalAmount: 0, totalItem: 0 }
    );
    return{ ...state , totalAmount ,totalItem}
  }

 
   return state;
};
